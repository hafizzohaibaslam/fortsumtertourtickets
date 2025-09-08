import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read our Terms & Conditions to understand the rules and regulations for using our website and booking services. By using our site, you agree to these terms.",
};

const TermsAndConditions = () => {
  return (
    <div className="mt-[24px] bg-white px-[24px] py-[30px] lg:px-[64px] lg:py-[52px] rounded-[23px]">
      {/* Header Section */}
      <div className="mb-[40px] lg:mb-[60px]">
        <h1 className="font-nohemi font-medium text-[#25283E] text-[32px] leading-[38px] lg:text-[48px] lg:leading-[56px] mb-[16px]">
          Terms & Conditions
        </h1>
        <p className="font-plus-jakarta-sans font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#25283E99]">
          Effective Date: August 1, 2025
        </p>
        <p className="font-plus-jakarta-sans font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#25283E] mt-[16px]">
          By using our website and completing a purchase, you agree to the terms
          outlined below. These terms are designed to ensure transparency,
          compliance, and a smooth experience for all customers.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-[40px] lg:space-y-[50px]">
        {/* Section 1 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            1. Final Sale
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            All sales are final. We do not offer compensation for late arrivals
            or no-shows. Access to tours may be restricted, altered, or canceled
            due to weather conditions or unforeseen circumstances.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            2. Reservation Details
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Tickets are only valid for the specified tour, date, and time.
            Tickets are non-transferable and issued in the buyer’s name.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            3. ID Requirements
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Adults aged 18 and older must present a valid photo ID when
            collecting tickets. The original credit card used for purchase may
            also be required for verification.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            4. No Refunds
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Refunds will not be issued for ferry tickets—whether used or unused.
            Our booking service fee is non-refundable under all circumstances.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            5. Arrival
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Please arrive at least one hour prior to your scheduled departure
            time for security screening and ferry boarding. Ferries board on a
            first-come, first-served basis.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            6. Ordering Information
          </h2>

          <div className="space-y-[20px]">
            <div>
              <h3 className="font-nohemi font-medium text-[#25283E] text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] mb-[12px]">
                Booking Service
              </h3>
              <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                We provide third-party booking for Fort Sumter tickets, with a
                $7.95 service fee per ticket. By placing an order, you authorize
                us to purchase tickets in your name.
              </p>
            </div>

            <div>
              <h3 className="font-nohemi font-medium text-[#25283E] text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] mb-[12px]">
                Payment and Card Authorization
              </h3>
              <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] mb-[12px]">
                At checkout, your total includes both the ticket price and
                service fee. Your payment method will reflect two separate
                charges—one for the tour and one for the service fee.
              </p>
              <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
                If the second charge is declined, we may attempt to process
                payment using an alternate card provided by you. We will make up
                to two additional attempts. If payment continues to fail due to
                declined authorizations or lack of response, your booking will
                not be completed, and no refunds (including the service fee)
                will be issued.
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            7. Ticket Pickup
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            If you do not bring a printed e-ticket, you may collect your tickets
            from the "Pre-Paid" Box Office window at your departure point. A
            valid ID and the original credit card may be required.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            8. Confirmation
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Ticket confirmation emails are sent within 24 hours of purchase. For
            next-day tours, confirmations are issued promptly.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            9. Availability
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Submitting an order does not guarantee availability. Fort Sumter
            tours frequently sell out. Your booking is only confirmed once you
            receive a second email containing your confirmation number.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 10 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            10. Changes and Refunds
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Changes or refunds are not permitted for Fort Sumter tickets unless
            the originally requested time slot is unavailable.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 11 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            11. Lost or Damaged Tickets
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            We are unable to replace or refund tickets that are lost, stolen, or
            damaged.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 12 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            12. Maximum Order
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            Each customer is limited to a maximum of 14 tickets per order.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 13 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            13. Additional Terms
          </h2>
          <ul className="space-y-[12px] pl-[20px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                Tickets are issued in the customer's name and must be presented
                with valid ID at the time of boarding.
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                Please arrive at least 30 minutes prior to your scheduled ferry
                departure to ensure timely boarding.
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                Fort Sumter Tours is the exclusive operator of Fort Sumter
                Island tours. By booking through fortsumtertourtickets.com, you
                authorize FortSumterTourTickets.com to purchase tickets on your
                behalf from the official website at regular pricing.
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                Our $7.95 per ticket commission is included in your total and
                covers the cost of providing booking services.
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                You may choose to book directly with Fort Sumter Tours through
                their official website if preferred.
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                FortSumterTourTickets.com operates as a third-party ticket
                purchasing service and is not responsible for providing ferry
                transportation.
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                All ferry safety protocols and tour terms are governed by Fort
                Sumter Tours and apply to all passengers.
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                For cancellations, a $7.95 fee per ticket is retained to cover
                operational expenses.
              </span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>
                Cancellations must be submitted at least 24 hours in advance of
                your scheduled visit. No refunds will be issued beyond this
                deadline.
              </span>
            </li>
          </ul>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>

        {/* Section 14 */}
        <section>
          <h2 className="font-nohemi font-medium text-[#25283E] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-[20px]">
            14. Chargebacks and Disputes
          </h2>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] mb-[16px]">
            If you initiate a chargeback or payment dispute for a valid,
            authorized transaction and we successfully resolve the case in our
            favor, you may be responsible for associated administrative or legal
            costs. This includes:
          </p>
          <ul className="space-y-[12px] pl-[20px] mb-[16px]">
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>Chargeback filing or processing fees</span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>Legal or representation costs</span>
            </li>
            <li className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] flex items-start">
              <span className="text-[#25283E] mr-[8px]">•</span>
              <span>Collection agency fees (if applicable)</span>
            </li>
          </ul>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E] mb-[16px]">
            By agreeing to these Terms & Conditions and finalizing your
            purchase, you acknowledge and accept this policy. Non-payment of
            incurred fees may result in your account being referred to a
            third-party collections agency.
          </p>
          <p className="font-plus-jakarta-sans font-normal text-[16px] leading-[24px] lg:leading-[28px] text-[#25283E]">
            We strongly encourage you to contact us directly with any issues
            before initiating a dispute. Our support team is here to assist you
            professionally and promptly.
          </p>
          <div className="w-full h-[1px] bg-[#E5E7EB] mt-[32px]"></div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
