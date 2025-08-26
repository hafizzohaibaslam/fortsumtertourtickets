import React from "react";
import HeroSection from "@/features/landing-page/components/HeroSection";
import ServicesSection from "@/features/landing-page/components/ServicesSection";
import FortSummerExperience from "@/features/shared/components/FortSummerExperience";
import WhatCustomersSay from "@/features/shared/components/WhatCustomersSay";
import AskedQuestions from "@/features/shared/components/AskedQuestions";
import PreparationTips from "@/features/landing-page/components/PreparationTips";
import { landingPageAccordianData } from "@/lib/accordianData";
import CanonicalTag from "@/components/CanonicalTag";

const Home = () => {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Alcatraz Island Ticketing",
        url: "https://alcatrazislandticketing.com",
        description:
          "Book Alcatraz Island Tours including ferry, audio guide, and access to the island. Choose between Day and Night Tours. Instant ticket confirmation.",
        publisher: {
          "@type": "Organization",
          name: "Alcatraz Island Ticketing",
          logo: {
            "@type": "ImageObject",
            url: "https://alcatrazislandticketing.com/alcatraz-island-logo.svg",
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://alcatrazislandticketing.com/search?q={search_term_string}",
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
            item: "https://alcatrazislandticketing.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Alcatraz Tours",
            item: "https://alcatrazislandticketing.com/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Alcatraz Day Tour",
            item: "https://alcatrazislandticketing.com/alcatraz-day-tour",
          },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        name: "Alcatraz Tours",
        url: "https://alcatrazislandticketing.com/",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Alcatraz History",
        url: "https://alcatrazislandticketing.com/blog",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Alcatraz Day Tour",
        url: "https://alcatrazislandticketing.com/alcatraz-day-tour",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Alcatraz Night Tour",
        url: "https://alcatrazislandticketing.com/alcatraz-night-tour",
      },
    ],
  };

  return (
    <div>
      <CanonicalTag pathName="/" />
      <HeroSection />
      <ServicesSection />
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
