import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FortSummerExperience from "@/features/shared/components/FortSummerExperience";

export const metadata: Metadata = {
  title:
    "How to Visit Fort Sumter: Complete Visitor Guide 2026 | Fort Sumter Tour Tickets",
  description:
    "Plan your visit to Fort Sumter National Monument in Charleston, SC. Learn about ferry schedules, departure points, parking, tickets, what to see, and tips to make the most of your trip.",
  alternates: { canonical: "/visit-fort-sumter" },
  openGraph: {
    url: "https://fortsumtertourtickets.com/visit-fort-sumter",
    title: "How to Visit Fort Sumter: Complete Visitor Guide 2026",
    description:
      "Everything you need to know to visit Fort Sumter — ferry schedules, departure points, parking, tickets, what to see, and insider tips for your Charleston trip.",
  },
  twitter: {
    title: "How to Visit Fort Sumter: Complete Visitor Guide 2026",
    description:
      "Everything you need to know to visit Fort Sumter — ferry schedules, departure points, parking, tickets, what to see, and insider tips for your Charleston trip.",
  },
  robots: { index: true, follow: true },
};

const visitFortSumterFaqs = [
  {
    question: "How do I get to Fort Sumter?",
    answer:
      "Fort Sumter is accessible only by ferry. Ferries depart from Liberty Square (340 Concord Street, downtown Charleston) and Patriots Point (40 Patriots Point Road, Mount Pleasant). You cannot reach the fort by private boat or car.",
  },
  {
    question: "How long does a Fort Sumter visit take?",
    answer:
      "A complete visit takes approximately 2 hours and 15 minutes. This includes the 30-minute ferry ride to the fort, roughly 1 hour of self-guided exploration at the fort, and the 30-minute return ferry ride.",
  },
  {
    question: "What is the best time of year to visit Fort Sumter?",
    answer:
      "Spring (March through May) and fall (September through November) offer the most comfortable weather and smaller crowds. Summer is the busiest season with higher temperatures. Winter has fewer departures but the smallest crowds.",
  },
  {
    question: "Do I need to buy tickets in advance?",
    answer:
      "Yes, advance booking is strongly recommended. Fort Sumter ferry tickets frequently sell out, especially during weekends, holidays, and the spring/summer tourist season. Book online to secure your preferred departure time.",
  },
  {
    question: "Is Fort Sumter wheelchair accessible?",
    answer:
      "The ferry is wheelchair accessible, and the main level of the fort has paved pathways. However, some areas of the fort — including the upper level and certain museum sections — require stairs and are not fully accessible.",
  },
  {
    question: "Can I bring food to Fort Sumter?",
    answer:
      "Food is not allowed on Fort Sumter itself. Light snacks and beverages are available for purchase on the ferry. Plan to eat before or after your visit at one of Charleston's many restaurants near the departure points.",
  },
];

