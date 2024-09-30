"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Skeleton } from "./ui/skeleton";

/*
02/08/1980 
15AT29753 
10/08/1998 
TORCOL FOUARD 
GUILLAUME GEORGES MATHIEU
*/

export const staticInfosPermisOptions = {
  date_naissance: "02/08/1980",
  numero_permis: "15AT29753",
  date_delivrance: "10/08/1998",
  nom: "TORCOL FOUARD",
  prenom: "GUILLAUME GEORGES MATHIEU",
};

interface Step9QuestionsProps {
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step9Questions({ onUpdateAnswers }: Step9QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [faceImagePreview, setFaceImagePreview] = useState<string | null>(null);
  const [backImagePreview, setBackImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const newAnswers = { ...answers, ...staticInfosPermisOptions };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  }, []);

  useEffect(() => {
    if (faceImagePreview && backImagePreview) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 4000); // Simulate a 2-second loading period
    }
  }, [faceImagePreview, backImagePreview]);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    side: "face" | "back"
  ) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (side === "face") {
          setFaceImagePreview(reader.result as string);
        } else {
          setBackImagePreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Informations du permis de conduire
      </h2>
      <div className="space-y-2">
        <h1 className="text-md">
          Prenez ou déposez une photo de votre permis de conduire
        </h1>
        <div>
          <Label htmlFor="face-file">
            <strong className="d-block">Face avant (Recto)</strong>
          </Label>
          <Input
            id="face-file"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "face")}
            className="mt-1 block w-full"
          />
          {faceImagePreview && (
            <div className="mt-4 relative">
              <img
                src={faceImagePreview}
                alt="Prévisualisation de la face du permis de conduire"
                className="max-w-[500px] max-h-[500px] h-auto"
              />
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="back-file">
          <strong className="d-block">Face arrière (Verso)</strong>
        </Label>
        <Input
          id="back-file"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "back")}
          className="mt-1 block w-full"
        />
        {backImagePreview && (
          <div className="mt-4 relative">
            <img
              src={backImagePreview}
              alt="Prévisualisation du dos du permis de conduire"
              className="max-w-[500px] max-h-[500px] h-auto"
            />
          </div>
        )}
      </div>
      {faceImagePreview && backImagePreview && (
        <div className="mt-4 relative">
          {loading ? (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Informations du Permis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[250px]" />
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Informations du Permis</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Nom:</strong> {staticInfosPermisOptions.nom}
                </p>
                <p>
                  <strong>Prénom:</strong> {staticInfosPermisOptions.prenom}
                </p>
                <p>
                  <strong>Date de Naissance:</strong>{" "}
                  {staticInfosPermisOptions.date_naissance}
                </p>
                <p>
                  <strong>Numéro de Permis:</strong>{" "}
                  {staticInfosPermisOptions.numero_permis}
                </p>
                <p>
                  <strong>Date de Délivrance:</strong>{" "}
                  {staticInfosPermisOptions.date_delivrance}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
