import { TourData, CheckoutData } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";
import BookingDialog from "@/components/BookingForm/BookingDialog";

type BookingContextType = {
  tourData: TourData | null;
  setTourData: (tourData: TourData | null) => void;
  checkoutData: CheckoutData | null;
  setCheckoutData: (checkoutData: CheckoutData | null) => void;
};

const BookingContext = createContext<BookingContextType | null>(null);

export const BookingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tourData, setTourData] = useState<TourData | null>(null);
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);

  const values = {
    tourData,
    setTourData,
    checkoutData,
    setCheckoutData,
  };

  return (
    <BookingContext.Provider value={values}>
      <BookingDialog />
      {children}
    </BookingContext.Provider>
  );
};

const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};

export default useBooking;
