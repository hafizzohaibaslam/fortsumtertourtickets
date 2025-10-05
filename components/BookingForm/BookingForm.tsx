"use client";

import { toast } from "sonner";
import { useMemo, useState } from "react";
import Message from "@/components/Message";
import { BookingFormData } from "@/lib/types";
import TimeSelector from "../TimeSelector";
import PersonSelector from "../PersonSelector";
import { Moon, MoveUpRight, Sun } from "lucide-react";
import { DatePicker } from "../ui/date-picker";
import TourTypeSelector from "../TourTypeSelector";
import { useEffect } from "react";
import useBooking from "@/providers/booking-provider";
import { ROUTES } from "@/features/shared/utils/routes";
import { useRouter } from "next/navigation";
import { Button } from "@/features/shared/components/Button";
import { useGlobalContext } from "@/features/shared/utils/GlobalProvider";

export const bookingTypes = {
  "From Patriots Point": {
    icon: <Sun size={20} />,
    id: 118027,
    times: ["10:45 AM", "1:30 PM"],
  },
  "From Liberty Square": {
    icon: <Moon size={20} />,
    id: 118097,
    times: ["9:30 AM", "12:00 PM", "2:45 PM"],
  },
};

type PersonType = {
  type: string;
  age: string;
  price: number;
  isAvailable?: (persons: BookingFormData["persons"]) => boolean;
  max: number;
};

const personTypes: PersonType[] = [
  { type: "Adult", age: "12 - 61 years", price: 40, max: 14 },
  {
    type: "Senior/Military",
    age: "62 years & older/Active Military",
    price: 36,
    max: 14,
  },
  { type: "Children", age: "4 - 11 years", price: 26, max: 14 },
  {
    type: "Infants",
    age: "Under 4 years",
    price: 0,
    max: 5,
    isAvailable: (persons: BookingFormData["persons"]) => {
      return persons["Adult"] > 0 || persons["Senior/Military"] > 0;
    },
  },
];

const TOUR_TITLE = "Fort Sumter";

const datesToSkip = ["2025-11-27", "2025-12-25"];

