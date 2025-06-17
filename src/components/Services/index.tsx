import React from 'react';
import { motion } from 'framer-motion';
import { CallToAction } from '../CallToAction';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom Web Development',
      description: 'Tailored websites built with the latest technologies to meet your specific business needs and goals.',
      features: ['Custom Development', 'Responsive Design', 'Performance Optimized']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with secure payment processing and inventory management.',
      features: ['Online Store Setup', 'Payment Integration', 'Inventory Management']
    },
    {
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes and powerful plugin integrations.',
      features: ['Custom Themes', 'Plugin Development', 'CMS Training']
    },
    {
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your search rankings and organic traffic.',
      features: ['Keyword Research', 'On-page SEO', 'Performance Tracking']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to grow your online presence and reach your target audience.',
      features: ['Social Media', 'Content Strategy', 'Analytics']
    }
  ];

  return (
    <section 
      id="services"
      className="min-h-screen h-auto flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden snap-start snap-always"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 rounded-full backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-200 font-medium text-sm tracking-wide">
              OUR SERVICES
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">Comprehensive Digital</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Solutions Tailored for Success
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-light">
            From initial concept to ongoing support, we offer end-to-end web solutions 
            that drive growth and deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-yellow-500/50 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-4">
                    {service.features.map((feature, i) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-slate-400">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="group-hover:text-slate-300 transition-colors duration-500">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-4">
                    <button className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-all duration-300 group-hover:gap-3">
                      <span>Learn More</span>
                      <svg className="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <p className="text-xl text-slate-300 font-light">
              Ready to elevate your digital presence?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CallToAction 
                text="Start Your Project"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="lg"
              />
              
              <CallToAction 
                text="View Portfolio"
                onClick={() => window.open('#', '_blank')}
                variant="secondary"
                size="lg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
    </section>
  );
}; 