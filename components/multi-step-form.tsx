"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Step1Questions } from "./step-1-questions";
import { Step10Questions } from "./step-10-questions";
import { Step11Questions } from "./step-11-questions";
import { Step12Questions } from "./step-12-questions";
import { Step13Questions } from "./step-13-questions";
import { Step14Questions } from "./step-14-questions";
import { Step15Questions } from "./step-15-questions";
import Step2Questions from "./step-2-questions";
import { Step3Questions } from "./step-3-questions";
import { Step4Questions } from "./step-4-questions";
import { Step5Questions } from "./step-5-questions";
import { Step6Questions } from "./step-6-questions";
import { Step7Questions } from "./step-7-questions";
import { Step8Questions } from "./step-8-questions";
import { Step9Questions } from "./step-9-questions";
import { Step16Questions } from "./step-16-questions";
import StepPaymentSuccess from "./step-final";

export function MultiStepFormComponent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<{
    step1Answers: Record<string, string>;
    step2Answers: Record<string, string>;
    step3Answers: Record<string, string>;
    step4Answers: Record<string, string>;
    step5Answers: Record<string, string>;
    step6Answers: Record<string, string>;
    step7Answers: Record<string, string>;
    step8Answers: Record<string, string>;
    step9Answers: Record<string, string>;
    step10Answers: Record<string, string>;
    step11Answers: Record<string, string>;
    step12Answers: Record<string, string>;
    step13Answers: Record<string, string>;
    step14Answers: Record<string, string>;
  }>({
    step1Answers: {},
    step2Answers: {},
    step3Answers: {},
    step4Answers: {},
    step5Answers: {},
    step6Answers: {},
    step7Answers: {},
    step8Answers: {},
    step9Answers: {},
    step10Answers: {
      dateEffetContrat: new Date().toISOString().split("T")[0],
    },
    step11Answers: {},
    step12Answers: {},
    step13Answers: {},
    step14Answers: {},
  });

  const totalSteps = 20;

  useEffect(() => {
    updateCompletedSteps();
  }, [formData]);

  const updateCompletedSteps = () => {
    const completed = [1];
    if (Object.keys(formData.step1Answers).length === 1) completed.push(2);
    if (Object.keys(formData.step2Answers).length === 1) completed.push(2);
    if (Object.keys(formData.step3Answers).length === 1) completed.push(3);
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

  //transform formData into a flat object
  const flatFormData = Object.keys(formData).reduce((acc, key) => {
    const stepKey = key as keyof typeof formData;
    return { ...acc, ...formData[stepKey] };
  }, {});

  console.log("formData", formData);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold">Assurance Auto</h1>
      </header>
      <main
        className="flex-grow overflow-auto flex justify-center items-start mt-8 px-4 pt-4"
        style={{
          paddingBottom: 100,
        }}
      >
        {/* <FormProgress
              currentStep={currentStep}
              totalSteps={totalSteps}
              completedSteps={completedSteps}
              onStepClick={handleStepClick}
            /> */}
        {/* Numéro immat */}
        {currentStep === 1 && (
          <Step1Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
              handleNext();
            }}
          />
        )}
        {/* Résultat */}
        {currentStep === 2 && (
          <Step2Questions
            onSelectResult={(result) => {
              updateFormData({ [`step${currentStep}Answers`]: result });
              handleNext();
            }}
          />
        )}
        {/* Type achat */}
        {currentStep === 3 && (
          <Step3Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
              handleNext();
            }}
          />
        )}
        {currentStep === 4 && (
          <Step4Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
            }}
          />
        )}
        {currentStep === 5 && (
          <Step5Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
              handleNext();
            }}
          />
        )}
        {currentStep === 6 && (
          <Step6Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
            }}
          />
        )}
        {currentStep === 7 && (
          <Step7Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
              handleNext();
            }}
          />
        )}
        {currentStep === 8 && (
          <Step8Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
              handleNext();
            }}
          />
        )}
        {currentStep === 9 && (
          <Step9Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
            }}
          />
        )}
        {currentStep === 10 && (
          <Step10Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
              handleNext();
            }}
          />
        )}
        {currentStep === 11 && (
          <Step11Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
            }}
          />
        )}
        {currentStep === 12 && (
          <Step12Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
              handleNext();
            }}
          />
        )}
        {currentStep === 13 && (
          <Step13Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
            }}
          />
        )}
        {currentStep === 14 && (
          <Step14Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
            }}
          />
        )}
        {currentStep === 15 && (
          <Step15Questions
            answers={flatFormData}
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
            }}
          />
        )}
        {currentStep === 16 && (
          <Step16Questions
            onUpdateAnswers={(answers) => {
              updateFormData({ [`step${currentStep}Answers`]: answers });
            }}
          />
        )}
        {currentStep === 17 && <StepPaymentSuccess />}
        {/* {currentStep === 10 && <Step5Summary formData={formData} />} */}
      </main>
      {currentStep < 17 && (
        <footer className="bg-white shadow p-4 fixed bottom-0 w-full flex justify-between">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Retour
          </Button>
          <Button onClick={handleNext}>Continuer</Button>
        </footer>
      )}
    </div>
  );
}
