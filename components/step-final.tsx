import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function StepPaymentSuccess() {
  return (
    <Card className="w-full max-w-lg mx-auto text-center">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <CardTitle className="text-2xl font-bold">Paiement Réussi !</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-lg">
          Merci pour votre paiement. <br />
          Votre police d&apos;assurance a été activée avec succès et inscrite au
          Fichier des Véhicules Assurés.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Vous recevrez bientôt un email de confirmation avec tous les détails
          de votre police.
        </p>
      </CardContent>
    </Card>
  );
}
