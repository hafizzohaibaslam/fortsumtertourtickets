"use client";
import React from "react";
import GlobalProvider from "../utils/GlobalProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default Providers;
