"use client";

import { SearchResult } from "@/app/hooks/useSIV";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Step5SummaryProps {
  formData: {
    selectedResult: SearchResult | null;
    step2Answers: Record<string, string>;
    step3Answers: Record<string, string>;
  };
}

export default function Step_5Summary({ formData }: Step5SummaryProps) {
  const totalQuestions =
    Object.keys(formData.step2Answers).length +
    Object.keys(formData.step3Answers).length;

  const price = totalQuestions * 10; // Example pricing logic

  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Selected Result:</strong> {formData.selectedResult?.name}
        </p>
        <p>
          <strong>Total Questions Answered:</strong> {totalQuestions}
        </p>
        <p>
          <strong>Price:</strong> ${price}
        </p>
      </CardContent>
    </Card>
  );
}
