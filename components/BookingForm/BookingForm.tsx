"use client";

import { toast } from "sonner";
import { useMemo, useState } from "react";
import useEnabledDates from "@/hooks/useEnabledDates";
import Message from "@/components/Message";
import { BookingFormData } from "@/lib/types";
import TimeSelector from "../TimeSelector";
import PersonSelector from "../PersonSelector";
import { Moon, MoveUpRight, Sun } from "lucide-react";
import { DatePicker } from "../ui/date-picker";
import TourTypeSelector from "../TourTypeSelector";
import { convertTimeFormat } from "./functions";
import useCustomerRates from "@/hooks/useCustomerRates";
import { Skeleton } from "../ui/skeleton";
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
  },
  "From Liberty Square": {
    icon: <Moon size={20} />,
    id: 118097,
  },
};

const TOUR_TITLE = "Fort Sumter";

function BookingForm({ onClose }: { onClose: () => void }) {
  const { setTourData } = useBooking();
  const handleDateIncrementAfter16 = (date?: Date) => {
    const nowLocalTime = new Date(date || new Date());
    const nowESTString = nowLocalTime.toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    const nowEST = new Date(nowESTString);
    if (nowEST.getHours() >= 16) {
      nowEST.setDate(nowEST.getDate() + 1);
    }
    return new Date(nowEST);
  };

  const [data, setData] = useState<BookingFormData>({
    date: new Date(),
    month: new Date(),
    time: "",
    persons: {},
    prices: {},
    totalAmount: "0",
    totalPersons: 0,
    title: "",
    availableSeats: 0,
  });

  const { tourType, setTourType } = useGlobalContext();

  const bookingType = bookingTypes[tourType as keyof typeof bookingTypes];
  const router = useRouter();

  const { enabledDates, datesLoading: enabledDatesLoading } = useEnabledDates({
    year: data.date.toISOString().split("-")[0],
    month: data.date.toISOString().split("-")[1],
    bookingType: bookingType.id,
  });
  console.log("🚀 ~ BookingForm ~ enabledDates:", enabledDates);
  const monthAvailable = useMemo(
    () => Object.values(enabledDates).some((date) => date.is_bookable),
    [enabledDates]
  );

  const {
    customerRates,
    customerRatesLoading: availableTimesLoading,
    customerRatesError: availableTimesError,
  } = useCustomerRates(bookingType.id, [data.date, tourType]);

  const personCounts: Record<string, number> = {};
  const prices: Record<string, number> = {};
  let totalPersons = 0;
  customerRates?.forEach((price) => {
    personCounts[price[0]] = data.persons[price[0]] || 0;
    prices[price[0]] = price[1] || 0;
    totalPersons += personCounts[price[0]];
  });
  const total =
    useMemo(() => {
      return customerRates
        ?.map((price) => {
          const value = data.persons[price[0]] || 0;
          return value * price[1];
        })
        .filter((value) => value !== null)
        .reduce((acc, curr) => acc + curr, 0);
    }, [personCounts]) || 0;

  const formData = {
    title: TOUR_TITLE + " (" + tourType + ")",
    date: new Date(data.date).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }),
    time: data.time,
    persons: {
      ...personCounts,
    },
    prices,
    totalAmount: total.toFixed(2),
    totalPersons,
  };

  useEffect(() => {
    setData({ ...data, time: "" });
  }, [customerRates]);

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
              prices: {},
              totalAmount: "0",
              totalPersons: 0,
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
            {!enabledDatesLoading && !monthAvailable && (
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
                return enabledDates[date.toDateString()]?.is_bookable;
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
              loading={enabledDatesLoading}
            />
          </div>
        )}

        {tourType &&
        !enabledDatesLoading &&
        data.date &&
        enabledDates[data.date.toDateString()]?.is_bookable ? (
          <div className="mb-6 w-full">
            <label className="text-lg font-bold mb-3 block">Time</label>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-[15px] gap-[10px]">
              {!enabledDates[data.date.toDateString()]?.is_bookable &&
                !availableTimesLoading && (
                  <Message status="error" className="col-span-2">
                    No Tickets Available for this date
                  </Message>
                )}
              {availableTimesLoading ? (
                <>
                  {Array(10)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton
                        key={index}
                        className="w-full h-10 rounded-md"
                      />
                    ))}
                </>
              ) : (
                enabledDates[data.date.toDateString()].availabilities.map(
                  (t, index) => {
                    const start_at = convertTimeFormat(
                      new Date(t.utc_start_at)
                    );
                    return (
                      <TimeSelector
                        key={index}
                        time={{
                          time: start_at,
                          availableSeats: t.bookable_capacity,
                          vacancy: t.bookable_capacity,
                        }}
                        setTime={() => {
                          setData({
                            ...data,
                            time: start_at,
                            availableSeats: t.bookable_capacity,
                          });
                        }}
                        isSelected={start_at === data.time}
                      />
                    );
                  }
                )
              )}
            </div>
          </div>
        ) : (
          <Message status="error">
            Tickets for this date are not currently available. Please select a
            different date.
          </Message>
        )}

        {data.time && (
          <div className="w-full space-y-2 mb-4 ">
            {customerRates?.map((price, index) => {
              return (
                <PersonSelector
                  key={index}
                  personType={price[0]}
                  price={price[1]}
                  max={data.availableSeats - totalPersons}
                  setValue={(values) => {
                    setData({
                      ...data,
                      persons: {
                        ...data.persons,
                        [price[0]]: values,
                      },
                    });
                  }}
                  value={data.persons[price[0]] || 0}
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
