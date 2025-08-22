import { cn } from "@/lib/utils";
import React from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  type: string;
  value?: string;
  defaultValue?: string;
  className?: string;
  hasError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
  className,
  value,
  defaultValue,
  onChange,
  id,
  onFocus,
  hasError,
  ...props
}: InputProps) => {
  return (
    <div className={cn("flex flex-col gap-[10px]", className)}>
      <input
        id={id}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        onFocus={onFocus}
        {...props}
        className={`w-full border-[1px] rounded-[10px] outline-none p-[10px] bg-transparent text-[16px] font-plus-jakarta-sans font-normal text-[#696969] placeholder:text-[#696969] ${
          hasError
            ? "border-red-500 focus:border-red-500"
            : "border-[#E7E9EB] hover:border-[#B7B7B7] focus:border-[#27283E]"
        }`}
      />
    </div>
  );
};

export default Input;
