type STATUS = "completed" | "pending" | "in-progress";

export type Order = {
  id: string;
  date: string;
  status: STATUS;
  total: number;
  items: {
    name: string;
    time: string;
    adults: string;
    children: string;
    juniors: string;
    seniors: string;
    serviceCharges: string;
  };
};

export const ordersData: Order[] = [
  {
    id: "345675",
    date: "02/12/2025",
    status: "completed",
    total: 650,
    items: {
      name: "Alcatraz Reservation",
      time: "09:40 AM",
      adults: "1 x 47.95",
      children: "2 x 29.15",
      juniors: "2 x 29.15",
      seniors: "2 x 29.15",
      serviceCharges: "39.75",
    },
  },
  {
    id: "345676",
    date: "02/12/2025",
    status: "pending",
    total: 650,
    items: {
      name: "Alcatraz Reservation",
      time: "09:40 AM",
      adults: "1 x 47.95",
      children: "2 x 29.15",
      juniors: "2 x 29.15",
      seniors: "2 x 29.15",
      serviceCharges: "39.75",
    },
  },
  {
    id: "345677",
    date: "02/12/2025",
    status: "in-progress",
    total: 650,
    items: {
      name: "Alcatraz Reservation",
      time: "09:40 AM",
      adults: "1 x 47.95",
      children: "2 x 29.15",
      juniors: "2 x 29.15",
      seniors: "2 x 29.15",
      serviceCharges: "39.75",
    },
  },
  {
    id: "345678",
    date: "02/12/2025",
    status: "pending",
    total: 650,
    items: {
      name: "Alcatraz Reservation",
      time: "09:40 AM",
      adults: "1 x 47.95",
      children: "2 x 29.15",
      juniors: "2 x 29.15",
      seniors: "2 x 29.15",
      serviceCharges: "39.75",
    },
  },
];
