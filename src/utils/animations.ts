// Animation utility functions for GSAP
export const animationUtils = {
  // Default animation settings
  defaults: {
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  },

  // Fade in animation
  fadeIn: (elements: any, options: any = {}) => {
    if (typeof window !== 'undefined' && window.gsap) {
      return window.gsap.fromTo(
        elements,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: options.duration || animationUtils.defaults.duration,
          ease: options.ease || animationUtils.defaults.ease,
          stagger: options.stagger || 0
        }
      );
    }
  },

  // Slide up animation
  slideUp: (elements: any, options: any = {}) => {
    if (typeof window !== 'undefined' && window.gsap) {
      return window.gsap.fromTo(
        elements,
        { 
          y: options.distance || 60, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1,
          duration: options.duration || animationUtils.defaults.duration,
          ease: options.ease || animationUtils.defaults.ease,
          stagger: options.stagger || animationUtils.defaults.stagger
        }
      );
    }
  },

  // Scale in animation
  scaleIn: (elements: any, options: any = {}) => {
    if (typeof window !== 'undefined' && window.gsap) {
      return window.gsap.fromTo(
        elements,
        { 
          scale: options.from || 0.8, 
          opacity: 0 
        },
        { 
          scale: 1, 
          opacity: 1,
          duration: options.duration || animationUtils.defaults.duration,
          ease: options.ease || animationUtils.defaults.ease,
          stagger: options.stagger || animationUtils.defaults.stagger
        }
      );
    }
  },

  // Create timeline with scroll trigger
  createScrollTimeline: (trigger: any, options: any = {}) => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      return window.gsap.timeline({
        scrollTrigger: {
          trigger,
          start: options.start || "top 80%",
          end: options.end || "bottom 20%",
          toggleActions: options.toggleActions || "play none none reverse",
          ...options
        }
      });
    }
  },

  // Floating animation
  float: (elements: any, options: any = {}) => {
    if (typeof window !== 'undefined' && window.gsap) {
      return window.gsap.to(elements, {
        y: options.distance || -20,
        duration: options.duration || 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: options.stagger || 0.5
      });
    }
  }
};

// Framer Motion variants
export const motionVariants = {
  // Container variants
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  },

  // Item variants
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  },

  // Card hover variants
  cardHover: {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  },

  // Button variants
  button: {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: { scale: 0.95 }
  }
}; 