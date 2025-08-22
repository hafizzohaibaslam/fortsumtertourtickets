import clsx from "clsx";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Tour {
  icon: React.ReactNode;
  id: number;
}

interface TourTypeSelectorProps {
  tours: Record<string, Tour>;
  selectedTour: string;
  setSelectedTour: (tour: string) => void;
}

const TourTypeSelector = ({
  tours,
  selectedTour,
  setSelectedTour,
}: TourTypeSelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-[15px] mt-[15px] mb-[24px] w-full">
      {Object.entries(tours).map(([key, tour], index) => (
        <Card
          key={index}
          onClick={() => setSelectedTour(key)}
          className={clsx(
            "relative cursor-pointer hover:bg-[#25283E0D] transition-all duration-300  md:h-[128px] h-[100px] flex flex-col items-center justify-center gap-[10px]",
            selectedTour === key && "bg-[#25283E0D]"
          )}
        >
          {selectedTour === key && (
            <div className="absolute top-[8px] right-[9px] bg-black rounded-full p-1">
              <Check size={10} className="text-white" />
            </div>
          )}
          <CardContent className="flex flex-col items-center justify-center gap-2">
            {tour.icon}
            <h2 className="text-[#25283E] font-plus-jakarta-sans font-semibold text-[14px] leading-[100%] -tracking-[1%]">
              {key}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TourTypeSelector;
