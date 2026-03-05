import { cn } from "@/lib/utils";
import Link from "next/link";
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
          ? "max-h-[5000px]"
          : "max-h-0"
      )}
      aria-hidden={!showAll}
    >
      <div className="rounded-[23px]">
        <div className="flex flex-col gap-[30px]">
          {/* Section 1 */}
          <section>
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Fort Sumter Tours Overview
            </h2>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Fort Sumter tours are approximately 2 hours and 15 minutes in
              duration, combining a narrated ferry cruise with self-guided
              exploration of the fort. Each tour includes round-trip ferry
              service, admission to Fort Sumter National Monument, a ranger-led
              history presentation, and time to explore the museum and grounds
              independently.
            </p>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] my-[10px]">
              Here is what you can expect on a standard Fort Sumter tour:
            </p>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Round-trip ferry ride</strong> from{" "}
                <Link href="/liberty-square" className="text-[#3772FF] underline">
                  Liberty Square
                </Link>{" "}
                in downtown Charleston or{" "}
                <Link href="/patriots-point" className="text-[#3772FF] underline">
                  Patriots Point
                </Link>{" "}
                in Mount Pleasant.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Scenic Charleston Harbor views,</strong> including the
                Arthur Ravenel Jr. Bridge, the Battery, Castle Pinckney, and the
                city skyline.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Ranger-led history presentation</strong> by the National
                Park Service on the events of April 1861.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Self-guided exploration</strong> of the fort&apos;s
                grounds, museum exhibits, original cannons, and flag displays.
              </li>
            </ul>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] my-[10px]">
              Fort Sumter remains one of the most visited historic sites in
              Charleston, South Carolina, and a must-see destination for anyone
              interested in American history.
            </p>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              What Makes Fort Sumter Tours Special
            </h2>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Fort Sumter tours offer a unique combination of historical
              significance, natural beauty, and expert interpretation that
              cannot be replicated elsewhere:
            </p>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Historic Significance:</strong> Fort Sumter is the site
                where Confederate forces fired the first shots of the American
                Civil War on April 12, 1861. Walking the fort&apos;s grounds
                provides a direct connection to one of the defining moments in
                American history.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Harbor Setting:</strong> The{" "}
                <Link href="/fort-sumter-ferry" className="text-[#3772FF] underline">
                  ferry ride
                </Link>{" "}
                across Charleston Harbor offers panoramic views of the Arthur
                Ravenel Jr. Bridge, the Charleston waterfront, and opportunities
                to spot bottlenose dolphins and coastal birds.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Expert Interpretation:</strong> National Park Service
                rangers provide detailed presentations and are available to
                answer questions about the fort&apos;s construction, the 1861
                bombardment, and its role throughout the Civil War.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Two Convenient Departure Points:</strong> Ferries depart
                from{" "}
                <Link href="/liberty-square" className="text-[#3772FF] underline">
                  Liberty Square in downtown Charleston
                </Link>{" "}
                and{" "}
                <Link href="/patriots-point" className="text-[#3772FF] underline">
                  Patriots Point in Mount Pleasant
                </Link>
                , accommodating visitors from both sides of the Cooper River.
              </li>
            </ul>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Getting to Fort Sumter — Ferry Access Only
            </h2>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Fort Sumter is located on a man-made island at the entrance to
              Charleston Harbor and is accessible only by water. Private vessels
              cannot dock at the fort. The authorized{" "}
              <Link href="/fort-sumter-ferry" className="text-[#3772FF] underline">
                Fort Sumter ferry service
              </Link>{" "}
              provides narrated round-trip transportation from both departure
              points and is included with every tour ticket.
            </p>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Fort Sumter Ferry Departure Points
            </h2>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>
                  <Link href="/liberty-square" className="text-[#3772FF] underline">
                    Liberty Square, Downtown Charleston
                  </Link>
                  :
                </strong>{" "}
                340 Concord Street, Charleston, SC 29401. Departures at 9:30 AM,
                12:00 PM, and 2:45 PM (peak season). Adjacent to the South
                Carolina Aquarium and the Fort Sumter Visitor Education Center.
                Parking available at the City of Charleston garage on 24 Calhoun
                Street.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>
                  <Link href="/patriots-point" className="text-[#3772FF] underline">
                    Patriots Point, Mount Pleasant
                  </Link>
                  :
                </strong>{" "}
                40 Patriots Point Road, Mount Pleasant, SC 29464. Departures at
                10:45 AM and 1:30 PM (peak season). On-site parking available.
                Adjacent to the USS Yorktown and Patriots Point Naval &amp;
                Maritime Museum.
              </li>
            </ul>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              What to Expect on the Ferry to Fort Sumter
            </h2>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                A 30-minute narrated boat ride across Charleston Harbor with
                panoramic views
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Indoor and outdoor seating for comfort in all weather conditions
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Live narration about Charleston&apos;s landmarks and Civil War
                history by a National Park Service guide
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Views of the Charleston skyline, the Battery, and Rainbow Row
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                The Arthur Ravenel Jr. Bridge and Morris Island Lighthouse
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Common sightings of bottlenose dolphins and coastal birds
              </li>
            </ul>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] my-[10px]">
              Booking Fort Sumter ferry tickets in advance ensures you secure
              your preferred departure time, particularly during weekends, holidays,
              and the busy spring and summer seasons. For complete ferry
              information, visit our{" "}
              <Link href="/fort-sumter-ferry" className="text-[#3772FF] underline">
                Fort Sumter ferry guide
              </Link>
              .
            </p>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Fort Sumter Tour Tickets
            </h2>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Fort Sumter tour tickets include round-trip ferry transportation
              and admission to the fort. There is no separate entrance fee —
              the ferry ticket covers everything. Tickets sell out frequently,
              especially during weekends, holidays, and peak tourist seasons.
              Online booking takes less than 60 seconds and guarantees your spot.
            </p>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Fort Sumter Tour Pricing
            </h2>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Adults:</strong> $40.00
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Seniors (62+) / Active Military:</strong> $36.00
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Children (4&ndash;11):</strong> $26.00
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                <strong>Children 3 and under:</strong> Free
              </li>
            </ul>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] my-[10px]">
              National Parks Passes do not apply to the ferry fee. For a
              complete pricing breakdown and booking information, visit our{" "}
              <Link href="/visit-fort-sumter" className="text-[#3772FF] underline">
                visitor guide
              </Link>
              .
            </p>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Tips for Booking Fort Sumter Tickets
            </h2>
            <ul className="my-[10px] space-y-[4px] pl-[20px] list-disc">
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Book your Fort Sumter ferry tickets online at least several days
                before your planned visit to guarantee availability.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Arrive at the departure point at least 30 minutes before your
                scheduled ferry time for check-in and boarding.
              </li>
              <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                During holidays and school break periods, book as far in
                advance as possible — popular departure times sell out quickly.
              </li>
            </ul>
            <div className="w-full h-[1px] bg-[#E5E7EB] mt-[25px]"></div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] mb-[10px]">
              Tips for Making the Most of Your Fort Sumter Tour
            </h2>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Planning ahead ensures a smooth and enjoyable Fort Sumter
              experience, from the ferry ride across the harbor to exploring the
              fort itself.
            </p>

            <div className="my-[10px]">
              <p className="font-plus-jakarta-sans font-bold text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Best Time to Visit:
              </p>
              <ul className="my-[10px] space-y-[4px] pl-[40px] list-disc">
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Spring (March&ndash;May) and fall (September&ndash;November)
                  offer the most comfortable weather and smaller crowds.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Morning departures provide cooler temperatures and ideal
                  lighting for photography.
                </li>
              </ul>
            </div>

            <div className="my-[10px]">
              <p className="font-plus-jakarta-sans font-bold text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                What to Bring:
              </p>
              <ul className="my-[10px] space-y-[4px] pl-[40px] list-disc">
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Water and sunscreen — shade is limited inside the fort.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Comfortable walking shoes with good grip for uneven surfaces.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  A camera or smartphone for capturing harbor views and
                  historic structures.
                </li>
              </ul>
            </div>

            <div className="my-[10px]">
              <p className="font-plus-jakarta-sans font-bold text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Arrival and Boarding:
              </p>
              <ul className="my-[10px] space-y-[4px] pl-[40px] list-disc">
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Arrive at least <strong>30 minutes early</strong> for
                  check-in and boarding.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Have your e-ticket and a valid photo ID ready at the boarding
                  gate.
                </li>
              </ul>
            </div>

            <div className="my-[10px]">
              <p className="font-plus-jakarta-sans font-bold text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                Accessibility and Family Information:
              </p>
              <ul className="my-[10px] space-y-[4px] pl-[40px] list-disc">
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  The ferry accommodates wheelchairs and strollers.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  The main level of the fort has paved pathways, though some
                  upper areas require stairs.
                </li>
                <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                  Ranger-led presentations are designed to engage visitors of
                  all ages, making the tour an excellent choice for families.
                </li>
              </ul>
            </div>

            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] my-[10px]">
              For a complete planning resource, visit our{" "}
              <Link href="/visit-fort-sumter" className="text-[#3772FF] underline">
                How to Visit Fort Sumter guide
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HighlightsMoreContent;
