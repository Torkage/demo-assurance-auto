"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import FormProgress from "./form-progress";
import Step1Search from "./step-1-search";
import { Step2Questions } from "./step-2-questions";
import Step5Summary from "./step-5-summary";

export function MultiStepFormComponent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<{
    selectedResult: { id: string; name: string } | null;
    step2Answers: Record<string, string>;
    step3Answers: Record<string, string>;
  }>({
    selectedResult: null,
    step2Answers: {},
    step3Answers: {},
  });

  const totalSteps = 3;

  useEffect(() => {
    updateCompletedSteps();
  }, [formData]);

  const updateCompletedSteps = () => {
    const completed = [1];
    if (formData.selectedResult) completed.push(1);
    if (Object.keys(formData.step2Answers).length === 3) completed.push(2);
    if (Object.keys(formData.step3Answers).length === 3) completed.push(3);
    setCompletedSteps(completed);
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const updateFormData = (stepData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const handleStepClick = (step: number) => {
    if (completedSteps.includes(step) || step === currentStep) {
      setCurrentStep(step);
    }
  };

  console.log("formData", formData);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Multi-Step Form</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProgress
          currentStep={currentStep}
          totalSteps={totalSteps}
          completedSteps={completedSteps}
          onStepClick={handleStepClick}
        />
        {currentStep === 1 && (
          <Step1Search
            onSelectResult={(result) =>
              updateFormData({ selectedResult: result })
            }
          />
        )}
        {currentStep === 2 && (
          <Step2Questions
            onUpdateAnswers={(answers) =>
              updateFormData({ [`step${currentStep}Answers`]: answers })
            }
          />
        )}
        {currentStep === 3 && <Step5Summary formData={formData} />}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handlePrevious} disabled={currentStep === 1}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={currentStep === totalSteps}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
