"use client";
import React from "react";
import Header from "@/features/shared/components/Header";
import Footer from "@/features/shared/components/Footer";
import Sidebar from "@/features/shared/components/Sidebar";
import ThankYouModal from "@/components/ThankYouModal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative p-[16px] md:p-[24px]">
      <Header />
      <Sidebar />
      <Elements stripe={stripePromise}>{children}</Elements>
      <Footer />
      <ThankYouModal />
    </div>
  );
};

export default RoutesLayout;
