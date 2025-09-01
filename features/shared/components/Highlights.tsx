"use client";
import React, { useState } from "react";
import { Button } from "./Button";
import { MoveUpRight } from "lucide-react";
import { cn } from "../utils/cn";
import HighlightsMoreContent from "./HighlightsMoreContent";

const Highlights = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div
      className={cn(
        `mt-[50px] lg:bg-white rounded-[23px] py-[30px] lg:px-[52px] lg:pt-[51px] flex flex-col transition-all ease-in-out duration-800`,
        showAll ? "gap-[60px]" : "gap-[24px]"
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
      <HighlightsMoreContent showAll={showAll} />
    </div>
  );
};

export default Highlights;
