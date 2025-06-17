import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { CalculatorTemplate, CalculatorOption, CalculatorState } from './types';
import { type Language, getTranslation } from './i18n';
import { OptionCard } from './OptionCard';
import { PriceSummary } from './PriceSummary';

interface ProjectCalculatorProps {
  template: CalculatorTemplate;
  initialLanguage?: Language;
  onComplete?: (selectedOptions: Record<string, CalculatorOption[]>, totalPrice: number) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({
  template,
  initialLanguage = 'en',
  onComplete
}) => {
  const language: Language = 'en';
  const t = getTranslation(language);

  const [state, setState] = useState<CalculatorState>({
    currentStep: 0,
    selectedOptions: {},
    totalPrice: template.basePrice,
    showDetails: false
  });

  const currentStep = template.steps[state.currentStep];

  const handleOptionToggle = (stepId: string, option: CalculatorOption) => {
    setState(prev => {
      const stepOptions = prev.selectedOptions[stepId] || [];
      let newStepOptions: CalculatorOption[];

      if (currentStep.multipleSelection) {
        // Multiple selection - toggle option
        const isSelected = stepOptions.some(opt => opt.id === option.id);
        if (isSelected) {
          newStepOptions = stepOptions.filter(opt => opt.id !== option.id);
        } else {
          newStepOptions = [...stepOptions, option];
        }
      } else {
        // Single selection - replace selection
        const isSelected = stepOptions.some(opt => opt.id === option.id);
        newStepOptions = isSelected ? [] : [option];
      }

      const newSelectedOptions = {
        ...prev.selectedOptions,
        [stepId]: newStepOptions
      };

      // Calculate total price
      let totalPrice = template.basePrice;
      Object.values(newSelectedOptions).forEach(options => {
        options.forEach(opt => {
          totalPrice += opt.price;
        });
      });

      return {
        ...prev,
        selectedOptions: newSelectedOptions,
        totalPrice
      };
    });
  };

  const allSelectedOptions = useMemo(() => {
    return Object.values(state.selectedOptions).flat();
  }, [state.selectedOptions]);

  const handleToggleDetails = () => {
    setState(prev => ({
      ...prev,
      showDetails: !prev.showDetails
    }));
  };

  const isOptionSelected = (option: CalculatorOption): boolean => {
    const stepOptions = state.selectedOptions[currentStep.id] || [];
    return stepOptions.some(opt => opt.id === option.id);
  };

  const handleNextStep = () => {
    if (state.currentStep < template.steps.length - 1) {
      setState(prev => ({
        ...prev,
        currentStep: prev.currentStep + 1
      }));
    } else {
      // Last step - complete calculator
      if (onComplete) {
        onComplete(state.selectedOptions, state.totalPrice);
      }
    }
  };

  const handlePrevStep = () => {
    if (state.currentStep > 0) {
      setState(prev => ({
        ...prev,
        currentStep: prev.currentStep - 1
      }));
    }
  };

  const canProceedToNextStep = (): boolean => {
    if (!currentStep.required) return true;
    
    const stepOptions = state.selectedOptions[currentStep.id] || [];
    return stepOptions.length > 0;
  };

  const isLastStep = state.currentStep === template.steps.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-50">
        <motion.button
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800/70 hover:bg-slate-700/70 border border-slate-600/50 hover:border-yellow-400/30 rounded-lg backdrop-blur-sm transition-all duration-300 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            className="w-4 h-4 text-slate-400 group-hover:text-yellow-400 transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
            {t.backToHome}
          </span>
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 rounded-full backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-200 font-medium text-sm tracking-wide">
              {t.calculatorProject}
            </span>
          </motion.div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="block">{template.title}</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-2 max-w-2xl mx-auto">
            {template.subtitle}
          </p>
          
          <p className="text-slate-400 max-w-2xl mx-auto">
            {template.description}
          </p>
        </motion.div>

        {/* Progress Steps */}
        {template.steps.length > 1 && (
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {template.steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    index <= state.currentStep
                      ? 'bg-yellow-400 text-slate-900'
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {index + 1}
                  </div>
                  {index < template.steps.length - 1 && (
                    <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      index < state.currentStep
                        ? 'bg-yellow-400'
                        : 'bg-slate-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Questions */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {currentStep.title}
              </h2>
              
              <p className="text-slate-300 text-lg mb-8">
                {currentStep.description}
              </p>

              {/* Options Grid */}
              <div className="grid gap-4">
                {currentStep.options.map((option, index) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <OptionCard
                      option={option}
                      isSelected={isOptionSelected(option)}
                      onToggle={(opt) => handleOptionToggle(currentStep.id, opt)}
                      multipleSelection={currentStep.multipleSelection}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Additional Info Box */}
              <motion.div
                className="mt-8 p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <h3 className="text-white font-semibold mb-2">
                  {t.additionalRequirements}
                </h3>
                <textarea
                  className="w-full h-32 bg-slate-700/50 border border-slate-600/50 rounded-lg p-4 text-white placeholder-slate-400 focus:border-yellow-400 focus:outline-none resize-none"
                  placeholder={t.additionalRequirementsPlaceholder}
                />
              </motion.div>

              {/* Navigation Buttons */}
              <motion.div
                className="flex justify-between items-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                {/* Back Button */}
                {state.currentStep > 0 ? (
                  <motion.button
                    onClick={handlePrevStep}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-600 transition-all duration-200"
                    whileHover={{ scale: 1.02, x: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>{t.back}</span>
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={() => window.location.href = '/wyceń-projekt'}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-600 transition-all duration-200"
                    whileHover={{ scale: 1.02, x: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>{t.backToSelection}</span>
                  </motion.button>
                )}

                {/* Next/Complete Button */}
                <motion.button
                  onClick={handleNextStep}
                  disabled={!canProceedToNextStep()}
                  className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    canProceedToNextStep()
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 hover:scale-105'
                      : 'bg-slate-600 text-slate-400 cursor-not-allowed'
                  }`}
                  whileHover={canProceedToNextStep() ? { scale: 1.02, x: 5 } : {}}
                  whileTap={canProceedToNextStep() ? { scale: 0.98 } : {}}
                >
                  <span>{isLastStep ? t.completeEstimate : t.nextStep}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Price Summary */}
          <div className="lg:col-span-1">
            <PriceSummary
              basePrice={template.basePrice}
              selectedOptions={allSelectedOptions}
              totalPrice={state.totalPrice}
              showDetails={state.showDetails}
              onToggleDetails={handleToggleDetails}
              templateTitle={template.title}
              language={language}
              onNextStep={handleNextStep}
              canProceed={canProceedToNextStep()}
              isLastStep={isLastStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 