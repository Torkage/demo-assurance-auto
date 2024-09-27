"use client";

import { useState } from "react";
import ButtonSelectComponent from "./button-select";

export const usageVehiculeOptions = [
  { value: "prive", label: "Privé" },
  { value: "prive_commute", label: "Privé - pour aller au travail" },
  { value: "occasionnal_work", label: "Trajets professionnels occasionnels" },
  { value: "work", label: "Trajets professionnels réguliers" },
];
interface Step5QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step5Questions({ onUpdateAnswers }: Step5QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Utilisation de votre véhicule
      </h2>
      <div className="space-y-2">
        <ButtonSelectComponent
          options={usageVehiculeOptions}
          value={answers["usageVehicule"]}
          onChange={(value) => handleInputChange("usageVehicule", value)}
        />
      </div>
    </div>
  );
}
