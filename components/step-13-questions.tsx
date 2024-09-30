"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";

interface InsuranceOption {
  title: string;
  description: string;
  options: string[];
}

const insuranceOptions: InsuranceOption[] = [
  {
    title: "Protection du conducteur",
    description:
      "Le montant pris en charge pour le préjudice corporel du conducteur en cas d'accident.",
    options: ["300,000€", "500,000€", "1,000,000€"],
  },
  {
    title: "Franchise bris de glace",
    description:
      "La somme à votre charge après le remboursement, en cas de remplacement du vitrage.",
    options: ["0€", "50€", "115€"],
  },
  {
    title:
      "Franchise vol & incendie, explosion, tempête ou événements climatiques, et tous accidents",
    description:
      "La somme à votre charge après le remboursement, en cas de sinistre.",
    options: ["300€", "500€", "650€"],
  },
  {
    title: "Assistance et dépannage",
    description:
      "En cas de panne ou d'accident vous êtes dépanné à partir de 0 km ou 30 km de votre domicile selon l'option choisie.",
    options: ["0 km", "30 km"],
  },
  {
    title: "Effets, objets et accessoires",
    description:
      "Le montant pris en charge pour les biens de votre véhicule en cas d'accident ou de vol.",
    options: ["500€", "1000€", "5000€"],
  },
];

interface Step13QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step13Questions({ onUpdateAnswers }: Step13QuestionsProps) {
  const initialAnswers = insuranceOptions.reduce((acc, option) => {
    acc[option.title] = option.options[0];
    return acc;
  }, {} as Record<string, string>);

  initialAnswers["mileage"] = "5000"; // Set the default value for mileage

  const [answers, setAnswers] =
    useState<Record<string, string>>(initialAnswers);
  const [secondaryDriver, setSecondaryDriver] = useState<boolean>(false);

  useEffect(() => {
    onUpdateAnswers({
      ...initialAnswers,
      secondaryDriver: secondaryDriver ? "Oui" : "Non",
    });
  }, []);

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers({
      ...newAnswers,
      secondaryDriver: secondaryDriver ? "Oui" : "Non",
    });
  };

  const handleSecondaryDriverChange = (checked: boolean) => {
    setSecondaryDriver(checked);
    onUpdateAnswers({ ...answers, secondaryDriver: checked ? "Oui" : "Non" });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Couverture de votre contrat
      </h2>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            Économisez en conduisant moins{" "}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Engagez-vous à conduire moins et économisez en moyenne 15 % sur
            votre offre.
          </p>
        </CardHeader>
        <CardContent>
          <RadioGroup
            defaultValue="5000"
            onValueChange={(value) => handleInputChange("mileage", value)}
            className="flex flex-col sm:flex-row gap-2"
          >
            {["5000", "8000", "8000+"].map((value, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center space-x-2  rounded-md p-2 flex-1",
                  answers["mileage"] === value && "bg-black text-white"
                )}
              >
                <RadioGroupItem
                  value={value}
                  id={`r${index + 1}`}
                  className={cn(
                    "border border-gray-300 rounded-full cursor-pointer",
                    answers["mileage"] === value && "bg-white"
                  )}
                />
                <Label className="cursor-pointer" htmlFor={`r${index + 1}`}>
                  {value === "5000"
                    ? "Moins de 5000 km/an"
                    : value === "8000"
                    ? "Moins de 8000 km/an"
                    : "Plus de 8000 km/an"}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {insuranceOptions.map((option, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
              </div>
              <Select
                defaultValue={option.options[0]}
                onValueChange={(value) =>
                  handleInputChange(option.title, value)
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sélectionner une option" />
                </SelectTrigger>
                <SelectContent>
                  {option.options.map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      ))}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Conducteur secondaire</h3>
              <p className="text-sm text-muted-foreground">
                Vous pouvez ajouter un conducteur secondaire qui bénéficiera des
                mêmes garanties !
              </p>
            </div>
            <Switch
              checked={secondaryDriver}
              onCheckedChange={handleSecondaryDriverChange}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