const VisitFortSumter = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://fortsumtertourtickets.com/visit-fort-sumter",
        url: "https://fortsumtertourtickets.com/visit-fort-sumter",
        name: "How to Visit Fort Sumter: Complete Visitor Guide 2026",
        description:
          "Plan your visit to Fort Sumter National Monument in Charleston, SC. Ferry schedules, departure points, parking, tickets, what to see, and tips.",
        isPartOf: { "@id": "https://fortsumtertourtickets.com#website" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://fortsumtertourtickets.com/visit-fort-sumter#faqs",
        mainEntity: visitFortSumterFaqs.map((item) => ({
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
            name: "Visit Fort Sumter",
            item: "https://fortsumtertourtickets.com/visit-fort-sumter",
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
          How to Visit Fort Sumter: Complete Visitor Guide for 2026
        </h1>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] lg:max-w-[85%]">
          Fort Sumter National Monument sits on a man-made island at the mouth
          of Charleston Harbor, South Carolina. It is the site where Confederate
          forces fired the first shots of the American Civil War on April 12,
          1861. Today, the fort is managed by the National Park Service and
          welcomes hundreds of thousands of visitors each year. This guide covers
          everything you need to plan your visit — from ferry schedules and
          departure points to parking, tickets, and tips for making the most of
          your experience.
        </p>
      </section>

      {/* Best Time to Visit */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          Best Time to Visit Fort Sumter
        </h2>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mb-[16px]">
          Charleston&apos;s subtropical climate means Fort Sumter is open
          year-round, but certain seasons offer a better experience:
        </p>
        <ul className="space-y-[12px] pl-[20px] list-disc">
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Spring (March &ndash; May):</strong> Mild temperatures in
            the 65&ndash;80&deg;F range, lower humidity, and blooming azaleas
            across Charleston. This is the most popular season, so book tickets
            early.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Summer (June &ndash; August):</strong> Peak tourist season
            with the most daily ferry departures. Temperatures regularly exceed
            90&deg;F with high humidity. Bring plenty of water and sunscreen.
            Morning departures are cooler and less crowded.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Fall (September &ndash; November):</strong> Comfortable
            temperatures, smaller crowds, and beautiful light over the harbor.
            Many locals consider this the best time to visit Fort Sumter.
          </li>
          <li className="font-plus-jakarta-sans text-[16px] leading-[26px] text-[#25283E]">
            <strong>Winter (December &ndash; February):</strong> The fewest
            visitors and reduced ferry schedules (typically one departure per
            day). Temperatures range from 45&ndash;60&deg;F. Dress in layers.
          </li>
        </ul>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mt-[16px]">
          Fort Sumter is closed on Thanksgiving, Christmas Day, and New
          Year&apos;s Day. Holiday weekends and school break periods see higher
          demand, so advance booking is essential.
        </p>
      </section>

      {/* How to Get There */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          How to Get to Fort Sumter
        </h2>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mb-[20px]">
          Fort Sumter is accessible only by{" "}
          <Link
            href="/fort-sumter-ferry"
            className="text-[#3772FF] underline font-medium"
          >
            ferry
          </Link>
          . Private vessels cannot dock at the fort. The authorized ferry service
          departs from two convenient locations:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {/* Liberty Square */}
          <div className="border border-[#E6E8EC] rounded-[16px] p-[24px]">
            <h3 className="font-nohemi font-semibold text-[20px] text-[#23262F] mb-[12px]">
              Liberty Square &mdash; Downtown Charleston
            </h3>
            <ul className="space-y-[8px] font-plus-jakarta-sans text-[15px] leading-[24px] text-[#25283E]">
              <li>
                <strong>Address:</strong> 340 Concord Street, Charleston, SC
                29401
              </li>
              <li>
                <strong>Departures:</strong> 9:30 AM, 12:00 PM, and 2:45 PM
                (seasonal)
              </li>
              <li>
                <strong>Parking:</strong> City of Charleston garage at 24
                Calhoun Street (paid, 7-foot height limit). Metered street
                parking also available.
              </li>
              <li>
                <strong>Public Transit:</strong> CARTA bus routes serve the area.
              </li>
              <li>
                <strong>Nearby:</strong> South Carolina Aquarium, Charleston
                Historic District, Waterfront Park
              </li>
            </ul>
            <Link
              href="/liberty-square"
              className="inline-block mt-[16px] text-[#3772FF] font-medium underline font-plus-jakarta-sans text-[15px]"
            >
              View Liberty Square tour details &rarr;
            </Link>
          </div>

          {/* Patriots Point */}
          <div className="border border-[#E6E8EC] rounded-[16px] p-[24px]">
            <h3 className="font-nohemi font-semibold text-[20px] text-[#23262F] mb-[12px]">
              Patriots Point &mdash; Mount Pleasant
            </h3>
            <ul className="space-y-[8px] font-plus-jakarta-sans text-[15px] leading-[24px] text-[#25283E]">
              <li>
                <strong>Address:</strong> 40 Patriots Point Road, Mount
                Pleasant, SC 29464
              </li>
              <li>
                <strong>Departures:</strong> 10:45 AM and 1:30 PM (seasonal)
              </li>
              <li>
                <strong>Parking:</strong> On-site parking lot. Easier access for
                RVs and larger vehicles.
              </li>
              <li>
                <strong>Directions:</strong> Cross the Arthur Ravenel Jr. Bridge
                from Charleston, take the Mount Pleasant exit, and follow signs
                to Patriots Point Road.
              </li>
              <li>
                <strong>Nearby:</strong> USS Yorktown, Patriots Point Naval
                &amp; Maritime Museum
              </li>
            </ul>
            <Link
              href="/patriots-point"
              className="inline-block mt-[16px] text-[#3772FF] font-medium underline font-plus-jakarta-sans text-[15px]"
            >
              View Patriots Point tour details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          What to Expect on a Fort Sumter Tour
        </h2>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mb-[16px]">
          A Fort Sumter tour is a 2-hour-and-15-minute experience that combines
          a scenic harbor cruise with a self-guided exploration of one of
          America&apos;s most important Civil War landmarks. Here is what your
          visit looks like from start to finish:
        </p>
        <div className="space-y-[20px]">
          <div className="flex gap-[16px]">
            <div className="flex-shrink-0 w-[40px] h-[40px] rounded-full bg-[#3772FF] flex items-center justify-center text-white font-nohemi font-bold text-[16px]">
              1
            </div>
            <div>
              <h3 className="font-nohemi font-medium text-[18px] text-[#23262F] mb-[4px]">
                Board the Ferry (30 minutes)
              </h3>
              <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90]">
                Arrive at your departure point at least 30 minutes before
                sailing. Have your e-ticket and a valid photo ID ready. The
                narrated ferry ride crosses Charleston Harbor with views of the
                Arthur Ravenel Jr. Bridge, Castle Pinckney, the Battery, and the
                Charleston skyline. Dolphin sightings are common.
              </p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex-shrink-0 w-[40px] h-[40px] rounded-full bg-[#3772FF] flex items-center justify-center text-white font-nohemi font-bold text-[16px]">
              2
            </div>
            <div>
              <h3 className="font-nohemi font-medium text-[18px] text-[#23262F] mb-[4px]">
                Arrive at Fort Sumter (5 minutes)
              </h3>
              <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90]">
                A National Park Service ranger greets arrivals with a brief
                orientation and historical overview of the fort&apos;s role in
                the outbreak of the Civil War.
              </p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex-shrink-0 w-[40px] h-[40px] rounded-full bg-[#3772FF] flex items-center justify-center text-white font-nohemi font-bold text-[16px]">
              3
            </div>
            <div>
              <h3 className="font-nohemi font-medium text-[18px] text-[#23262F] mb-[4px]">
                Explore the Fort (approximately 1 hour)
              </h3>
              <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90]">
                Walk through battle-scarred walls, view original Civil War
                cannons, explore the museum with artifacts and exhibits, and
                take in panoramic views of Charleston Harbor from the ramparts.
                The fort also features flag displays, the original 1861 garrison
                flag replica, and interpretive signage throughout.
              </p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex-shrink-0 w-[40px] h-[40px] rounded-full bg-[#3772FF] flex items-center justify-center text-white font-nohemi font-bold text-[16px]">
              4
            </div>
            <div>
              <h3 className="font-nohemi font-medium text-[18px] text-[#23262F] mb-[4px]">
                Return Ferry (30 minutes)
              </h3>
              <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90]">
                The return cruise provides additional sightseeing opportunities,
                including views of Fort Moultrie on Sullivan&apos;s Island and
                Morris Island Lighthouse. Afternoon departures offer
                particularly beautiful golden-hour lighting for photography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to See */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          What to See at Fort Sumter
        </h2>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mb-[16px]">
          Fort Sumter National Monument offers far more than a single
          battlefield. Visitors can explore a rich collection of Civil War
          history, architecture, and scenic harbor views:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {[
            {
              title: "The Fort Itself",
              desc: "Walk through the original brick fortification built after the War of 1812. The walls still bear the scars of the 34-hour Confederate bombardment that began the Civil War.",
            },
            {
              title: "Fort Sumter Museum",
              desc: "The on-site museum houses Civil War artifacts, historical photographs, weapons, uniforms, and interactive exhibits explaining the events of April 1861 and the fort's role throughout the war.",
            },
            {
              title: "Original Cannons and Artillery",
              desc: "Several original Civil War-era cannons and artillery pieces remain on the fort's grounds, providing a tangible connection to the military history of the site.",
            },
            {
              title: "Flag Displays",
              desc: "Fort Sumter features replica garrison flags, including the famous 33-star flag that flew over the fort during the 1861 bombardment — one of the most iconic symbols of the Civil War.",
            },
            {
              title: "Panoramic Harbor Views",
              desc: "From the fort's ramparts, enjoy 360-degree views of Charleston Harbor, the Arthur Ravenel Jr. Bridge, Fort Moultrie, Sullivan's Island, and the Charleston skyline.",
            },
            {
              title: "National Park Rangers",
              desc: "Rangers provide interpretive talks covering the events leading to the Civil War, Major Robert Anderson's defense, and the fort's significance in American history.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-[#E6E8EC] rounded-[12px] p-[20px]"
            >
              <h3 className="font-nohemi font-medium text-[17px] text-[#23262F] mb-[8px]">
                {item.title}
              </h3>
              <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tickets and Pricing */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          Fort Sumter Tickets and Pricing
        </h2>
        <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[26px] text-[#777E90] mb-[20px]">
          Fort Sumter tour tickets include round-trip ferry transportation and
          admission to the fort. There is no separate entrance fee for the
          National Monument — the ferry ticket covers everything. National Parks
          Passes do not apply to the ferry fee.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F4F5F6]">
                <th className="text-left p-[12px] font-nohemi font-medium text-[15px] text-[#23262F] rounded-tl-[12px]">
                  Ticket Type
                </th>
                <th className="text-left p-[12px] font-nohemi font-medium text-[15px] text-[#23262F] rounded-tr-[12px]">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="font-plus-jakarta-sans text-[15px] text-[#25283E]">
              <tr className="border-b border-[#E6E8EC]">
                <td className="p-[12px]">Adults</td>
                <td className="p-[12px]">$40.00</td>
              </tr>
              <tr className="border-b border-[#E6E8EC]">
                <td className="p-[12px]">
                  Seniors (62+) / Active Military
                </td>
                <td className="p-[12px]">$36.00</td>
              </tr>
              <tr className="border-b border-[#E6E8EC]">
                <td className="p-[12px]">Children (4&ndash;11)</td>
                <td className="p-[12px]">$26.00</td>
              </tr>
              <tr>
                <td className="p-[12px]">Children 3 and under</td>
                <td className="p-[12px]">Free</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="font-plus-jakarta-sans font-normal text-[15px] leading-[24px] text-[#777E90] mt-[16px]">
          Tickets frequently sell out weeks in advance during peak season.{" "}
          <Link
            href="/patriots-point"
            className="text-[#3772FF] font-medium underline"
          >
            Book from Patriots Point
          </Link>{" "}
          or{" "}
          <Link
            href="/liberty-square"
            className="text-[#3772FF] font-medium underline"
          >
            book from Liberty Square
          </Link>{" "}
          to secure your preferred departure time.
        </p>
      </section>

      {/* Visitor Tips */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[16px]">
          Visitor Tips for Fort Sumter
        </h2>
        <div className="space-y-[16px]">
          <div>
            <h3 className="font-nohemi font-medium text-[18px] text-[#23262F] mb-[6px]">
              What to Bring
            </h3>
            <ul className="pl-[20px] list-disc space-y-[6px] font-plus-jakarta-sans text-[15px] leading-[24px] text-[#25283E]">
              <li>
                Water bottle and sunscreen — shade is limited inside the fort
              </li>
              <li>Comfortable walking shoes with good grip</li>
              <li>
                Camera or smartphone for photographing harbor views and historic
                structures
              </li>
              <li>
                Light jacket or layers, especially for winter and early spring
                visits
              </li>
              <li>
                A valid photo ID — required for all passengers at boarding
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-nohemi font-medium text-[18px] text-[#23262F] mb-[6px]">
              Accessibility
            </h3>
            <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90]">
              The ferry accommodates wheelchairs and strollers. The main level
              of Fort Sumter has paved walkways. However, the upper ramparts and
              some museum areas require stairs and are not wheelchair accessible.
              The Liberty Square departure point generally has better
              accessibility than Patriots Point, depending on tide conditions.
            </p>
          </div>
          <div>
            <h3 className="font-nohemi font-medium text-[18px] text-[#23262F] mb-[6px]">
              Photography Tips
            </h3>
            <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90]">
              The best light for photography is during morning departures or the
              return trip on afternoon ferries, when golden-hour light illuminates
              the Charleston skyline. From the fort, you can capture panoramic
              shots of the entire harbor, including the Ravenel Bridge, Fort
              Moultrie, and Morris Island Lighthouse.
            </p>
          </div>
          <div>
            <h3 className="font-nohemi font-medium text-[18px] text-[#23262F] mb-[6px]">
              Combine Your Visit
            </h3>
            <p className="font-plus-jakarta-sans text-[15px] leading-[24px] text-[#777E90]">
              If departing from Patriots Point, consider pairing your Fort
              Sumter tour with a visit to the{" "}
              <strong>USS Yorktown and Patriots Point Naval &amp; Maritime Museum</strong>,
              located steps from the ferry terminal. From Liberty Square, the{" "}
              <strong>South Carolina Aquarium</strong>,{" "}
              <strong>Waterfront Park</strong>, and Charleston&apos;s{" "}
              <strong>Historic District</strong> are all within walking distance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white rounded-[23px] md:px-[43px] px-[12px] py-[41px] mb-[30px]">
        <h2 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#23262F] mb-[20px]">
          Frequently Asked Questions About Visiting Fort Sumter
        </h2>
        <div className="space-y-[16px]">
          {visitFortSumterFaqs.map((faq, index) => (
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

export default VisitFortSumter;
