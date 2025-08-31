import React from "react";
import HeroSection from "@/features/landing-page/components/HeroSection";
import ServicesSection from "@/features/landing-page/components/ServicesSection";
import FortSummerExperience from "@/features/shared/components/FortSummerExperience";
import WhatCustomersSay from "@/features/shared/components/WhatCustomersSay";
import AskedQuestions from "@/features/shared/components/AskedQuestions";
import PreparationTips from "@/features/landing-page/components/PreparationTips";
import { landingPageAccordianData } from "@/lib/accordianData";
import CanonicalTag from "@/components/CanonicalTag";
import Highlights from "@/features/shared/components/Highlights";

const Home = () => {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Fort Sumter Tour Tickets",
        url: "https://fortsumtertourtickets.com",
        description:
          "Book Fort Sumter tours in Charleston, SC, in less than a minute! Includes ferry ride, Fort Sumter entry, ranger talks, & harbor views. Start from $26. ",
        publisher: {
          "@type": "Organization",
          name: "Fort Sumter Tour Tickets",
          logo: {
            "@type": "ImageObject",
            url: "https://fortsumtertourtickets.com/fortsumter-logo.png",
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://fortsumtertourtickets.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
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
            name: "Fort Sumter Tours",
            item: "https://fortsumtertourtickets.com/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Fort Sumter Tours - Patriots Point",
            item: "https://fortsumtertourtickets.com/patriots-point",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Fort Sumter Tours - Liberty Square",
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
      <CanonicalTag pathName="/" />
      <HeroSection />
      <ServicesSection />
      <Highlights />
      {/* <PreparationTips /> */}
      {/* <WhatCustomersSay /> */}
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
