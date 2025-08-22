"use client";

import React, { useState } from "react";
import Input from "@/features/shared/components/Input";
import CountrySelector from "@/components/CountrySelector";
import PhoneNumberInput from "@/components/PhoneNumberInput";
import useBooking from "@/providers/booking-provider";
import { CheckoutData } from "@/lib/types";
import { useValidation } from "@/providers/validation-provider";
import ErrorMessage from "@/components/ErrorMessage";

const PaymentForm = () => {
  const { checkoutData, setCheckoutData } = useBooking();
  const { validationErrors } = useValidation();
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Listen for the markAllFieldsAsTouched event
  React.useEffect(() => {
    const handleMarkAllFieldsAsTouched = () => {
      markAllFieldsAsTouched();
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckoutData({ ...checkoutData, [name]: value } as CheckoutData);

    // Mark field as touched when user starts typing
    if (!touched[name]) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleFieldBlur = (fieldName: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  };

  const markAllFieldsAsTouched = () => {
    const allFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "country",
      "address",
      "city",
      "province",
      "postalCode",
      "ccNumber",
      "ccExpiry",
      "ccCvc",
    ];
    const touchedState: { [key: string]: boolean } = {};
    allFields.forEach((field) => {
      touchedState[field] = true;
    });
    setTouched(touchedState);
  };

  const showError = (fieldName: string): boolean => {
    return !!(touched[fieldName] && validationErrors[fieldName]);
  };

  return (
    <div className="space-y-[22px]">
      {/* Personal Information */}
      <div className="w-full border-[1px] border-[#B7B7B7] rounded-[10px] outline-none p-[18px] bg-transparent space-y-[22px]">
        <div className="flex items-center justify-between border-b-[1px] border-[#B7B7B7] pb-[12px]">
          <h1 className="font-plus-jakarta-sans font-semibold text-[24px] text-[#252525]">
            Personal Information
          </h1>
        </div>
        <div className="flex flex-col gap-[20px] xl:flex-row">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
              First Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full"
              hasError={showError("firstName")}
              value={checkoutData?.firstName || ""}
              onChange={handleInputChange}
              onBlur={() => handleFieldBlur("firstName")}
            />
            <ErrorMessage
              message={showError("firstName") ? validationErrors.firstName : ""}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
              Last Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full"
              hasError={showError("lastName")}
              value={checkoutData?.lastName || ""}
              onChange={handleInputChange}
              onBlur={() => handleFieldBlur("lastName")}
            />
            <ErrorMessage
              message={showError("lastName") ? validationErrors.lastName : ""}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full"
            hasError={showError("email")}
            value={checkoutData?.email || ""}
            onChange={handleInputChange}
            onBlur={() => handleFieldBlur("email")}
          />
          <ErrorMessage
            message={showError("email") ? validationErrors.email : ""}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <PhoneNumberInput
            value={checkoutData?.phone || ""}
            onChange={(value) => {
              setCheckoutData({
                ...checkoutData,
                phone: value,
              } as CheckoutData);
              if (!touched.phone) {
                setTouched((prev) => ({ ...prev, phone: true }));
              }
            }}
            placeholder="Phone No."
            className="w-full"
            hasError={showError("phone")}
            country={checkoutData?.country?.toLowerCase() || "us"}
          />
          <ErrorMessage
            message={showError("phone") ? validationErrors.phone : ""}
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <Input
            type="checkbox"
            name="subscribe"
            id="newsLetter"
            className="accent-[#27283E] w-[16px] h-[16px]"
            checked={checkoutData?.subscribe || false}
            onChange={handleInputChange}
          />
          <label
            htmlFor="newsLetter"
            className="font-plus-jakarta-sans font-normal text-[16px] text-[#696969]"
          >
            Subscribe to our Newsletter
          </label>
        </div>
      </div>

      {/* Address Information */}
      <div className="w-full border-[1px] border-[#B7B7B7] rounded-[10px] outline-none p-[18px] bg-transparent space-y-[22px]">
        <div className="flex items-center justify-between border-b-[1px] border-[#B7B7B7] pb-[12px]">
          <h1 className="font-plus-jakarta-sans font-semibold text-[24px] text-[#252525]">
            Address Details
          </h1>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
            Country/Region <span className="text-red-500">*</span>
          </label>
          <CountrySelector
            value={checkoutData?.country || ""}
            onChange={(value) => {
              setCheckoutData({
                ...checkoutData,
                country: value,
              } as CheckoutData);
              if (!touched.country) {
                setTouched((prev) => ({ ...prev, country: true }));
              }
            }}
            placeholder="Country/Region"
            className="w-full"
            hasError={showError("country")}
          />
          <ErrorMessage
            message={showError("country") ? validationErrors.country : ""}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
            Address <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full"
            hasError={showError("address")}
            value={checkoutData?.address || ""}
            onChange={handleInputChange}
            onBlur={() => handleFieldBlur("address")}
          />
          <ErrorMessage
            message={showError("address") ? validationErrors.address : ""}
          />
        </div>

        <div className="flex flex-col gap-[20px] lg:flex-row">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
              City/Town <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="city"
              placeholder="City/Town"
              className="w-full"
              hasError={showError("city")}
              value={checkoutData?.city || ""}
              onChange={handleInputChange}
              onBlur={() => handleFieldBlur("city")}
            />
            <ErrorMessage
              message={showError("city") ? validationErrors.city : ""}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
              Province/State <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="province"
              placeholder="Province"
              className="w-full"
              hasError={showError("province")}
              value={checkoutData?.province || ""}
              onChange={handleInputChange}
              onBlur={() => handleFieldBlur("province")}
            />
            <ErrorMessage
              message={showError("province") ? validationErrors.province : ""}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-plus-jakarta-sans">
            Postal Code <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            className="w-full"
            hasError={showError("postalCode")}
            value={checkoutData?.postalCode || ""}
            onChange={handleInputChange}
            onBlur={() => handleFieldBlur("postalCode")}
          />
          <ErrorMessage
            message={showError("postalCode") ? validationErrors.postalCode : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
