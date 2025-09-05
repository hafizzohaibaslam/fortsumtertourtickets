"use client";
import OrdersSummary from "@/features/checkout-page/components/OrdersSummary";
import PaymentMethod from "@/features/checkout-page/components/PaymentMethod";
import PaymentForm from "@/features/checkout-page/components/PaymentForm";

import { useRouter } from "next/navigation";
import { ROUTES } from "@/features/shared/utils/routes";
import useBooking from "@/providers/booking-provider";
import { useState } from "react";
import { ValidationProvider } from "@/providers/validation-provider";
import Message from "@/components/Message";

const CheckoutPageClient = () => {
  const { tourData } = useBooking();
  const [canRedirect, setCanRedirect] = useState(true);
  const router = useRouter();
  if (canRedirect && (!tourData || tourData?.subTotal === 0)) {
    router.push(ROUTES.HOME);
    return null;
  }

  return (
    <ValidationProvider>
      <div className="bg-white md:px-[24px] px-[12px] md:py-[40px] py-[12px] lg:px-[45px] lg:py-[56px] rounded-[23px] mt-[24px] mb-[40px]">
        <h1 className="font-plus-jakarta-sans font-bold text-[32px] text-black mb-[30px]">
          Checkout
        </h1>{" "}
        <div className="flex flex-col gap-[45px] lg:flex-row lg:justify-between w-full">
          {/* Left Side */}
          <div className="space-y-[30px] w-full lg:w-[60%]">
            <Message status="info">
              Please make sure all details exactly match the cardholder's
              information. Any mismatch may cause your ticket to be declined or
              not processed.
            </Message>
            <PaymentForm />
            <PaymentMethod />
          </div>
          {/* Right Side */}
          <OrdersSummary setCanRedirect={setCanRedirect} />
        </div>
      </div>
    </ValidationProvider>
  );
};

export default CheckoutPageClient;
