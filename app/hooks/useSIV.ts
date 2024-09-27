export interface SearchResult {
  id: string;
  name: string;
}

const useSIV = () => {
  const chercherImmatriculation = async (immatriculation: string) => {
    const mockResults: SearchResult[] = [
      { id: "1", name: `Vehicle with plate ${immatriculation}` },
      { id: "2", name: "Similar Vehicle 1" },
      { id: "3", name: "Similar Vehicle 2" },
    ];

    return mockResults;
  };

  return { chercherImmatriculation };
};

export default useSIV;
