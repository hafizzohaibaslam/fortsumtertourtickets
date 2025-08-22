import { AlarmClock, Check, Hourglass, MapPin, X } from "lucide-react";
import Building from "@/public/landing-page/building.svg";
import Beach from "@/public/landing-page/beach.svg";
import { TOUR_DETAILS } from "@/lib/constants";
import { link } from "fs";
import { ServicesSectionCardData } from "../components/ServicesSectionCard";

export const cardsData = [
  {
    id: "1",
    title: "Alcatraz day tour",
    image: "/landing-page/day-tour.webp",
    link: "/alcatraz-day-tour",
  },
  {
    id: "2",
    title: "Alcatraz night tour",
    image: "/landing-page/night-tour.webp",
    link: "/alcatraz-night-tour",
  },
];

export const servicesSectionData: ServicesSectionCardData[] = [
  {
    id: "1",
    number: "01",
    title: "Explore Alcatraz Day Tour",
    image: "/landing-page/card11.webp",
    tourType: "Day Tour",
    description:
      "If you want to explore Alcatraz without any time limit, the Day tour is for you. A day tour provides you with a majestic view of both the outdoors and indoors. Explore the historic cell house, the island's secrets, at your own pace. ",
    tags: [
      {
        Icon: Hourglass,
        label: TOUR_DETAILS.dayTour.duration,
      },
      {
        Icon: AlarmClock,
        label: TOUR_DETAILS.dayTour.departureTime,
      },
    ],
    detailsList: [
      {
        Icon: Check,
        label: "Guided stories on escape attempts, island facts",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Audio Tour inside the prison (in 10+ languages)",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Free time in gardens, lighthouse, and museum",
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
        label: "San Francisco & Golden Gate views",
        iconClassName: "bg-[#25283E]",
      },
      {
        Icon: Check,
        label: "Larger groups, more visitors",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "The Big Lockup & New Industries Building",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Families, first-time visitors, sightseeing lovers",
        iconClassName: "",
      },
    ],
  },
  {
    id: "2",
    number: "02",
    title: "Journey to Alcatraz Night Tour",
    image: "/landing-page/alcatraz-22.webp",
    tourType: "Night Tour",
    description:
      "Indulged in the most mesmerizing views on the night tour of Alcatraz Island, when the sun set, Alcatraz turned itself from a historical monument to a shadowy, gloomy building. With the dim lights of dark prison cells, shadows turn long.",
    tags: [
      {
        Icon: Hourglass,
        label: TOUR_DETAILS.nightTour.duration,
      },
      {
        Icon: AlarmClock,
        label: TOUR_DETAILS.nightTour.departureTime,
      },
    ],

    detailsList: [
      {
        Icon: Check,
        label: "Night narration about Alcatraz history",
        iconClassName: "bg-[#25283E]",
      },
      {
        Icon: Check,
        label: "Same audio tour + access to hidden cell blocks",
        iconClassName: "",
      },

      {
        Icon: Check,
        label:
          "Visit secret spots like hospital, Civil War buildings, lighthouse ruins",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Night-only access to restricted areas",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Talks about guards, prisoners, and escape stories",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Stunning skyline & bridge views at sunset/night",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "Same exhibits included",
        iconClassName: "",
      },
      {
        Icon: Check,
        label: "History lovers, photographers, night explorers",
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
