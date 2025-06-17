import React from 'react';
import { motion } from 'framer-motion';
import { CallToAction } from '../CallToAction';

export const About: React.FC = () => {
  const features = [
    {
      title: 'Strategic Approach',
      description: 'Data-driven solutions that align with your business objectives and drive meaningful results.'
    },
    {
      title: 'Fast Delivery',
      description: 'Efficient workflows and agile methodologies ensure rapid project completion without compromising quality.'
    },
    {
      title: 'Award Winning',
      description: 'Industry-recognized excellence in web design, development, and digital marketing strategies.'
    },
    {
      title: 'Partnership',
      description: 'Long-term relationships built on trust, transparency, and continuous support for your growth.'
    }
  ];

  const stats = [
    { value: '150+', label: 'Projects Completed', color: 'from-yellow-400 to-amber-400' },
    { value: '98%', label: 'Client Satisfaction', color: 'from-amber-400 to-yellow-500' },
    { value: '24/7', label: 'Support Available', color: 'from-yellow-500 to-orange-500' },
    { value: '10+', label: 'Years Experience', color: 'from-orange-400 to-yellow-400' }
  ];

  const skills = [
    { name: 'WordPress Development', percentage: 95, color: 'from-yellow-400 to-amber-400' },
    { name: 'E-commerce Solutions', percentage: 90, color: 'from-amber-400 to-yellow-500' },
    { name: 'SEO Optimization', percentage: 88, color: 'from-yellow-500 to-amber-500' },
    { name: 'UI/UX Design', percentage: 92, color: 'from-amber-500 to-yellow-400' }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen h-auto flex items-center snap-start snap-always overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-amber-500/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
          {/* Left Column - Content */}
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
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-yellow-200 font-medium text-sm tracking-wide">
                ABOUT LAURMAX
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
                <span className="block text-white">Crafting Digital</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Excellence Since 2014
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                We transform ambitious ideas into powerful digital experiences that drive growth and deliver exceptional results for forward-thinking businesses.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-xl hover:border-yellow-500/50 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CallToAction 
                text="Learn More About Us"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="lg"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 bg-slate-700/40 backdrop-blur-sm border border-slate-600/50 rounded-2xl hover:border-yellow-500/50 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-slate-300 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Expertise</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 text-sm">
                        {skill.percentage}%
                      </span>
                    </div>
                    
                    <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ delay: 1.6 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
    </section>
  );
}; 