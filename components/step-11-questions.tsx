"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface Step11QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step11Questions({ onUpdateAnswers }: Step11QuestionsProps) {
  //default date today
  const [answers, setAnswers] = useState<Record<string, string>>({
    dateEffetContrat: new Date().toISOString().split("T")[0],
  });

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Date d&apos;effet du contat
      </h2>
      <div className="space-y-2">
        <div>
          <Label>
            À quelle date souhaitez-vous que votre contrat d&apos;assurance
            prenne effet ?
          </Label>
        </div>
        <div className="flex">
          <Input
            type="date"
            className="max-w-[140px] mx-auto"
            value={answers["dateEffetContrat"]}
            onChange={(e) =>
              handleInputChange("dateEffetContrat", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}
