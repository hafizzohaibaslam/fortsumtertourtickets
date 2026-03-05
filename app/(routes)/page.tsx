import React from "react";
import { Metadata } from "next";
import HeroSection from "@/features/landing-page/components/HeroSection";
import ServicesSection from "@/features/landing-page/components/ServicesSection";
import FortSummerExperience from "@/features/shared/components/FortSummerExperience";
import WhatCustomersSay from "@/features/shared/components/WhatCustomersSay";
import AskedQuestions from "@/features/shared/components/AskedQuestions";
import PreparationTips from "@/features/landing-page/components/PreparationTips";
import { landingPageAccordianData } from "@/lib/accordianData";
import Highlights from "@/features/shared/components/Highlights";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const Home = () => {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://fortsumtertourtickets.com#website",
        name: "Fort Sumter Tour Tickets",
        url: "https://fortsumtertourtickets.com",
        description:
          "Book Fort Sumter tours in Charleston, SC, in less than a minute! Includes ferry ride, Fort Sumter entry, ranger talks, & harbor views. Start from $26.",
        publisher: { "@id": "https://fortsumtertourtickets.com#org" },
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://fortsumtertourtickets.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "TravelAgency",
        "@id": "https://fortsumtertourtickets.com#org",
        name: "Fort Sumter Tour Tickets",
        url: "https://fortsumtertourtickets.com",
        description:
          "Book Fort Sumter tours and ferry tickets departing from Liberty Square in downtown Charleston and Patriots Point in Mount Pleasant. Scenic harbor cruise, fort entry, ranger-led talks, and museum access included.",
        logo: {
          "@type": "ImageObject",
          url: "https://fortsumtertourtickets.com/fortsumter-logo.png",
        },
        image: "https://fortsumtertourtickets.com/opengraph-image.png",
        telephone: "+1-800-789-3678",
        email: "tickets@fortsumtertourtickets.com",
        priceRange: "$26 - $40",
        address: {
          "@type": "PostalAddress",
          streetAddress: "340 Concord St",
          addressLocality: "Charleston",
          addressRegion: "SC",
          postalCode: "29401",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 32.7907,
          longitude: -79.9253,
        },
        areaServed: {
          "@type": "City",
          name: "Charleston",
          containedInPlace: {
            "@type": "State",
            name: "South Carolina",
          },
        },
        knowsAbout: [
          "Fort Sumter",
          "Fort Sumter Tours",
          "Charleston Harbor Cruise",
          "Civil War History",
          "Fort Sumter Ferry",
          "Charleston SC Tourism",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: landingPageAccordianData.map((item) => ({
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
            name: "Fort Sumter Tours from Patriots Point",
            item: "https://fortsumtertourtickets.com/patriots-point",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Fort Sumter Tours from Liberty Square",
            item: "https://fortsumtertourtickets.com/liberty-square",
          },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        name: "Fort Sumter Tours",
        url: "https://fortsumtertourtickets.com/",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Fort Sumter History",
        url: "https://fortsumtertourtickets.com/blog",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Fort Sumter Tours - Patriots Point",
        url: "https://fortsumtertourtickets.com/patriots-point",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Fort Sumter Tours - Liberty Square",
        url: "https://fortsumtertourtickets.com/liberty-square",
      },
    ],
  };

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Highlights />
      <WhatCustomersSay />
      <AskedQuestions data={landingPageAccordianData} />
      <FortSummerExperience />

      {/* ✅ Combined Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
    </div>
  );
};

export default Home;
