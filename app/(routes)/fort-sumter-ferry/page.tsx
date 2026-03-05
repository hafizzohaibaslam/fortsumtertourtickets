import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FortSummerExperience from "@/features/shared/components/FortSummerExperience";

export const metadata: Metadata = {
  title:
    "Fort Sumter Ferry: Schedules, Departure Points & What to Expect",
  description:
    "Complete guide to the Fort Sumter ferry in Charleston, SC. Departure schedules from Liberty Square and Patriots Point, what to see on the cruise, booking info, and tips for a great ferry ride.",
  alternates: { canonical: "/fort-sumter-ferry" },
  openGraph: {
    url: "https://fortsumtertourtickets.com/fort-sumter-ferry",
    title: "Fort Sumter Ferry: Schedules, Departure Points & What to Expect",
    description:
      "Complete guide to the Fort Sumter ferry — departure schedules from Liberty Square and Patriots Point, scenic cruise highlights, booking info, and tips.",
  },
  twitter: {
    title: "Fort Sumter Ferry: Schedules, Departure Points & What to Expect",
    description:
      "Complete guide to the Fort Sumter ferry — departure schedules from Liberty Square and Patriots Point, scenic cruise highlights, booking info, and tips.",
  },
  robots: { index: true, follow: true },
};

const ferryFaqs = [
  {
    question: "How long is the Fort Sumter ferry ride?",
    answer:
      "The ferry ride from either departure point to Fort Sumter takes approximately 30 minutes each way. The complete round-trip experience, including time at the fort, lasts about 2 hours and 15 minutes.",
  },
  {
    question: "Can I drive or take a private boat to Fort Sumter?",
    answer:
      "No. Fort Sumter is accessible only by authorized ferry service. Private vessels cannot dock at the fort. The ferry is the only way to visit Fort Sumter National Monument.",
  },
  {
    question: "Which ferry departure point should I choose?",
    answer:
      "Choose Liberty Square (340 Concord Street, downtown Charleston) if you are staying in or near the Historic District. Choose Patriots Point (40 Patriots Point Road, Mount Pleasant) if you are coming from the east side of the Cooper River or want to combine your trip with the USS Yorktown.",
  },
  {
    question: "Are Fort Sumter ferry tickets refundable?",
    answer:
      "Refund policies vary by booking provider. Many tickets are fully refundable if canceled at least 2 hours before the scheduled departure. Check the specific cancellation policy when booking.",
  },
  {
    question: "Is the Fort Sumter ferry wheelchair accessible?",
    answer:
      "Yes, the ferry vessels are wheelchair accessible. The Liberty Square departure point generally offers better accessibility for boarding, though conditions may vary with tides.",
  },
  {
    question: "What if the weather is bad on my ferry day?",
    answer:
      "Fort Sumter ferry tours operate rain or shine. In the event of severe weather such as thunderstorms or high seas, the ferry operator may cancel the trip and offer a full refund or reschedule.",
  },
];

