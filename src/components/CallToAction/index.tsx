import React from 'react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
  className?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  text,
  onClick,
  variant = 'primary',
  size = 'md',
  pulse = true,
  className = ''
}) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 shadow-lg shadow-yellow-400/25',
    secondary: 'bg-slate-800/80 border border-slate-600/50 text-white backdrop-blur-sm hover:border-yellow-500/50',
    accent: 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 border border-yellow-400/50'
  };

  const sizeClasses = {
    sm: 'px-6 py-3 text-base',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-lg'
  };

  return (
    <motion.button
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center gap-3
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        font-semibold rounded-full transition-all duration-300 transform
        hover:scale-105 overflow-hidden
        ${pulse ? 'hover:shadow-xl' : ''}
        ${className}
      `}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Text */}
      <span className="relative z-10 font-semibold tracking-wide">
        {text}
      </span>
      
      {/* Animated Arrow */}
      <motion.svg 
        className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </motion.svg>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
      
      {/* Glow effect for primary variant */}
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 bg-gradient-to-r from-yellow-400 to-amber-400"></div>
      )}
    </motion.button>
  );
}; 