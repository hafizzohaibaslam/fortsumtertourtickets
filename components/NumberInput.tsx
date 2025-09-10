import clsx from "clsx";
import { useId } from "react";
import { Minus, Plus, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface NumberInputProps {
  value: number;
  step: number;
  onChange: (value: number) => void;
  availableSeats?: number;
  totalPersons?: number;
  max?: number;
}

const NumberInput = ({
  value,
  step,
  onChange,
  availableSeats = 0,
  totalPersons = 0,
  max = 0,
}: NumberInputProps) => {
  const id = useId();
  const canStepUp = totalPersons < availableSeats && value < max;
  const canStepDown = value > 0;
  console.log("🚀 ~ NumberInput ~ canStepDown:", canStepDown);
  console.log("🚀 ~ NumberInput ~ canStepUp:", canStepUp);

  const handleStepUp = () => canStepUp && onChange(value + step);
  const handleStepDown = () => canStepDown && onChange(value - step);

  return (
    <div className="flex items-center gap-0">
      <button
        className={cn(
          "bg-[#F3F4F6] w-[28px] h-[28px] rounded-full flex items-center justify-center   text-2xl cursor-pointer hover:bg-[#E5E5E7]",
          !canStepDown && "opacity-50 cursor-not-allowed"
        )}
        onClick={handleStepDown}
      >
        <Minus size={10} />
      </button>
      <span className="px-2">{value}</span>
      <button
        className={cn(
          "bg-[#F3F4F6] w-[28px] h-[28px] rounded-full flex items-center justify-center  text-[#1F2A37] text-2xl cursor-pointer hover:bg-[#E5E5E7]",
          !canStepUp && "opacity-50 cursor-not-allowed"
        )}
        onClick={handleStepUp}
      >
        <Plus size={10} />
      </button>
    </div>
  );
};

export default NumberInput;
