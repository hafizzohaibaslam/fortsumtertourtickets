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
      //location
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

      // {
      //   Icon: X,
      //   label: "No access to special areas",
      //   iconClassName: "bg-[#FF383C]",
      // },
      // {
      //   Icon: X,
      //   label: "No access to evening programs",
      //   iconClassName: "bg-[#FF383C]",
      // },
      {
        Icon: Check,
        label: "Access to America’s National Parks Store on site",
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
      "I didn’t expect to love it this much. Walking through the old prison blocks with real voices in your ears felt surreal. The stories felt so real.",
  },
  {
    id: "2",
    customerName: "Rachel Adams",
    customerJob: "Parent & Explorer",
    customerImage: "/landing-page/customer2.png",
    description:
      "Did the Alcatraz island tour with my family, even the kids were hooked. The audio tour was wild — hearing real prisoner stories was insane. Plus, those views of San Francisco? unexplainable…",
  },
  {
    id: "3",
    customerName: "Chris Martin",
    customerJob: "Backpacker",
    customerImage: "/landing-page/customer3.png",
    description:
      "Honestly, one of the few tourist traps across the world worth visiting. 100%, the audio tour is really cool, like seriously great… best view of the city and bridge.",
  },
  {
    id: "4",
    customerName: "Olivia Perez",
    customerJob: "College Student",
    customerImage: "/landing-page/customer4.png",
    description:
      "Booked the Alcatraz day tour with my friends and it was crazy good. The ferry ride was smooth, the views were lit awesome, and walking inside the old prison gave me actual chills. Totally worth it!",
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
