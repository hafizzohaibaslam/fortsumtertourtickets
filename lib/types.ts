// ============Form Sumter types start============ //
export interface DayAvailability {
  pk: number;
  start_at: string;
  end_at: string;
  utc_start_at: string;
  utc_end_at: string;
  unavailable: boolean;
  name: string;
  sold_out_text: string;
  tag: string;
  has_customers: boolean;
  approximate_available_capacity: number;
  is_unlisted: boolean;
  bookable_capacity: number;
  custom_headline?: string;
}

export interface Day {
  pk: number;
  month: "current" | "other";
  number: number;
  name: string;
  at: string;
  count: number;
  availabilities: DayAvailability[];
  is_bookable: boolean;
}

export interface Calendar {
  year: number;
  month: number;
  weeks: {
    days: Day[];
    number: number;
  }[];
}

//Customer Rates
export interface CustomerRate {
  pk: number;
  has_customers: boolean;
  customer_prototype: {
    customer_type: {
      name: string;
      note: string;
    };
  };
}

export interface CustomerRatesResponse {
  availability: {
    customer_type_rates: CustomerRate[];
  };
}

export interface StructuredDescription {
  pricing: string;
}

export type Price = [string, number];

// ============Form Sumter types end============ //

export interface TourTime {
  time: string;
  availableSeats: number;
  vacancy: number;
}

export interface TourType {
  name: string;
  prices: {
    [personType: string]: number;
  };
  enabledDates: Date[];
  times: [];
  additionalCharges?: {
    name: string;
    calcFn: (total: number) => number;
  }[];
}

export interface TourData {
  title: string;
  date: Date;
  time?: string;
  persons: Record<string, number>;
  prices: Record<string, number>;
  subTotal: number;
  tax: number;
}

export interface CheckoutData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subscribe: boolean;
  country: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  ccNumber: string;
  ccExpiry: string;
  ccCvc: string;
}

export interface BookingFormData {
  title: string;
  date: Date;
  month: Date;
  time?: string;
  persons: Record<string, number>;
  prices: Record<string, number>;
  totalAmount: string;
  totalPersons: number;
  availableSeats: number;
}

export type AccordianItem = {
  id: string;
  question: string;
  answer: string;
};
