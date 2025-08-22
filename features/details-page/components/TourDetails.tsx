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
            Alcatraz Day Tour
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Join our Alcatraz day tour, leaving daily from San Francisco's Pier
            33. Take a ferry across the Bay, visit the famous prison on Alcatraz
            Island, and get to know all its history. This day trip to Alcatraz
            Island includes guided narration of the island, a comfortable ferry
            ride, and easy planning. Book your Alcatraz day tour tickets for an
            enduring visit to the island.
          </p>
        </div>
        <div className="space-y-[24px]">
          <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            What's Included in Your Alcatraz Day Tour
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Well, you probably already know, Alcatraz is one of the most famous
            prisons in the world. It's located on an island in San Francisco
            Bay.
          </p>
          <div>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
              It once held America's most dangerous criminals and is now a top
              tourist destination. Well, for your tour, here is the information.
              After the validation process of the e-ticket, the trip to this
              interesting island includes the following:
            </p>
            <ul className="list-disc mt-4 ml-10">
              {whatIsIncluded.map((item, index) => (
                <li key={index} className="leading-[2em]">
                  <strong>{item.heading}</strong>: {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="md:p-[32px] p-[12px] border-[1px] border-[#E6E8EC] bg-[#FCFCFD] rounded-[24px] space-y-[32px] xl:self-start">
        <h1 className="font-dm-sans font-bold text-[32px] leading-[40px] text-[#141416]">
          Alcatraz Day Tour
        </h1>
        <DetailsList
          listOptions={whatIsIncluded.map((item) => ({
            Icon: Check,
            label: item.heading,
            iconClassName: "bg-[#34C759]",
          }))}
          className="gap-[17px]"
        />
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
          Book Alcatraz Tickets Now
        </Button>
      </div>
    </div>
  );
};

export default TourDetails;

const whatIsIncluded = [
  {
    heading: "Ferry trip from Pier 33",
    description: "Ferry transfer (to and from) Alcatraz Island from Pier 33",
  },
  {
    heading: "Live narration",
    description:
      "Guided commentary covering prison history, escape attempts, and island lore",
  },
  {
    heading: "Cellhouse Audio Tour",
    description: "Access to the audio tour inside the historic cellhouse",
  },
  {
    heading: "Your own time",
    description:
      "Free time to explore the island's gardens, lighthouse, and museum",
  },
  {
    heading: "Free to go anywhere",
    description: "Convenient Alcatraz tickets that include all entry fees",
  },
  {
    heading: "Small-group tour",
    description: "Small-group tour for a more personal experience",
  },
  {
    heading: "Alcatraz Views",
    description:
      "Return ferry with astonishing views of the Golden Gate and city skyline",
  },
];
