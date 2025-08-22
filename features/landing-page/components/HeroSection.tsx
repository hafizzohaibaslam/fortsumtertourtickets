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
        src="/landing-page/alcatraz1.webp"
        alt="Panoramic Alcatraz Island Full View"
        priority
        fetchPriority="high"
        fill
      />

      {/* ✅ Main Content */}
      <div className="flex-1 p-4 sm:p-[24px] md:p-[34px] flex flex-col gap-[30px] justify-between mt-[24px] mb-[30px] text-white">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[104px] py-[16px] z-20 relative">
          <span className="font-plus-jakarta-sans font-normal text-[16px] leading-[16px] px-[10px] py-[4px] border-[1px] border-[#FFFFFF99] w-fit h-fit rounded-full backdrop-blur-lg">
            Tickets start at $34.00
          </span>
          <div className="space-y-[28px]">
            <h1 className="font-nohemi font-normal text-[32px] leading-[38px] lg:text-[89px] lg:leading-[104px]">
              Book Alcatraz Ticket <br />
              In <span className="text-[var(--yellow-1)]">60 Seconds</span>
            </h1>
            <Button
              variant="secondary"
              icon={<MoveUpRight className="w-[20px] h-[20px]" />}
              onClick={() => handleBookingModalOpenClose(true)}
            >
              Book Alcatraz Island Tickets
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
          <div className="max-w-[380px] space-y-[15px]">
            <h2 className="font-nohemi font-semibold md:text-[32px] text-[26px] leading-[42px]">
              Explore the Island with Us
            </h2>
            <p className="font-plus-jakarta-sans font-medium md:text-[16px] text-[14px] leading-[26px]">
              Want to feel one of the really amazing experiences, i.e, Alcatraz
              Island tours? Enjoy views of the island, sea, and sky from every
              angle. Book tickets for our 2-3 hour Alcatraz tour to ferry rides,
              traverse the prison cells, learn from audio tours, and many other
              charms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
