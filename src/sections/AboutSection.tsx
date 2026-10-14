import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { artistData } from '../data/artist';
import { salonData } from '../data/salonInfo';
import { Sparkles, MessageCircle, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

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

      // 2. Slow portrait lift & unmasking
      gsap.fromTo(
        portraitRef.current,
        { opacity: 0.2, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: -20,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 20%',
            scrub: 1.4,
          },
        }
      );

      // 3. Stats tiles slow staggered scrub reveal
      const statTiles = statsRef.current?.children;
      if (statTiles && statTiles.length > 0) {
        gsap.fromTo(
          statTiles,
          { opacity: 0.15, y: 40, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.14,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 1.2,
            },
          }
        );
      }

      // 4. Slow word-by-word reveal for the signature quote (Hackspire progressive scrub pattern)
      const quoteWords = quoteRef.current?.querySelectorAll('.quote-word');
      if (quoteWords && quoteWords.length > 0) {
        gsap.fromTo(
          quoteWords,
          { opacity: 0.15, y: 8, filter: 'blur(3px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 80%',
              end: 'bottom 45%',
              scrub: 1.4,
            },
          }
        );
      }

      // 5. Bio and credentials slow lift
      gsap.fromTo(
        bioRef.current,
        { opacity: 0.2, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bioRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="artist"
      ref={sectionRef}
      className="relative w-full bg-ivory-100 dark:bg-[#14100E] px-4 sm:px-10 md:px-16 py-16 sm:py-24 md:py-32 text-espresso-900 dark:text-ivory-100 border-t border-taupe-200/60 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Subtle Floral/Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blush-200/50 dark:bg-gold-500/10 blur-3xl opacity-60"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header (Slow reveal on scroll) */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-12 sm:mb-20 transform-gpu">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-gold-500/30 dark:border-gold-400/30 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-[0.65rem] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter V • The Master Artist</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-espresso-950 dark:text-ivory-50 mb-3">
            Behind the <span className="italic font-normal text-gold-600 dark:text-gold-400">Artistry</span>
          </h2>

          <p className="font-sans text-[0.68rem] sm:text-sm tracking-widest uppercase text-taupe-600 dark:text-ivory-300/80 font-medium">
            Meet Our Creative Director &amp; Lead Educator
          </p>
        </div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Portrait & Stats (lg:col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div
              ref={portraitRef}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-luxury-elevated border border-taupe-200/80 dark:border-white/10 bg-ivory-50 dark:bg-espresso-950 aspect-[4/5] max-w-md mx-auto transform-gpu will-change-transform"
            >
              <img
                src={artistData.image}
                alt={artistData.name}
                className="w-full h-full object-cover object-top filter contrast-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />

              {/* Bottom Name Plate */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl backdrop-blur-md bg-espresso-950/75 border border-white/15 text-ivory-50">
                <h3 className="font-serif text-xl sm:text-2xl text-gold-300 font-normal mb-0.5 sm:mb-1">
                  {artistData.name}
                </h3>
                <p className="font-sans text-[0.65rem] sm:text-xs tracking-wider uppercase text-ivory-200/80">
                  {artistData.role}
                </p>
              </div>
            </div>

            {/* Quick Stats Grid underneath portrait (Slow staggered scrub reveal) */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 mt-6 max-w-md mx-auto">
              {artistData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-ivory-50 dark:bg-espresso-900 border border-taupe-200 dark:border-white/10 text-center shadow-luxury-subtle transform-gpu"
                >
                  <span className="font-serif text-2xl sm:text-3xl text-gold-700 dark:text-gold-400 font-normal block">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[0.68rem] tracking-wider uppercase text-taupe-600 dark:text-ivory-300/70 block mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Narrative & Accolades (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Signature Philosophy Pull-Quote with Slow Word Scrub Reveal */}
            <blockquote ref={quoteRef} className="border-l-2 border-gold-500 dark:border-gold-400 pl-6 mb-8">
              <p className="font-serif italic text-2xl sm:text-3xl text-espresso-950 dark:text-ivory-50 font-light leading-relaxed">
                “
                {artistData.quote.split(' ').map((word, idx) => (
                  <span
                    key={idx}
                    className="quote-word inline-block mr-[0.25em] will-change-transform will-change-[opacity,filter]"
                  >
                    {word}
                  </span>
                ))}
                ”
              </p>
              <footer className="mt-3 font-sans text-xs tracking-widest uppercase text-taupe-600 dark:text-gold-400/80 font-semibold">
                — {artistData.name}
              </footer>
            </blockquote>

            {/* Narrative Paragraphs */}
            <div ref={bioRef} className="space-y-4 mb-8 text-taupe-600 dark:text-ivory-300/80 text-sm sm:text-base leading-relaxed font-normal transform-gpu">
              {artistData.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <a
                  href={`https://wa.me/${salonData.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Stylish Beauty Salon, I would like to request a private consultation with ${artistData.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto min-w-[210px] max-w-[280px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-espresso-950 dark:bg-gold-500 text-ivory-50 dark:text-espresso-950 font-semibold text-[0.7rem] sm:text-xs tracking-widest uppercase hover:bg-gold-500 dark:hover:bg-gold-400 hover:text-espresso-950 transition-all duration-300 shadow-luxury-elevated"
                >
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Book 1:1 Bridal Consultation</span>
                </a>

                <a
                  href={`https://wa.me/${salonData.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Stylish Beauty Salon & Academy, I would like to know more about direct classes with ${artistData.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto min-w-[210px] max-w-[280px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-espresso-950/20 dark:border-white/20 text-espresso-900 dark:text-ivory-100 hover:border-gold-600 dark:hover:border-gold-400 hover:text-gold-700 dark:hover:text-gold-300 text-[0.7rem] sm:text-xs font-semibold tracking-widest uppercase transition-all duration-300"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-600 dark:text-gold-400" />
                  <span>Inquire About Mentorship</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
