import { AlarmClock, Check, Hourglass, MapPin, X } from "lucide-react";
import Building from "@/public/landing-page/building.svg";
import Beach from "@/public/landing-page/beach.svg";
import { TOUR_DETAILS } from "@/lib/constants";
import { link } from "fs";
import { ServicesSectionCardData } from "../components/ServicesSectionCard";

export const cardsData = [
  {
    id: "1",
    title: "Patriots Point",
    image: "/landing-page/patriots.webp",
    link: "/patriots-point",
  },
  {
    id: "2",
    title: "Liberty Square",
    image: "/landing-page/liberty.webp",
    link: "/liberty-square",
  },
];

export const servicesSectionData: ServicesSectionCardData[] = [
  {
    id: "1",
    number: "01",
    title: "Patriots Point",
    subtitle: "Mount Pleasant",
    image: "/landing-page/patriots.webp",
    tourType: "From Patriots Point",
    description: "",
    tags: [
      {
        Icon: Hourglass,
        label: TOUR_DETAILS.dayTour.duration,
      },
      {
        Icon: AlarmClock,
        label: TOUR_DETAILS.dayTour.departureTime,
      },
      {
        Icon: MapPin,
        label: "40 Patriots Point Rd, Mt. Pleasant, SC 29464",
      },
    ],
    detailsList: [
      {
        Icon: Check,
        label: "30-min narrated Fort Sumter ferry across Charleston Harbor",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Ranger talks + Q&A at the fort",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "~1 hr exploring fort, museum, visitor centre exhibits",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Access to America's National Parks Store on site",
        iconClassName: "bg-[#25283E]",
      },
      {
        Icon: Check,
        label: "Waterfront & USS Yorktown views at ferry return",
        iconClassName: "",
      },
      {
        Icon: Check,
        label:
          "Visitors staying in Mt. Pleasant or combining with USS Yorktown & Naval Museum",
        iconClassName: "",
      },
    ],
  },
  {
    id: "2",
    number: "02",
    title: "Liberty Square",
    subtitle: "Downtown Charleston",
    image: "/landing-page/liberty.webp",
    tourType: "From Liberty Square",
    description: "",
    tags: [
      {
        Icon: Hourglass,
        label: TOUR_DETAILS.nightTour.duration,
      },
      {
        Icon: AlarmClock,
        label: TOUR_DETAILS.nightTour.departureTime,
      },
      {
        Icon: MapPin,
        label: "340 Concord St, Charleston, SC 29401",
      },
    ],

    detailsList: [
      {
        Icon: Check,
        label: "30-min Fort Sumter boat tour from downtown",
        iconClassName: "bg-[#25283E]",
      },
      {
        Icon: Check,
        label: "Ranger talks + live historic commentary during cruise",
        iconClassName: "",
      },

      {
        Icon: Check,
        label: "~1 hr exploring fort, museum exhibits, ranger talks",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Access to the gift shop & historic displays at the fort",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Charleston skyline & harbor views on return",
        iconClassName: "",
      },
      {
        Icon: Check,
        label:
          "Visitors staying downtown Charleston, near the Aquarium & Historic District",
        iconClassName: "",
      },
    ],
  },
];

export const customersCardData = [
  {
    id: "1",
    customerName: "Emily Johnson",
    customerJob: "Travel Blogger",
    customerImage: "/landing-page/customer1.png",
    description:
      "Standing where the first shots of the Civil War were fired gave me chills. The ranger talk brought history to life, and the ferry ride across Charleston Harbor was stunning. A must-do tour in Charleston!",
  },
  {
    id: "2",
    customerName: "Rachel Adams",
    customerJob: "Parent & Explorer",
    customerImage: "/landing-page/customer2.png",
    description:
      "Did the Fort Sumter tour with my family and even the kids were hooked. The ranger program was engaging for all ages, and the harbor views of the Ravenel Bridge were breathtaking. Highly recommend the Patriots Point departure!",
  },
  {
    id: "3",
    customerName: "Chris Martin",
    customerJob: "History Enthusiast",
    customerImage: "/landing-page/customer3.png",
    description:
      "One of the best historical tours I have ever taken. The ferry ride sets the tone perfectly, and walking through Fort Sumter with the exhibits and ranger commentary made the Civil War feel real. Best views of Charleston Harbor too.",
  },
  {
    id: "4",
    customerName: "Olivia Perez",
    customerJob: "College Student",
    customerImage: "/landing-page/customer4.png",
    description:
      "Booked the Fort Sumter tour from Liberty Square and it was incredible. The ferry ride was smooth, the harbor views were amazing, and exploring the fort's museum exhibits was super interesting. Totally worth every penny!",
  },
];

export const bookingModalType = [
  {
    id: "patriots-point",
    title: "From Patriots Point",
    image: Building,
  },
  {
    id: "liberty-square",
    title: "From Liberty Square",
    image: Beach,
  },
];

export const bookingModalTime = [
  {
    id: "1",
    time: "10:45 AM",
    seats: 293,
    description:
      "Wheelchair access is unavailable at Patriots Point due to boat maintenance.",
  },
  {
    id: "2",
    time: "1:30 PM",
    seats: 200,
    description:
      "Wheelchair access is unavailable at Liberty Square due to boat maintenance.",
  },
];
