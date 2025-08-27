import Image from "next/image";
import React from "react";
import DetailsList from "@/features/shared/components/DetailsList";
import { Check, MoveUpRight } from "lucide-react";
import { Button } from "@/features/shared/components/Button";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";
import { bookingTypes } from "@/components/BookingForm/BookingForm";

type Tag = {
  Icon: typeof Check;
  label: string;
};

export type ServicesSectionCardData = {
  id: string;
  title: string;
  image: string;
  description: string;
  number: string;
  tourType: keyof typeof bookingTypes;
  tags: Tag[];
  detailsList: (Tag & {
    detailListItemClassName?: string;
    iconClassName?: string;
  })[];
  subtitle?: string;
};

const ServicesSectionCard = ({ data }: { data: ServicesSectionCardData }) => {
  const { handleBookingModalOpenClose } = useGlobalContext();
  return (
    <div className="border-[1px] border-[#25283E33] shadow-[0px_0px_10px_0px_#25283E33] rounded-[20px] p-[25px] h-full flex flex-col justify-between">
      <div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between mb-[50px]">
          <Image
            src={data.image}
            alt={data.title}
            width={100}
            height={100}
            className="w-full lg:w-[291px] h-[214px] rounded-[16px] object-cover"
          />
          <span className="font-nohemi font-normal text-[40px] text-[var(--blue-2)] leading-[46px]">
            {data.number}
          </span>
        </div>
        <div className="flex flex-wrap gap-[15px] items-center">
          {data.tags.map((tag, index) => (
            <div key={index} className="flex items-center gap-[5px]">
              <tag.Icon className="w-[24px] h-[24px]" />
              <span className="font-nohemi font-medium text-[15px] leading-[24px] text-[var(--blue-2)]">
                {tag.label}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-[15px] mt-[15px] mb-[35px]">
          <h2 className="font-nohemi font-normal text-[24px] lg:text-[30px] leading-[28px] lg:leading-[42px] text-[var(--blue-2)]">
            {data.title}{" "}
            <span className="font-plus-jakarta-sans font-medium text-[14px] leading-[24px] text-[#252B2E]">
              {data.subtitle}
            </span>
          </h2>
          <p className="font-plus-jakarta-sans font-medium md:text-[16px] text-[14px] leading-[24px] text-[#252B2E]">
            {data.description}
          </p>
        </div>
        <DetailsList listOptions={data.detailsList} className="" />
      </div>
      <Button
        variant="primary"
        icon={<MoveUpRight className="w-[20px] h-[20px]" />}
        className="mt-[35px] w-fit"
        onClick={() => handleBookingModalOpenClose(true, data.tourType)}
      >
        {"Get Fort Sumter Tickets"}
      </Button>
    </div>
  );
};

export default ServicesSectionCard;
