import CanonicalTag from "@/components/CanonicalTag";
import { cn } from "@/lib/utils";
import React from "react";

type HighlightsMoreContentProps = {
  showAll: boolean;
};

const HighlightsMoreContent = ({ showAll }: HighlightsMoreContentProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-700 ease-in-out",
        showAll
          ? "max-h-[3000px] opacity-100 transform translate-y-0"
          : "max-h-0 opacity-0 mt-0 transform -translate-y-4"
      )}
    >
      <div className="rounded-[23px] animate-in slide-in-from-top-4 duration-700 ">
        <CanonicalTag pathName="/fort-sumter-details" />

        {/* Content Sections */}
        <div className="flex flex-col gap-[30px]">
          {/* Section 1 */}
          <section className="animate-in slide-in-from-left-4 duration-700 delay-200">
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Fort Sumter Tours Overview
            </h2>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Fort Sumter tours are about 2 hours and include the ferry service,
              history talks from rangers, and ample time to view the fort on
              your own.
            </p>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] my-[10px]">
              Here’s what you can expect on a standard Fort Sumter tour:
            </p>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Complete 2-way ferry rides</strong> from Charleston or
                Mount Pleasant.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Amazing harbor views,</strong> like the Ravenel Bridge &
                Charleston skyline.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Guided history presentation</strong> by National Park
                Service rangers.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Self-exploration</strong> of the fort’s grounds,
                exhibits, and museum.
              </li>
            </ul>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] my-[10px]">
              This island, Fort Sumter, and these tours remain one of the top
              things to do in Charleston, South Carolina.
            </p>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 2 */}
          <section className="animate-in slide-in-from-left-4 duration-700 delay-300">
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Fort Sumter Tours Charleston, SC: What Makes Them Special?
            </h2>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Here’s what makes Charleston, South Carolina, Fort Sumter tours
              special:
            </p>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Historic Importance:</strong> Fort Sumter is where the
                Civil War started. Visiting the place gives you a chance to look
                into war things.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Harbor Setting:</strong> The ferry ride to the fort
                comes with wonderful views of Charleston Harbor, the Arthur
                Ravenel Jr. Bridge, and the city’s waterfront
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Expert Guidance:</strong> Rangers there share complete
                stories and historical points, which add more “wow” to your
                visit.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Easy Departure Points:</strong> Ferries depart from
                Liberty Square in downtown Charleston and Patriots Point in
                Mount Pleasant. and Patriots Point in Mount Pleasant.
              </li>
            </ul>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 3 */}
          <section className="animate-in slide-in-from-left-4 duration-700 delay-400">
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Getting There - Fort Sumter Ferry Tours
            </h2>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              The only way to reach Fort Sumter is by water, and most tourists
              travel through the Fort Sumter ferry. The ferry service is made to
              make your trip a good one, informative, and enjoyable from start
              to finish.
            </p>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 4 */}
          <section className="animate-in slide-in-from-left-4 duration-700 delay-500">
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Fort Sumter Ferry Departure Points:
            </h2>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Liberty Square, Downtown Charleston:</strong> Best for
                visitors who love historic things.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Patriots Point, Mount Pleasant:</strong> Perfect for
                those who want the USS Yorktown and other attractions.
              </li>
            </ul>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 5 */}
          <section className="animate-in slide-in-from-left-4 duration-700 delay-500">
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              What to Expect on the Ferry to Fort Sumter
            </h2>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                30-minute boat ride across Charleston Harbor (views! Just wow!)
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Indoor and outdoor seating for comfort
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Live narration about landmarks and Civil War history
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Clear views of the Charleston skyline
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                See the Ravenel Bridge and Morris Island Lighthouse
              </li>
            </ul>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] my-[10px]">
              Booking Ft Sumter ferry tickets early helps you get the time you
              want, like on weekends and busy seasons. The ferry ride is part of
              the trip, with comfortable seating and beautiful views before you
              reach the fort.
            </p>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 6 */}
          <section className="animate-in slide-in-from-left-4 duration-700 delay-400">
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Tickets for Fort Sumter
            </h2>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              To visit the fort, you must purchase Fort Sumter tour tickets,
              your pass to get in. Tickets sell out very quickly, especially
              during weekends and peak tourist seasons. Snag yours in advance.
              Get your ticket in less than a minute. Go from Liberty Square and
              Patriots Point.
            </p>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 7 */}
          <section className="animate-in slide-in-from-left-4 duration-700 delay-500">
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Fort Sumter Tours Pricing:
            </h2>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Adult tickets from <strong>$40–$45.</strong>
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Lower rates are available for children, seniors, and military
                members.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Children under a specific age (like, 3 yr) are free; check
                current policies before booking.
              </li>
            </ul>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 8 */}
          <section className="animate-in slide-in-from-left-4 duration-700 delay-500">
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Tips for Booking Tickets for Fort Sumter:
            </h2>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Grab your Fort Sumter ferry tickets online a few days before
                your trip.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Grab your Fort Sumter ferry tickets online a few days before
                your trip. Show up about 30 minutes early to check in and hop on
                board.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Around holidays or school breaks, lock in your tickets way ahead
                so you don’t get stuck last-minute.
              </li>
            </ul>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 9 */}
          <section className="animate-in slide-in-from-left-4 duration-700 delay-500">
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Tips for Making the Most of Your Fort Sumter Tour
            </h2>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Getting the right Fort Sumter tickets makes the whole trip smooth,
              from the chill ferry ride across the harbor to walking around the
              fort. Planning ahead saves you headaches and helps you enjoy more.
            </p>

            {/* Best Time to Visit */}
            <div className="my-[10px]">
              <p className="font-plus-jakarta-sans font-bold text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Best Time to Visit:
              </p>
              <ul className="my-[10px] space-y-[4px] pl-[40px] list-disc">
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Spring and fall = nice weather + fewer crowds.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Morning tours = cooler temps + perfect light for photos.
                </li>
              </ul>
            </div>

            {/* What to Bring */}
            <div className="my-[10px]">
              <p className="font-plus-jakarta-sans font-bold text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                What to Bring:
              </p>
              <ul className="my-[10px] space-y-[4px] pl-[40px] list-disc">
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Pack water and sunscreen; shade’s pretty limited inside.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Pack water and sunscreen; shade’s pretty limited inside.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Bring a camera or your phone to capture those shots (must).
                </li>
              </ul>
            </div>

            {/* Arrival and Boarding */}
            <div className="my-[10px]">
              <p className="font-plus-jakarta-sans font-bold text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Arrival and Boarding:
              </p>
              <ul className="my-[10px] space-y-[4px] pl-[40px] list-disc">
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Arrive <strong>30 minutes early</strong>.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Have your Fort Sumter tour tickets ready.
                </li>
              </ul>
            </div>

            {/* Accessibility & Family Info */}
            <div className="my-[10px]">
              <p className="font-plus-jakarta-sans font-bold text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Accessibility & Family Info:
              </p>
              <ul className="my-[10px] space-y-[4px] pl-[40px] list-disc">
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Ferries work fine with wheelchairs and strollers.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  The fort has paved spots, but some areas are a little rough.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Ranger talks are super kid-friendly and fun for families.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HighlightsMoreContent;
