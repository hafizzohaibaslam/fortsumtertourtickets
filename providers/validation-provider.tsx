"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { validateCheckoutForm } from "@/features/checkout-page/utils/validationFns";
import useBooking from "./booking-provider";

interface ValidationContextType {
  isFormValid: boolean;
  validationErrors: Record<string, string>;
  validateForm: () => void;
  markAllFieldsAsTouched: () => void;
}

const ValidationContext = createContext<ValidationContextType | undefined>(undefined);

export const useValidation = () => {
  const context = useContext(ValidationContext);
  if (context === undefined) {
    throw new Error("useValidation must be used within a ValidationProvider");
  }
  return context;
};

interface ValidationProviderProps {
  children: ReactNode;
}

export const ValidationProvider: React.FC<ValidationProviderProps> = ({ children }) => {
  const { checkoutData } = useBooking();
  const [isFormValid, setIsFormValid] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const validation = validateCheckoutForm(checkoutData);
    setValidationErrors(validation.errors);
    setIsFormValid(validation.isValid);
  };

  useEffect(() => {
    validateForm();
  }, [checkoutData]);

  const value = {
    isFormValid,
    validationErrors,
    validateForm,
    markAllFieldsAsTouched: () => {
      // This will be implemented in the PaymentForm component
      // We'll use a callback approach
    },
  };

  return (
    <ValidationContext.Provider value={value}>
      {children}
    </ValidationContext.Provider>
  );
};
