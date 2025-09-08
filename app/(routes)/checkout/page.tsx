import { Metadata } from "next";
import CheckoutPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your booking for Fort Sumter tours. Fill in your details and payment information to finalize your reservation.",
};

const CheckoutPage = () => {
  return (
    <>
      <CheckoutPageClient />
    </>
  );
};

export default CheckoutPage;
