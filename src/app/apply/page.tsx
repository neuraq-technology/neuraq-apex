"use client";

import { useApplicationStore } from "@/lib/store/application-store";
import Step1Founder from "@/components/forms/steps/Step1Founder";
import Step2Startup from "@/components/forms/steps/Step2Startup";
import Step3Business from "@/components/forms/steps/Step3Business";
import Step4Technical from "@/components/forms/steps/Step4Technical";
import Step5Review from "@/components/forms/steps/Step5Review";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ApplyPage() {
    const { currentStep } = useApplicationStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Prevent hydration mismatch

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1Founder />;
            case 2:
                return <Step2Startup />;
            case 3:
                return <Step3Business />;
            case 4:
                return <Step4Technical />;
            case 5:
                return <Step5Review />;
            default:
                return <Step1Founder />;
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-10">
            <StepsIndicator currentStep={currentStep} totalSteps={5} />
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {renderStep()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function StepsIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
    return (
        <div className="flex justify-center mb-8 space-x-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                    key={i}
                    className={`h-2 w-10 rounded-full transition-all duration-300 ${i + 1 <= currentStep ? "bg-[#30D411]" : "bg-zinc-800"
                        }`}
                />
            ))}
        </div>
    );
}
