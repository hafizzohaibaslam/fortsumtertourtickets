import React from "react";
import { Button } from "./Button";
import Image from "next/image";
import Badge from "@/features/order-list-page/components/Badge";
import { MoveUpRight } from "lucide-react";
import DetailsList from "./DetailsList";
import Link from "next/link";

const Highlights = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row gap-[24px] mt-[50px] lg:bg-white rounded-[23px] py-[30px] lg:px-[52px] lg:py-[51px]">
      <span className="self-start w-fit text-[var(--blue-2)] font-plus-jakarta-sans font-normal px-[25px] py-[6px] text-[16px] leading-[16px] border-[1px] border-[var(--blue-2)] rounded-full">
        Highlights
      </span>
      <div className="w-full lg:w-[672px] max-w-[90vw] space-y-[14px] flex flex-col justify-start items-start lg:justify-center lg:items-center self-center">
        <h2 className="font-nohemi font-normal text-[var(--blue-2)] md:text-[36px] text-[30px] lg:text-[50px] leading-[42px] lg:leading-[62px]">
          Why Visit Fort Sumter?
        </h2>
        <p className="text-[#25283EB2] font-normal font-plus-jakarta-sans md:text-[16px] text-[14px] leading-[26px] max-w-2xl">
          So, Fort Sumter, yeah! That's the place where the whole Civil War was
          fought in 1861. At the entrance of Charleston Harbor, it is one of the
          most visited places. A Fort Sumter tour gives you the best chance to
          walk through the grounds where history changed the course of America.
          You get this ferry ride across the harbor (which, by the way, is
          pretty cool), then a walk through the fort itself. Absolutely
          memorable tour!
        </p>
      </div>
      <Link href="/details" className="lg:self-end w-fit">
        <Button
          variant="primary"
          icon={<MoveUpRight className="w-[20px] h-[20px]" />}
        >
          Read More
        </Button>
      </Link>
    </div>
  );
};

export default Highlights;
