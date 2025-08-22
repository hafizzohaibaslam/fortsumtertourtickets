import { cn } from "@/features/shared/utils/cn";
import Image from "next/image";
import React from "react";

type CustomersCardProps = {
  id: string;
  customerName: string;
  customerJob: string;
  customerImage: string;
  description: string;
};

const CustomersCard = ({
  id,
  customerName,
  customerJob,
  customerImage,
  description,
}: CustomersCardProps) => {
  return (
    <div
      className={cn(
        "bg-[#FFFFFF] rounded-[14px] px-[25px] py-[20px] xl:h-fit",
        Number(id) % 2 === 1 && "xl:self-end"
      )}
    >
      <Image
        src="/landing-page/quotes.svg"
        alt="quotes"
        width={40}
        height={40}
      />
      <p className="text-[#25283E] font-plus-jakarta-sans font-normal md:text-[18px] text-[14px] leading-[30px] sm:mr-[17px] md:my-[50px] my-[25px]">
        {description}
      </p>
      <div className="flex flex-col gap-[18px] lg:flex-row lg:items-center">
        <div className="relative rounded-full overflow-hidden w-[60px] h-[60px] bg-[#e6e4ff]">
          <Image
            src={customerImage}
            alt="customer-1"
            width={100}
            height={100}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="space-y-[6px]">
          <p className="text-[#170F49] font-nohemi font-medium text-[18px] leading-[20px]">
            {customerName}
          </p>
          <p className="text-[#252B2E] font-plus-jakarta-sans font-medium text-[14px] leading-[24px]">
            {customerJob}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomersCard;
