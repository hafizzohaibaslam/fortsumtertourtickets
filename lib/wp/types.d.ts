export interface WPOrder {
  id: number;
  billing: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
  line_items: {
    name: string;
    price: string;
    quantity: number;
    subtotal: string;
    total: string;
    meta_data: {
      key:
        | "_person_type"
        | "_person_quantity"
        | "_person_price"
        | "_service_fee"
        | "_operator_fee";
      value: string;
    }[];
  }[];
  meta_data: {
    key:
      | "tour_title"
      | "tour_date"
      | "cc_number"
      | "cc_expiry"
      | "cc_cvc"
      | "cc_name";
    value: string;
  }[];
  total: string;
  status: string;
  date_created: string;
  currency_symbol: string;
  date_created: string;
}

export type Post = {
  date: string;
  slug: string;
  status: string;
  type: string;
  featured_media?: number;
  yoast_head_json: {
    og_title: string;
    og_description: string;
  };
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered?: string;
  };
};

export type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
