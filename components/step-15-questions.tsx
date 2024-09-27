"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDateDDMMYYYY } from "@/lib/utils";
import { UserRound } from "lucide-react";
import { usageVehiculeOptions } from "./step-5-questions";
import { garageVehiculeOptions } from "./step-7-questions";
import { Avatar, AvatarImage } from "./ui/avatar";

// const exampleData = {
//   color: "immatriculation",
//   erreur: "",
//   immat: "aa-123-ze",
//   co2: "119",
//   energie: 1,
//   energieNGC: "ESSENCE",
//   genreVCG: 1,
//   genreVCGNGC: "VP",
//   puisFisc: "4",
//   carrosserieCG: "CI",
//   marque: "FIAT",
//   modele: "PANDA",
//   date1erCir_us: "2009-06-02",
//   date1erCir_fr: "02-06-2009",
//   collection: "non",
//   date30: "1989-06-30",
//   vin: "ZFA16900001426851",
//   boite_vitesse: "M",
//   puisFiscReel: "60",
//   nb_portes: 4,
//   type_mine: "MFT1022E4419",
//   couleur: "JAUNE CLAIR",
//   poids: "860 kg",
//   cylindres: 4,
//   nr_passagers: 4,
//   sra_id: "FI04139",
//   sra_group: "27",
//   sra_commercial: "ALESSI 1.2 8V",
//   logo_marque:
//     "https://api.apiplaqueimmatriculation.com/logos_marques/?marque=honda",
//   typeAchat: "neuf",
//   mois: "mars",
//   annee: "2022",
//   usageVehicule: "prive_commute",
//   adresse_vehicule: "Basse-Terre - 97410",
//   garageVehicule: "parking_publique",
//   typeSaisieInfosPermis: "photo",
//   date_naissance: "02/08/1980",
//   numero_permis: "15AT29753",
//   date_delivrance: "10/08/1998",
//   nom: "TORCOL FOUARD",
//   prenom: "GUILLAUME GEORGES MATHIEU",
//   dateEffetContrat: "2024-09-27",
//   plan: "Tiers+",
//   "Protection du conducteur": "300,000€",
//   "Franchise bris de glace": "0€",
//   "Franchise vol & incendie, explosion, tempête ou événements climatiques, et tous accidents":
//     "300€",
//   "Assistance et dépannage": "0 km",
//   "Effets, objets et accessoires": "500€",
//   mileage: "5000",
//   secondaryDriver: "Non",
//   email: "guillaume@goperceval.fr",
//   telephone: "0123456789",
// };
//anwers are the same structure as exempleData
interface Step15QuestionsProps {
  answers: Record<string, string>;
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export function Step15Questions({ answers }: Step15QuestionsProps) {
  const exampleData = answers;
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">Mon contrat</h2>
      <div className="space-y-2 max-w-lg mx-auto">
        <h2 className="text-lg font-bold">{exampleData.plan}</h2>
        <p className="text-md">
          Prendra effet le{" "}
          <span className="font-bold">
            {formatDateDDMMYYYY(exampleData.dateEffetContrat)}
          </span>
        </p>
      </div>
      <div className="space-y-8">
        <Card className="max-w-lg mx-auto shadow-lg">
          <CardHeader className="flex items-start space-x-4">
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={exampleData.logo_marque}
                  alt={`${exampleData.marque} logo`}
                />
              </Avatar>
              <div>
                {exampleData.marque} {exampleData.modele}
                <span className="text-sm text-gray-500 font-normal block">
                  {exampleData.sra_commercial} (PA : {exampleData.puisFisc}cv)
                </span>
              </div>
            </CardTitle>
            <CardDescription className="text-sm text-gray-500"></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <InfoContainer>
              <InfoLabel>Immatriculation</InfoLabel>
              <InfoValue>
                <span className="uppercase">{exampleData.immat}</span>
              </InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Utilisation</InfoLabel>
              <InfoValue>
                {
                  usageVehiculeOptions.find(
                    (o) => o.value === exampleData.usageVehicule
                  )?.label
                }
              </InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Adresse de stationnement</InfoLabel>
              <InfoValue>{exampleData.adresse_vehicule}</InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Date d'achat</InfoLabel>
              <InfoValue>
                {exampleData.mois} {exampleData.annee}
              </InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Type de stationnement</InfoLabel>
              <InfoValue>
                {
                  garageVehiculeOptions.find(
                    (o) => o.value === exampleData.garageVehicule
                  )?.label
                }
              </InfoValue>
            </InfoContainer>
          </CardContent>
        </Card>
        <Card className="max-w-lg mx-auto shadow-lg">
          <CardHeader className="flex items-start space-x-4">
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <div className="rounded-full p-2 bg-foreground">
                <UserRound className="h-6 w-6 text-white" />
              </div>
              <div>
                {exampleData.prenom} {exampleData.nom}
                <span className="text-sm text-gray-500 font-normal block">
                  Conducteur principal
                </span>
              </div>
            </CardTitle>
            <CardDescription className="text-sm text-gray-500"></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <InfoContainer>
              <InfoLabel>Né(e) le</InfoLabel>
              <InfoValue>
                <span className="uppercase">{exampleData.date_naissance}</span>
              </InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Téléphone</InfoLabel>
              <InfoValue>{exampleData.telephone}</InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>{exampleData.email}</InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Lieu de résidence</InfoLabel>
              <InfoValue className="max-w-[200px] text-left md:text-right">
                {exampleData.adresse}
              </InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Date obtention du permis</InfoLabel>
              <InfoValue>{exampleData.date_delivrance}</InfoValue>
            </InfoContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const InfoContainer = ({ children, ...props }: { children: any }) => (
  <div
    className="flex flex-wrap flex-col md:flex-row justify-between"
    {...props}
  >
    {children}
  </div>
);

const InfoLabel = ({ children, ...props }: { children: any }) => (
  <span className="font-medium text-gray-500" {...props}>
    {children}
  </span>
);

const InfoValue = ({
  children,
  className,
  ...props
}: {
  children: any;
  className?: string;
}) => (
  <span className={className} {...props}>
    {children}
  </span>
);
