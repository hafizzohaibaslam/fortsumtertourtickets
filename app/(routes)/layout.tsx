"use client";
import React from "react";
import Header from "@/features/shared/components/Header";
import Footer from "@/features/shared/components/Footer";
import Sidebar from "@/features/shared/components/Sidebar";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative p-[16px] md:p-[24px]">
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default RoutesLayout;
