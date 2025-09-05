import React from "react";
import { Dialog } from "./ui/dialog";
import { DialogContent } from "./ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { DialogTitle } from "./ui/dialog";
import { DialogOverlay } from "./ui/dialog";
import { DialogPortal } from "./ui/dialog";
import useBooking from "@/providers/booking-provider";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SERVICE_CHANGES_PAYMENT_LINKS = {
  1: "https://buy.stripe.com/14A28rd88bhX0b83MV2kw0B",
  2: "https://buy.stripe.com/5kQ7sLd880Dj6zwfvD2kw0C",
  3: "https://buy.stripe.com/6oUeVdfgg71Hf623MV2kw0D",
  4: "https://buy.stripe.com/3cI28rfggbhX8HE5V32kw0E",
  5: "https://buy.stripe.com/fZu6oH9VWgCh4ro83b2kw0F",
  6: "https://buy.stripe.com/dRmbJ1gkkadT8HEcjr2kw0G",
  7: "https://buy.stripe.com/fZu00jc4485L8HE5V32kw0H",
  8: "https://buy.stripe.com/fZu9ATfgggCh5vs6Z72kw0I",
  9: "https://buy.stripe.com/dRm5kD8RSeu9aPMabj2kw0J",
  10: "https://buy.stripe.com/3cI4gz3xy0Dj7DA1EN2kw0K",
};

const ThankYouModal = () => {
  const { thankYouModalPersonCount, setThankYouModalPersonCount } =
    useBooking();
  const paymentLink =
    SERVICE_CHANGES_PAYMENT_LINKS?.[
      thankYouModalPersonCount as keyof typeof SERVICE_CHANGES_PAYMENT_LINKS
    ];
  return (
    <div>
      <Dialog
        open={thankYouModalPersonCount !== null}
        onOpenChange={() => setThankYouModalPersonCount(null)}
      >
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">
                Thank You For Your Booking!
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-4 px-4">
              <CheckCircle className="text-green-500" size={50} />
              <p className="text-center text-lg">
                Your booking has been confirmed and we've sent the details to
                your email.
              </p>
              {paymentLink && (
                <>
                  <Link
                    href={paymentLink}
                    target="_blank"
                    className="rounded-md px-4 py-2 bg-white text-black shadow-md border border-gray-200 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <Image
                      src="/stripe-icon.jpeg"
                      alt="stripe"
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                    Pay Service Changes
                  </Link>
                  <p className="text-center text-xs max-w-[300px] mx-auto">
                    Please pay your service charges through this secure Stripe
                    checkout. Payment link is also sent to your email.
                  </p>
                  <div className="mt-8 text-xs text-gray-500 text-center">
                    <b>Please note:</b> Your order will be charged in two parts.
                    The ticket purchase has already being processed, while the
                    service charges must be paid separately. Kindly complete the
                    service charge payment using the secure link provided below.
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};

export default ThankYouModal;
