import { useState } from "react";

export interface SearchResult {
  immat: string;
  marque: string;
  modele: string;
  date1erCir_us: string;
  date1erCir_fr: string;
  carrosserieCG: string;
  vin: string;
  couleur: string;
  logo_marque: string;
  date30: string;
  nr_passagers: number;
  cylindres: number;
  poids: string;
  type_mine: string;
  nb_portes: number;
  puisFiscReel: string;
  boite_vitesse: string;
  sra_id: string;
  sra_group: string;
  sra_commercial: string;
  co2: string;
  energie: number;
  energieNGC: string;
  genreVCG: number;
  genreVCGNGC: string;
  puisFisc: string;
  collection: string;
  erreur: string;
}

const useSIV = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chercherImmatriculation = async (
    immatriculation: string
  ): Promise<SearchResult[]> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/vehicle-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ immatriculation }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch vehicle info");
      }

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.data) {
        return responseData.data;
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return { chercherImmatriculation, isLoading, error };
};

export default useSIV;
