import Image from "next/image";
import React from "react";

const PreparationTips = () => {
  return (
    <div className="flex flex-col gap-[40px] md:mt-[120px]  md:mb-[100px] mb-[40px] py-[32px] lg:px-[51px]">
      <h1 className="text-[#25283E] font-nohemi font-medium md:text-[36px] text-[26px]  leading-[42px] lg:text-[48px] lg:leading-[54px] -tracking-[1%]">
        Preparation Tips
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {preparationTipsData.map((item) => (
          <PreparationTipsCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

type PreparationTipsCardProps = {
  title: string;
  description: string;
  image: string;
};

const PreparationTipsCard = ({
  title,
  description,
  image,
}: PreparationTipsCardProps) => {
  return (
    <div className="bg-white p-[25px] rounded-[14px] space-y-[20px]">
      <div className="min-w-[48px] w-fit h-fit min-h-[48px] bg-[#25283E] rounded-full flex items-center justify-center p-[12px]">
        <Image
          src={image}
          alt="Preparation Tips"
          width={24}
          height={24}
          className="w-[24px] h-[24px] object-cover"
        />
      </div>
      <div className="space-y-[5px]">
        <h2 className="font-nohemi font-medium text-[20px] leading-[22px] tracking-[0.2px] text-[#25283E]">
          {title}
        </h2>
        <p className="font-plus-jakarta-sans font-normal md:text-[16px] text-[14px] leading-[24px] text-[#25283EB2]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PreparationTips;

export const preparationTipsData = [
  {
    id: "1",
    title: "Book Your Alcatraz Tickets Early",
    description:
      "Alcatraz tickets sell out much faster for both day and evening tours. Reserve your spot, hurry!",
    image: "/ticket.png",
  },
  {
    id: "2",
    title: "Arrive Early for the Alcatraz Ferry",
    description:
      "Arrive at Pier 33 at least 30 minutes before your ferry to Alcatraz. Late arrivals may miss the boat.",
    image: "/clock.png",
  },
  {
    id: "3",
    title: "Dress for the Weather",
    description:
      "As the weather is a bit cold even in summer, wear accordingly. Don't forget to wear comfortable shoes for walking.",
    image: "/shirt.png",
  },
  {
    id: "4",
    title: "Bring Your Camera",
    description:
      "Except in theaters, photography is allowed everywhere. Bring your cameras to capture the moments.",
    image: "/camera.png",
  },
  {
    id: "5",
    title: "Download or listen to the Audio Tour",
    description:
      "The Alcatraz museum tickets include the audio tour. It tells the story of Alcatraz Island with real voices from guards.",
    image: "/download.png",
  },
  {
    id: "6",
    title: "Check the Ferry Schedule",
    description:
      "The ferry to Alcatraz runs on a fixed set schedule. Plan your return trip so you have enough time to see everything on Alcatraz Island.",
    image: "/bag-check.png",
  },
];
