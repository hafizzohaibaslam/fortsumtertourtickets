import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Price, StructuredDescription } from "../lib/types";

const useAvailableTimes = (bookingType: number, deps: unknown[]) => {
  const [loading, setLoading] = useState(true);
  const [customerRates, setCustomerRates] = useState<Price[] | []>([]);
  console.log("🚀 ~ useAvailableTimes ~ customerRates:", customerRates);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDates = async () => {
      console.log("🚀 ~ fetching rates");
      setLoading(true);
      try {
        const res = await axios.get<StructuredDescription>(
          "https://corsproxy.io/?url=" +
            encodeURIComponent(
              `https://fareharbor.com/api/items/v1/fortsumtertours/${bookingType}/structured-description/`
            )
        );
        const prices = res.data.pricing.split("\n").map((item) => {
          const priceDetail = item.replace("• ", "").split(": ");
          console.log("🚀 ~ prices ~ priceDetail:", priceDetail);

          const name = priceDetail[0];
          if (!name) return null;
          console.log("🚀 ~ prices ~ name:", name);
          let price = Number(priceDetail[1].replace("$", "").replace(":", "."));
          if (isNaN(price)) {
            price = 0;
          }
          return [name, price] as Price;
        });
        console.log("Prices:", prices);
        setCustomerRates(prices.filter((price) => price !== null));
      } catch (e) {
        if (e instanceof AxiosError) setError(e.response?.data.message);
        console.error("🚀 ~ fetching rates ~ error:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchDates();
  }, [...deps]);

  return {
    customerRates,
    customerRatesLoading: loading,
    customerRatesError: error,
  };
};

export default useAvailableTimes;
