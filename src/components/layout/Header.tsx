import React, { useState, useEffect } from 'react';
import { salonData } from '../../data/salonInfo';
import { FullscreenMenu } from './FullscreenMenu';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-dark-nav py-3.5 border-b border-white/10 text-ivory-50 shadow-luxury-subtle'
            : 'bg-transparent py-5 sm:py-7 text-ivory-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none"
            aria-label={`${salonData.name} - Home`}
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-ivory-100 font-normal transition-colors group-hover:text-gold-300">
              {salonData.name}
            </span>
            <span className="font-sans text-[0.62rem] tracking-[0.35em] uppercase text-gold-400/90 font-medium">
              Atelier & Academy
            </span>
          </a>

          {/* Desktop Center Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase font-medium text-ivory-200/80"
            aria-label="Desktop primary navigation"
          >
            <a
              href="#about"
              className="hover:text-gold-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              The Atelier
            </a>
            <a
              href="#services"
              className="hover:text-gold-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Services
            </a>
            <a
              href="#academy"
              className="hover:text-gold-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Academy
            </a>
            <a
              href="#portfolio"
              className="hover:text-gold-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-gold-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Right Action: Theme Toggle + Direct Booking + Morphing Menu Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Dark / Light Luxury Mode Toggle */}
            <ThemeToggle />

            {/* Quick Appointment Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-400/60 bg-gold-500/10 hover:bg-gold-500 hover:text-espresso-950 text-gold-300 text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-glow-gold hover:shadow-none"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </a>

            {/* Morphing Hamburger Menu Button (Hackspire inspired) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 sm:p-2.5 rounded-full text-ivory-100 hover:text-gold-300 hover:bg-white/5 transition-all focus:outline-none flex items-center gap-2 cursor-pointer"
              aria-label="Open primary menu"
              aria-expanded={isMenuOpen}
            >
              <span className="hidden sm:inline text-xs tracking-widest uppercase font-medium text-ivory-300">
                Menu
              </span>
              <div className="w-7 h-5 flex flex-col justify-between items-end relative">
                <span className="w-7 h-[1.5px] bg-current transition-all duration-300 rounded-full"></span>
                <span className="w-5 h-[1.5px] bg-current transition-all duration-300 rounded-full group-hover:w-7"></span>
                <span className="w-6 h-[1.5px] bg-current transition-all duration-300 rounded-full"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
