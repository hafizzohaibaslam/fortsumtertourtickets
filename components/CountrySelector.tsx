"use client";

import React from "react";
import Select from "react-select";
import { components } from "react-select";
import ErrorMessage from "./ErrorMessage";
import { COUNTRIES } from "@/constants/countries";

interface CountrySelectorProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  value,
  onChange,
  placeholder = "Select Country",
  className = "",
  hasError,
}) => {
  const selectedCountry = COUNTRIES.find((country) => country.value === value);

  const customOption = ({ data, ...props }: any) => (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        <span className="text-lg">{data.flag}</span>
        <span>{data.label}</span>
      </div>
    </components.Option>
  );

  const customSingleValue = ({ data, ...props }: any) => (
    <components.SingleValue {...props}>
      <div className="flex items-center gap-2">
        <span className="text-lg">{data.flag}</span>
        <span>{data.label}</span>
      </div>
    </components.SingleValue>
  );

  return (
    <>
      <Select
        options={COUNTRIES}
        value={selectedCountry}
        onChange={(option) => onChange(option?.label || "")}
        placeholder={placeholder}
        className={className}
        components={{
          Option: customOption,
          SingleValue: customSingleValue,
        }}
        isSearchable
        isClearable
        classNamePrefix="react-select"
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: "1px solid #B7B7B7",
            borderRadius: "10px",
            backgroundColor: "transparent",
            minHeight: "46px",
            boxShadow: state.isFocused ? "0 0 0 1px #27283E" : "none",
            "&:hover": {
              borderColor: "#27283E",
            },
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
              ? "#27283E"
              : state.isFocused
              ? "#f3f4f6"
              : "white",
            color: state.isSelected ? "white" : "#252525",
            "&:hover": {
              backgroundColor: state.isSelected ? "#27283E" : "#f3f4f6",
            },
          }),
          menu: (provided) => ({
            ...provided,
            borderRadius: "10px",
            border: "1px solid #B7B7B7",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "#696969",
            fontFamily: "Plus Jakarta Sans, sans-serif",
          }),
          singleValue: (provided) => ({
            ...provided,
            fontFamily: "Plus Jakarta Sans, sans-serif",
            color: "#252525",
          }),
          input: (provided) => ({
            ...provided,
            fontFamily: "Plus Jakarta Sans, sans-serif",
          }),
        }}
      />
      {hasError && <ErrorMessage message="Please select a country" />}
    </>
  );
};

export default CountrySelector;
