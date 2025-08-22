import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React, { useRef } from "react";

type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full max-w-[500px]">
      <Search className="absolute w-5 h-5 left-2 top-1/2 -translate-y-1/2 text-[#696969]" />
      <input
        type="search"
        placeholder="Enter email to search order"
        ref={ref}
        defaultValue={search}
        className="w-full pl-8 border-[1px] border-[#E7E9EB] rounded-[10px] outline-none hover:border-[#B7B7B7] p-[18px] bg-transparent md:text-[16px] text-[14px] font-plus-jakarta-sans font-normal text-[#696969] placeholder:text-[#696969]"
      />
      <Button
        variant="outline"
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={() => {
          setSearch(ref.current?.value || search);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
