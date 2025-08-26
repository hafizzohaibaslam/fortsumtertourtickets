"use client";

import { Button } from "@/features/shared/components/Button";
import DetailsList from "@/features/shared/components/DetailsList";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";
import { TOUR_DETAILS } from "@/lib/constants";
import { MoveUpRight, Hourglass, Clock, Check } from "lucide-react";
import React from "react";

const TourDetails = () => {
  const { handleBookingModalOpenClose } = useGlobalContext();
  const details = TOUR_DETAILS.dayTour;
  return (
    <div className="bg-white rounded-[23px] md:px-[43px] px-[12px]  py-[41px] grid grid-cols-1 gap-[32px] xl:grid-cols-[2.5fr_1fr] xl:justify-between mb-[50px]">
      <div className="space-y-[24px]">
        <div className="space-y-[24px]">
          <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            Fort Sumter Tours: Departure from Patriots Point
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Book your Fort Sumter Tours from Patriots Point and enjoy a ferry
            ride across Charleston Harbor to the historic fort. Yeah, that’s the
            same fort where the Civil War began. Our guided Fort Sumter tours
            include complete boat service, museum access, and ranger programs.
            It’s the super-easy and most convenient way to experience this
            national monument. Just book your tickets online today.
          </p>
        </div>
        <div className="space-y-[24px]">
          <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            What’s Included in a Fort Sumter Tour from Patriots Point
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            A <strong>Fort Sumter tour from Patriots Point</strong> offers more
            than just a ferry ride; it’s a complete historical and lovely
            experience. The moment you board the boat, you’ll feel like every
            part of the journey is designed for you, to let you feel the charm
            of Charleston’s beauty. Here is what is included:
          </p>
          <div>
            <ul className="list-disc mt-4 ml-10">
              {whatIsIncluded.map((item, index) => (
                <li
                  key={index}
                  className="leading-[2em]"
                  dangerouslySetInnerHTML={{
                    __html: `<strong>${item.heading}</strong> ${item.description}`,
                  }}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-[24px] mt-18">
          <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            A Complete Fort Sumter Tour Schedule From Patriots Point
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            A tour from Patriots Point takes you to the site where the Civil War
            started in April 1861. The 30-minute narrated ferry offers views of
            Charleston Harbor, passing Castle Pinckney, the Battery, and USS
            Yorktown with commentary on the city’s Civil War history.
            <br />
            <br />
            At Fort Sumter, roam about here and there for about an hour. See the
            fort’s battle-damaged walls, museum exhibits, original flags, and
            ranger-led talks that bring history to life. From the top, enjoy
            lovely harbor views before returning on a relaxing ferry ride. This
            tour blends history, scenery, and storytelling in one unforgettable
            experience.
          </p>
        </div>
      </div>

      <div className="md:p-[32px] p-[12px] border-[1px] border-[#E6E8EC] bg-[#FCFCFD] rounded-[24px] space-y-[32px] xl:self-start">
        <h1 className="font-dm-sans font-bold text-[32px] leading-[40px] text-[#141416]">
          Fort Sumter Tours
        </h1>
        <span className="font-plus-jakarta-sans font-medium text-[14px] text-[#252B2E]">
          (Departure from Patriots Point)
        </span>

        {/* <DetailsList
          listOptions={whatIsIncluded.map((item) => ({
            Icon: Check,
            label: item.heading,
            iconClassName: "bg-[#34C759]",
          }))}
          className="gap-[17px]"
        /> */}
        <div className="rounded-[16px] bg-[#F4F5F6] p-[12px] flex items-center gap-[10px] w-fit">
          <div className="flex items-center gap-[5px]">
            <Hourglass size={25} />
            <h3 className="font-nohemi font-medium md:text-[15px] text-[12px] leading-[24px] text-[#25283E]">
              {details.duration}
            </h3>
          </div>
          <div className="w-[1px] h-[48px] bg-[#E6E8EC]"></div>
          <div className="flex items-center gap-[5px]">
            <Clock size={25} />
            <h3 className="font-nohemi font-medium md:text-[15px] text-[12px] leading-[24px] text-[#25283E]">
              {details.departureTime}
            </h3>
          </div>
        </div>
        <Button
          variant="primary"
          icon={<MoveUpRight className="w-[20px] h-[20px]" />}
          onClick={() => handleBookingModalOpenClose(true, "Day Tour")}
        >
          Book FortSumter Tickets
        </Button>
      </div>
    </div>
  );
};

export default TourDetails;

const whatIsIncluded = [
  {
    heading: "Round-trip ferry ride from Patriots Point",
    description: "is included with every ticket",
  },
  {
    heading: "Entrance to Fort Sumter",
    description: "and access to on-site exhibits",
  },
  {
    heading: "One hour to explore",
    description: "the fort on your own",
  },
  {
    heading: "Ranger-led history talk",
    description: "explaining Fort Sumter’s role in the Civil War",
  },
  {
    heading: "Chance to view original cannons and museum displays",
    description: "",
  },
  {
    heading: "Ferry ride across Charleston Harbor with views of:",
    description: `
      <ul>
        <li>Arthur Ravenel Jr. Bridge</li>
        <li>Castle Pinckney</li>
        <li>Charleston skyline</li>
      </ul>
    `,
  },
  {
    heading: "A perfect mix of education, history, and sightseeing",
    description: "",
  },
  {
    heading:
      "Tours provide easy transport, guided history, and self-exploration, too.",
    description: "",
  },
  {
    heading:
      "Visitors leave with beautiful memories and a way more deeper understanding of American history",
    description: "",
  },
];
