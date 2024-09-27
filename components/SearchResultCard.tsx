import React from "react";
import { SearchResult } from "@/app/hooks/useSIV";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

interface SearchResultCardProps {
  result: SearchResult;
  onSelect: (result: SearchResult) => void;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({
  result,
  onSelect,
}) => {
  return (
    <Card className="max-w-md mx-auto shadow-lg">
      <CardHeader className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={result.logo_marque} alt={`${result.marque} logo`} />
        </Avatar>
        <div>
          <CardTitle className="text-xl font-semibold">
            {result.marque} {result.modele}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            {result.sra_commercial}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between gap-4">
          <span className="font-medium">Date d&apos;immatriculation:</span>
          <span>{result.date1erCir_fr}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Énergie:</span>
          <Badge>{result.energieNGC}</Badge>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Émission de CO2:</span>
          <span>{result.co2} g/km</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Puissance fiscale:</span>
          <span>{result.puisFisc} CV</span>
        </div>
        <div className="flex justify-end">
          <Badge variant="outline">{result.genreVCGNGC}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={() => onSelect(result)}>Sélectionner</Button>
      </CardFooter>
    </Card>
  );
};

export default SearchResultCard;
