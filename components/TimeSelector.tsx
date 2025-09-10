import clsx from "clsx";
import { Card } from "@/components/ui/card";
import { ClockFading } from "lucide-react";

const TimeSelector = ({
  time,
  setTime,
  isSelected,
}: {
  time: string;
  setTime: () => void;
  isSelected: boolean;
}) => {
  return (
    <div onClick={setTime} className={`space-y-[2px]`}>
      <Card>
        <div className="flex items-center gap-2">
          <ClockFading size={16} />
          <h1
            className={`text-base leading-tight font-bold flex items-center gap-1 whitespace-nowrap`}
          >
            {time}
          </h1>
          <div className="grid place-items-center border border-black p-0.5 rounded-full ml-auto">
            <span
              className={`bg-black rounded-full size-2 ${
                isSelected ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TimeSelector;
