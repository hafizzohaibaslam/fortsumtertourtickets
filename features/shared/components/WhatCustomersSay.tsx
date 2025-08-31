import React from "react";
import { customersCardData } from "../../landing-page/utils/data";
import CustomersCard from "../../landing-page/components/CustomersCard";

const WhatCustomersSay = () => {
  return (
    <div className="md:mt-[80px] mt-[10px] py-[32px] lg:px-[51px] space-y-[12px]">
      {/* Introduction */}
      <div className="space-y-[15px]">
        <h1 className="text-[#25283E] font-nohemi font-medium md:text-[36px] text-[26px] leading-[42px] lg:text-[48px] lg:leading-[54px] -tracking-[1%]">
          What Our Customers Say
        </h1>
        <p className="text-[#25283EB2] font-plus-jakarta-sans font-medium text-[18px] leading-[26px] max-w-xl">
          We take pride in serving our customers with the best experience. Read
          what they say about Fort Sumter tour.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] lg:min-h-[450px]">
        {customersCardData.map((card) => (
          <CustomersCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default WhatCustomersSay;
