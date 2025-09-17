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
  1: "https://www.paypal.com/ncp/payment/RRU26Q8AWLGTA",
  2: "https://www.paypal.com/ncp/payment/4CMZB4CZKMXBU",
  3: "https://www.paypal.com/ncp/payment/NC4FSW9RHBQVQ",
  4: "https://www.paypal.com/ncp/payment/TCW5THGQ27H3J",
  5: "https://www.paypal.com/ncp/payment/E685RJ7DKBS2L",
  6: "https://www.paypal.com/ncp/payment/DTGJXHFG9G4R2",
  7: "https://www.paypal.com/ncp/payment/HCUFRRWTY4CHU",
  8: "https://www.paypal.com/ncp/payment/KVS9Y96FXVDUS",
  9: "https://www.paypal.com/ncp/payment/E78QELCV7ZKYG",
  10: "https://www.paypal.com/ncp/payment/CD5TYCEG2DR4N",
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
