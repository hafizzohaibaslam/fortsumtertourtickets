import React from "react";

type OrderItemProps = {
  label: string;
  value: string;
  isSecondary?: boolean;
};

const OrderItem = ({ label, value, isSecondary = false }: OrderItemProps) => {
  return (
    <div className="flex gap-[10px] items-center justify-between">
      <h4
        className={`font-plus-jakarta-sans font-normal text-[#696969] text-[18px] leading-[24px] ${
          isSecondary
            ? "text-[#696969] text-[12px]"
            : "text-[#696969] text-[16px] font-semibold"
        }`}
      >
        {label}
      </h4>
      <span
        className={`font-plus-jakarta-sans font-normal text-[#696969] text-[18px] leading-[24px] ${
          isSecondary
            ? "text-[#696969] text-[12px]"
            : "text-[#696969] text-[16px] font-semibold"
        }`}
      >
        {value}
      </span>
    </div>
  );
};

export default OrderItem;
