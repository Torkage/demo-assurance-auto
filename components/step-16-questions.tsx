"use client";

import { useState } from "react";
import ButtonSelectComponent from "./button-select";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const modePaiementOptions = [
  { value: "cb", label: "Carte Bleue" },
  { value: "sepa", label: "Virement SEPA" },
];

interface Step16QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step16Questions({ onUpdateAnswers }: Step16QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-8 min-w-[400px]">
      <h2 className="text-xl text-center font-bold">Paiement</h2>
      <div className="space-y-4">
        <Label className="w-100 block">Choisissez votre mode de paiement</Label>
        <ButtonSelectComponent
          options={modePaiementOptions}
          value={answers["modePaiement"]}
          onChange={(value) => handleInputChange("modePaiement", value)}
        />
      </div>
      {answers["modePaiement"] === "cb" && (
        <div className="space-y-4">
          <Label className="w-100 block">Informations de carte bancaire</Label>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="Numéro de carte"
              onChange={(e) => handleInputChange("numeroCarte", e.target.value)}
              className="flex-1"
            />
            <Input
              type="text"
              placeholder="MM/AA"
              onChange={(e) =>
                handleInputChange("expirationDate", e.target.value)
              }
              className="w-24"
            />
            <Input
              type="text"
              placeholder="CVV"
              onChange={(e) => handleInputChange("cvv", e.target.value)}
              className="w-16"
            />
          </div>
        </div>
      )}
    </div>
  );
}