function BookingForm({ onClose }: { onClose: () => void }) {
  const { setTourData } = useBooking();

  const [data, setData] = useState<BookingFormData>({
    // Default to Oct 7, 2025 (local time to avoid TZ shifts)
    date: new Date(2025, 9, 8),
    month: new Date(2025, 9, 8),
    time: "",
    persons: {},
  });

  const { tourType, setTourType } = useGlobalContext();

  const bookingType = bookingTypes[tourType as keyof typeof bookingTypes];
  const router = useRouter();

  const personCounts: Record<string, number> = {};
  const prices: Record<string, number> = {};
  let totalPersons = 0;
  personTypes?.forEach((type) => {
    personCounts[type.type] = data.persons[type.type] || 0;
    prices[type.type] = type.price || 0;
    totalPersons += personCounts[type.type];
  });
  const total =
    useMemo(() => {
      return personTypes
        ?.map((type) => {
          const value = data.persons[type.type] || 0;
          return value * type.price;
        })
        .filter((value) => value !== null)
        .reduce((acc, curr) => acc + curr, 0);
    }, [personCounts, prices]) || 0;

  const onSubmit = async () => {
    if (totalPersons > 14) {
      toast.error("You are not allowed to book more than 14 tickets.", {});
      return;
    }
    if (totalPersons === 0) {
      toast.error("Please add atleast one ticket to the cart.", {});
      return;
    }
    setTourData({
      title: TOUR_TITLE + " (" + tourType + ")",
      date: new Date(data.date),
      time: data.time,
      persons: {
        ...personCounts,
      },
      prices,
      subTotal: total,
      tax: total * 0.06,
    });
    onClose();
    router.push(ROUTES.CHECKOUT);
  };

  return (
    <div className="border-[1px] border-[#E5E5E7] rounded-[10px] flex-1 h-full flex flex-col justify-between  overflow-hidden">
      <div className="flex flex-col w-full flex-1 overflow-y-auto lg:p-[32px] md:p-[24px] p-[12px]">
        <h2 className="text-[#323539] font-nohemi font-medium text-[20px]">
          Select your type
        </h2>
        <TourTypeSelector
          selectedTour={tourType}
          setSelectedTour={(tour) => {
            setTourType(tour as keyof typeof bookingTypes);
            setData({
              ...data,
              persons: {},
              time: "",
            });
          }}
          tours={bookingTypes}
        />
        {/* Date */}
        {tourType && (
          <div className="mb-6 w-full">
            <label
              className="text-[#323539] font-plus-jakarta-sans font-medium text-[15px] leading-[22px]"
              htmlFor="date"
            >
              Date
            </label>
            {!isMonthAvailable(data.date) && (
              <Message status="error">
                Tickets for this month are not currently available. Sign up to
                be the first in line!. Please{" "}
                <a
                  href="/join-wishlist/"
                  target="_blank"
                  className="!underline font-bold"
                >
                  join the wishlist
                </a>{" "}
                to be notified when tickets are available.
              </Message>
            )}
            <DatePicker
              date={data.date}
              filterDate={(date) => {
                return filterDate(date);
              }}
              className="p-[16px] min-h-[56px] mt-[4px]"
              onChange={(date) => {
                setData({
                  ...data,
                  date: date || new Date(),
                  time: "",
                });
              }}
              onMonthChange={(date) => {
                const firstOfMonth = new Date(date);
                firstOfMonth.setDate(1);
                setData({
                  ...data,
                  month: firstOfMonth,
                  date: firstOfMonth,
                });
              }}
              loading={false}
            />
          </div>
        )}

        {tourType && data.date && (
          <div className="mb-6 w-full">
            <label className="text-lg font-bold mb-3 block">Time</label>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-[15px] gap-[10px]">
              {!filterDate(data.date) ? (
                <Message status="error" className="col-span-2">
                  No Tickets Available for this date
                </Message>
              ) : (
                bookingType.times.map((t, index) => {
                  if (t === "2:45 PM" && data.date.getMonth() > 10) {
                    return null;
                  }
                  return (
                    <TimeSelector
                      key={index}
                      time={t}
                      setTime={() => {
                        setData({
                          ...data,
                          time: t,
                        });
                      }}
                      isSelected={t === data.time}
                    />
                  );
                })
              )}
            </div>
          </div>
        )}

        {data.time && (
          <div className="w-full space-y-2 mb-4 ">
            {personTypes?.map((type, index) => {
              return (
                <PersonSelector
                  key={index}
                  personType={type.type}
                  price={type.price}
                  availableSeats={14}
                  totalPersons={totalPersons}
                  max={type.max}
                  disabled={type.isAvailable && !type.isAvailable(personCounts)}
                  setValue={(values) => {
                    setData({
                      ...data,
                      persons: {
                        ...data.persons,
                        [type.type]: values,
                      },
                    });
                  }}
                  value={personCounts[type.type] || 0}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-[15px] border-t-[1px] border-[#E5E5E7] py-[12px] md:px-[24px] px-[12px]">
        <div className="flex items-center gap-[10px]">
          <h4 className="font-poppins text-[#25283E80] font-medium text-[14px] leading-[24px]">
            Total
          </h4>
          <p className="font-nohemi font-medium text-[14px] lg:text-[32px] leading-[20px] text-[#25283E]">
            ${total.toFixed(2)}
          </p>
        </div>
        <Button
          disabled={total === 0}
          variant="primary"
          icon={<MoveUpRight className="w-[20px] h-[20px]" />}
          onClick={onSubmit}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}

export default BookingForm;

// Helper to parse YYYY-MM-DD in local time (avoids UTC shifting issues)
const parseLocalYMD = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
};

const filterDate = (date: Date) => {
  // Allow only dates from Oct 1, 2025 through Dec 31, 2025, excluding skipped dates
  const normalize = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const d = normalize(date);
  const minDate = new Date(2025, 9, 8); // Oct 1, 2025
  const maxDate = new Date(2025, 11, 31); // Dec 31, 2025
  const isSkipped = datesToSkip
    .map((s) => parseLocalYMD(s))
    .some((skip) => normalize(skip).getTime() === d.getTime());
  return d >= minDate && d <= maxDate && !isSkipped;
};

const isMonthAvailable = (date: Date) => {
  // Only Oct–Dec 2025 are available months
  const month = date.getMonth();
  const year = date.getFullYear();
  if (year !== 2025) return false;
  if (month < 9) return false; // before October
  if (month > 11) return false; // beyond December
  return true;
};
