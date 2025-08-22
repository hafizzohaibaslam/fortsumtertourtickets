import { Metadata } from "next";
import CheckoutPageClient from "./page.client";
import CanonicalTag from "@/components/CanonicalTag";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your booking for Alcatraz Island tours. Fill in your details and payment information to finalize your reservation.",
};

const CheckoutPage = () => {
  return (
    <>
      <CanonicalTag pathName="/checkout" />
      <CheckoutPageClient />
    </>
  );
};

export default CheckoutPage;
