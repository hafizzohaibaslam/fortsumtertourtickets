import clsx from "clsx";
import { useId } from "react";
import { Minus, Plus, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface NumberInputProps {
  value: number;
  step: number;
  onChange: (value: number) => void;
  max?: number | undefined;
}

const NumberInput = ({
  value,
  step,
  onChange,
  max = undefined,
}: NumberInputProps) => {
  const id = useId();
  const canStepUp = max ? max > 0 : false;
  const canStepDown = value > 0;

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
      <input
        type="number"
        id={id}
        value={value}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="pointer-events-none w-full max-w-10 text-center !border-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
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
