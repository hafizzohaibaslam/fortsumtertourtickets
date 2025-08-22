"use client";

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ErrorMessage from "./ErrorMessage";

interface PhoneNumberInputProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  defaultCountry?: string;
  country?: string;
  hasError?: boolean;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  placeholder = "Enter phone number",
  className = "",
  defaultCountry = "us",
  country,
  hasError,
}) => {
  return (
    <div className={`w-full font-plus-jakarta-sans relative ${className}`}>
      <PhoneInput
        country={country || defaultCountry}
        value={value}
        onChange={(phone) => onChange(phone)}
        placeholder={placeholder}
        inputClass="!w-full !min-h-[46px] !border !border-[#B7B7B7] !rounded-[10px] !bg-transparent !p-[10px] !pl-15 font-plus-jakarta-sans text-base text-[#252525] !outline-none transition-colors duration-200 focus:border-[#27283E] focus:shadow-[0_0_0_1px_#27283E] placeholder:text-[#696969]"
        containerClass="w-full !min-h-[46px]"
        buttonClass="!min-w-[46px] bg-transparent border-none border-r border-[#B7B7B7] !rounded-l-[10px] px-2 py-3 min-h-[46px] flex items-center justify-center hover:bg-gray-100"
        dropdownClass="!left-0 !top-full border border-[#B7B7B7] !rounded-[10px] shadow-lg bg-white max-h-[300px] overflow-y-auto !z-50"
        searchPlaceholder="Search country..."
        searchNotFound="No country found"
        preferredCountries={["us", "ca", "gb", "au"]}
      />
      {hasError && <ErrorMessage message="Invalid phone number" />}
    </div>
  );
};

export default PhoneNumberInput;
