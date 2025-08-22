import React from "react";

type AccordianHeadingProps = {
  title: string;
  value: string;
  badge?: React.ReactNode;
};

const AccordianHeading = ({ title, value, badge }: AccordianHeadingProps) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <h3 className="font-nohemi text-[#424242] font-semibold text-[20px] leading-[32px]">
        {title}
      </h3>
      {!badge && (
        <span className="font-plus-jakarta-sans text-[#00000099] font-normal text-[18px] leading-[24px]">
          {value}
        </span>
      )}
      {badge && badge}
    </div>
  );
};

export default AccordianHeading;
