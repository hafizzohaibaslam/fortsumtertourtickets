"use client";
import { cn } from "@/features/shared/utils/cn";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { AccordianItem } from "@/lib/types";

type AccordianProps = {
  data: AccordianItem[];
};

const Accordian = ({ data }: AccordianProps) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  return (
    <div className="mt-[30px] columns-1 lg:columns-2 gap-[10px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="mb-[10px] bg-white p-4 lg:px-[44px] lg:py-[24px] rounded-[8px] border-[1px] border-[#DADADA] space-y-[10px] break-inside-avoid"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-outfit font-semibold text-[16px] pr-1 leading-[22px]">
              {item.question}
            </h2>
            <ChevronDown
              className={cn(
                "min-w-[24px] min-h-[24px] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out",
                activeAccordion === item.id && "rotate-180"
              )}
              onClick={() =>
                activeAccordion === item.id
                  ? setActiveAccordion(null)
                  : setActiveAccordion(item.id)
              }
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeAccordion === item.id
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p
              className="text-[#414143] font-open-sans font-normal text-[14px] leading-[22px]"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
