"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PriceOption {
  title: string;
  price: number;
  annualSavings: number;
  features: { name: string; included: boolean }[];
  recommended?: boolean;
}

const priceOptions: PriceOption[] = [
  {
    title: "Tiers",
    price: 46.37,
    annualSavings: 52.08,
    features: [
      { name: "Assistance +30Km", included: true },
      { name: "Garanties essentielles", included: true },
      { name: "Bris de glaces", included: false },
      { name: "Vol", included: false },
      { name: "Incendie", included: false },
      { name: "Attentats", included: false },
      { name: "Dommages tous accidents", included: false },
      { name: "Objets et effets personnels", included: false },
      { name: "Catastrophes naturelles & technologiques", included: false },
    ],
  },
  {
    title: "Tiers+",
    price: 93.08,
    annualSavings: 109.76,
    features: [
      { name: "Assistance +30Km", included: true },
      { name: "Garanties essentielles", included: true },
      { name: "Bris de glaces", included: true },
      { name: "Vol", included: true },
      { name: "Incendie", included: true },
      { name: "Attentats", included: true },
      { name: "Dommages tous accidents", included: false },
      { name: "Objets et effets personnels", included: false },
      { name: "Catastrophes naturelles & technologiques", included: true },
    ],
  },
  {
    title: "Tous risques",
    price: 142.98,
    annualSavings: 169.92,
    features: [
      { name: "Assistance +30Km", included: true },
      { name: "Garanties essentielles", included: true },
      { name: "Bris de glaces", included: true },
      { name: "Vol", included: true },
      { name: "Incendie", included: true },
      { name: "Attentats", included: true },
      { name: "Dommages tous accidents", included: true },
      { name: "Objets et effets personnels", included: true },
      { name: "Catastrophes naturelles & technologiques", included: true },
    ],
    recommended: true,
  },
];

interface Step12QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step12Questions({ onUpdateAnswers }: Step12QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (plan: PriceOption) => {
    const newAnswers = { ...answers, plan: plan.title };
    setSelectedPlan(plan.title);
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Choisissez votre plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {priceOptions.map((option) => (
          <Card
            key={option.title}
            className={cn(
              "relative",
              "bg-white",
              selectedPlan === option.title && "ring-2 ring-primary"
            )}
          >
            {option.recommended && (
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-bl rounded-tr-md">
                Recommandé
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {option.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">
                {option.price.toFixed(2)} €{" "}
                <span className="text-lg font-normal">/mois</span>
              </div>
              <div className="text-sm">
                Payez annuellement, économisez {option.annualSavings.toFixed(2)}{" "}
                €
              </div>
              <ul className="space-y-2">
                {option.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-center space-x-2"
                  >
                    {feature.included ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <X className="h-4 w-4 text-red-500" />
                    )}
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={cn(
                  "w-full",
                  option.recommended
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground",
                  "hover:text-white"
                )}
                onClick={() => handleSelectPlan(option)}
              >
                Sélectionner
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
