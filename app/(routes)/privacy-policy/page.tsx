import CanonicalTag from "@/components/CanonicalTag";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you visit alcatrazislandticketing.com or make a booking.",
};

const PrivacyPolicy = () => {
  return (
    <div className="mt-[24px] bg-white px-[24px] py-[30px] lg:px-[64px] lg:py-[52px] rounded-[23px]">
      <CanonicalTag pathName="/privacy-policy" />
      {/* Header Section */}
      <div className="mb-[40px] lg:mb-[60px]">
        <h1 className="font-nohemi font-medium text-[#25283E] text-[32px] leading-[38px] lg:text-[48px] lg:leading-[56px] mb-[16px]">
          Privacy Policy
        </h1>
        <p className="font-plus-jakarta-sans font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#25283E99]">
          Effective Date: August 1, 2025
        </p>
        <p className="font-plus-jakarta-sans font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#25283E] mt-[16px]">
          At alcatrazislandticketing.com, we take your privacy seriously and are
          committed to safeguarding your personal information. This Privacy
          Policy explains how we collect, use, store, and protect the data you
          share with us when visiting our website or making a purchase.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-[40px] lg:space-y-[50px]">
        {/* Section 1 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            1. Information We Collect
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] mb-[16px]">
            When you browse our site or make a booking, we may collect the
            following types of information:
          </p>
          <ul className="space-y-[12px] pl-[20px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                <strong>Personal Information:</strong> Your name, email address,
                phone number, and billing details (credit/debit card information
                securely handled by a third-party payment processor).
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                <strong>Booking Information:</strong> Tour dates, number of
                guests, and any preferences or special notes provided during
                checkout.
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                <strong>Technical Data:</strong> Your IP address, browser and
                device type, operating system, and user behavior through cookies
                and analytics tools.
              </span>
            </li>
          </ul>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            2. How We Use Your Information
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] mb-[16px]">
            We may use your information to:
          </p>
          <ul className="space-y-[12px] pl-[20px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>Process and confirm your orders</span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>Deliver your e-tickets or vouchers via email</span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                Respond to your booking inquiries or customer support requests
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                Send follow-up messages, updates, or optional promotional emails
                (you may unsubscribe at any time)
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                Improve our website functionality, user experience, and
                marketing effectiveness
              </span>
            </li>
          </ul>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            3. Payment Security
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            We do not store full credit card numbers or CVV codes. All
            transactions are handled securely by PCI-compliant third-party
            payment processors using SSL encryption.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            4. Cookies and Tracking Technologies
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            We use cookies and analytics services (such as Google Analytics) to
            better understand visitor behavior and enhance site performance. You
            may manage cookie preferences in your browser settings or opt out of
            tracking via the analytics provider's tools.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            5. Sharing Your Information
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] mb-[16px]">
            We do not sell, trade, or rent your personal information. We may
            share limited data with trusted third parties for specific purposes,
            including:
          </p>
          <ul className="space-y-[12px] pl-[20px] mb-[16px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                Fulfilling bookings (e.g., tour operators or ticketing systems)
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>Hosting our website and processing payments</span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>Meeting legal obligations or enforcing our rights</span>
            </li>
          </ul>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            All partners are contractually required to protect your data and use
            it only to perform their assigned services.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            6. Your Rights and Choices
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] mb-[16px]">
            You have the right to:
          </p>
          <ul className="space-y-[12px] pl-[20px] mb-[16px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>Request access to or deletion of your personal data</span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                Unsubscribe from marketing emails at any time via the included
                link
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>Contact us regarding any privacy-related concern</span>
            </li>
          </ul>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            To make a request, email:{" "}
            <a
              href="mailto:tickets@alcatrazislandticketing.com"
              className="text-[#25283E] underline hover:text-[#25283E99] transition-colors duration-300"
            >
              tickets@alcatrazislandticketing.com
            </a>
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            7. Data Retention
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            We retain personal data only for as long as necessary to fulfill
            bookings, comply with legal obligations, or support business
            operations. Once no longer needed, your data is securely deleted.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            8. Children's Privacy
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Our services are not intended for children under 13. We do not
            knowingly collect or store personal data from users under this age.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            9. Updates to This Policy
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            This Privacy Policy may be updated periodically to reflect changes
            in our practices or regulatory requirements. Any revisions will be
            posted on this page with an updated effective date.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 10 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            10. Contact Us
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] mb-[16px]">
            For any questions regarding this Privacy Policy or the handling of
            your information, please contact:
          </p>
          <div className="bg-[#F8F8F8] p-[24px] rounded-[16px] border border-[#E5E7EB]">
            <p className="font-nohemi font-medium text-[#25283E] text-[18px] leading-[24px] mb-[8px]">
              alcatrazislandTicketing.com
            </p>
            <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] text-[#25283E]">
              📧 Email:{" "}
              <a
                href="mailto:tickets@alcatrazislandticketing.com"
                className="text-[#25283E] underline hover:text-[#25283E99] transition-colors duration-300"
              >
                tickets@alcatrazislandticketing.com
              </a>
            </p>
          </div>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
