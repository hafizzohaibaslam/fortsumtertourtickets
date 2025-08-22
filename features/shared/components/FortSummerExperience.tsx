"use client";
import { Button } from "@/features/shared/components/Button";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const FortSummerExperience = () => {
  const { handleBookingModalOpenClose } = useGlobalContext();
  return (
    <div className="h-full lg:h-[640px] relative [background-blend-mode:darken] bg-black/30 bg-cover bg-top bg-no-repeat rounded-[23px] md:p-[30px] p-[10px] lg:p-[52px] flex flex-col justify-center mt-[80px] mb-[70px]">
      <Image
        className="absolute inset-0 w-full h-full object-cover rounded-[23px] -z-10"
        src="/landing-page/action.webp"
        alt="ferry to Alcatraz Island, San Francisco"
        fill
      />
      <h1 className="max-w-5xl mx-auto text-center font-nohemi font-normal text-white text-[30px] leading-[1.2] lg:text-[64px] lg:leading-[74px]">
        An Incredible Alcatraz Island Tour
      </h1>
      <p className="max-w-4xl mx-auto text-center text-white font-plus-jakarta-sans font-normal md:text-[16px] text-[14px] leading-[1.4] mt-[19px] mb-[60px] backdrop-blur-md p-2 rounded-md lg:p-0 lg:rounded-none lg:backdrop-blur-none">
        *Visit Alcatraz by ferry and experience the place's history on our
        Alcatraz tour. Cast real voices of former prisoners and guards bring the
        award-winning audio tour alive as you explore prison cells. Experience
        the Cold War in the cellhouse, and enjoy gorgeous vistas of San
        Francisco Bay and the Golden Gate Bridge. Along with your Alcatraz
        tickets, you’ll have access to the whole museum and hear unprecedented
        tales on both the day and evening tours. Note that we are a private
        booking company. Contact us anytime if confused anywhere.
      </p>
      <Button
        variant="secondary"
        icon={<MoveUpRight className="w-[20px] h-[20px]" />}
        className="w-fit mx-auto"
        onClick={() => handleBookingModalOpenClose(true)}
      >
        Book Alcatraz Ticket Now
      </Button>
    </div>
  );
};

export default FortSummerExperience;
