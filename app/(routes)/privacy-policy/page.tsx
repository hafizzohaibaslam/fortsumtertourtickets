import CanonicalTag from "@/components/CanonicalTag";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about how we collect, use, and protect your personal information at fortsumtertourtickets.com.",
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
          Effective Date: May 1, 2025
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-[40px] lg:space-y-[50px]">
        {/* Section 1 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            1. Information We Collect
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            When you visit our site or make a purchase, we may collect the
            following types of information:
          </p>
          <ul className="space-y-[12px] pl-[20px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              <strong>Personal Information:</strong> Your name, email address,
              phone number, and billing information (credit/debit card details
              processed securely through a third-party provider).
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              <strong>Booking Details:</strong> Tour dates, number of guests,
              and any preferences or notes you include during checkout.
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              <strong>Technical Information:</strong> IP address, browser type,
              device type, operating system, and usage behavior via cookies and
              analytics tools.
            </li>
          </ul>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            2. How We Use Your Information
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            We use the information we collect to:
          </p>
          <ul className="space-y-[12px] pl-[20px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Process your orders and send you confirmation emails.
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Deliver e-tickets or vouchers via email.
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Communicate with you about your booking or answer customer service
              inquiries.
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Send follow-up messages, updates, or optional promotional content
              (you may opt out at any time).
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Improve website functionality, user experience, and our marketing
              efforts.
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
            We do not store full credit card numbers or security codes. All
            payment transactions are processed securely through PCI-compliant
            third-party payment processors using SSL encryption.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            4. Cookies and Tracking
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            We use cookies and analytics services (like Google Analytics) to
            better understand how visitors use our website. These tools help us
            optimize the site and marketing performance. You can control cookie
            settings in your browser or opt out of tracking using tools provided
            by the analytics provider.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            5. Sharing Your Information
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            We do not sell, rent, or trade your personal information to outside
            parties. We may share limited information with trusted service
            providers solely for the purpose of:
          </p>
          <ul className="space-y-[12px] pl-[20px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Fulfilling your order (e.g., tour operators, ticketing systems)
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Hosting our website and processing payments
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Complying with legal requirements or protecting our rights
            </li>
          </ul>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            All third-party partners are required to keep your information
            confidential and use it only for the specific services they provide
            to us.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            6. Your Rights and Choices
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            You have the right to:
          </p>
          <ul className="space-y-[12px] pl-[20px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Request access to or deletion of your personal data
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Opt out of promotional emails at any time (via the “unsubscribe”
              link)
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
              Contact us with any privacy concerns
            </li>
          </ul>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            To make a request or ask a question, email us at:
            tickets@fortsumtertourtickets.com
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            7. Data Retention
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            We retain customer data only as long as necessary to fulfill
            transactions, comply with legal obligations, or support our business
            needs. When no longer needed, data is securely deleted.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            8. Children’s Privacy
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Our services are not intended for children under the age of 13. We
            do not knowingly collect or store personal information from children
            under this age.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            9. Changes to This Policy
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Updates will be
            posted on this page with a revised effective date.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 10 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            10. Contact Us
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            If you have questions about this policy or how your information is
            handled, please contact:
          </p>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            fortsumtertourtickets.com
            <br />
            Email: tickets@fortsumtertourtickets.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
