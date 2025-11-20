"use client";
import React, { useState } from "react";
import TotalCard from "./TotalCard";
import useBooking from "@/providers/booking-provider";
import { SERVICE_FEE } from "@/lib/constants";
import { createBookingOrder } from "@/lib/wp/orders";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/features/shared/utils/routes";
import Link from "next/link";
import { useValidation } from "@/providers/validation-provider";
import { reportPurchase } from "@/lib/gtag";

const OrdersSummary = ({
  setCanRedirect,
}: {
  setCanRedirect: (canRedirect: boolean) => void;
}) => {
  const router = useRouter();
  const {
    tourData,
    checkoutData,
    setTourData,
    setCheckoutData,
    setThankYouModalOrder,
  } = useBooking();
  const { isFormValid, validationErrors } = useValidation();
  const [isLoading, setIsLoading] = useState(false);

  const totalAmount = Number(tourData?.subTotal || 0);

  const handlePlaceOrder = async () => {
    if (isLoading) return;

    // Validate form data
    if (!isFormValid) {
      const errorMessages = Object.values(validationErrors).join(", ");
      toast.error(`Please fix the following errors: ${errorMessages}`);
      // Trigger a custom event to mark all fields as touched
      window.dispatchEvent(new CustomEvent("markAllFieldsAsTouched"));
      return;
    }

    if (!tourData?.subTotal || tourData.subTotal <= 0 || !checkoutData) {
      toast.error("Please fill in all the fields");
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Placing order...");
    try {
      const order = await createBookingOrder(tourData, checkoutData);

      // ✅ Count total tickets from that order
      const ticketCount = Object.values(tourData?.persons || {}).reduce(
        (acc, curr) => acc + curr,
        0
      );

      // ✅ Calculate value (tickets * 6.97)
      const tagValue = ticketCount * SERVICE_FEE;

      // ✅ Fire Google Ads purchase conversion
      reportPurchase(tagValue, "USD");

      setCanRedirect(false);
      router.push(ROUTES.ORDER_LIST + `?email=${checkoutData.email}`);
      setThankYouModalOrder(order);
      setTourData(null);
      setCheckoutData(null);
      toast.success("Order placed successfully", { id: toastId });
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  const totalPersons = Object.values(tourData?.persons || {}).reduce(
    (acc, curr) => acc + curr,
    0
  );
  const totalServiceFee = SERVICE_FEE * totalPersons;
  const tax = tourData?.tax || 0;
  return (
    <div className="w-full lg:w-[30%] h-fit border-[1px] border-[#B7B7B7] rounded-[10px] px-[17px] py-[37px]">
      <div className="space-y-[18px]">
        {Object.entries(tourData?.persons || {}).map(([key, value], index) => {
          if (value === 0) return null;
          return (
            <TotalCard
              key={index}
              label={`${key}`}
              isSubItem={true}
              value={`${value} x $  ${tourData?.prices[key] || 0}`}
            />
          );
        })}
        <TotalCard label="Subtotal" value={`$${totalAmount.toFixed(2)}`} />
        <TotalCard
          label="Operator Fee"
          value={`$${tourData?.tax || 0}`}
          isSubItem={true}
        />
        <TotalCard
          label="Service Fee"
          value={`${totalPersons} x $${SERVICE_FEE}`}
          isSubItem={true}
        />
      </div>
      {/* Total */}
      <TotalCard
        label="Total"
        value={`$${(totalAmount + totalServiceFee + tax).toFixed(2)}`}
        className="my-[41px] py-[18px] px-[13px] border-t-[0.5px] border-b-[0.5px] border-[#B7B7B7]"
      />
      <div className="space-y-[18px]">
        <p className="font-[300] text-[12px] text-center max-w-[80%] mx-auto lg:text-left lg:max-w-full lg:mx-0 font-plus-jakarta-sans">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <Link
            href="/privacy-policy"
            className="font-plus-jakarta-sans font-semibold text-[12px]"
          >
            privacy policy
          </Link>
          .
        </p>
        <button
          onClick={handlePlaceOrder}
          disabled={isLoading || !isFormValid}
          className={`py-[12px] px-[16px] rounded-[32px] font-bold text-[20px] w-full transition-all duration-300 ease-in-out ${
            isLoading || !isFormValid
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-[#27283E] text-white hover:bg-[#27283E]/80 cursor-pointer"
          }`}
        >
          {isLoading ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default OrdersSummary;
