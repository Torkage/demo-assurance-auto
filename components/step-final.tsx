import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function StepPaymentSuccess() {
  return (
    <Card className="w-full max-w-md mx-auto text-center">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <CardTitle className="text-2xl font-bold">Paiement Réussi !</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Merci pour votre paiement. Votre police d'assurance a été activée avec
          succès.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Vous recevrez bientôt un email de confirmation avec tous les détails
          de votre police.
        </p>
      </CardContent>
    </Card>
  );
}
