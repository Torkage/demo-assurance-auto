"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label: string;
}

interface ButtonSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function ButtonSelectComponent({
  options,
  value,
  onChange,
  className,
}: ButtonSelectProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center",
        className
      )}
      role="radiogroup"
    >
      {options.map((option) => (
        <Button
          key={option.value}
          variant={value === option.value ? "default" : "outline"}
          onClick={() => onChange(option.value)}
          aria-checked={value === option.value}
          role="radio"
          className="w-full max-h-[auto] p-4 min-h-[80px]"
          style={{ textWrap: "wrap" }}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
