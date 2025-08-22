"use client";
import React from "react";
import BookingForm from "./BookingForm";
import { X } from "lucide-react";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";

const BookingDialog = () => {
  const { isBookingModalOpen, handleBookingModalOpenClose } =
    useGlobalContext();

  if (!isBookingModalOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <dialog
        open={isBookingModalOpen}
        className="w-[800px] max-w-[97%] mx-auto bg-white rounded-[10px] relative overflow-y-auto h-[90vh] md:p-[32px] p-[12px] overflow-hidden"
      >
        {/* Close button */}
        <button
          className="absolute w-[24px] h-[24px] top-4 right-4 hover:scale-110 transition-all duration-300 ease-in-out"
          onClick={() => handleBookingModalOpenClose(false)}
        >
          <X className="w-[18px] h-[18px] cursor-pointer" />
        </button>
        <div className="flex flex-col justify-between md:gap-[32px] gap-[16px] h-full overflow-hidden">
          {/* Title and description */}
          <div className="space-y-[16px]">
            <h1 className="font-nohemi font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-[#323539]">
              Book Your Experience
            </h1>
            <p className="text-[16px] hidden md:block leading-[26px] font-normal font-plus-jakarta-sans -tracking-[1%] text-[#858C95]">
              A whisper in the silence of the ocean. Surrounded by the icy
              waters of San Francisco Bay, it was once home to America's most
              notorious criminals.
            </p>
          </div>
          {/* Form */}
          <BookingForm onClose={() => handleBookingModalOpenClose(false)} />
        </div>
      </dialog>
    </div>
  );
};

export default BookingDialog;
