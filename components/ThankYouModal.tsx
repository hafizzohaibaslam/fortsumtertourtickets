import React from "react";
import { Dialog } from "./ui/dialog";
import { DialogContent } from "./ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { DialogTitle } from "./ui/dialog";
import { DialogOverlay } from "./ui/dialog";
import { DialogPortal } from "./ui/dialog";
import useBooking from "@/providers/booking-provider";
import { Clock } from "lucide-react";
import PayServiceChargesButton from "./PayServiceChargesButton";
import Link from "next/link";

const ThankYouModal = () => {
  const { thankYouModalOrder, setThankYouModalOrder } = useBooking();
  if (!thankYouModalOrder) return null;
  return (
    <div>
      <Dialog
        open={thankYouModalOrder !== null}
        onOpenChange={() => setThankYouModalOrder(null)}
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
              <Clock className="text-yellow-500" size={50} />
              <p className="text-center text-lg">
                Your order has be received. Please pay the service charges to
                get your tickets processed.
              </p>
              <PayServiceChargesButton order={thankYouModalOrder} />
              <p className="text-center text-xs max-w-[300px] mx-auto">
                Pay through this secure Stripe checkout.
              </p>
              <div className="mt-8 text-xs text-gray-500 text-center">
                <b>Please note:</b> Your order will be charged in two parts. The
                ticket purchase has already being processed, while the service
                charges must be paid separately. Kindly complete the service
                charge payment using the secure link provided above.
              </div>
              <div className="mt-2 text-xs text-gray-500 text-center">
                In case of any issue, plase contact us at{" "}
                <Link
                  href="mailto:tickets@fortsumtertourtickets.com"
                  className="font-bold"
                >
                  tickets@fortsumtertourtickets.com
                </Link>
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};

export default ThankYouModal;
