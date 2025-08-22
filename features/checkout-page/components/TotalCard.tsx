import { cn } from "@/lib/utils";
import React from "react";

type TotalCardsProps = {
  label: string;
  value: string;
  additionalInfo?: string;
  className?: string;
  isSubItem?: boolean;
};

const TotalCard = ({
  label,
  value,
  additionalInfo,
  className,
  isSubItem = false,
}: TotalCardsProps) => {
  return (
    <div
      className={cn("flex items-center justify-between gap-[10px]", className)}
    >
      <h4
        className={cn(
          "flex items-center justify-between gap-[10px]",
          isSubItem && "text-sm text-gray-500"
        )}
      >
        {label} <span>{additionalInfo && `(${additionalInfo})`}</span>
      </h4>
      <span
        className={cn(
          "font-semibold text-[17px] font-plus-jakarta-sans",
          isSubItem && "text-sm text-gray-500"
        )}
      >
        {value}
      </span>
    </div>
  );
};

export default TotalCard;
