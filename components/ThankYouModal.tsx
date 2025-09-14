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
  1: "https://buy.stripe.com/fZubJ3d2p9cDfL7f8e6oo03",
  2: "https://buy.stripe.com/8x2fZj2nLfB1cyVgci6oo02",
  3: "https://buy.stripe.com/5kQ5kF9Qd9cD7eB6BI6oo01",
  4: "https://buy.stripe.com/fZu6oJe6t3Sj1Uh7FM6oo05",
  5: "https://buy.stripe.com/7sYbJ3geB1Kb0Qdd066oo04",
  6: "https://buy.stripe.com/cNi28taUh1KbcyV5xE6oo06",
  7: "https://buy.stripe.com/28E5kFfax0G7fL77FM6oo07",
  8: "https://buy.stripe.com/6oU6oJ9Qd3Sj9mJf8e6oo08",
  9: "https://buy.stripe.com/9B63cx4vT60rfL7gci6oo09",
  10: "https://buy.stripe.com/28E8wRgeB4Wn2YlbW26oo0a",
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
                    service charge payment using the secure link provided above.
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
