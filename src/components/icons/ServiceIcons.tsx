import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const DevelopmentIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M16 18L22 12L16 6M8 6L2 12L8 18" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const OptimizationIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const SupportIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const getServiceIcon = (iconType: string, props: IconProps = {}) => {
  switch (iconType) {
    case 'development':
      return <DevelopmentIcon {...props} />;
    case 'optimization':
      return <OptimizationIcon {...props} />;
    case 'support':
      return <SupportIcon {...props} />;
    default:
      return <DevelopmentIcon {...props} />;
  }
}; 