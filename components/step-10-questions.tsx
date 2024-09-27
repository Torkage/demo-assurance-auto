"use client";

import { useState } from "react";
import ButtonSelectComponent from "./button-select";

interface Step10QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step10Questions({ onUpdateAnswers }: Step10QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Disposez-vous d'un bonus/malus ?
      </h2>
      <div className="space-y-2">
        <ButtonSelectComponent
          options={[
            { label: "Sans bonus/malus", value: "0" },
            { label: "Avec bonus/malus", value: "1" },
          ]}
          value={answers["bonus_malus"]}
          onChange={(value) => handleInputChange("bonus_malus", value)}
        />
      </div>
    </div>
  );
}
