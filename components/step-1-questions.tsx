"use client";

import { useState } from "react";
import ButtonSelectComponent from "./button-select";

interface Step1QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}
const typeRechercheOptions = [
  { value: "immatriculation", label: "Je connais mon N° d'immatriculation" },
  { value: "manuel", label: "Je saisi moi-même les informations" },
];

export function Step1Questions({ onUpdateAnswers }: Step1QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">Trouver mon véhicule</h2>
      <div className="space-y-4 flex justify-center flex-col">
        <h3 className="text-lg font-normal text-center">
          Pour gagner du temps, cherchez votre véhicule grâce à son numéro
          d&apos;immatriculation
        </h3>
        <ButtonSelectComponent
          options={typeRechercheOptions}
          value={answers["color"] || typeRechercheOptions[0].value}
          onChange={(e: string) => handleInputChange("color", e)}
        />
      </div>
    </div>
  );
}
