"use client";

import Link from "next/link";
import { Button } from "@/features/shared/components/Button";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";
import { TOUR_DETAILS } from "@/lib/constants";
import { MoveUpRight, Hourglass, Clock } from "lucide-react";
import React from "react";

const TourDetails = () => {
  const { handleBookingModalOpenClose } = useGlobalContext();
  const details = TOUR_DETAILS.nightTour;
  return (
    <div className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] grid grid-cols-1 gap-[32px] xl:grid-cols-[2.5fr_1fr] xl:justify-between mb-[50px]">
      <div className="space-y-[24px]">
        <div className="space-y-[24px]">
          <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            Fort Sumter Tours: Departure from Liberty Square
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Book your Fort Sumter tour from Liberty Square in downtown
            Charleston and experience a narrated{" "}
            <Link
              href="/fort-sumter-ferry"
              className="text-[#3772FF] underline"
            >
              ferry ride
            </Link>{" "}
            across Charleston Harbor to the historic fort where the American
            Civil War began on April 12, 1861. Every tour includes round-trip
            boat service, admission to the fort, museum and exhibit access, and
            a ranger-led history presentation by the National Park Service.
            Liberty Square is the primary departure point, located in the heart
            of Charleston&apos;s Historic District. Book your tickets online
            today.
          </p>
        </div>
        <div className="space-y-[24px]">
          <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            What&apos;s Included in a Fort Sumter Tour from Liberty Square
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            The Fort Sumter tour from Liberty Square is a complete
            2-hour-and-15-minute experience departing from downtown Charleston.
            Located adjacent to the South Carolina Aquarium at 340 Concord
            Street, Liberty Square provides convenient access for visitors
            staying in Charleston&apos;s Historic District. Every ticket
            includes:
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
            A Complete Fort Sumter Tour Schedule from Liberty Square
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Before boarding the ferry, visitors can explore the Fort Sumter
            Visitor Education Center at Liberty Square, open daily from 9:00 AM
            to 4:30 PM. The center features free exhibits covering the events
            leading to the Civil War — including displays on secession, slavery,
            and the original 1861 garrison flag.
          </p>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            The 30-minute narrated ferry crosses Charleston Harbor with
            panoramic views of the city skyline, the Arthur Ravenel Jr. Bridge,
            Castle Pinckney, and the Battery. Upon arrival at Fort Sumter,
            a National Park Service ranger provides an orientation and historical
            overview. Visitors then have approximately one hour to explore the
            fort independently — walking through battle-damaged walls, viewing
            original cannons and museum exhibits, watching a 360-degree video on
            the fort&apos;s Civil War role, and taking in harbor views from the
            ramparts. The return ferry completes this 2.5-hour experience with
            additional sightseeing along the waterfront.
          </p>
        </div>

        {/* Parking and Directions */}
        <div className="space-y-[24px] mt-18">
          <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            Parking and Directions to Liberty Square
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Liberty Square is located at <strong>340 Concord Street,
            Charleston, SC 29401</strong>, in downtown Charleston adjacent to the
            South Carolina Aquarium. The ferry terminal is within walking
            distance of the Historic District, Waterfront Park, and the
            Charleston City Market.
          </p>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            <strong>Parking:</strong> The City of Charleston parking garage at{" "}
            <strong>24 Calhoun Street</strong> is the closest option (paid
            parking, 7-foot height restriction). Metered street parking is also
            available in the surrounding area. Public transit via CARTA bus
            routes serves the Liberty Square area.
          </p>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Prefer departing from Mount Pleasant? See our{" "}
            <Link
              href="/patriots-point"
              className="text-[#3772FF] underline"
            >
              Patriots Point departure
            </Link>{" "}
            page. For a complete comparison of both departure points, visit our{" "}
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
          (Departure from Liberty Square)
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
            handleBookingModalOpenClose(true, "From Liberty Square")
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
    heading: "Round-trip ferry ride from Liberty Square",
    description:
      "— a 30-minute narrated cruise from downtown Charleston, included with every ticket.",
  },
  {
    heading: "Direct access to Fort Sumter National Monument",
    description: "and all on-site exhibits and displays.",
  },
  {
    heading: "Approximately one hour of self-guided exploration",
    description:
      "— walk the fort's grounds, ramparts, and museum independently.",
  },
  {
    heading: "Ranger-led history presentation",
    description:
      "by the National Park Service, covering the bombardment of Fort Sumter and the outbreak of the Civil War.",
  },
  {
    heading: "Original Civil War cannons and museum artifacts",
    description:
      "— including historical photographs, weapons, uniforms, and flag displays.",
  },
  {
    heading: "Scenic harbor views throughout the cruise:",
    description: `
      <ul>
        <li>Charleston's historic waterfront and the Battery</li>
        <li>Arthur Ravenel Jr. Bridge</li>
        <li>Castle Pinckney</li>
        <li>The Charleston skyline from the harbor</li>
      </ul>
    `,
  },
  {
    heading:
      "Access to the Fort Sumter Visitor Education Center at Liberty Square",
    description:
      "— free exhibits on secession, slavery, and the events leading to the Civil War, available before your ferry departure.",
  },
];
