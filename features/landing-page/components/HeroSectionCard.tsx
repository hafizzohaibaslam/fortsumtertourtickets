import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  id: string;
  title: string;
  image: string;
  link: string; // Added link prop
};

const HeroSectionCard = ({ title, image, link }: CardProps) => {
  return (
    <Link
      href={link}
      className="w-full md:max-w-[225px] p-[15px] rounded-[16px] border-[1px] border-[#FFFFFF4D] relative overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
    >
      {/* Overlay for blur and glass effect */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-[16px] z-0" />
      {/* Card content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-[10px]">
          <p className="font-nohemi font-semibold md:text-[16px] text-[14px] leading-[18px]">
            {title}
          </p>
          <div className="min-w-[30px] h-[30px] rounded-full bg-[var(--yellow-1)] text-black flex items-center justify-center">
            <MoveUpRight className="w-[16px] h-[16px]" />
          </div>
        </div>
        <div className="border-b-[1px] border-[#FFFFFF26] my-[13px]"></div>

        {/* ✅ Image with preserved aspect ratio */}
        <div className="w-full aspect-[3/2] rounded-[16px] overflow-hidden relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </Link>
  );
};

export default HeroSectionCard;
