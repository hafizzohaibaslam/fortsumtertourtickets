"use client";
import { MoveUpRight } from "lucide-react";
import React from "react";
import { cardsData } from "../utils/data";
import HeroSectionCard from "./HeroSectionCard";
import { Button } from "@/features/shared/components/Button";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";
import Image from "next/image";

const HeroSection = () => {
  const { handleBookingModalOpenClose } = useGlobalContext();

  return (
    <div className="relative min-h-[calc(100vh-150px)] flex flex-col justify-between rounded-[23px] overflow-hidden mt-[24px]">
      <div className="absolute inset-0 w-full h-full bg-black/30" />
      {/* ✅ Optimized LCP Background Image */}
      <Image
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/fort-sumter-hero.jpg"
        alt="Panoramic Fort Sumter Full View"
        priority
        fetchPriority="high"
        fill
      />

      {/* ✅ Main Content */}
      <div className="flex-1 p-4 sm:p-[24px] md:p-[34px] flex flex-col gap-[30px] justify-between mt-[24px] mb-[30px] text-white">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[104px] py-[16px] z-20 relative">
          <span className="font-plus-jakarta-sans font-normal text-[16px] leading-[16px] px-[10px] py-[4px] border-[1px] border-[#FFFFFF99] w-fit h-fit rounded-full backdrop-blur-lg">
            Tickets start at $26.00
          </span>
          <div className="space-y-[28px]">
            <h1 className="font-nohemi font-normal text-[32px] leading-[38px] lg:text-[80px] lg:leading-[104px]">
              Book FortSumter Ticket <br />
              In <span className="text-[var(--yellow-1)]">60 Seconds</span>
            </h1>
            <Button
              variant="secondary"
              icon={<MoveUpRight className="w-[20px] h-[20px]" />}
              onClick={() => handleBookingModalOpenClose(true)}
            >
              Book Fort Sumter Tickets
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-[24px] lg:flex-row lg:items-center lg:justify-between z-20 relative">
          <div className="flex gap-3 md:gap-[30px] lg:flex-row lg:items-center">
            {cardsData.map((card) => (
              <HeroSectionCard key={card.id} {...card} />
            ))}
          </div>
          <div className="max-w-[420px] space-y-[15px]">
            <h2 className="font-nohemi font-semibold md:text-[32px] text-[26px] leading-[42px]">
              Fort Sumter Tours & Ferry Tickets, Charleston, SC
            </h2>
            <p className="font-plus-jakarta-sans font-medium md:text-[14px] text-[14px] leading-[26px]">
              Discover where American history began with our Fort Sumter tours
              in Charleston, SC. Hop on to our service that offers the ferry to
              Fort Sumter (convenient and reliable access to this historic
              landmark). Each tour includes a scenic boat ride through
              Charleston Harbor, a <b> 2.25-hour stay at Fort Sumter, </b> and a
              return trip. This is just perfect for history lovers, families,
              and groups (yeah, the views are actually worth it).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
