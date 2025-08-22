import HereToAssistYou from "@/features/contact-us-page/components/HereToAssistYou";
import ContactInfo from "@/features/contact-us-page/components/ContactInfo";
import React from "react";

import { Metadata } from "next";
import CanonicalTag from "@/components/CanonicalTag";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions or need assistance? Contact us for support regarding your Alcatraz Island tour bookings, inquiries, or feedback. We're here to help!",
};

const ContactUsPage = () => {
  return (
    <div className="relative">
      <CanonicalTag pathName="/contact-us" />
      <HereToAssistYou />
      <ContactInfo />
    </div>
  );
};

export default ContactUsPage;
