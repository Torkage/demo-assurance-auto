"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Step2to4QuestionsProps {
  step: number;
  onUpdateAnswers: (answers: Record<string, string>) => void;
}

export default function Step_2To_4Questions({
  step,
  onUpdateAnswers,
}: Step2to4QuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleInputChange = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    onUpdateAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Step {step}</h2>
      {[1, 2, 3].map((questionNumber) => (
        <div key={questionNumber} className="space-y-2">
          <Label htmlFor={`question-${questionNumber}`}>
            Question {questionNumber}
          </Label>
          <Input
            id={`question-${questionNumber}`}
            placeholder={`Answer for Question ${questionNumber}`}
            value={answers[`question-${questionNumber}`] || ""}
            onChange={(e) =>
              handleInputChange(`question-${questionNumber}`, e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
}
