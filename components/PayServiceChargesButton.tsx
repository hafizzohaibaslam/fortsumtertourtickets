import React from "react";
import { Button } from "./ui/button";
import { WPOrder } from "@/lib/wp/types";
import { toast } from "sonner";
import { stripeCreateCheckout } from "@/lib/stripe/stripeCreateCheckout";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PayServiceChargesButton = ({ order }: { order: WPOrder }) => {
  const router = useRouter();

  const handleCreateStripeChekcoutAndRedirect = async () => {
    const toastId = toast.loading("Please wait...");
    try {
      const url = await stripeCreateCheckout(order);
      toast.success("Redirecting to checkout...", { id: toastId });
      router.push(url);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", { id: toastId });
    } finally {
      toast.dismiss(toastId);
    }
  };

  const metaData = Object.fromEntries(
    order.meta_data.map((item) => [item.key, item.value])
  );
  console.log("order metadat", order.meta_data);
  console.log(
    "🚀 ~ PayServiceChargesButton ~ metaData:",
    metaData.service_charges_paid
  );

  if (metaData.service_charges_paid === "true") {
    return null;
  }

  return (
    <Button
      onClick={handleCreateStripeChekcoutAndRedirect}
      variant="destructive"
      className="!p-1.5 cursor-pointer animate-pulse !text-xs"
    >
      <Image
        src="/stripe-icon.jpeg"
        alt="stripe"
        width={20}
        height={20}
        className="rounded-sm"
      />
      Pay Service Charges Now
    </Button>
  );
};

export default PayServiceChargesButton;
