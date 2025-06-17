import React from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  nextSection?: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  nextSection, 
  theme = 'light',
  className = '' 
}) => {
  const scrollToNext = () => {
    if (nextSection) {
      const element = document.getElementById(nextSection);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const isDark = theme === 'dark';

  return (
    <motion.div 
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer ${className}`}
      onClick={scrollToNext}
      animate={{ y: [0, 15, 0] }}
      transition={{ 
        duration: 2.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative group">
        {/* Main scroll indicator */}
        <div className={`w-8 h-12 border-2 ${isDark ? 'border-white/70' : 'border-yellow-400'} rounded-full flex justify-center bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300`}>
          <motion.div 
            className={`w-1.5 h-4 ${isDark ? 'bg-gradient-to-b from-white to-white/70' : 'bg-gradient-to-b from-yellow-400 to-yellow-500'} rounded-full mt-2`}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 ${isDark ? 'bg-white/20' : 'bg-yellow-400/20'} rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        {/* Pulsing ring */}
        <motion.div 
          className={`absolute inset-0 border-2 ${isDark ? 'border-white/30' : 'border-yellow-400/50'} rounded-full`}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
        
        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className={`${isDark ? 'bg-white/90 text-dark-900' : 'bg-dark-200/90 text-white'} backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap border ${isDark ? 'border-white/20' : 'border-yellow-400/20'}`}>
            Scroll down
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 