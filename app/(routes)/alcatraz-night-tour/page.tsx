import React from "react";
import WhatCustomersSay from "@/features/shared/components/WhatCustomersSay";
import AskedQuestions from "@/features/shared/components/AskedQuestions";
import FortSummerExperience from "@/features/shared/components/FortSummerExperience";
import HeroSection from "@/features/details-page/components/HeroSection";
import { alcatrazNightTourAccordianData } from "@/lib/accordianData";
import { Metadata } from "next";
import NightTourDetails from "@/features/details-page/components/NightTourDetail";
import WhyChooseUs from "@/features/landing-page/components/WhyChooseUs";
import CanonicalTag from "@/components/CanonicalTag";

export const metadata: Metadata = {
  title: "Alcatraz Night Tour",
  description:
    "Get your 2-3 hour Alcatraz Night Tour tickets today. Explore the island in darkness with bay views. Book your Alcatraz night tour now from just $34. Hurry!",
};

const AlcatrazNightTour = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        name: "Alcatraz Night Tour",
        description:
          "Experience a unique night tour of Alcatraz with exclusive access to restricted areas, evening programs, and ferry rides under the stars. Includes live narration and cellhouse audio in multiple languages.",
        image:
          "https://alcatrazislandticketing.com/landing-page/night-tour.webp", // ✅ update with real image URL
        offers: {
          "@type": "Offer",
          price: "34.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2025-08-01",
          url: "https://alcatrazislandticketing.com/landing-page/night-tour.webp",
        },
        provider: {
          "@type": "Organization",
          name: "Alcatraz Island Ticketing",
          url: "https://alcatrazislandticketing.com",
          logo: {
            "@type": "ImageObject",
            url: "https://alcatrazislandticketing.com/alcatraz-island-logo.svg", // ✅ update with your logo URL
          },
        },
        touristType: "GeneralPublic",
        itinerary: {
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "TouristAttraction",
              name: "Ferry ride from Pier 33 at sunset",
            },
            {
              "@type": "TouristAttraction",
              name: "Exclusive access to restricted prison areas",
            },
            {
              "@type": "TouristAttraction",
              name: "Evening programs with historic narration",
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
        tourBookingPage:
          "https://alcatrazislandticketing.com/alcatraz-night-tour",
        tourDuration: "PT3H",
        tourAvailability: "Tue–Sat, 3:50 PM – 6:30 PM",
      },
      {
        "@type": "FAQPage",
        mainEntity: alcatrazNightTourAccordianData.map((item) => ({
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
      <CanonicalTag pathName="/alcatraz-night-tour" />
      <HeroSection tourtype="night" />
      <NightTourDetails />
      <WhyChooseUs />
      <WhatCustomersSay />
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
