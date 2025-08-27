import CanonicalTag from "@/components/CanonicalTag";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fort Sumter Tour Details",
  description:
    "Discover everything you need to know about the Fort Sumter tour, including ferry rides, history talks, pricing, and booking details.",
};

const DetailsPage = () => {
  return (
    <div className="mt-[24px] bg-white px-[24px] py-[30px] lg:px-[64px] lg:py-[52px] rounded-[23px]">
      <CanonicalTag pathName="/fort-sumter-details" />

      {/* Header Section */}
      <div className="mb-[40px] lg:mb-[60px]">
        <h1 className="font-nohemi font-medium text-[#25283E] text-[32px] leading-[38px] lg:text-[48px] lg:leading-[56px] mb-[16px]">
          Fort Sumter Tour Details
        </h1>
        <p className="font-plus-jakarta-sans font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#25283E99]">
          Experience history up close with a Fort Sumter tour. Discover its
          Civil War legacy and enjoy the scenic ferry ride.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-[40px] lg:space-y-[50px]">
        {/* Section 1 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            Why Visit Fort Sumter?
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Fort Sumter is the site where the Civil War began in 1861. Located
            at the entrance of Charleston Harbor, it offers a memorable
            experience with a ferry ride across the harbor and a tour of the
            fort.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            Fort Sumter Tours Overview
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Fort Sumter tours are approximately 2 hours long and include a ferry
            ride, history talks by rangers, and time to explore the fort's
            grounds.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            What Makes Fort Sumter Tours Special?
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Fort Sumter tours stand out for their historic significance, scenic
            ferry ride, expert guidance, and easy departure points from
            Charleston and Mount Pleasant.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            Getting There - Fort Sumter Ferry Tours
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            The only way to reach Fort Sumter is by ferry. Departure points
            include Liberty Square in Charleston and Patriots Point in Mount
            Pleasant.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            What to Expect on the Ferry to Fort Sumter
          </h2>
          <ul className="space-y-[12px] pl-[20px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              30-minute boat ride with amazing views.
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Comfortable indoor and outdoor seating.
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Live narration on landmarks and Civil War history.
            </li>
          </ul>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            Fort Sumter Tours Pricing
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Ticket prices range from $40 to $45 for adults, with discounts
            available for children, seniors, and military members.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            Tips for Booking Tickets for Fort Sumter
          </h2>
          <ul className="space-y-[12px] pl-[20px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Book online ahead of time to secure your spot.
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Arrive at least 30 minutes before your scheduled departure.
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Book early during holidays or peak seasons to avoid
              disappointment.
            </li>
          </ul>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            Accessibility & Family Info
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            The ferry and fort are accessible for wheelchairs and strollers,
            with some rough areas to navigate at the fort. The ranger talks are
            family-friendly and enjoyable for kids.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>
      </div>
    </div>
  );
};

export default DetailsPage;
