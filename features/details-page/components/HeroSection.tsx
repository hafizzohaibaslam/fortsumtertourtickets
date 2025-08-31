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
import Night5 from "@/public/details-page/night5.webp";

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
                alt="Harbor view on Fort Sumter tours and ferry rides in Charleston SC"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full  h-[175px] sm:h-[256px] md:h-[520px] rounded-[16px] lg:col-span-2 lg:row-span-2">
              <Image
                src={Image2}
                alt="Civil War cannonball embedded in the historic brick walls of Fort Sumter"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Image3}
                alt="Fort Sumter National Monument"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Image4}
                alt="Historic cannon image of Fort Sumter at Charleston Harbor"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Image5}
                alt="Fort Sumter visitor education centre at liberty square"
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
                alt="National Monument sign at the entrance, Fort Sumter, Charleston, SC"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full h-[175px] sm:h-[256px] md:h-[520px] rounded-[16px] lg:col-span-2 lg:row-span-2">
              <Image
                src={Night2}
                alt="Welcome board to the national monument, Fort Sumter"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Night3}
                alt="Daytime ferry ride experience with fort sumter tours company"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Night4}
                alt="Civil War Historic cannons at Fort Sumter"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-black w-full md:h-[256px] h-[175px] rounded-[16px]">
              <Image
                src={Night5}
                alt=" Ferry arriving for Fort Sumter Tours return"
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
