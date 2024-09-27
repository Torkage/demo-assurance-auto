"use client";

import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { staticInfosPermisOptions } from "./step-9-questions";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

// export const staticInfosPermisOptions = {
//   date_naissance: "02/08/1980",
//   numero_permis: "15AT29753",
//   date_delivrance: "10/08/1998",
//   nom: "TORCOL FOUARD",
//   prenom: "GUILLAUME GEORGES MATHIEU",
// };

interface Step14QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step14Questions({ onUpdateAnswers }: Step14QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({
    email: "guillaume@goperceval.fr",
    telephone: "0123456789",
    adresse: "14 allée des Primevères, 97490 Sainte-Clotilde",
  });

  useEffect(() => {
    //set default values for email and telephone as so :
    // email : guillaume@goperceval.fr
    // telephone : 0123456789
    handleInputChange("email", "guillaume@goperceval.fr");
    handleInputChange("telephone", "0123456789");
    handleInputChange(
      "adresse",
      "14 allée des Primevères, 97490 Sainte-Clotilde"
    );
  }, []);

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  const capitalizeWords = (str: string) => {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Vos informations de contact
      </h2>
      <div className="flex items-center space-x-2 font-bold">
        <div className="rounded-full p-2 bg-foreground">
          <UserRound className="h-6 w-6 text-white" />
        </div>
        <p>{capitalizeWords(staticInfosPermisOptions.prenom)}</p>
        <p>{staticInfosPermisOptions.nom}</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Entrez votre adresse email"
          value={answers.email || ""}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telephone">Telephone</Label>
        <Input
          id="telephone"
          type="tel"
          placeholder="Entrez votre numéro de téléphone"
          value={answers.telephone || ""}
          onChange={(e) => handleInputChange("telephone", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telephone">Adresse</Label>
        <Input
          id="adresse"
          type="text"
          placeholder="Entrez votre adresse complète"
          value={answers.adresse || ""}
          onChange={(e) => handleInputChange("adresse", e.target.value)}
          required
        />
      </div>
    </div>
  );
}
