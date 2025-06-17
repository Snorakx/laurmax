import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useContent';

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <motion.div 
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.button
        onClick={toggleLanguage}
        className="group relative flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            {currentLanguage.toUpperCase()}
          </span>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
            {currentLanguage === 'en' ? 'PL' : 'EN'}
          </span>
        </div>
        
        {/* Hover background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.button>
    </motion.div>
  );
}; 