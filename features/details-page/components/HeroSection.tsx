import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import Image1 from "@/public/details-page/Image2.jpg";
import Image3 from "@/public/details-page/Image3.jpg";
import Image4 from "@/public/details-page/Image4.webp";
import Image5 from "@/public/details-page/Image5.webp";
import Image2 from "@/public/details-page/Image1.jpg";

import Night2 from "@/public/details-page/night1.jpg";
import Night1 from "@/public/details-page/night2.jpg";
import Night3 from "@/public/details-page/night3.jpg";
import Night4 from "@/public/details-page/night4.jpg";
import Night5 from "@/public/details-page/night5.jpg";

type HeroSectionProps = {
  tourtype: string;
};

const HeroSection = ({ tourtype }: HeroSectionProps) => {
  return (
    <div className="mt-[40px] mb-[70px] space-y-[40px]">
      <div className="w-full lg:w-[80%] lg:mx-auto grid md:grid-cols-1 grid-cols-2  gap-[8px] lg:grid-cols-4">
        {tourtype === "day" ? (
          <>
            <div className="bg-black w-full  md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Image1}
                alt="Aerial view of an Alcatraz day tour"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full  h-[175px] sm:h-[256px] md:h-[520px] rounded-[16px] lg:col-span-2 lg:row-span-2">
              <Image
                src={Image2}
                alt="Alcatraz building view at the day tour"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Image3}
                alt="Alcatraz jail cell view in San Francisco"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Image4}
                alt="Historic row of Alcatraz prisons doors"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Image5}
                alt="Ferry in bay heading towards Alcatraz Island "
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </>
        ) : (
          <>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Night1}
                alt="Panoramic view of Alcatraz Island, San Francisco"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full h-[175px] sm:h-[256px] md:h-[520px] rounded-[16px] lg:col-span-2 lg:row-span-2">
              <Image
                src={Night2}
                alt="Building view of Alcatraz Island at night"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Night3}
                alt="Alcatraz jail cell view in San Francisco"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Night4}
                alt="Aerial view of Alcatraz night tour"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Night5}
                alt="PIER 39 flag with a ferry to Alcatraz Island in the background."
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
