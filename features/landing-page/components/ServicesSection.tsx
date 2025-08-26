"use client";
import { MoveUpRight } from "lucide-react";
import React from "react";
import { servicesSectionData } from "../utils/data";
import ServicesSectionCard from "./ServicesSectionCard";
import { Button } from "@/features/shared/components/Button";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";
import WhyChooseUs from "./WhyChooseUs";

const ServicesSection = () => {
  const { handleBookingModalOpenClose } = useGlobalContext();
  return (
    <div className="lg:bg-white rounded-[23px] py-[30px] lg:px-[52px] lg:py-[51px] space-y-[100px]">
      <div className="space-y-[50px]">
        {/* Top */}
        <div className="flex justify-between flex-col lg:flex-row gap-[24px]">
          <span className="self-start w-fit text-[var(--blue-2)] font-plus-jakarta-sans font-normal px-[25px] py-[6px] text-[16px] leading-[16px] border-[1px] border-[var(--blue-2)] rounded-full">
            Services
          </span>
          <div className="w-full lg:w-[672px] max-w-[90vw] space-y-[14px] flex flex-col justify-start items-start lg:justify-center lg:items-center self-center">
            <h2 className="font-nohemi font-normal text-[var(--blue-2)] md:text-[36px] text-[30px] lg:text-[50px] leading-[42px] lg:leading-[62px]">
              Fort Sumter Tours – Departure Point Comparison
            </h2>
            <p className="text-[#25283EB2] font-normal font-plus-jakarta-sans md:text-[16px] text-[14px] leading-[26px] max-w-2xl">
              Our Fort Sumter tour is designed for travelers who just want a
              proper and chill experience. The tour begins with a relaxing ferry
              ride from either <b>Liberty Square</b> or <b>Patriots Point</b>,
              where you’ll enjoy sweeping views of Charleston’s waterfront and
              harbor.
            </p>
          </div>
          <Button
            variant="primary"
            icon={<MoveUpRight className="w-[20px] h-[20px]" />}
            className="lg:self-end w-fit"
            onClick={() => handleBookingModalOpenClose(true)}
          >
            Get FortSumter Tickets
          </Button>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {servicesSectionData.map((card) => (
            <ServicesSectionCard key={card.id} data={card} />
          ))}
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default ServicesSection;
