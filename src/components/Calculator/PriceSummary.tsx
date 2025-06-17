import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CalculatorOption } from './types';
import { type Language, getTranslation, formatPrice } from './i18n';

interface PriceSummaryProps {
  basePrice: number;
  selectedOptions: CalculatorOption[];
  totalPrice: number;
  showDetails: boolean;
  onToggleDetails: () => void;
  templateTitle: string;
  language?: Language;
  onNextStep?: () => void;
  canProceed?: boolean;
  isLastStep?: boolean;
}

export const PriceSummary: React.FC<PriceSummaryProps> = ({
  basePrice,
  selectedOptions,
  totalPrice,
  showDetails,
  onToggleDetails,
  templateTitle,
  language = 'en',
  onNextStep,
  canProceed = true,
  isLastStep = false
}) => {
  const t = getTranslation(language);

  return (
    <div className="sticky top-8">
      <motion.div
        className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl p-8 text-slate-900 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">
            {t.estimatedCostNetto}
          </h3>
          <div className="text-5xl font-black mb-2">
            {formatPrice(totalPrice, language)}
          </div>
          <p className="text-slate-800 text-sm">
            {t.orMonthly} {formatPrice(Math.round(totalPrice / 10), language)}
          </p>
        </div>

        {/* Details Toggle Button */}
        <motion.button
          onClick={onToggleDetails}
          className="w-full flex items-center justify-between p-4 bg-white/20 rounded-xl mb-4 hover:bg-white/30 transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-semibold">
            {showDetails ? t.hideDetails : t.showDetails}
          </span>
          <motion.svg
            className="w-5 h-5"
            animate={{ rotate: showDetails ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>

        {/* Details Panel */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {/* Base Price */}
              <div className="flex justify-between items-center py-3 border-b border-slate-800/20">
                <span className="font-medium">{templateTitle}</span>
                <span className="font-bold">{formatPrice(basePrice, language)}</span>
              </div>

              {/* Selected Options */}
              {selectedOptions.map((option) => (
                <div key={option.id} className="flex justify-between items-center py-2">
                  <span className="text-sm">{option.title}</span>
                  <span className="font-semibold">
                    {option.price === 0 ? t.free : formatPrice(option.price, language)}
                  </span>
                </div>
              ))}

              {selectedOptions.length === 0 && (
                <div className="text-center py-4 text-slate-700">
                  <p className="text-sm">{t.noSelectedOptions}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button */}
        {onNextStep && (
          <motion.button
            onClick={onNextStep}
            disabled={!canProceed}
            className={`w-full mt-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg ${
              canProceed
                ? 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-102 hover:-translate-y-1'
                : 'bg-slate-600 text-slate-400 cursor-not-allowed'
            }`}
            whileHover={canProceed ? { scale: 1.02, y: -2 } : {}}
            whileTap={canProceed ? { scale: 0.98 } : {}}
          >
            {isLastStep ? t.completeEstimate : t.nextStep}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}; 