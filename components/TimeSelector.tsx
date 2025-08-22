import clsx from "clsx";
import { Card } from "@/components/ui/card";
import { ClockFading } from "lucide-react";

const TimeSelector = ({
  time,
  setTime,
  isSelected,
}: {
  time: {
    time: string;
    availableSeats: number;
    headline?: string;
    vacancy: number;
  };
  setTime: () => void;
  isSelected: boolean;
}) => {
  const disabled = time.availableSeats === 0 || time.vacancy === 0;
  return (
    <div
      onClick={setTime}
      className={`space-y-[2px] ${
        disabled ? "opacity-20 pointer-events-none" : ""
      }`}
    >
      {disabled ? (
        <h3 className="text-xs">Sold out</h3>
      ) : (
        <h3 className="text-xs">{time.availableSeats} seats available</h3>
      )}
      <Card>
        <div className="flex items-center gap-2">
          <ClockFading size={16} />
          <h1
            className={`text-base leading-tight font-bold flex items-center gap-1 whitespace-nowrap`}
          >
            {time.time}
          </h1>
          {!disabled && (
            <div className="grid place-items-center border border-black p-0.5 rounded-full ml-auto">
              <span
                className={`bg-black rounded-full size-2 ${
                  isSelected ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          )}
        </div>
      </Card>
      {time.headline && (
        <span className="text-[10px] text-gray-400 block mt-2">
          {time.headline}
        </span>
      )}
    </div>
  );
};

export default TimeSelector;
