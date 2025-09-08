import React from "react";
import WhatCustomersSay from "@/features/shared/components/WhatCustomersSay";
import AskedQuestions from "@/features/shared/components/AskedQuestions";
import FortSummerExperience from "@/features/shared/components/FortSummerExperience";
import HeroSection from "@/features/details-page/components/HeroSection";
import { alcatrazNightTourAccordianData } from "@/lib/accordianData";
import { Metadata } from "next";
import NightTourDetails from "@/features/details-page/components/NightTourDetail";
import WhyChooseUs from "@/features/landing-page/components/WhyChooseUs";
import PreparationTips from "@/features/landing-page/components/PreparationTips";

export const metadata: Metadata = {
  title: "Fort Sumter Tours with Ferry Departure from Liberty Square",
  description:
    "Book a ferry (with 1 click) for Fort Sumter tours that depart from Liberty Square in Charleston, SC. Enjoy a harbor ferry ride & the Civil War Fort Sumter.",
  openGraph: {
    title: "Fort Sumter Tours with Ferry Departure from Liberty Square",
    description:
      "Book a ferry (with 1 click) for Fort Sumter tours that depart from Liberty Square in Charleston, SC. Enjoy a harbor ferry ride & the Civil War Fort Sumter.",
  },
  twitter: {
    title: "Fort Sumter Tours with Ferry Departure from Liberty Square",
    description:
      "Book a ferry (with 1 click) for Fort Sumter tours that depart from Liberty Square in Charleston, SC. Enjoy a harbor ferry ride & the Civil War Fort Sumter.",
  },
};

const AlcatrazNightTour = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://fortsumtertourtickets.com/liberty-square",
        url: "https://fortsumtertourtickets.com/liberty-square",
        name: "Fort Sumter Tours with Ferry Departure from Liberty Square",
        description:
          "Book a ferry (with 1 click) for Fort Sumter tours that depart from Liberty Square in Charleston, SC. Enjoy a harbor ferry ride & the Civil War Fort Sumter.",
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
        "@id": "https://fortsumtertourtickets.com/liberty-square#tour",
        name: "Fort Sumter Tours: Departure from Liberty Square",
        description:
          "Guided Fort Sumter tour with round-trip ferry from Liberty Square (downtown Charleston), ranger program, museum exhibits, and harbor views of the Battery, Ravenel Bridge, and Castle Pinckney.",
        image:
          "https://fortsumtertourtickets.com/landing-page/liberty-square.webp",
        provider: { "@id": "https://fortsumtertourtickets.com#org" },
        touristType: "GeneralPublic",
        duration: "PT2H15M",
        offers: {
          "@type": "Offer",
          price: "26.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2025-08-01",
          url: "https://fortsumtertourtickets.com/liberty-square", // booking/product URL
        },
        startLocation: {
          "@type": "Place",
          name: "Liberty Square (Downtown Charleston, SC)",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Charleston",
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
              name: "Round-trip ferry ride from Liberty Square",
            },
            {
              "@type": "TouristAttraction",
              name: "Direct access to Fort Sumter & on-site exhibits",
            },
            {
              "@type": "TouristAttraction",
              name: "Ranger-led Civil War history program",
            },
            {
              "@type": "TouristAttraction",
              name: "Self-guided exploration (~1 hour at the fort)",
            },
            {
              "@type": "TouristAttraction",
              name: "Views: Charleston’s historic waterfront & the Battery",
            },
            {
              "@type": "TouristAttraction",
              name: "Views: Arthur Ravenel Jr. Bridge",
            },
            {
              "@type": "TouristAttraction",
              name: "Views: Castle Pinckney & city skyline",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://fortsumtertourtickets.com/liberty-square#faqs",
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
              text: "Yes. The ferry ride and fort exploration suit all ages. Many families also visit nearby attractions like the South Carolina Aquarium.",
            },
          },
          {
            "@type": "Question",
            name: "Which departure is better: Patriots Point or Liberty Square?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both reach the same fort and include similar on-site experiences. Liberty Square is ideal for downtown Charleston stays; Patriots Point is convenient for Mount Pleasant or pairing with the naval museum.",
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
            name: "Fort Sumter Tours from Liberty Square",
            item: "https://fortsumtertourtickets.com/liberty-square",
          },
        ],
      },
    ],
  };

  return (
    <div className="relative">
      <HeroSection tourtype="night" />
      <NightTourDetails />
      <PreparationTips tour={"liberty"} />
      <WhyChooseUs />
      {/* <WhatCustomersSay /> */}
      <AskedQuestions data={alcatrazNightTourAccordianData} />
      <FortSummerExperience />

      {/* ✅ Combined TouristTrip + FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default AlcatrazNightTour;
