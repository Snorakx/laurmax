import React from 'react';
import { motion } from 'framer-motion';
import { CallToAction } from '../CallToAction';
import { ScrollIndicator } from '../ScrollIndicator';
import LaurmaxLogo from '../../assets/Laurmax-Logo-8.webp';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen h-auto flex items-center snap-start snap-always overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/moon-night.mov" type="video/mp4" />
        <source src="/moon-night.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 via-transparent to-amber-900/20"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Brand Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img 
                src={LaurmaxLogo.src} 
                alt="LAURMAX" 
                className="h-6 w-auto"
              />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-yellow-200 font-medium text-sm tracking-wide">
                DIGITAL AGENCY
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Smart Websites.</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Real Results.
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                We create powerful digital experiences that drive business growth and deliver measurable results for ambitious companies.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <CallToAction 
                text="Start Your Project"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="lg"
              />
              
              <CallToAction 
                text="View Our Work"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                variant="secondary"
                size="lg"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { number: "10+", label: "Years Experience", desc: "Digital expertise" },
              { number: "150+", label: "Projects Delivered", desc: "Successful launches" },
              { number: "98%", label: "Client Satisfaction", desc: "Happy customers" },
              { number: "24/7", label: "Support Available", desc: "Always here for you" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-yellow-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-slate-400 text-xs">
                    {stat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator />
      </div>

      {/* Animated gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
    </section>
  );
}; 