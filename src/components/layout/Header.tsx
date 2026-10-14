import React, { useState, useEffect } from 'react';
import { salonData } from '../../data/salonInfo';
import { FullscreenMenu } from './FullscreenMenu';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import { Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
            ? isDark
              ? 'glass-dark-nav bg-espresso-950/90 py-3.5 border-b border-white/10 shadow-luxury-subtle'
              : 'glass-nav bg-ivory-50/90 py-3.5 border-b border-taupe-200/60 shadow-luxury-subtle'
            : isDark
            ? 'bg-espresso-950/85 backdrop-blur-md py-5 sm:py-7 border-b border-white/5'
            : 'bg-ivory-100/85 backdrop-blur-md py-5 sm:py-7 border-b border-taupe-200/40'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2.5 sm:gap-4">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none flex-shrink-0"
            aria-label={`${salonData.name} - Home`}
          >
            <span
              className={`font-serif text-sm xs:text-base sm:text-xl lg:text-2xl tracking-[0.08em] sm:tracking-[0.1em] [word-spacing:0.18em] sm:[word-spacing:0.2em] font-normal transition-colors whitespace-nowrap ${
                isDark
                  ? 'text-ivory-50 group-hover:text-gold-300'
                  : 'text-espresso-950 group-hover:text-gold-600'
              }`}
            >
              {salonData.name}
            </span>
            <span
              className={`font-sans text-[0.45rem] sm:text-[0.55rem] tracking-[0.16em] sm:tracking-[0.2em] [word-spacing:0.2em] sm:[word-spacing:0.25em] uppercase font-semibold mt-0.5 ${
                isDark ? 'text-gold-400' : 'text-gold-700'
              }`}
            >
              Salon &amp; Academy
            </span>
          </a>

          {/* Desktop Center Navigation Links with Generous Gap & Word Spacing */}
          <nav
            className={`hidden xl:flex items-center gap-4.5 2xl:gap-7 text-[0.72rem] 2xl:text-xs tracking-[0.12em] [word-spacing:0.25em] uppercase font-medium transition-colors ${
              isDark ? 'text-ivory-100' : 'text-espresso-900'
            }`}
            aria-label="Desktop primary navigation"
          >
            <a
              href="#about"
              className={`py-1.5 relative transition-colors whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300 ${
                isDark
                  ? 'hover:text-gold-300 after:bg-gold-400'
                  : 'hover:text-gold-700 after:bg-gold-600'
              }`}
            >
              The Atelier
            </a>
            <a
              href="#services"
              className={`py-1.5 relative transition-colors whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300 ${
                isDark
                  ? 'hover:text-gold-300 after:bg-gold-400'
                  : 'hover:text-gold-700 after:bg-gold-600'
              }`}
            >
              Services
            </a>
            <a
              href="#projects"
              className={`py-1.5 relative transition-colors whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300 ${
                isDark
                  ? 'hover:text-gold-300 after:bg-gold-400'
                  : 'hover:text-gold-700 after:bg-gold-600'
              }`}
            >
              Our Work
            </a>
            <a
              href="#portfolio"
              className={`py-1.5 relative transition-colors whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300 ${
                isDark
                  ? 'hover:text-gold-300 after:bg-gold-400'
                  : 'hover:text-gold-700 after:bg-gold-600'
              }`}
            >
              What We Teach
            </a>
            <a
              href="#artist"
              className={`py-1.5 relative transition-colors whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300 ${
                isDark
                  ? 'hover:text-gold-300 after:bg-gold-400'
                  : 'hover:text-gold-700 after:bg-gold-600'
              }`}
            >
              The Artist
            </a>
          </nav>

          {/* Right Action: Theme Toggle + Direct Booking + Morphing Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Dark / Light Luxury Mode Toggle */}
            <ThemeToggle />

            {/* Quick Appointment Button with Responsive Label */}
            <a
              href="#contact"
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border text-[0.65rem] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-glow-gold whitespace-nowrap ${
                isDark
                  ? 'border-gold-400/60 bg-gold-500/10 hover:bg-gold-500 text-gold-300 hover:text-espresso-950'
                  : 'border-gold-600/60 bg-gold-500/15 hover:bg-gold-500 text-espresso-950 hover:text-espresso-950'
              }`}
            >
              <Calendar className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isDark ? 'text-gold-400' : 'text-gold-700'}`} />
              <span className="hidden xs:inline">Book</span>
              <span className="hidden sm:inline"> Appointment</span>
            </a>

            {/* Morphing Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`p-1.5 sm:p-2.5 rounded-full transition-all focus:outline-none flex items-center gap-1.5 cursor-pointer flex-shrink-0 ${
                isDark
                  ? 'text-ivory-100 hover:text-gold-300 hover:bg-white/5'
                  : 'text-espresso-950 hover:text-gold-600 hover:bg-black/5'
              }`}
              aria-label="Open primary menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`hidden md:inline text-xs tracking-wider uppercase font-semibold ${
                  isDark ? 'text-ivory-200' : 'text-espresso-900'
                }`}
              >
                Menu
              </span>
              <div className="w-5 sm:w-7 h-4 sm:h-5 flex flex-col justify-between items-end relative">
                <span className="w-5 sm:w-7 h-[1.5px] bg-current transition-all duration-300 rounded-full"></span>
                <span className="w-3.5 sm:w-5 h-[1.5px] bg-current transition-all duration-300 rounded-full group-hover:w-5 sm:group-hover:w-7"></span>
                <span className="w-4.5 sm:w-6 h-[1.5px] bg-current transition-all duration-300 rounded-full"></span>
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
