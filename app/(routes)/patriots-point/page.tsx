import React from "react";
import WhatCustomersSay from "@/features/shared/components/WhatCustomersSay";
import AskedQuestions from "@/features/shared/components/AskedQuestions";
import FortSummerExperience from "@/features/shared/components/FortSummerExperience";
import HeroSection from "@/features/details-page/components/HeroSection";
import TourDetails from "@/features/details-page/components/TourDetails";
import WhyChooseUs from "@/features/landing-page/components/WhyChooseUs";
import { alcatrazDayTourAccordianData } from "@/lib/accordianData";
import { Metadata } from "next";
import CanonicalTag from "@/components/CanonicalTag";
import PreparationTips from "@/features/landing-page/components/PreparationTips";

export const metadata: Metadata = {
  title: "Fort Sumter Tours from Patriots Point | Ferry Tickets",
  description:
    "Book your Fort Sumter tours & enjoy a ferry tour across Charleston Harbor to the Fort, where the Civil War began. Book your Fort Sumter ticket in 60 sec.",
};

const AlcatrazDayTour = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://fortsumtertourtickets.com/patriots-point",
        url: "https://fortsumtertourtickets.com/patriots-point",
        name: "Fort Sumter Tours from Patriots Point | Ferry Tickets",
        description:
          "Book your Fort Sumter tours & enjoy a ferry tour across Charleston Harbor to the Fort, where the Civil War began. Book your Fort Sumter ticket in 60 sec.",
        isPartOf: { "@id": "https://fortsumtertourtickets.com#website" },
      },
      {
        "@type": "WebSite",
        "@id": "https://fortsumtertourtickets.com#website",
        url: "https://fortsumtertourtickets.com",
        name: "Fort Sumter Tour Tickets",
        publisher: { "@id": "https://fortsumtertourtickets.com#org" },
      },
      {
        "@type": "Organization",
        "@id": "https://fortsumtertourtickets.com#org",
        name: "Fort Sumter Tour Tickets",
        url: "https://fortsumtertourtickets.com",
        logo: {
          "@type": "ImageObject",
          url: "https://fortsumtertourtickets.com/fortsumter-logo.png",
        },
      },
      {
        "@type": "TouristTrip",
        "@id": "https://fortsumtertourtickets.com/patriots-point#tour",
        name: "Fort Sumter Tours from Patriots Point",
        description:
          "Guided Fort Sumter tour with round-trip ferry from Patriots Point (Mount Pleasant), ranger talk, museum/exhibit access, and skyline views across Charleston Harbor.",
        image: "https://fortsumtertourtickets.com/landing-page/patriots.webp",
        provider: { "@id": "https://fortsumtertourtickets.com#org" },
        touristType: "GeneralPublic",
        duration: "PT2H15M",
        offers: {
          "@type": "Offer",
          price: "26.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2025-08-01",
          url: "https://fortsumtertourtickets.com/patriots-point", // booking/product URL
        },
        startLocation: {
          "@type": "Place",
          name: "Patriots Point (Mount Pleasant, SC)",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mount Pleasant",
            addressRegion: "SC",
            addressCountry: "US",
          },
        },
        endLocation: {
          "@type": "Place",
          name: "Fort Sumter National Monument",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Charleston",
            addressRegion: "SC",
            addressCountry: "US",
          },
        },
        itinerary: {
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "TouristAttraction",
              name: "Round-trip ferry ride from Patriots Point",
            },
            {
              "@type": "TouristAttraction",
              name: "Entrance to Fort Sumter & museum exhibits",
            },
            { "@type": "TouristAttraction", name: "Ranger-led history talk" },
            {
              "@type": "TouristAttraction",
              name: "Self-guided exploration (~1 hour at the fort)",
            },
            {
              "@type": "TouristAttraction",
              name: "Views: Arthur Ravenel Jr. Bridge",
            },
            { "@type": "TouristAttraction", name: "Views: Castle Pinckney" },
            {
              "@type": "TouristAttraction",
              name: "Views: Charleston skyline & USS Yorktown",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://fortsumtertourtickets.com/patriots-point#faqs",
        mainEntity: [
          {
            "@type": "Question",
            name: "How long is the Fort Sumter boat tour?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "About 2 hours and 15 minutes total, including the ferry ride to and from the fort plus roughly one hour on site.",
            },
          },
          {
            "@type": "Question",
            name: "Are Fort Sumter tours family-friendly?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The ferry ride and fort exploration suit all ages. Many families also visit the nearby Patriots Point Naval & Maritime Museum.",
            },
          },
          {
            "@type": "Question",
            name: "Which departure is better: Patriots Point or Liberty Square?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both reach the same fort and include similar on-site experiences. Patriots Point is convenient for Mount Pleasant visitors or those pairing the trip with the naval museum; Liberty Square is better for downtown stays.",
            },
          },
        ],
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
            name: "Fort Sumter Tours from Patriots Point",
            item: "https://fortsumtertourtickets.com/patriots-point",
          },
        ],
      },
    ],
  };

  return (
    <div className="relative">
      <CanonicalTag pathName="/patriots-point" />
      <HeroSection tourtype="day" />
      <TourDetails />
      <PreparationTips tour="" />

      <WhyChooseUs />
      {/* <WhatCustomersSay /> */}
      <AskedQuestions data={alcatrazDayTourAccordianData} />
      <FortSummerExperience />

      {/* ✅ Combined TouristTrip + FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default AlcatrazDayTour;
