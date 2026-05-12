"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendlyEmbed } from "./calendly-embed";

const STEPS = [
  {
    question: "What industry are you in?",
    options: [
      "Plumber",
      "Electrician",
      "Builder",
      "Landscaper",
      "Solar installer",
      "Vet / animal health",
      "Pest control",
      "General trades",
      "Other home services",
    ],
  },
  {
    question: "What's your biggest SEO challenge right now?",
    options: [
      "Not getting enough leads from Google",
      "Competitors are outranking me",
      "I'm wasting money on Google Ads",
      "I don't appear in AI search results",
      "I have no idea where I stand",
    ],
  },
  {
    question: "When are you looking to get started?",
    options: [
      "This month — I'm ready to go",
      "Next 1-3 months",
      "Just researching for now",
    ],
  },
];

export function SurveyFunnel() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setShowCalendly(true);
    }
  };

  if (showCalendly) {
    return (
      <div>
        <div className="mb-8 p-5 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-800">Perfect — pick a time below.</p>
            <p className="text-sm text-green-700 mt-0.5">
              30 minutes. We&apos;ll walk through your site, show you exactly what&apos;s holding you back, and outline what a campaign would look like.
            </p>
          </div>
        </div>
        <CalendlyEmbed
          industry={answers[0]}
          challenge={answers[1]}
          urgency={answers[2]}
        />
      </div>
    );
  }

  const currentStep = STEPS[step];
  const progress = ((step) / STEPS.length) * 100;

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Step {step + 1} of {STEPS.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-amber-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-serif text-2xl font-bold text-ink mb-6">
            {currentStep.question}
          </h2>
          <div className="grid gap-3">
            {currentStep.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="group flex items-center justify-between w-full px-5 py-4 text-left rounded-xl border border-gray-200 hover:border-brand-400 hover:bg-brand-50 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-brand-700"
              >
                {option}
                <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-brand-500 transition-colors" />
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
