"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];
  onStepClick: (step: number) => void;
}

export default function FormProgressComponent({
  currentStep,
  totalSteps,
  completedSteps,
  onStepClick,
}: FormProgressProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex flex-col items-center">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "w-10 h-10 rounded-full font-bold",
              step === currentStep && "border-primary border-2",
              completedSteps.includes(step) &&
                "bg-primary text-primary-foreground"
            )}
            onClick={() => onStepClick(step)}
            disabled={!completedSteps.includes(step) && step !== currentStep}
          >
            {step}
          </Button>
          <span className="text-sm mt-2">Step {step}</span>
        </div>
      ))}
    </div>
  );
}
