/* 

Exemple result : 

{"data":

    {
    "erreur":"",
    "immat":"aa-123-ze"
    ,"co2":"119",
    "energie":1,
    "energieNGC":"ESSENCE",
    "genreVCG":1,
    "genreVCGNGC":"VP",
    "puisFisc":"4",
    "carrosserieCG":"CI",
    "marque":"FIAT",
    "modele":"PANDA",
    "date1erCir_us":"2009-06-02",
    "date1erCir_fr":"02-06-2009",
    "collection":"non",
    "date30":"1989-06-30",
    "vin":"ZFA16900001426851",
    "boite_vitesse":"M",
    "puisFiscReel":"60",
    "nb_portes":4,
    "type_mine":"MFT1022E4419",
    "couleur":"JAUNE CLAIR",
    "poids":"860 kg",
    "cylindres":4,
    "nr_passagers":4,
    "sra_id":"FI04139",
    "sra_group":"27",
    "sra_commercial":"ALESSI 1.2 8V",
    "logo_marque":"https://api.apiplaqueimmatriculation.com/logos_marques/fiat.png"
    }
}

*/

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

const TOKEN = process.env.NEXT_PUBLIC_SIV_TOKEN;
const HOSTNAME = "https://api.apiplaqueimmatriculation.com";

//example call
/*
// Code javascript

var token="TokenDemo";
var immatriculation="AA-123-ZE";

var host_name="https://apiplaqueimmatriculation.com";

var format="json";
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.apiplaqueimmatriculation.com/get-vehicule-info?host_name="+host_name+"&immatriculation="+immatriculation+"&token="+token+"&format="+format,
        "method": "POST",
        "headers": {
            "Accept": "application/json"
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

*/
const useSIV = () => {
  const chercherImmatriculation = async (immatriculation: string) => {
    console.log("chercherImmatriculation", immatriculation);

    // return [
    //   {
    //     erreur: "",
    //     immat: "gy128tj",
    //     co2: "46",
    //     energie: "4",
    //     energieNGC: "ESSENCE",
    //     genreVCG: "5",
    //     genreVCGNGC: "MTL",
    //     puisFisc: "1",
    //     carrosserieCG: "SOLO",
    //     marque: "HONDA",
    //     modele: "WW125A",
    //     date1erCir_us: "2024-08-20",
    //     date1erCir_fr: "20-08-2024",
    //     collection: "non",
    //     date30: "1989-06-30",
    //     vin: "RLHJK05A9PY173544",
    //     boite_vitesse: "M",
    //     puisFiscReel: "9",
    //     nr_passagers: "2",
    //     nb_portes: "2",
    //     type_mine: "L3EHNDML001V354",
    //     couleur: "BLANC",
    //     poids: "130 kg",
    //     cylindres: "0",
    //     sra_id: "",
    //     sra_group: "",
    //     sra_commercial: "WW125A",
    //     logo_marque:
    //       "https://api.apiplaqueimmatriculation.com/logos_marques/?marque=honda",
    //     code_moteur: "",
    //     k_type: "",
    //     db_c: 1,
    //     nbr_req_restants: 40,
    //   },
    // ];

    const response = await fetch(
      `${HOSTNAME}/get-vehicule-info?host_name=${HOSTNAME}&immatriculation=${immatriculation}&token=${TOKEN}&format=json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const responseToJson = await response.json();
    console.log("responseToJson", responseToJson);
    const mockResults: SearchResult[] = responseToJson.data;
    return [mockResults];
  };

  return { chercherImmatriculation };
};

export default useSIV;
