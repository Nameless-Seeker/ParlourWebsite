import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { salonData } from '../../data/salonInfo';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Instant WhatsApp Concierge"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 flex items-center"
        >
          <a
            href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20Aurelia%20Atelier,%20I%20would%20like%20to%20inquire%20about%20booking%20and%20academy%20courses.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-espresso-950/90 text-ivory-50 border border-gold-400/50 backdrop-blur-md shadow-2xl hover:bg-gold-500 hover:text-espresso-950 transition-all duration-300 focus:outline-none"
            aria-label="Instant WhatsApp Concierge"
          >
            {/* Live Status Pulse */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>

            <MessageCircle className="w-4 h-4 text-gold-400 group-hover:text-espresso-950 transition-colors" />

            <span className="font-sans text-xs font-semibold tracking-wider uppercase hidden sm:inline">
              WhatsApp Concierge
            </span>
          </a>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
