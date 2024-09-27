"use client";

import { useState } from "react";
import ButtonSelectComponent from "./button-select";

const typeSaisieInfosPermisOptions = [
  { value: "photo", label: "Je prends en photo mon permis de conduire" },
  { value: "custom", label: "Je renseigne manuellement les informations" },
];
interface Step8QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step8Questions({ onUpdateAnswers }: Step8QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Informations du permis de conduire
      </h2>
      <div className="space-y-2">
        <ButtonSelectComponent
          options={typeSaisieInfosPermisOptions}
          value={answers["typeSaisieInfosPermis"]}
          onChange={(value) =>
            handleInputChange("typeSaisieInfosPermis", value)
          }
        />
      </div>
    </div>
  );
}
