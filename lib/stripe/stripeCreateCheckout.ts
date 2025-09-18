"use server";
import Stripe from "stripe";
import { WPOrder } from "../wp/types";
import { SERVICE_FEE } from "../constants";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const stripeCreateCheckout = async (order: WPOrder) => {
  try {
    const successURL = `${
      process.env.NEXT_PUBLIC_SERVER_URL
    }/payment-redirect?orderId=${order.id.toString()}&email=${
      order.billing.email
    }`;
    const cancelURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/my-orders?email=${order.billing.email}
      }`;

    console.log("successURL -> ", successURL);
    console.log("cancelURL -> ", cancelURL);

    const checkout = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: successURL,
      cancel_url: cancelURL,
      metadata: {
        order_id: "#" + order.id.toString(),
      },
      line_items: order.line_items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: SERVICE_FEE * 100,
        },
        quantity: item.quantity,
      })),
    });
    if (!checkout.url) {
      throw new Error("Something went wrong");
    }
    return checkout.url;
  } catch (error) {
    console.error("Error creating checkout:", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
};
