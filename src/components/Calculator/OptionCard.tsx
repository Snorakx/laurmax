import React from 'react';
import { motion } from 'framer-motion';
import type { CalculatorOption } from './types';
import { formatPrice } from './i18n';

interface OptionCardProps {
  option: CalculatorOption;
  isSelected: boolean;
  onToggle: (option: CalculatorOption) => void;
  multipleSelection?: boolean;
}

export const OptionCard: React.FC<OptionCardProps> = ({
  option,
  isSelected,
  onToggle,
  multipleSelection = true
}) => {
  const handleClick = () => {
    onToggle(option);
  };

  return (
    <motion.div
      className={`relative cursor-pointer p-6 border-2 rounded-xl transition-all duration-300 ${
        isSelected
          ? 'border-yellow-400 bg-yellow-400/10'
          : 'border-slate-600/50 bg-slate-800/30 hover:border-yellow-400/50'
      }`}
      onClick={handleClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Selection indicator */}
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          isSelected
            ? 'border-yellow-400 bg-yellow-400'
            : 'border-slate-400'
        }`}>
          {isSelected && (
            <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        <div className="flex-1">
          <h3 className={`font-semibold text-lg mb-2 transition-colors ${
            isSelected ? 'text-yellow-300' : 'text-white'
          }`}>
            {option.title}
          </h3>
          
          {option.description && (
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              {option.description}
            </p>
          )}
          
          <div className={`font-bold text-xl transition-colors ${
            isSelected ? 'text-yellow-400' : 'text-yellow-500'
          }`}>
            {option.price === 0 ? 'Free' : formatPrice(option.price, 'en')}
          </div>
        </div>
      </div>

      {/* Glow effect when selected */}
      {isSelected && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/10 to-amber-400/10 pointer-events-none"></div>
      )}
    </motion.div>
  );
}; 