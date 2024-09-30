"use client";

import { useState } from "react";
import ButtonSelectComponent from "./button-select";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox"; // Importing Checkbox from shadcn
import { priceOptions } from "./step-12-questions";
import { Loader2 } from "lucide-react";

const modePaiementOptions = [
  { value: "cb", label: "Carte Bleue" },
  { value: "sepa", label: "Virement SEPA" },
];

interface Step16QuestionsProps {
  formData: Record<string, string>;
  onUpdateAnswers: (answers: Record<string, string>) => void;
  onPay: () => void;
}

export function Step16Questions({
  formData,
  onUpdateAnswers,
  onPay,
}: Step16QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [optIn, setOptIn] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  const handleOptInChange = (checked: boolean) => {
    setOptIn(checked);
  };

  const handleClickPay = () => {
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      onPay();
    }, 3000);
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
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="opt-in"
            checked={optIn}
            onCheckedChange={handleOptInChange}
          />
          <Label htmlFor="opt-in">
            J&apos;accepte que mes informations soient utilisées dans le cadre
            de ma demande
          </Label>
        </div>
        {optIn && (
          <Button
            className="w-full max-h-auto min-h-[50px]"
            onClick={handleClickPay}
            disabled={isPaying}
          >
            {isPaying ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" size={24} />
                Paiement en cours
              </>
            ) : (
              <>
                Payer{" "}
                {priceOptions.find((p) => p.title === formData.plan)?.price} €
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
