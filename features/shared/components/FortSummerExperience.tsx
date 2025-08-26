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
        src="/fortsumter-calltoaction.jpg"
        alt="ferry to Alcatraz Island, San Francisco"
        fill
      />
      <h1 className="max-w-5xl mx-auto text-center font-nohemi font-normal text-white text-[30px] leading-[1.2] lg:text-[64px] lg:leading-[74px]">
        Our Unforgettable Fort Sumter Tours Experience
      </h1>
      <p className="max-w-4xl mx-auto text-center text-white font-plus-jakarta-sans font-normal md:text-[16px] text-[14px] leading-[1.4] mt-[19px] mb-[60px] backdrop-blur-md p-2 rounded-md lg:p-0 lg:rounded-none lg:backdrop-blur-none">
        *Take a ferry ride to Fort Sumter and just see where American history
        changed forever. This is where the very first shots of the Civil War
        were fired. Step inside the fort. Touch the bricks. Stand by the
        cannons. The rangers tell stories that stay with you. All of this brings
        the old days back to life. The ride itself is very special, with wide
        views of Charleston Harbor and the Ravenel Bridge. Every ticket includes
        your two-way ferry and time to explore the fort on your own. And yes, we
        are a private booking company, so if anything feels unclear, please
        contact us. We’ll be happy to help!
      </p>
      <Button
        variant="secondary"
        icon={<MoveUpRight className="w-[20px] h-[20px]" />}
        className="w-fit mx-auto"
        onClick={() => handleBookingModalOpenClose(true)}
      >
        Book Fort Sumter Ticket Now
      </Button>
    </div>
  );
};

export default FortSummerExperience;
