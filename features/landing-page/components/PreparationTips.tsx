import Image from "next/image";
import React from "react";

const PreparationTips = ({ tour }: { tour: string }) => {
  return (
    <div className="flex flex-col gap-[40px] md:mt-[40px]  md:mb-[100px] mb-[40px] py-[32px] lg:px-[51px]">
      <h1 className="text-[#25283E] font-nohemi font-medium md:text-[36px] text-[26px]  leading-[42px] lg:text-[40px] lg:leading-[54px] -tracking-[1%]">
        Why Choose Fort Sumter Tours from Patriots Point?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {tour === "liberty"
          ? preparationTipsData1.map((item) => (
              <PreparationTipsCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))
          : preparationTipsData.map((item) => (
              <PreparationTipsCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
      </div>
    </div>
  );
};

type PreparationTipsCardProps = {
  title: string;
  description: string;
  image: string;
};

const PreparationTipsCard = ({
  title,
  description,
  image,
}: PreparationTipsCardProps) => {
  return (
    <div className="bg-white p-[25px] rounded-[14px] space-y-[20px]">
      <div className="min-w-[48px] w-fit h-fit min-h-[48px] bg-[#25283E] rounded-full flex items-center justify-center p-[12px]">
        <Image
          src={image}
          alt="Preparation Tips"
          width={24}
          height={24}
          className="w-[24px] h-[24px] object-cover"
        />
      </div>
      <div className="space-y-[5px]">
        <h2 className="font-nohemi font-medium text-[20px] leading-[22px] tracking-[0.2px] text-[#25283E]">
          {title}
        </h2>
        <p className="font-plus-jakarta-sans font-normal md:text-[14px] text-[14px] leading-[24px] text-[#25283EB2]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PreparationTips;

export const preparationTipsData = [
  {
    id: "1",
    title: "Convenient Access from Mount Pleasant",
    description:
      "Fort Sumter tours from Patriots Point are just perfect for visitors outside Charleston. In Mount Pleasant, across the Ravenel Bridge, Patriots Point offers direct car access with ample parking. Families, groups, and travelers enjoy a peaceful start with less city traffic while boarding the Fort Sumter ferry with ease.",
    image: "/ticket.png",
  },
  {
    id: "2",
    title: "Harbor Ferry Experience",
    description:
      "The ferry ride on Fort Sumter tours from Patriots Point delivers the best views of Charleston Harbor, like the USS Yorktown, Ravenel Bridge, and skyline. More than just a trip, the Fort Sumter ferry provides a wow experience. Travelers enjoy both history and scenery. This makes every Fort Sumter tour memorable from departure to return.",
    image: "/boat.png",
  },
  {
    id: "3",
    title: "Combine with Patriots Point Naval & Maritime Museum",
    description:
      "Fort Sumter tours from this Point offer the cool benefit of visiting the Patriots Point Naval & Maritime Museum. At the same site, guests can explore the USS Yorktown, a submarine, and historic aircraft. Along with a Fort Sumter tour, the museum exhibits create a full day of history for families, groups, and enthusiasts.",
    image: "/museum.png",
  },
  {
    id: "4",
    title: "Less Crowded Than Liberty Square Departures",
    description:
      "Many visitors choose tours from Patriots Point because departures are often less crowded than Liberty Square. Boarding is smoother, with shorter lines and a calmer process. Families with children and larger groups appreciate the convenience, making Patriots Point the preferred choice when booking a Fort Sumter tour.",
    image: "/crowd.png",
  },
  {
    id: "5",
    title: "Flexible Departure Times",
    description:
      "Fort Sumter tours run on a schedule with morning and afternoon options. Each tour is about 2 hours and 15 minutes, with ferry travel and one hour at the fort. This flexibility lets visitors plan around other Charleston activities. Booking Fort Sumter tours early secures preferred times.",
    image: "/clock.png",
  },
];

export const preparationTipsData1 = [
  {
    id: "1",
    title: "Central Location in Downtown Charleston",
    description:
      "From Liberty Square, Fort Sumter tours are perfect for visitors staying in Charleston’s historic district. This point is all bordered by hotels, restaurants, and popular attractions within easy walking distance. Its central location saves time. This makes it the most convenient choice for exploring the city and joining a Fort Sumter tour.",
    image: "/ticket.png",
  },
  {
    id: "2",
    title: "Easy Public Access and Parking",
    description:
      "Liberty Square offers excellent access for those without a car, just because of nearby parking garages and public transportation connections. Unlike Patriots Point, it’s located right in downtown Charleston. Because of this, it is simple to reach by foot, shuttle, or bus. This easy setup causes smooth travel to your ferry.",
    image: "/boat.png",
  },
  {
    id: "3",
    title: "Views from Liberty Square",
    description:
      "Leaving from Liberty Square gives you wide views of Charleston’s waterfront. As the boat moves out, you can see the Ravenel Bridge, historic homes along the Battery, and the busy harbor with boats and ships. It’s a great way to start your trip to Fort Sumter.",
    image: "/museum.png",
  },
  {
    id: "4",
    title: "Best Option for First-Time Visitors",
    description:
      "For first-time visitors to Charleston, Liberty Square departures are the easiest choice. You don’t need to cross the Ravenel Bridge to reach Mount Pleasant, saving travel time. Also, Liberty Square is very next to top spots like the South Carolina Aquarium and the waterfront park, perfect for combining activities.",
    image: "/crowd.png",
  },
  {
    id: "5",
    title: "Flexible Departure Times",
    description:
      "Fort Sumter tours run on a schedule with morning and afternoon options. Each tour is about 2 hours and 15 minutes, with ferry travel and one hour at the fort. This flexibility lets visitors plan around other Charleston activities. Booking Fort Sumter tours early secures preferred times.",
    image: "/clock.png",
  },
];
