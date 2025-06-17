import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' }
];

export const ProgressDots: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      const currentSection = sectionElements.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    // Listen to scroll events on the main container
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.addEventListener('scroll', handleScroll);
      return () => mainContainer.removeEventListener('scroll', handleScroll);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="progress-dots">
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className={`progress-dot ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {/* Tooltip */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-dark-200/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap border border-yellow-400/20">
              {section.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 