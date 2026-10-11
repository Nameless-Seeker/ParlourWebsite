import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonialsData } from '../data/testimonials';
import { salonData } from '../data/salonInfo';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Slow reveal for section header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0.15, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1.2,
          },
        }
      );

      // 2. Slow reveal for featured testimonial card
      gsap.fromTo(
        cardRef.current,
        { opacity: 0.15, y: 70, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 1.3,
          },
        }
      );

      // 3. Slow reveal for bottom date check callout
      gsap.fromTo(
        bottomBarRef.current,
        { opacity: 0.15, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bottomBarRef.current,
            start: 'top 88%',
            end: 'top 60%',
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full bg-ivory-50 dark:bg-espresso-950 px-6 sm:px-12 md:px-16 py-20 md:py-32 text-espresso-900 dark:text-ivory-100 border-t border-taupe-200/60 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 w-96 h-96 rounded-full bg-gold-200/30 dark:bg-gold-500/10 blur-3xl opacity-50"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header (Slow reveal on scroll) */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 md:mb-20 transform-gpu">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 dark:border-gold-400/30 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-xs font-medium tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter VI • Cherished Stories</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-espresso-950 dark:text-ivory-50 mb-3">
            Voices of <span className="italic font-normal text-gold-600 dark:text-gold-400">Grace</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-taupe-600 dark:text-ivory-300/80 max-w-xl">
            Words from our celebrated brides and certified academy graduates who trusted us with their defining moments.
          </p>
        </div>

        {/* Featured Editorial Testimonial Carousel Spotlight (Slow reveal on scroll) */}
        <div ref={cardRef} className="max-w-4xl mx-auto mb-16 relative transform-gpu">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-ivory-100 dark:bg-espresso-900/90 border border-taupe-200/80 dark:border-white/10 shadow-luxury-elevated relative overflow-hidden"
            >
              <Quote className="absolute right-6 bottom-6 w-32 h-32 text-gold-400/10 dark:text-gold-400/5 pointer-events-none" />

              <div className="flex items-center gap-1.5 text-gold-500 dark:text-gold-400 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="ml-2 font-sans text-xs tracking-wider uppercase text-taupe-600 dark:text-ivory-300/70 font-semibold">
                  Verified Client Story
                </span>
              </div>

              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-espresso-950 dark:text-ivory-50 font-light leading-relaxed mb-8">
                “{current.quote}”
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-taupe-200 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <img
                    src={current.image}
                    alt={current.clientName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold-400/50 shadow-sm"
                  />
                  <div>
                    <h3 className="font-serif text-xl text-espresso-950 dark:text-ivory-50 font-normal">
                      {current.clientName}
                    </h3>
                    <p className="font-sans text-xs text-taupe-600 dark:text-ivory-300/80 font-medium tracking-wide">
                      {current.occasion} • {current.location}
                    </p>
                    <span className="font-sans text-[0.65rem] tracking-wider uppercase text-gold-600 dark:text-gold-400 block mt-0.5">
                      {current.date}
                    </span>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-11 h-11 rounded-full border border-taupe-300 dark:border-white/15 hover:border-gold-500 dark:hover:border-gold-400 bg-ivory-50 dark:bg-espresso-950 hover:bg-gold-500 dark:hover:bg-gold-500 hover:text-espresso-950 dark:hover:text-espresso-950 text-espresso-900 dark:text-ivory-100 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-11 h-11 rounded-full border border-taupe-300 dark:border-white/15 hover:border-gold-500 dark:hover:border-gold-400 bg-ivory-50 dark:bg-espresso-950 hover:bg-gold-500 dark:hover:bg-gold-500 hover:text-espresso-950 dark:hover:text-espresso-950 text-espresso-900 dark:text-ivory-100 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-gold-600 dark:bg-gold-400' : 'w-2 bg-taupe-300 dark:bg-white/20 hover:bg-taupe-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Social Proof Bar (Slow reveal on scroll) */}
        <div
          ref={bottomBarRef}
          className="p-6 sm:p-8 rounded-2xl bg-ivory-100 dark:bg-espresso-900 border border-taupe-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left transform-gpu"
        >
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-espresso-950 dark:text-ivory-50 font-normal mb-1">
              Are you planning your upcoming wedding or celebration?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-taupe-600 dark:text-ivory-300/80">
              Speak directly with our senior bridal concierge to check date availability and schedule your trial.
            </p>
          </div>

          <a
            href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20Aurelia%20Atelier,%20I%20would%20like%20to%20inquire%20about%20bridal%20availability%20for%20my%20wedding.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gold-500 text-espresso-950 font-semibold text-xs tracking-widest uppercase hover:bg-gold-400 transition-all shadow-glow-gold"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Check Wedding Date</span>
          </a>
        </div>
      </div>
    </section>
  );
};
