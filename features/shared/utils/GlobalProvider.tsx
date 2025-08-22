import { bookingTypes } from "@/components/BookingForm/BookingForm";
import { createContext, useContext, useState } from "react";

type GlobalContextType = {
  isBookingModalOpen: boolean;
  handleBookingModalOpenClose: (
    value: boolean,
    tourType?: keyof typeof bookingTypes
  ) => void;
  isMobileMenuOpen: boolean;
  handleMobileMenuOpenClose: (value: boolean) => void;
  tourType: keyof typeof bookingTypes;
  setTourType: (tourType: keyof typeof bookingTypes) => void;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [tourType, setTourType] = useState<keyof typeof bookingTypes>(
    "From Patriots Point"
  );

  const handleBookingModalOpenClose = (
    value: boolean,
    tourType: keyof typeof bookingTypes = "From Patriots Point"
  ) => {
    setIsBookingModalOpen(value);
    if (tourType) {
      setTourType(tourType);
    }
    if (value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleMobileMenuOpenClose = (value: boolean) => {
    setIsMobileMenuOpen(value);

    if (value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        isBookingModalOpen,
        handleBookingModalOpenClose,
        isMobileMenuOpen,
        handleMobileMenuOpenClose,
        tourType,
        setTourType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
