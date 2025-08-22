import { cn } from "@/lib/utils";
import React from "react";

type BadgeProps = {
  text: string;
  backgroundColor: string;
  textColor: string;
};

const Badge = ({ text, backgroundColor, textColor }: BadgeProps) => {
  return (
    <span
      className={cn(
        "w-fit capitalize font-plus-jakarta-sans font-semibold text-[14px] leading-[24px] px-[14px] py-[4px] rounded-[100px]",
        backgroundColor,
        textColor
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
