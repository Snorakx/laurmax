import React from 'react';
import { motion } from 'framer-motion';
import { type Language, getTranslation, formatPrice } from './i18n';

interface CalculatorType {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  image?: string;
  features: string[];
}

const getCalculatorTypes = (t: any): CalculatorType[] => [
  {
    id: 'website',
    title: t.websiteTitle,
    description: t.websiteDescription,
    basePrice: 2500,
    features: [
      t.responsiveDesign,
      t.adminPanel,
      t.seoOptimization,
      t.socialMediaIntegration
    ]
  },
  {
    id: 'ecommerce',
    title: t.ecommerceTitle,
    description: t.ecommerceDescription,
    basePrice: 5990,
    features: [
      t.productCatalog,
      t.cartAndPayments,
      t.managementPanel,
      t.systemIntegrations
    ]
  },
  {
    id: 'system',
    title: t.systemTitle,
    description: t.systemDescription,
    basePrice: 15000,
    features: [
      t.dedicatedFunctionalities,
      t.externalIntegrations,
      t.advancedReporting,
      t.scalability
    ]
  }
];

export const CalculatorSelector: React.FC = () => {
  const language: Language = 'en';
  const t = getTranslation(language);
  const calculatorTypes = getCalculatorTypes(t);

  const handleCalculatorSelect = (calculatorId: string) => {
    window.location.href = `/wycena-projektu?type=${calculatorId}&lang=${language}`;
  };

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

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">{t.estimateProject}</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-2 max-w-2xl mx-auto">
            {t.estimateProjectDescription}
          </p>

          {/* Current estimate display */}
          <motion.div
            className="inline-flex items-center gap-4 mt-8 px-8 py-4 bg-slate-800/50 border border-slate-700/50 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-slate-300">{t.currentEstimate}</span>
            <span className="text-2xl font-bold text-yellow-400">
              {formatPrice(0, language)}
            </span>
          </motion.div>
        </motion.div>

        {/* Calculator Type Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {calculatorTypes.map((type, index) => (
            <motion.div
              key={type.id}
              className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
              onClick={() => handleCalculatorSelect(type.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                  {type.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {type.description}
                </p>

                <div className="space-y-3 mb-6">
                  {type.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-sm">{t.from}</span>
                    <div className="text-2xl font-bold text-yellow-400">
                      {formatPrice(type.basePrice, language)}
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 font-semibold rounded-full hover:scale-105 transition-transform">
                    <span>{t.select}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            {t.faqTitle}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            {t.faqDescription}
          </p>
          
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-200">
            <span>{t.viewFullFaq}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
}; 