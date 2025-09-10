import NumberInput from "./NumberInput";
import { Card } from "./ui/card";

interface PersonSelectorProps {
  personType: string;
  price: number;
  setValue: (value: number) => void;
  value: number;
  availableSeats: number;
  max: number;
  totalPersons: number;
  disabled?: boolean;
}

const PersonSelector = ({
  personType,
  price,
  setValue,
  availableSeats,
  max,
  value,
  totalPersons,
  disabled = false,
}: PersonSelectorProps) => {
  return (
    <Card className="flex bg-[#F9FAFB] border-[1px] border-[#E5E5E7] py-[15px] px-[22px] justify-between items-center gap-[12px] flex-row">
      <label
        className="font-plus-jakarta-sans font-semibold text-[14px] leading-[22px] flex flex-col gap-[2px] max-w-[65%] text-[#1F2024]"
        htmlFor={personType}
      >
        {personType} ${price.toFixed(2)}
      </label>
      <div
        className={`flex flex-col items-center gap-2 ${
          disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`}
      >
        <NumberInput
          step={1}
          value={value}
          max={max}
          availableSeats={availableSeats}
          totalPersons={totalPersons}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    </Card>
  );
};

export default PersonSelector;
