"use client";

import React, { useState } from "react";
import Card from "react-credit-cards-2";
import useBooking from "@/providers/booking-provider";
import { validateExpiry } from "@/features/checkout-page/utils/validationFns";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { CheckoutData } from "@/lib/types";
import { useValidation } from "@/providers/validation-provider";
import Input from "@/features/shared/components/Input";
import ErrorMessage from "@/components/ErrorMessage";

const PaymentMethod = () => {
  const { checkoutData, setCheckoutData } = useBooking();
  const { validationErrors } = useValidation();

  // Track which fields have been touched/blurred
  const [touchedFields, setTouchedFields] = useState({
    ccNumber: false,
    ccExpiry: false,
    ccCvc: false,
  });

  // Listen for the markAllFieldsAsTouched event
  React.useEffect(() => {
    const handleMarkAllFieldsAsTouched = () => {
      // Mark all credit card fields as touched when validation fails
      setTouchedFields({
        ccNumber: true,
        ccExpiry: true,
        ccCvc: true,
      });
    };

    window.addEventListener(
      "markAllFieldsAsTouched",
      handleMarkAllFieldsAsTouched
    );
    return () => {
      window.removeEventListener(
        "markAllFieldsAsTouched",
        handleMarkAllFieldsAsTouched
      );
    };
  }, []);

  // Card flip state
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Format card number with spaces every 4 digits
  const formatCardNumber = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "");
    // Add space every 4 digits
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formatted;
  };

  // Format expiry date as MM/YY
  const formatExpiry = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "");

    if (cleaned.length <= 2) {
      return cleaned;
    }

    // Format as MM/YY
    const month = cleaned.substring(0, 2);
    const year = cleaned.substring(2, 4);
    return `${month}/${year}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Apply formatting based on field type
    if (name === "ccNumber") {
      formattedValue = formatCardNumber(value);
    } else if (name === "ccExpiry") {
      formattedValue = formatExpiry(value);
    }

    setCheckoutData({
      ...checkoutData,
      [name]: formattedValue,
    } as CheckoutData);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;

    // Mark field as touched when blurred
    setTouchedFields((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleCvcFocus = () => {
    setIsCardFlipped(true);
  };

  const handleCvcBlur = () => {
    setIsCardFlipped(false);
  };

  return (
    <div className="w-full border-[1px] border-[#B7B7B7] rounded-[10px] outline-none p-[18px] bg-transparent space-y-[22px]">
      <div className="flex items-center justify-between border-b-[1px] border-[#B7B7B7] pb-[12px]">
        <h1 className="font-plus-jakarta-sans font-semibold text-[24px] text-[#252525]">
          Payment Method
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-[20px]">
        <div className="flex flex-col gap-[20px] w-full">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
              Card Number <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="ccNumber"
              value={checkoutData?.ccNumber || ""}
              placeholder="Card Number"
              hasError={touchedFields.ccNumber && !!validationErrors.ccNumber}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              maxLength={19}
            />
            <ErrorMessage
              message={
                touchedFields.ccNumber && validationErrors.ccNumber
                  ? validationErrors.ccNumber
                  : ""
              }
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[20px]">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="ccExpiry"
                placeholder="MM/YY"
                value={checkoutData?.ccExpiry || ""}
                hasError={touchedFields.ccExpiry && !!validationErrors.ccExpiry}
                onChange={handleInputChange}
                onBlur={(e) => {
                  handleInputBlur(e);
                  validateExpiry(e.target.value);
                }}
                maxLength={5}
              />
              <ErrorMessage
                message={
                  touchedFields.ccExpiry && validationErrors.ccExpiry
                    ? validationErrors.ccExpiry
                    : ""
                }
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
                CVC <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="ccCvc"
                placeholder="CVC"
                value={checkoutData?.ccCvc || ""}
                hasError={touchedFields.ccCvc && !!validationErrors.ccCvc}
                onChange={handleInputChange}
                onBlur={(e) => {
                  handleInputBlur(e);
                  handleCvcBlur();
                }}
                onFocus={handleCvcFocus}
                maxLength={4}
              />
              <ErrorMessage
                message={
                  touchedFields.ccCvc && validationErrors.ccCvc
                    ? validationErrors.ccCvc
                    : ""
                }
              />
            </div>
          </div>
        </div>
        <div className="w-fit">
          <Card
            number={checkoutData?.ccNumber || ""}
            name={`${checkoutData?.firstName || ""} ${
              checkoutData?.lastName || ""
            }`}
            expiry={checkoutData?.ccExpiry || ""}
            cvc={checkoutData?.ccCvc || ""}
            focused={isCardFlipped ? "cvc" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
