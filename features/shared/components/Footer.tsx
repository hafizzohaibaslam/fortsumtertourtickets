import React from "react";
import Logo from "@/public/fortsumter-logo.png";
import Image from "next/image";
import Link from "next/link";
import { footerNavlinks } from "../utils/navlinks";

const Footer = () => {
  return (
    <div className="px-[24px] py-[40px] lg:px-[45px] lg:py-[56px] bg-[#25283E] text-white rounded-[20px] grid grid-cols-1 gap-[40px] lg:grid-cols-2 lg:gap-[130px]">
      {/* Left Side */}
      <div>
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          className="w-[113px] h-[50px]"
        />
        <div className="mt-[25px] mb-[23px]">
          <p className="text-[#8F9FA3] font-plus-jakarta-sans font-normal text-[15px] leading-[22px] max-w-lg">
            Book your Fort Sumter tickets and explore the site where the Civil
            War began. Enjoy an unforgettable visit to one of America’s most
            historic coastal forts.
          </p>
          <div className="flex items-center gap-[12px] mt-[16px]">
            <p className="font-nohemi text-[12px] font-normal leading-[26px]">
              Let's Plan the Fort Sumter Tour Now!
            </p>
            <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
          </div>
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="w-full bg-transparent border-b text-white border-[1px] border-[#FFFFFF33] rounded-[12px] px-[25px] py-[14px] outline-none placeholder:text-white placeholder:font-inter placeholder:font-normal placeholder:text-[14px] placeholder:leading-[24px]"
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-col gap-[20px] justify-between">
        <div className="flex flex-wrap gap-[50px]">
          {footerNavlinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="text-[#8F9FA3] font-plus-jakarta-sans font-normal text-[16px] leading-[22px]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-[12px] lg:flex-row lg:justify-between">
          <p className="font-plus-jakarta-sans font-normal text-[12px] leading-[22px] text-[#8F9FA3] flex-1 lg:self-end">
            © 2021 — Copyright, All Rights reserved
          </p>

          {/* <div className="flex flex-col gap-[15px]">
            <p className="font-nohemi text-[12px] font-normal leading-[26px] lg:self-end">
              Languages
            </p>
            <ul className="flex gap-[12px]">
              <li>En</li>
              <li>Es</li>
              <li>Fr</li>
              <li>De</li>
              <li>Ru</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
