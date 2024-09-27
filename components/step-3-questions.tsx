"use client";

import { useState } from "react";
import ButtonSelectComponent from "./button-select";

const typeAchatOptions = [
  { value: "neuf", label: "Propriétaire" },
  { value: "leasing", label: "Leasing LOA / LLD" },
];
interface Step3QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step3Questions({ onUpdateAnswers }: Step3QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-center font-bold">
        Comment avez-vous acheté votre véhicule ?
      </h2>
      <div className="space-y-2">
        <ButtonSelectComponent
          options={typeAchatOptions}
          value={answers["typeAchat"]}
          onChange={(value) => handleInputChange("typeAchat", value)}
        />
      </div>
    </div>
  );
}
