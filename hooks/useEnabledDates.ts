import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Calendar, Day } from "../lib/types";

interface EnabledDatesProps {
  year: string;
  month: string;
  bookingType: number;
}

const useEnabledDates = ({ year, month, bookingType }: EnabledDatesProps) => {
  const [loading, setLoading] = useState(false);
  const [enabledDates, setEnabledDates] = useState<Record<string, Day>>({});
  const [error, setError] = useState<string | null>(null);
  const [isMonthAvailable, setIsMonthAvailable] = useState(false);

  useEffect(() => {
    const fetchDates = async () => {
      setLoading(true);
      try {
        const res = await axios.get<{
          calendar: Calendar;
        }>(
          "https://corsproxy.io/?url=" +
            encodeURIComponent(
              "https://fareharbor.com/api/v1/companies/fortsumtertours/items/" +
                bookingType +
                "/calendar/" +
                year +
                "/" +
                month +
                "/?allow_grouped=yes&bookable_only=no&asn="
            )
        );
        let monthFlag = false;
        const flatenDays = res.data.calendar.weeks.flatMap((week) => week.days);
        const datesMap = flatenDays.reduce((acc: Record<string, Day>, curr) => {
          acc[new Date(curr.at).toDateString()] = curr;
          if (curr.is_bookable) monthFlag = true;
          return acc;
        }, {});
        setEnabledDates(datesMap);
        setIsMonthAvailable(monthFlag);
      } catch (e) {
        setEnabledDates({});
        if (e instanceof AxiosError) setError(e.response?.data.message);
      } finally {
        setLoading(false);
      }
    };
    if (bookingType) fetchDates();
  }, [bookingType, year, month]);

  return {
    enabledDates,
    datesLoading: loading,
    datesError: error,
    isMonthAvailable,
  } as const;
};

export default useEnabledDates;
