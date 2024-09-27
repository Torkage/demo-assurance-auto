"use client";

import useSIV, { SearchResult } from "@/app/hooks/useSIV";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChangeEvent, useState } from "react";

interface Step1SearchProps {
  onSelectResult: (result: SearchResult | null) => void;
}

export default function Step_1Search({ onSelectResult }: Step1SearchProps) {
  const { chercherImmatriculation } = useSIV();
  const [licensePlate, setLicensePlate] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [, setSelectedResult] = useState<SearchResult | null>(null);

  // useEffect(() => {
  //   onSelectResult(selectedResult);
  // }, [selectedResult, onSelectResult]);

  const formatLicensePlate = (value: string) => {
    const cleaned = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    const match = cleaned.match(
      /^([A-Z0-9]{1,2})([A-Z0-9]{1,3})?([A-Z0-9]{1,2})?$/
    );

    if (match) {
      const [, first, second, third] = match;
      if (third) return `${first}-${second}-${third}`;
      if (second) return `${first}-${second}`;
      return first;
    }

    return cleaned;
  };

  const handleLicensePlateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatLicensePlate(e.target.value);
    setLicensePlate(formatted);
  };

  const handleSearch = async () => {
    // This is a mock API call. Replace this with your actual API call.
    const mockResults: SearchResult[] = await chercherImmatriculation(
      licensePlate
    );
    setSearchResults(mockResults);
  };

  const handleSelectResult = (result: SearchResult) => {
    setSelectedResult(result);
    onSelectResult(result);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="license-plate">License Plate</Label>
        <Input
          id="license-plate"
          type="text"
          placeholder="XX-XXX-XX"
          value={licensePlate}
          onChange={handleLicensePlateChange}
          maxLength={9}
          className="uppercase"
        />
      </div>
      <Button onClick={handleSearch} disabled={licensePlate.length < 8}>
        Search
      </Button>
      {searchResults.length > 0 && (
        <RadioGroup
          onValueChange={(value) => handleSelectResult(JSON.parse(value))}
        >
          {searchResults.map((result) => (
            <div key={result.id} className="flex items-center space-x-2">
              <RadioGroupItem value={JSON.stringify(result)} id={result.id} />
              <Label htmlFor={result.id}>{result.name}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  );
}