const FortSumterFerry = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://fortsumtertourtickets.com/fort-sumter-ferry",
        url: "https://fortsumtertourtickets.com/fort-sumter-ferry",
        name: "Fort Sumter Ferry: Schedules, Departure Points & What to Expect",
        description:
          "Complete guide to the Fort Sumter ferry in Charleston, SC. Departure schedules, what to see on the cruise, booking info, and tips.",
        isPartOf: { "@id": "https://fortsumtertourtickets.com#website" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://fortsumtertourtickets.com/fort-sumter-ferry#faqs",
        mainEntity: ferryFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://fortsumtertourtickets.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Fort Sumter Ferry",
            item: "https://fortsumtertourtickets.com/fort-sumter-ferry",
          },
        ],
      },
    ],
  };

  return (
    <div className="relative">
      {/* Hero */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h1 className="font-nohemi font-semibold text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] text-[#23262F] mb-[16px]">
          Fort Sumter Ferry: Schedules, Departure Points, and What to Expect
        </h1>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] lg:max-w-[85%]">
          The Fort Sumter ferry is the only way to reach Fort Sumter National
          Monument, located on a man-made island in Charleston Harbor. More than
          just transportation, the 30-minute narrated boat ride across the
          harbor is a scenic experience in its own right — with sweeping views of
          the Charleston skyline, historic landmarks, and coastal wildlife. This
          guide covers everything you need to know about the ferry service,
          including departure points, schedules, what you&apos;ll see, and how
          to book your tickets.
        </p>
      </section>

      {/* Departure Points */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          Where Does the Fort Sumter Ferry Depart?
        </h2>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mb-[20px]">
          The authorized ferry to Fort Sumter departs from two locations in the
          Charleston area. Both offer the same experience at the fort — the main
          difference is location, parking, and departure times.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <div className="border border-[#E6E8EC] rounded-[16px] p-[24px]">
            <h3 className="font-nohemi font-semibold text-[20px] text-[#23262F] mb-[12px]">
              Liberty Square &mdash; Downtown Charleston
            </h3>
            <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90] mb-[12px]">
              Located at <strong>340 Concord Street, Charleston, SC 29401</strong>,
              Liberty Square is the primary departure point for Fort Sumter
              ferry tours. It sits in the heart of downtown Charleston, adjacent
              to the South Carolina Aquarium and within walking distance of the
              Historic District and Waterfront Park.
            </p>
            <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90] mb-[12px]">
              The Fort Sumter Visitor Education Center is located at this site,
              offering free museum exhibits on the events leading to the Civil
              War — including displays on secession, slavery, and the original
              1861 garrison flag — before you even board the ferry.
            </p>
            <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#25283E]">
              <strong>Parking:</strong> City of Charleston garage at 24 Calhoun
              Street (paid parking, 7-foot height restriction). Metered street
              parking and CARTA bus service are also available.
            </p>
            <Link
              href="/liberty-square"
              className="inline-block mt-[16px] text-[#3772FF] font-medium underline font-plus-jakarta-sans text-[15px]"
            >
              Book from Liberty Square &rarr;
            </Link>
          </div>

          <div className="border border-[#E6E8EC] rounded-[16px] p-[24px]">
            <h3 className="font-nohemi font-semibold text-[20px] text-[#23262F] mb-[12px]">
              Patriots Point &mdash; Mount Pleasant
            </h3>
            <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90] mb-[12px]">
              Located at <strong>40 Patriots Point Road, Mount Pleasant, SC
              29464</strong>, Patriots Point is the second departure point for the
              Fort Sumter ferry. It is situated on the east side of the Cooper
              River, just across the Arthur Ravenel Jr. Bridge from downtown
              Charleston.
            </p>
            <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90] mb-[12px]">
              This departure point is ideal for visitors who want to combine
              their Fort Sumter tour with the Patriots Point Naval &amp;
              Maritime Museum and a self-guided tour of the{" "}
              <strong>USS Yorktown</strong>, a World War II aircraft carrier
              docked at the marina.
            </p>
            <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#25283E]">
              <strong>Parking:</strong> On-site parking lot with easy access.
              Better suited for RVs and larger vehicles than Liberty Square.
            </p>
            <Link
              href="/patriots-point"
              className="inline-block mt-[16px] text-[#3772FF] font-medium underline font-plus-jakarta-sans text-[15px]"
            >
              Book from Patriots Point &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Ferry Schedule */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          Fort Sumter Ferry Schedule
        </h2>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mb-[20px]">
          Ferry departure times vary by season. During peak months (late
          February through November), more daily departures are available. Winter
          months typically have a single midday departure. All times are subject
          to change — confirm when booking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <div className="border border-[#E6E8EC] rounded-[16px] p-[24px]">
            <h3 className="font-nohemi font-semibold text-[18px] text-[#23262F] mb-[12px]">
              From Liberty Square
            </h3>
            <div className="space-y-[8px] font-plus-jakarta-sans text-[15px] leading-[24px] text-[#25283E]">
              <p>
                <strong>Peak Season (Feb 27 &ndash; Nov 30):</strong> 9:30 AM,
                12:00 PM, 2:45 PM
              </p>
              <p>
                <strong>Winter (Jan 2 &ndash; Feb 26):</strong> 11:00 AM
              </p>
              <p>
                <strong>Early Dec (Dec 1 &ndash; Dec 24):</strong> 11:00 AM
              </p>
              <p>
                <strong>Late Dec (Dec 26 &ndash; Dec 31):</strong> 9:30 AM,
                12:00 PM, 2:45 PM
              </p>
            </div>
          </div>
          <div className="border border-[#E6E8EC] rounded-[16px] p-[24px]">
            <h3 className="font-nohemi font-semibold text-[18px] text-[#23262F] mb-[12px]">
              From Patriots Point
            </h3>
            <div className="space-y-[8px] font-plus-jakarta-sans text-[15px] leading-[24px] text-[#25283E]">
              <p>
                <strong>Peak Season (Feb 27 &ndash; Nov 30):</strong> 10:45 AM,
                1:30 PM
              </p>
              <p>
                <strong>Winter (Jan 2 &ndash; Feb 26):</strong> 12:30 PM
              </p>
              <p>
                <strong>Early Dec (Dec 1 &ndash; Dec 24):</strong> 12:30 PM
              </p>
              <p>
                <strong>Late Dec (Dec 26 &ndash; Dec 31):</strong> 10:45 AM,
                1:30 PM
              </p>
            </div>
          </div>
        </div>
        <p className="font-plus-jakarta-sans font-normal text-[15px] leading-[24px] text-[#777E90] mt-[16px]">
          No ferry service is available on Thanksgiving, Christmas Day, or New
          Year&apos;s Day. Each round-trip lasts approximately 2 hours and 15
          minutes.
        </p>
      </section>

      {/* The Ferry Experience */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          What You&apos;ll See on the Fort Sumter Ferry
        </h2>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mb-[16px]">
          The 30-minute boat ride across Charleston Harbor is a highlight of the
          Fort Sumter experience. The ferry features both indoor and outdoor
          seating, and a National Park Service guide provides live narration
          about the landmarks and history you pass along the way.
        </p>
        <ul className="space-y-[10px] pl-[20px] list-disc">
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Arthur Ravenel Jr. Bridge:</strong> Charleston&apos;s
            iconic cable-stayed bridge spanning the Cooper River, one of the
            longest in the Western Hemisphere.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Charleston Skyline and Battery:</strong> Views of the
            historic waterfront, including the row of antebellum mansions along
            the Battery and Rainbow Row.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Castle Pinckney:</strong> A small fortification on Shutes
            Folly Island, used as a Confederate prisoner-of-war camp during the
            Civil War.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>USS Yorktown:</strong> Visible from the Patriots Point
            route, this World War II aircraft carrier is now a museum ship at
            Patriots Point Naval &amp; Maritime Museum.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Fort Moultrie:</strong> Visible on Sullivan&apos;s Island,
            this fort played a key role in the American Revolution and the Civil
            War.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Morris Island Lighthouse:</strong> The historic lighthouse
            at the southern entrance to Charleston Harbor.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Coastal Wildlife:</strong> Bottlenose dolphins, pelicans,
            and other coastal birds are frequently spotted during the crossing.
          </li>
        </ul>
      </section>

      {/* Booking */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          How to Book Fort Sumter Ferry Tickets
        </h2>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mb-[16px]">
          Fort Sumter ferry tickets include both the round-trip boat ride and
          admission to Fort Sumter National Monument. Tickets can be purchased
          online in advance or at the departure terminals, though walk-up
          availability is limited during peak season.
        </p>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mb-[16px]">
          Booking online is strongly recommended — tickets frequently sell out
          weeks in advance, especially during spring and summer, holiday
          weekends, and school break periods. Advance booking also guarantees
          your preferred departure time and location.
        </p>
        <div className="flex flex-col sm:flex-row gap-[16px]">
          <Link
            href="/patriots-point"
            className="inline-flex items-center justify-center px-[24px] py-[14px] bg-[#3772FF] text-white rounded-[12px] font-nohemi font-medium text-[15px] hover:bg-[#2860e0] transition-colors"
          >
            Book from Patriots Point
          </Link>
          <Link
            href="/liberty-square"
            className="inline-flex items-center justify-center px-[24px] py-[14px] bg-[#3772FF] text-white rounded-[12px] font-nohemi font-medium text-[15px] hover:bg-[#2860e0] transition-colors"
          >
            Book from Liberty Square
          </Link>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          Tips for Riding the Fort Sumter Ferry
        </h2>
        <ul className="space-y-[10px] pl-[20px] list-disc">
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Arrive 30 minutes early.</strong> Check-in and boarding
            begin before departure. Late arrivals may not be permitted to board.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Bring a valid photo ID.</strong> All passengers are required
            to present identification at boarding.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Bring sunscreen and water.</strong> The ferry has limited
            shade on the outdoor deck, and Fort Sumter has minimal shade as well.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Wear comfortable shoes.</strong> You will walk on uneven
            surfaces at the fort, including brick pathways and packed earth.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Sit on the right side</strong> (starboard) when departing
            from Liberty Square for the best views of the Charleston Battery and
            Rainbow Row.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Afternoon return trips</strong> offer spectacular
            golden-hour lighting — ideal for photographing the Charleston skyline
            from the water.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Restrooms are available</strong> on the ferry and at Fort
            Sumter. Light snacks and beverages can be purchased on board.
          </li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[20px]">
          Frequently Asked Questions About the Fort Sumter Ferry
        </h2>
        <div className="space-y-[16px]">
          {ferryFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#E6E8EC] rounded-[12px] p-[20px]"
            >
              <h3 className="font-nohemi font-medium text-[17px] text-[#23262F] mb-[8px]">
                {faq.question}
              </h3>
              <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FortSummerExperience />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default FortSumterFerry;
