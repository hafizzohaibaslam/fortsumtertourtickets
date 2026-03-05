"use client";

import Link from "next/link";
import { Button } from "@/features/shared/components/Button";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";
import { TOUR_DETAILS } from "@/lib/constants";
import { MoveUpRight, Hourglass, Clock } from "lucide-react";
import React from "react";

const TourDetails = () => {
  const { handleBookingModalOpenClose } = useGlobalContext();
  const details = TOUR_DETAILS.dayTour;
  return (
    <div className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] grid grid-cols-1 gap-[32px] xl:grid-cols-[2.5fr_1fr] xl:justify-between mb-[50px]">
      <div className="space-y-[24px]">
        <div className="space-y-[24px]">
          <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            Fort Sumter Tours: Departure from Patriots Point
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Book your Fort Sumter tour from Patriots Point in Mount Pleasant and
            experience a narrated{" "}
            <Link
              href="/fort-sumter-ferry"
              className="text-[#3772FF] underline"
            >
              ferry ride
            </Link>{" "}
            across Charleston Harbor to the historic fort where the first shots
            of the American Civil War were fired on April 12, 1861. Each tour
            includes round-trip boat service, admission to the fort, access to
            the on-site museum and exhibits, and a ranger-led history
            presentation by the National Park Service. Book your tickets online
            today to secure your preferred departure time.
          </p>
        </div>
        <div className="space-y-[24px]">
          <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            What&apos;s Included in a Fort Sumter Tour from Patriots Point
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            A Fort Sumter tour from Patriots Point is a complete 2-hour-and-15-minute
            experience that combines scenic harbor cruising with self-guided
            exploration of one of America&apos;s most significant Civil War
            landmarks. Every ticket includes:
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
          <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            A Complete Fort Sumter Tour Schedule from Patriots Point
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            The Fort Sumter tour from Patriots Point begins with a 30-minute
            narrated ferry crossing of Charleston Harbor. Along the way, a
            National Park Service guide provides commentary on the landmarks you
            pass — including Castle Pinckney, the Battery, the USS Yorktown, and
            the Arthur Ravenel Jr. Bridge.
          </p>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Upon arrival at Fort Sumter, visitors have approximately one hour to
            explore the fort at their own pace. Walk through battle-scarred brick
            walls, view original Civil War cannons and artillery, visit the
            museum with its collection of artifacts and historical exhibits, and
            listen to a ranger-led presentation on the events of April 1861.
            From the ramparts, take in panoramic views of Charleston Harbor
            before boarding the return ferry for a relaxing ride back to Patriots
            Point.
          </p>
        </div>

        {/* Parking and Directions */}
        <div className="space-y-[24px] mt-18">
          <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            Parking and Directions to Patriots Point
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Patriots Point is located at <strong>40 Patriots Point Road,
            Mount Pleasant, SC 29464</strong>. On-site parking is available in a
            large lot adjacent to the ferry terminal. Patriots Point offers
            easier parking than downtown Charleston and can accommodate RVs and
            larger vehicles.
          </p>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            <strong>From downtown Charleston:</strong> Cross the Arthur Ravenel
            Jr. Bridge via US-17 North. Take the Mount Pleasant exit and follow
            signs to Patriots Point Road. The ferry terminal is located past the
            roundabout near the USS Yorktown.
          </p>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Prefer departing from downtown? See our{" "}
            <Link
              href="/liberty-square"
              className="text-[#3772FF] underline"
            >
              Liberty Square departure
            </Link>{" "}
            page. For a complete overview of both departure options, visit our{" "}
            <Link
              href="/visit-fort-sumter"
              className="text-[#3772FF] underline"
            >
              visitor guide
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="md:p-[32px] p-[12px] border-[1px] border-[#E6E8EC] bg-[#FCFCFD] rounded-[24px] space-y-[32px] xl:self-start">
        <h2 className="font-dm-sans font-bold text-[32px] leading-[40px] text-[#141416]">
          Fort Sumter Tours
        </h2>
        <span className="font-plus-jakarta-sans font-medium text-[14px] text-[#252B2E]">
          (Departure from Patriots Point)
        </span>

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
          onClick={() =>
            handleBookingModalOpenClose(true, "From Patriots Point")
          }
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
    description:
      "— a 30-minute narrated cruise across Charleston Harbor, included with every ticket.",
  },
  {
    heading: "Admission to Fort Sumter National Monument",
    description: "and access to all on-site exhibits and displays.",
  },
  {
    heading: "Approximately one hour of self-guided exploration",
    description:
      "— walk the fort's grounds, ramparts, and museum at your own pace.",
  },
  {
    heading: "Ranger-led history presentation",
    description:
      "by the National Park Service, covering Fort Sumter's role in the outbreak of the Civil War.",
  },
  {
    heading: "Original Civil War cannons and museum artifacts",
    description:
      "— including weapons, uniforms, historical photographs, and flag displays.",
  },
  {
    heading: "Scenic harbor views throughout the cruise:",
    description: `
      <ul>
        <li>Arthur Ravenel Jr. Bridge</li>
        <li>Castle Pinckney</li>
        <li>Charleston skyline and the Battery</li>
        <li>USS Yorktown (from Patriots Point)</li>
      </ul>
    `,
  },
  {
    heading: "A complete experience combining education, history, and sightseeing",
    description:
      "— from the narrated ferry ride to self-guided exploration of one of America's most important Civil War sites.",
  },
];
