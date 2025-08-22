import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="space-y-[42px]">
      <h1 className="text-[#25283E] font-nohemi font-medium md:text-[36px] text-[26px] leading-[42px] lg:text-[48px] lg:leading-[54px] -tracking-[1%]">
        Why Choose Us
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[75px]">
        <div className="space-y-[17px]">
          {whyChooseUsData.map((item) => (
            <WhyChooseUsCard key={item.id} {...item} />
          ))}
        </div>
        <div className="lg:mr-[65px] flex items-center justify-center">
          <Image
            src="/choose-us.png"
            alt="Why Choose Us"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

type WhyChooseUsCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const WhyChooseUsCard = ({
  id,
  title,
  description,
  image,
}: WhyChooseUsCardProps) => {
  return (
    <div className="flex items-center gap-[20px] p-[18px] box-shadow rounded-[7.25px] border-[1.45px] border-[#EAEBF080]">
      <div className="min-w-[58px] min-h-[58px] flex items-center justify-center rounded-[7px] border-[1.45px] border-[#EAEBF0] box-shadow">
        <Image
          src={image}
          alt={title}
          width={30}
          height={30}
          className="w-[30px] h-[30px] object-contain m-1"
        />
      </div>
      <div className="space-y-[6px]">
        <h2 className="font-nohemi font-medium md:text-[20px] text-[18px] leading-[100%] tracking-[1%] text-[#25283E]">
          {title}
        </h2>
        <p className="font-plus-jakarta-sans font-normal md:text-[18px] text-[14px] leading-[24px] tracking-[0%] text-[#25283EB2]">
          {description}
        </p>
      </div>
    </div>
  );
};

const whyChooseUsData = [
  {
    id: "1",
    title: "Night Tour Access",
    description: "Guaranteed Alcatraz Night tour tickets (no hidden fees)",
    image: "/element.png",
  },
  {
    id: "2",
    title: "Instant Booking",
    description: "Easy online booking with quick confirmation",
    image: "/element-2.png",
  },
  {
    id: "3",
    title: "Scenic Ferry Ride",
    description:
      "Comfortable ferries with panoramic Bay views in the Moonlight",
    image: "/element-3.png",
  },
  {
    id: "4",
    title: "Expert Commentary",
    description: "Expert guides for a richer Alcatraz Island tour ",
    image: "/element-4.png",
  },
  {
    id: "5",
    title: "Flexible Schedule",
    description: "Flexible departure times from Pier 33",
    image: "/element-5.png",
  },
  {
    id: "6",
    title: "Trusted Experience",
    description: "Fan-favourite tours trusted by thousands of travellers",
    image: "/element-6.png",
  },
];
