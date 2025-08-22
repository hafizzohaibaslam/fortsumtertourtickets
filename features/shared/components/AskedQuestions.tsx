import React from "react";
import Accordian from "@/features/shared/components/Accordian";
import { AccordianItem } from "@/lib/types";

type AskedQuestionsProps = {
  data: AccordianItem[];
};

const AskedQuestions = ({ data }: AskedQuestionsProps) => {
  return (
    <div id="faqs" className="mt-[100px] lg:px-[45px]">
      <h1 className="font-outfit font-bold text-[24px] leading-[32px] lg:text-[48px] lg:leading-[76px] text-center">
        Frequently Asked Questions
      </h1>
      {/* Accordian */}
      <Accordian data={data} />
    </div>
  );
};

export default AskedQuestions;
