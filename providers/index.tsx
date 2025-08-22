"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import GlobalProvider from "@/features/shared/utils/GlobalProvider";
import { BookingProvider } from "./booking-provider";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 0,
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <BookingProvider>{children}</BookingProvider>
        </GlobalProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default Providers;
