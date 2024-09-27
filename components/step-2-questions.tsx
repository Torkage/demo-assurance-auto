"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Step2QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step2Questions({ onUpdateAnswers }: Step2QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Vehicle Details</h2>
      <div className="space-y-2">
        <Label htmlFor="make">Make</Label>
        <Input
          id="make"
          placeholder="Enter vehicle make"
          value={answers["make"] || ""}
          onChange={(e) => handleInputChange("make", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="model">Model</Label>
        <Input
          id="model"
          placeholder="Enter vehicle model"
          value={answers["model"] || ""}
          onChange={(e) => handleInputChange("model", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="year">Year</Label>
        <Input
          id="year"
          placeholder="Enter vehicle year"
          value={answers["year"] || ""}
          onChange={(e) => handleInputChange("year", e.target.value)}
        />
      </div>
    </div>
  );
}
