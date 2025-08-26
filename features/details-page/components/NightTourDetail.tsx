"use client";

import { Button } from "@/features/shared/components/Button";
import DetailsList from "@/features/shared/components/DetailsList";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";
import { TOUR_DETAILS } from "@/lib/constants";
import { MoveUpRight, Hourglass, Clock, Check } from "lucide-react";
import React from "react";

const TourDetails = () => {
  const { handleBookingModalOpenClose } = useGlobalContext();
  const details = TOUR_DETAILS.nightTour;
  return (
    <div className="bg-white rounded-[23px] md:px-[43px] px-[12px]  py-[41px] grid grid-cols-1 gap-[32px] xl:grid-cols-[2.5fr_1fr] xl:justify-between mb-[50px]">
      <div className="space-y-[24px]">
        <div className="space-y-[24px]">
          <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            Fort Sumter Tours: Departure from Liberty Square
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Book your <strong>Fort Sumter Tours from Liberty Square,</strong>{" "}
            the one smack in downtown Charleston by the water. Enjoy a ferry
            ride to the historic fort where the Civil War began, with engaging
            ranger talks and museum access included. Our{" "}
            <strong> Fort Sumter tours </strong> provide historical information.
            And views (killer!). Book your tickets online today.
          </p>
        </div>
        <div className="space-y-[24px]">
          <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[32px] text-[#23262F]">
            What’s Included in a Fort Sumter Tour from Liberty Square
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            If you’re staying in downtown Charleston, the Fort Sumter tour from
            Liberty Square is really easy. It leaves right by the South Carolina
            Aquarium, so super easy to get to. You’ll cruise across Charleston
            Harbor with awesome views, hear some cool history along the way, and
            then have plenty of time to wander the fort on your own. Here is
            what is included:
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
            A Complete Fort Sumter Tour Schedule From Liberty Square
          </h1>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#777E90] lg:max-w-[90%]">
            Fort Sumter tours from Liberty Square in Charleston, South Carolina,
            at the Visitor Center, open daily 9:00 am to 4:30 pm. Exhibits cover
            slavery, secession, and the Civil War, with top things like the
            original 1861 garrison flag.
            <br />
            <br />
            The trip includes a 30-minute narrated Fort Sumter ferry ride across
            Charleston Harbor with views of the skyline, USS Yorktown, and
            Ravenel Bridge. At the fort, rangers give an overview before guests
            explore the grounds, museum, and a 360-degree video on its Civil War
            role.
            <br />
            <br />
            The return ferry completes this 2.5-hour Fort Sumter tour from
            Liberty Square. It combines history, beautiful views, and a relaxing
            trip back to the city.
          </p>
        </div>
      </div>
      <div className="md:p-[32px] p-[12px] border-[1px] border-[#E6E8EC] bg-[#FCFCFD] rounded-[24px] space-y-[32px] xl:self-start">
        <h1 className="font-dm-sans font-bold text-[32px] leading-[40px] text-[#141416]">
          Fort Sumter Tours
        </h1>
        <span className="font-plus-jakarta-sans font-medium text-[14px] text-[#252B2E]">
          (Departure from Liberty Square)
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
    heading: "Round-trip ferry ride from Liberty Square",
    description: "is included with every ticket",
  },
  {
    heading: "Direct access to Fort Sumter",
    description: "and its on-site exhibits",
  },
  {
    heading: "About one hour to explore",
    description: "the fort independently",
  },
  {
    heading: "Ranger-led history program",
    description: "covering Fort Sumter’s Civil War significance",
  },
  {
    heading: "Opportunity to see original cannons and museum displays",
    description: "",
  },
  {
    heading: "Ferry ride across Charleston Harbor with views of:",
    description: `
      <ul>
        <li>Charleston’s historic waterfront and Battery</li>
        <li>Arthur Ravenel Jr. Bridge</li>
        <li>Castle Pinckney</li>
        <li>The city skyline from the harbor</li>
      </ul>
    `,
  },
  {
    heading: "A blend of education, sightseeing, and history",
    description: "",
  },
  {
    heading: "Fort Sumter tours from Liberty Square",
    description:
      "provide convenient downtown departure, guided insight, and time for self-exploration",
  },
  {
    heading: "Visitors leave with",
    description:
      "unforgettable views and a deeper understanding of American history",
  },
];
