import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { primaryNavLinks } from '../../data/navigation';
import { salonData } from '../../data/salonInfo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  const linkContainerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const linkItemVariants = {
    closed: { y: 40, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Atelier Navigation Menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-espresso-950 text-ivory-50 overflow-hidden"
        >
          {/* Subtle warm champagne radial aura */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(197, 168, 128, 0.35) 0%, rgba(234, 216, 207, 0.1) 45%, transparent 75%)',
            }}
          />

          {/* Top Bar inside Menu */}
          <div className="relative z-10 flex items-center justify-between px-6 py-7 sm:px-12 md:px-16 border-b border-white/10">
            <a
              href="#hero"
              onClick={onClose}
              className="font-serif text-2xl sm:text-3xl tracking-widest text-ivory-50 uppercase flex items-center gap-2"
            >
              <span>{salonData.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            </a>

            <div className="flex items-center gap-4">
              <ThemeToggle showLabel />

              <button
                onClick={onClose}
                className="group flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-widest text-ivory-200/80 hover:text-white transition-colors p-2 cursor-pointer"
                aria-label="Close navigation menu"
              >
                <span className="hidden sm:inline">Close</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-500/10 transition-all">
                  <X className="w-5 h-5 text-ivory-50 transition-transform group-hover:rotate-90 duration-300" />
                </div>
              </button>
            </div>
          </div>

          {/* Center Links Grid */}
          <div className="relative z-10 flex-1 flex items-center px-6 sm:px-12 md:px-16 py-8 overflow-y-auto">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Navigation Items (Left/Main) */}
              <motion.ul
                variants={linkContainerVariants}
                className="lg:col-span-8 flex flex-col space-y-2 sm:space-y-4"
              >
                {primaryNavLinks.map((item) => (
                  <motion.li key={item.href} variants={linkItemVariants} className="overflow-hidden">
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-baseline gap-4 text-left outline-none py-1.5 sm:py-2"
                    >
                      {item.tag && (
                        <span className="font-sans text-xs tracking-widest text-gold-400/80 uppercase">
                          {item.tag}
                        </span>
                      )}
                      <span className="relative overflow-hidden">
                        <span className="block font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-ivory-100 group-hover:text-gold-300 transition-colors duration-300">
                          {item.label}
                        </span>
                        {/* Animated underline wipe like hackspire */}
                        <span
                          className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"
                          aria-hidden="true"
                        />
                      </span>
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Atelier Details & Direct Inquiry (Right Column on desktop) */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10 space-y-6 text-ivory-200/70 text-sm">
                <div>
                  <h4 className="font-serif text-lg text-ivory-50 uppercase tracking-widest mb-1">
                    The Studio
                  </h4>
                  <p className="leading-relaxed">{salonData.address}</p>
                  <p>{salonData.city}</p>
                </div>

                <div>
                  <h4 className="font-serif text-lg text-ivory-50 uppercase tracking-widest mb-1">
                    Atelier Hours
                  </h4>
                  <p className="leading-relaxed text-xs sm:text-sm">{salonData.timings}</p>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20Aurelia%20Atelier,%20I%20would%20like%20to%20inquire%20about%20booking%20and%20academy%20courses.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-gold-500 text-espresso-950 font-medium text-xs tracking-widest uppercase hover:bg-gold-400 transition-all duration-300 shadow-glow-gold justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Concierge</span>
                  </a>

                  <a
                    href={`tel:${salonData.phone}`}
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/20 text-ivory-100 text-xs tracking-widest uppercase hover:border-gold-400 hover:text-gold-300 transition-all duration-300 justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Direct Call: {salonData.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar inside Menu */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-6 py-5 sm:px-12 md:px-16 border-t border-white/10 text-xs tracking-widest text-ivory-300/60 uppercase">
            <span>{salonData.tagline}</span>
            <div className="flex items-center gap-6 mt-2 sm:mt-0">
              <a
                href={salonData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href={salonData.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-400 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
