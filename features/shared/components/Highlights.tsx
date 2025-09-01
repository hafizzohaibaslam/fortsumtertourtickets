"use client";
import React, { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import Badge from "@/features/order-list-page/components/Badge";
import { MoveUpRight } from "lucide-react";
import DetailsList from "./DetailsList";
import Link from "next/link";
import CanonicalTag from "@/components/CanonicalTag";
import { cn } from "../utils/cn";

const Highlights = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div
      className={cn(
        `mt-[50px] lg:bg-white rounded-[23px] py-[30px] lg:px-[52px] lg:py-[51px] flex flex-col gap-[60px]`
      )}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-[24px] ">
        <span className="self-start w-fit text-[var(--blue-2)] font-plus-jakarta-sans font-normal px-[25px] py-[6px] text-[16px] leading-[16px] border-[1px] border-[var(--blue-2)] rounded-full">
          Highlights
        </span>
        <div className="w-full lg:w-[672px] max-w-[90vw] space-y-[14px] flex flex-col justify-start items-start lg:justify-center lg:items-center self-center">
          <h2 className="font-nohemi font-normal text-[var(--blue-2)] md:text-[36px] text-[30px] lg:text-[50px] leading-[42px] lg:leading-[62px]">
            Why Visit Fort Sumter?
          </h2>
          <p className="text-[#25283EB2] font-normal font-plus-jakarta-sans md:text-[16px] text-[14px] leading-[26px] max-w-2xl">
            So, Fort Sumter, yeah! That's the place where the whole Civil War
            was fought in 1861. At the entrance of Charleston Harbor, it is one
            of the most visited places. A Fort Sumter tour gives you the best
            chance to walk through the grounds where history changed the course
            of America. You get this ferry ride across the harbor (which, by the
            way, is pretty cool), then a walk through the fort itself.
            Absolutely memorable tour!
          </p>
        </div>
        <div className="lg:self-end w-fit">
          <Button
            variant="primary"
            icon={
              <MoveUpRight
                className={cn(
                  "w-[20px] h-[20px] transition-transform duration-300",
                  showAll && "rotate-45"
                )}
              />
            }
            onClick={handleShowAll}
          >
            {showAll ? "Show Less" : "Read More"}
          </Button>
        </div>
      </div>

      {/* Show All Content with Animation */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-700 ease-in-out",
          showAll
            ? "max-h-[2000px] opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 mt-0 transform -translate-y-4"
        )}
      >
        <div className="rounded-[23px] animate-in slide-in-from-top-4 duration-700 ">
          <CanonicalTag pathName="/fort-sumter-details" />

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[30px]">
            {/* Section 2 */}
            <section className="animate-in slide-in-from-left-4 duration-700 delay-200">
              <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
                Fort Sumter Tours Overview
              </h2>
              <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Fort Sumter tours are approximately 2 hours long and include a
                ferry ride, history talks by rangers, and time to explore the
                fort's grounds.
              </p>
              <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
            </section>

            {/* Section 3 */}
            <section className="animate-in slide-in-from-left-4 duration-700 delay-300">
              <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
                What Makes Fort Sumter Tours Special?
              </h2>
              <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Fort Sumter tours stand out for their historic significance,
                scenic ferry ride, expert guidance, and easy departure points
                from Charleston and Mount Pleasant.
              </p>
              <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
            </section>

            {/* Section 4 */}
            <section className="animate-in slide-in-from-left-4 duration-700 delay-400">
              <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
                Getting There - Fort Sumter Ferry Tours
              </h2>
              <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                The only way to reach Fort Sumter is by ferry. Departure points
                include Liberty Square in Charleston and Patriots Point in Mount
                Pleasant.
              </p>
              <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
            </section>

            {/* Section 4 */}
            <section className="animate-in slide-in-from-left-4 duration-700 delay-600">
              <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
                Fort Sumter Tours Pricing
              </h2>
              <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Ticket prices range from $40 to $45 for adults, with discounts
                available for children, seniors, and military members.
              </p>
              <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
            </section>

            {/* Section 5 */}
            <section className="animate-in slide-in-from-left-4 duration-700 delay-500">
              <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
                What to Expect on the Ferry to Fort Sumter
              </h2>
              <ul className="space-y-[12px] pl-[20px] list-disc">
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  30-minute boat ride with amazing views.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Comfortable indoor and outdoor seating.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Live narration on landmarks and Civil War history.
                </li>
              </ul>
              <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
            </section>

            {/* Section 7 */}
            <section className="animate-in slide-in-from-left-4 duration-700 delay-700">
              <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
                Tips for Booking Tickets for Fort Sumter
              </h2>
              <ul className="space-y-[12px] pl-[20px] list-disc">
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Book online ahead of time to secure your spot.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Arrive at least 30 minutes before your scheduled departure.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Book early during holidays or peak seasons to avoid
                  disappointment.
                </li>
              </ul>
              <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
            </section>

            {/* Section 8 */}
            <section className="animate-in slide-in-from-left-4 duration-700 delay-800">
              <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
                Accessibility & Family Info
              </h2>
              <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                The ferry and fort are accessible for wheelchairs and strollers,
                with some rough areas to navigate at the fort. The ranger talks
                are family-friendly and enjoyable for kids.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
