"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  date,
  onChange,
  className,
  loading,
  onMonthChange,
  filterDate,
}: {
  date: Date;
  onChange: (date: Date | undefined) => void;
  className?: string;
  loading?: boolean;
  onMonthChange?: (date: Date) => void;
  filterDate?: (date: Date) => boolean;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          {loading && <Loader2 className="animate-spin size-4 ml-auto" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {!loading && (
          <Calendar
            mode="single"
            selected={date}
            onSelect={onChange}
            initialFocus
            onMonthChange={onMonthChange}
            disabled={(date) => !filterDate?.(date)}
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
