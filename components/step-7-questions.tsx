"use client";

import { useState } from "react";
import ButtonSelectComponent from "./button-select";

export const garageVehiculeOptions = [
  { value: "voie_pubique", label: "Voie publique" },
  { value: "parking_publique", label: "Parking publique" },
  { value: "garage", label: "Garage, garage fermé" },
  { value: "domicile", label: "Chemin privé ou jardin" },
];
interface Step7QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step7Questions({ onUpdateAnswers }: Step7QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        Où votre véhicule est-il habituellement garré ?
      </h2>
      <div className="space-y-2">
        <ButtonSelectComponent
          options={garageVehiculeOptions}
          value={answers["garageVehicule"]}
          onChange={(value) => handleInputChange("garageVehicule", value)}
        />
      </div>
    </div>
  );
}
