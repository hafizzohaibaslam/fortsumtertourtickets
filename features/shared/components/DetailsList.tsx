import React from "react";
import { cn } from "@/features/shared/utils/cn";
import { Check } from "lucide-react";

type ListOption = {
  Icon: typeof Check;
  label: string;
  className?: string;
  detailListItemClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
};

type DetailsListProps = {
  listOptions: ListOption[];
  className?: string;
};

const DetailsList = ({ listOptions, className }: DetailsListProps) => {
  return (
    <div className={cn("flex flex-col gap-[12px]", className)}>
      {listOptions.map((option, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center gap-[12px]",
            option.detailListItemClassName
          )}
        >
          <span
            className={cn(
              "md:min-w-[20px] md:min-h-[20px] min-w-[16px] min-h-[16px] bg-[#25283E] rounded-full flex items-center justify-center",
              option.iconClassName
            )}
          >
            <option.Icon className="md:w-[14px] md:h-[14px] w-[12px] h-[12px] text-white" />
          </span>
          <span
            className={cn(
              "font-plus-jakarta-sans font-normal md:text-[16px] text-[14px] leading-[24px] tracking-[0%] text-[#25283ECC]",
              option.labelClassName
            )}
          >
            {option.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DetailsList;
