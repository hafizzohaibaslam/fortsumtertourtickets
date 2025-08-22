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

export const metadata: Metadata = {
  title: "Alcatraz Day Tour",
  description:
    "Have your 2-3 hours Alcatraz day tour tickets online. Visit Alcatraz Island with a guided day tour and fast ferry access for $34. Book your spot today!",
};

const AlcatrazDayTour = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        name: "Alcatraz Day Tour",
        description:
          "Join our Alcatraz Day Tour from San Francisco’s Pier 33. Enjoy ferry rides, a self-guided audio tour of the prison, and scenic views of the Golden Gate Bridge. Tickets start at $34.00.",
        image: "https://alcatrazislandticketing.com/landing-page/day-tour.webp", // ✅ update with real image
        offers: {
          "@type": "Offer",
          price: "34.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2025-08-01",
          url: "https://alcatrazislandticketing.com/landing-page/day-tour.webp",
        },
        provider: {
          "@type": "Organization",
          name: "Alcatraz Island Ticketing",
          url: "https://alcatrazislandticketing.com",
          logo: {
            "@type": "ImageObject",
            url: "https://alcatrazislandticketing.com/alcatraz-island-logo.svg", // ✅ replace
          },
        },
        touristType: "GeneralPublic",
        itinerary: {
          "@type": "ItemList",
          itemListElement: [
            { "@type": "TouristAttraction", name: "Ferry ride from Pier 33" },
            {
              "@type": "TouristAttraction",
              name: "Self-guided cellhouse audio tour",
            },
            {
              "@type": "TouristAttraction",
              name: "Access to island gardens and museum",
            },
          ],
        },
        startLocation: {
          "@type": "Place",
          name: "Pier 33, San Francisco, CA",
        },
        endLocation: {
          "@type": "Place",
          name: "Alcatraz Island",
        },
        touristTripType: "SelfGuided",
      },
      {
        "@type": "FAQPage",
        mainEntity: alcatrazDayTourAccordianData.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative">
      <CanonicalTag pathName="/alcatraz-day-tour" />
      <HeroSection tourtype="day" />
      <TourDetails />
      <WhyChooseUs />
      <WhatCustomersSay />
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
