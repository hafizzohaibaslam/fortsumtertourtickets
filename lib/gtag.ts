// lib/gtag.ts

// Declare the gtag typing directly in this file
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const ADS_ID = "AW-17505680030";
export const PURCHASE_LABEL = "ABCDefghijkLmnoPQR";

export function reportPurchase(value: number, currency = "USD") {
  if (typeof window === "undefined") return; // SSR guard
  window.gtag?.("event", "Purchase", {
    send_to: `${ADS_ID}/${PURCHASE_LABEL}`,
    value,
    currency,
  });
}
