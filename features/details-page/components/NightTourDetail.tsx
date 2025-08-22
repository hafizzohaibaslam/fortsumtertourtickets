"use client";

import { Button } from "@/features/shared/components/Button";
import DetailsList from "@/features/shared/components/DetailsList";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";
import { TOUR_DETAILS } from "@/lib/constants";
import { MoveUpRight, Hourglass, Clock, MapPin, Check } from "lucide-react";
import React from "react";

const NightTourDetails = () => {
  const { handleBookingModalOpenClose } = useGlobalContext();
  const details = TOUR_DETAILS.nightTour;
  return (
    <div className="bg-white rounded-[23px] md:px-[43px] px-[10px] py-[41px] grid grid-cols-1 gap-[32px] xl:grid-cols-[2.5fr_1fr] xl:justify-between mb-[50px]">
      <div className="space-y-[24px]">
        <div className="space-y-[24px]">
          <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            Alcatraz Night Tour
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            The Alcatraz Night Tour allows you to have a unique nighttime visit
            to Alcatraz Island. Enjoy the place’s hidden stories and chilling
            history under the moonlight (Peaceful, isn’t it?). With limited
            tickets and expert guides, this night tour gives you a dramatic and
            literally unforgettable experience. Book your Alcatraz tickets now
            (spots fill quickly for this wonderful evening adventure!).
          </p>
        </div>
        <div className="space-y-[24px]">
          <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            What’s Included in Your Alcatraz Night Tour
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Well, you probably already know, Alcatraz is one of the most famous
            prisons in the world. It’s located on an island in San Francisco
            Bay.
          </p>
          <div>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
              It once held America’s most dangerous criminals and is now a top
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
          Alcatraz Night Tour
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
          onClick={() => handleBookingModalOpenClose(true, "Night Tour")}
        >
          Book Alcatraz Ticket Now
        </Button>
      </div>
    </div>
  );
};

export default NightTourDetails;

const whatIsIncluded = [
  {
    heading: "Ferry trip from Pier 33",
    description:
      "The captain takes the boat around the island so you can enjoy the night views before landing.",
  },
  {
    heading: "Live narration",
    description:
      "Hear stories about Alcatraz’s history, escape attempts, and famous attractions there.",
  },
  {
    heading: "Cellhouse Audio Tour",
    description:
      "Available in English, Spanish, French, German, Italian, Japanese, Dutch, Mandarin, Portuguese, and Korean.",
  },
  {
    heading: "Access to special areas (available for night only)",
    description:
      "Visit the hospital wing, secret cell blocks, Civil War buildings, gardens, and lighthouse remains.",
  },
  {
    heading: "Evening programs",
    description:
      "Get to know about guard life, escape attempts, and historic prisoners (just a night offer).",
  },
  {
    heading: "Smaller groups",
    description:
      "Fewer guests are allowed at night shift. It’s your chance for a really close and peaceful experience.",
  },
  {
    heading: "Amazing photo spots",
    description:
      "Capture classy pics of San Francisco’s skyline and the Golden Gate Bridge at sunset or under the stars.",
  },
  {
    heading: "Flexible return times",
    description:
      "Stay on the island until the last ferry, usually around 9:25 PM.",
  },
  {
    heading: "Exhibit entry",
    description: "Includes “The Big Lockup” and the New Industries Building.",
  },
];
