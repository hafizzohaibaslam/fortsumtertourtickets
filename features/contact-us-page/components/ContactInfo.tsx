import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="my-[40px] px-[24px] py-[30px] lg:px-[33px] lg:py-[30px] bg-white rounded-[23px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[40px]">
      {/* Left */}
      <div className="space-y-[24px] lg:self-center">
        <span className="font-plus-jakarta-sans font-normal text-[24px] leading-[36px] text-black">
          Contact Info
        </span>
        <h1 className="text-black font-nohemi font-medium text-[48px] leading-[58px]">
          We are always happy to assist you.
        </h1>
      </div>
      {/* Right */}
      <div className="flex flex-col gap-[24px] lg:flex-row lg:items-center lg:justify-between lg:gap-[40px]">
        {/* Email Address */}
        <div className="space-y-[27px] p-[24px] lg:p-[32px]">
          <div className="space-y-[20px]">
            <h4 className="font-nohemi font-medium text-[22px]">
              Email Address
            </h4>
            <div className="w-[30px] h-[3px] bg-black"></div>
          </div>
          <div className="space-y-[25px]">
            <a
              href="mailto:tickets@alcatrazislandticketing.com"
              className="font-nohemi font-medium text-[22px]"
            >
              tickets@alcatrazislandticketing.com
            </a>

            <p className="font-plus-jakarta-sans font-normal text-[16px] lg:text-[20px] leading-[16px] lg:leading-[31px] text-black">
              Assistance hours: Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
        </div>
        {/* Phone Number */}
        {/* <div className="space-y-[27px] p-[24px] lg:p-[32px]">
          <div className="space-y-[20px]">
            <h4 className="font-nohemi font-medium text-[22px]">Number</h4>
            <div className="w-[30px] h-[3px] bg-black"></div>
          </div>
          <div className="space-y-[25px]">
            <h5 className="font-nohemi font-medium text-[22px]">
              (808) 998-34256
            </h5>
            <p className="font-plus-jakarta-sans font-normal text-[16px] lg:text-[20px] leading-[16px] lg:leading-[31px] text-black">
              Assistance hours: Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
