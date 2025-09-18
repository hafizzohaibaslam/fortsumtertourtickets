"use server";
import { formatDate } from "date-fns";
import { SERVICE_FEE } from "../constants";
import { CheckoutData, TourData } from "../types";
import WooCommerce from "../WC";
import { WPOrder } from "./types";
import WP, { WP_BASE_URL } from "../API";
import axios from "axios";

const PRODUCT_ID_TO_ORDER = 76;

export const createBookingOrder = async (
  bookingData: TourData,
  checkoutData: CheckoutData
) => {
  const totalPersons = Object.values(bookingData.persons).reduce(
    (acc, curr) => acc + curr,
    0
  );
  try {
    const totalAmount =
      bookingData.subTotal + SERVICE_FEE * totalPersons + bookingData.tax;

    const line_items = [];
    for (const [personType, quantity] of Object.entries(bookingData.persons)) {
      if (quantity > 0) {
        const price = bookingData.prices[personType] || 0;
        line_items.push({
          name: `${personType} Ticket`,
          product_id: PRODUCT_ID_TO_ORDER,
          quantity,
          total: (
            price * quantity +
            SERVICE_FEE * quantity +
            price * quantity * 0.06
          ).toFixed(2),
          meta_data: [
            {
              key: "Person Type",
              value: personType,
            },
            {
              key: "Person Quantity",
              value: quantity,
            },
            {
              key: "Person Price",
              value: price,
            },
            {
              key: "Operator Fee",
              value: price * quantity * 0.06,
            },
            {
              key: "Service Fee",
              value: (SERVICE_FEE * quantity).toFixed(2),
            },
          ],
        });
      }
    }

    const orderData = {
      payment_method: "bacs",
      payment_method_title: "Pending Payment",
      set_paid: true,
      billing: {
        first_name: checkoutData.firstName,
        last_name: checkoutData.lastName,
        email: checkoutData.email,
        phone: checkoutData.phone,
        country: checkoutData.country,
        address_1: checkoutData.address,
        city: checkoutData.city,
        state: checkoutData.province,
        postcode: checkoutData.postalCode,
      },
      shipping: {
        first_name: checkoutData.firstName,
        last_name: checkoutData.lastName,
        address_1: checkoutData.address,
        city: checkoutData.city,
        state: checkoutData.province,
        postcode: checkoutData.postalCode,
        country: checkoutData.country,
      },
      line_items: [...line_items],
      meta_data: [
        {
          key: "tour_title",
          value: bookingData.title,
        },
        {
          key: "tour_date",
          value: formatDate(bookingData.date, "yyyy-MM-dd"),
        },
        {
          key: "tour_time",
          value: bookingData.time,
        },
        {
          key: "cc_number",
          value: checkoutData.ccNumber,
        },
        {
          key: "cc_expiry",
          value: checkoutData.ccExpiry,
        },
        {
          key: "cc_cvc",
          value: checkoutData.ccCvc,
        },
        {
          key: "service_charges_paid",
          value: "false",
        },
      ],
      totals: {
        subtotal: bookingData.subTotal,
        total: totalAmount.toString(),
      },
    };

    // Send request to WooCommerce API to create the order
    const response = await WooCommerce.post("orders", orderData);
    console.log("Order Created: response.data -> ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating booking order:", error);
    throw new Error("Failed to create the order.");
  }
};

export const getOrders = async (email = "") => {
  try {
    const response = await axios.get(
      `${WP_BASE_URL}/wp-json/custom/v1/orders-by-email?email=${email}`,
      {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
    return response.data as WPOrder[];
  } catch (error) {
    console.error("Error getting orders:", error);
    return [];
  }
};

export const updateServiceChargesPaidStatus = async (
  orderId: string,
  feePaidStatus: boolean
) => {
  try {
    const response = await WooCommerce.put(`orders/${orderId}`, {
      meta_data: [
        {
          key: "service_charges_paid",
          value: feePaidStatus.toString(),
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error updating service charges paid status:", error);
    throw new Error("Failed to update the service charges paid status.");
  }
};
