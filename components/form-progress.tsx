"use client";

import { Progress } from "./ui/progress";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function FormProgressComponent({
  currentStep,
  totalSteps,
}: FormProgressProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <Progress value={progressPercentage} className="h-4" />
      <div className="flex justify-center mt-2 text-sm">
        <span>
          Étape {currentStep} / {totalSteps}
        </span>
        {/* <span>{progressPercentage.toFixed(0)}%</span> */}
      </div>
    </div>
  );
}
