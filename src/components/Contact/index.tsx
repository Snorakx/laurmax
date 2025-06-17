import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
    
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      title: 'Email Us',
      description: 'Send us a message anytime',
      value: 'hello@laurmax.com',
      action: 'mailto:hello@laurmax.com'
    },
    {
      title: 'Live Chat',
      description: 'Available Mon-Fri 9AM-6PM',
      value: 'Start Conversation',
      action: '#'
    },
    {
      title: 'Call Us',
      description: 'Speak with our team directly',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    }
  ];

  const socialLinks = {
    LinkedIn: 'https://linkedin.com/company/laurmax',
    Twitter: 'https://twitter.com/laurmax',
    Instagram: 'https://instagram.com/laurmax',
    Facebook: 'https://facebook.com/laurmax'
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen h-auto flex items-center snap-start snap-always overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-amber-500/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Section Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-yellow-200 font-medium text-sm tracking-wide">
                GET IN TOUCH
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white">Let's Start Building</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Something Great
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                Ready to transform your digital presence? Let's discuss your project and create something extraordinary together.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  className="group flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-yellow-500/50 transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {method.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      {method.description}
                    </p>
                    <p className="text-yellow-400 font-medium">
                      {method.value}
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold text-lg">Follow Us</h3>
              <div className="flex gap-4">
                {Object.entries(socialLinks).map(([platform, url], index) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300"
                    whileHover={{ y: -2, scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium">
                      {platform.slice(0, 2)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                </motion.div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 font-semibold rounded-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-yellow-400/25"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.form>

            {/* Response Time Info */}
            <motion.div
              className="text-center text-slate-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>We typically respond within 2-4 hours during business days.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
    </section>
  );
}; 