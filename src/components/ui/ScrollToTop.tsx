import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show as soon as user scrolls down from the top
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && (window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-[5.25rem] right-6 z-40 flex items-center"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            title="Scroll to top"
            className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-espresso-950/90 dark:bg-ivory-100/95 text-gold-400 dark:text-espresso-950 border border-gold-400/50 dark:border-espresso-900/20 backdrop-blur-md shadow-2xl hover:bg-gold-500 hover:text-espresso-950 dark:hover:bg-gold-400 transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-400/60"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
