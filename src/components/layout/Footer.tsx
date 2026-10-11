import React from 'react';
import { salonData } from '../../data/salonInfo';
import { ArrowUp, MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-espresso-950 text-ivory-50 pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] rounded-full opacity-15 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.4) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        {/* Giant Editorial Brand Typography Banner */}
        <div className="border-b border-white/10 pb-12 mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.2em] text-ivory-100 block">
              {salonData.name}
            </span>
            <p className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-gold-400 font-medium mt-2">
              Haute Bridal Atelier & Makeup Academy
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/20 text-xs tracking-widest uppercase text-ivory-200 hover:text-gold-300 hover:border-gold-400 hover:bg-white/5 transition-all duration-300"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-gold-400 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-16 text-xs sm:text-sm">
          {/* Column 1: Brand Philosophy (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-ivory-100 font-normal tracking-wider">
              The Atelier Ethos
            </h4>
            <p className="font-sans text-xs text-ivory-300/70 leading-relaxed font-light max-w-sm">
              Dedicated to bespoke bridal aesthetics, dermatological skin therapies, and an elite
              makeup academy where the next generation of creative beauty visionaries master timeless techniques.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={salonData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ivory-200 hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={salonData.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ivory-200 hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {salonData.socials.youtube && (
                <a
                  href={salonData.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ivory-200 hover:text-gold-400 hover:border-gold-400 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              )}
              <a
                href={`https://wa.me/${salonData.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-400/40 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-espresso-950 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-lg text-ivory-100 font-normal tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-300/70">
              <li>
                <a href="#about" className="hover:text-gold-300 transition-colors">
                  The Atelier
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  Curated Services
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-gold-300 transition-colors">
                  Makeup Academy
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold-300 transition-colors">
                  Editorial Portfolio
                </a>
              </li>
              <li>
                <a href="#artist" className="hover:text-gold-300 transition-colors">
                  The Master Artist
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold-300 transition-colors">
                  Client Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-300 transition-colors">
                  Contact & Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Academy Diplomas (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg text-ivory-100 font-normal tracking-wider mb-4">
              Academy Cohorts
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-300/70">
              <li>
                <a href="#academy" className="hover:text-gold-300 transition-colors block">
                  8-Week Bridal Artistry Diploma
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-gold-300 transition-colors block">
                  Advanced Airbrush Masterclass
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-gold-300 transition-colors block">
                  Couture Bridal Hair Architecture
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-gold-300 transition-colors block">
                  Personal Grooming Intensive
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-gold-300 transition-colors block text-gold-400">
                  Request Course Syllabus PDF →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Concierge & Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg text-ivory-100 font-normal tracking-wider mb-4">
              Concierge & Hours
            </h4>
            <div className="space-y-2 text-xs text-ivory-300/70 font-light">
              <p className="leading-relaxed">
                {salonData.address}
                <br />
                {salonData.city}
              </p>
              <p className="pt-1">
                <strong>Tel:</strong>{' '}
                <a href={`tel:${salonData.phone}`} className="hover:text-gold-400">
                  {salonData.phone}
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${salonData.email}`} className="hover:text-gold-400">
                  {salonData.email}
                </a>
              </p>
              <p className="pt-2 text-[0.7rem] text-ivory-400 border-t border-white/10">
                {salonData.timings}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.7rem] tracking-wider text-ivory-400/60 uppercase">
          <p>© {new Date().getFullYear()} {salonData.name} Beauty Atelier & Academy. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted for luxury editorial excellence</span>
            <Heart className="w-3 h-3 text-gold-500 fill-current inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
