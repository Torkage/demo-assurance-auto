"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const moisAchat = [
  { value: "janvier", label: "Janvier" },
  { value: "fevrier", label: "Février" },
  { value: "mars", label: "Mars" },
  { value: "avril", label: "Avril" },
  { value: "mai", label: "Mai" },
  { value: "juin", label: "Juin" },
  { value: "juillet", label: "Juillet" },
  { value: "aout", label: "Août" },
  { value: "septembre", label: "Septembre" },
  { value: "octobre", label: "Octobre" },
  { value: "novembre", label: "Novembre" },
  { value: "decembre", label: "Décembre" },
];

const anneeAchat = [
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
];

interface Step4QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step4Questions({ onUpdateAnswers }: Step4QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Quand avez-vous acheté votre véhicule ?
      </h2>
      <div className="space-y-2">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <Label htmlFor="mois">Mois</Label>
            <Select onValueChange={(value) => handleInputChange("mois", value)}>
              <SelectTrigger id="mois" className="mt-1 w-full">
                <SelectValue placeholder="Sélectionnez un mois" />
              </SelectTrigger>
              <SelectContent>
                {moisAchat.map((mois) => (
                  <SelectItem key={mois.value} value={mois.value}>
                    {mois.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Label htmlFor="annee">Année</Label>
            <Select
              onValueChange={(value) => handleInputChange("annee", value)}
            >
              <SelectTrigger id="annee" className="mt-1 w-full">
                <SelectValue placeholder="Sélectionnez une année" />
              </SelectTrigger>
              <SelectContent>
                {anneeAchat.map((annee) => (
                  <SelectItem key={annee.value} value={annee.value}>
                    {annee.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
