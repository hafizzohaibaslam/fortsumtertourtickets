import HereToAssistYou from "@/features/contact-us-page/components/HereToAssistYou";
import ContactInfo from "@/features/contact-us-page/components/ContactInfo";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Fort Sumter Tour Tickets Support",
  description:
    "Have questions about Fort Sumter tours? Contact us for booking support, tour schedules, departure info, or general inquiries. Call 1-800-789-3678 or email us.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    url: "https://fortsumtertourtickets.com/contact-us",
    title: "Contact Us - Fort Sumter Tour Tickets Support",
    description:
      "Have questions about Fort Sumter tours? Contact us for booking support, tour schedules, departure info, or general inquiries.",
  },
  twitter: {
    title: "Contact Us - Fort Sumter Tour Tickets Support",
    description:
      "Have questions about Fort Sumter tours? Contact us for booking support, tour schedules, departure info, or general inquiries.",
  },
};

const ContactUsPage = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristInformationCenter",
        "@id": "https://fortsumtertourtickets.com#business",
        name: "Fort Sumter Tour Tickets",
        description:
          "Book Fort Sumter tours and ferry tickets in Charleston, SC. Ferry departures from Liberty Square and Patriots Point with round-trip harbor cruise, fort entry, and ranger talks.",
        url: "https://fortsumtertourtickets.com",
        telephone: "+1-800-789-3678",
        email: "tickets@fortsumtertourtickets.com",
        priceRange: "$26 - $40",
        image: "https://fortsumtertourtickets.com/fortsumter-logo.png",
        logo: {
          "@type": "ImageObject",
          url: "https://fortsumtertourtickets.com/fortsumter-logo.png",
        },
        address: [
          {
            "@type": "PostalAddress",
            name: "Liberty Square Departure",
            streetAddress: "340 Concord St",
            addressLocality: "Charleston",
            addressRegion: "SC",
            postalCode: "29401",
            addressCountry: "US",
          },
          {
            "@type": "PostalAddress",
            name: "Patriots Point Departure",
            streetAddress: "40 Patriots Point Rd",
            addressLocality: "Mount Pleasant",
            addressRegion: "SC",
            postalCode: "29464",
            addressCountry: "US",
          },
        ],
        geo: [
          {
            "@type": "GeoCoordinates",
            latitude: 32.7907,
            longitude: -79.9253,
          },
          {
            "@type": "GeoCoordinates",
            latitude: 32.7874,
            longitude: -79.9086,
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        areaServed: {
          "@type": "City",
          name: "Charleston",
          containedInPlace: {
            "@type": "State",
            name: "South Carolina",
          },
        },
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
            name: "Contact Us",
            item: "https://fortsumtertourtickets.com/contact-us",
          },
        ],
      },
    ],
  };

  return (
    <div className="relative">
      <HereToAssistYou />
      <ContactInfo />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </div>
  );
};

export default ContactUsPage;
