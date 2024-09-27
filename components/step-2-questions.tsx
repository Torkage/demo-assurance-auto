"use client";

import useSIV, { SearchResult } from "@/app/hooks/useSIV";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import SearchResultCard from "./SearchResultCard";
import { Loader2 } from "lucide-react";

interface Step2SearchProps {
  onSelectResult: (result: SearchResult | null) => void;
}

export default function Step2Questions({ onSelectResult }: Step2SearchProps) {
  const { chercherImmatriculation, isLoading } = useSIV();
  const [licensePlate, setLicensePlate] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
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
    const mockResults: SearchResult = (await chercherImmatriculation(
      licensePlate
    )) as unknown as SearchResult;
    console.log("mockResults", mockResults);
    setSearchResults(mockResults);
  };

  const handleSelectResult = (result: SearchResult) => {
    setSelectedResult(result);
    onSelectResult(result);
  };

  return (
    <div className="space-y-4 flex flex-col justify-center text-center">
      <h2 className="text-xl font-bold text-center">
        N° d&apos;immatriculation
      </h2>
      <Input
        id="license-plate"
        type="text"
        placeholder="XX-XXX-XX"
        value={licensePlate}
        onChange={handleLicensePlateChange}
        maxLength={9}
        className="uppercase text-center text-xl p-4 h-14"
      />
      <Button
        onClick={handleSearch}
        disabled={licensePlate.length < 8 || isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin mr-2 h-4 w-4" size={24} />
            Recherche en cours
          </>
        ) : (
          <>Chercher mon véhicule</>
        )}
      </Button>{" "}
      {searchResults && (
        <SearchResultCard
          onSelect={() => handleSelectResult(searchResults)}
          result={searchResults}
        />
      )}
    </div>
  );
}
