import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { artistData } from '../data/artist';
import { salonData } from '../data/salonInfo';
import { Sparkles, Award, CheckCircle, MessageCircle, Calendar } from 'lucide-react';

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
      className="relative w-full bg-ivory-100 dark:bg-[#14100E] px-6 sm:px-12 md:px-16 py-20 md:py-32 text-espresso-900 dark:text-ivory-100 border-t border-taupe-200/60 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Subtle Floral/Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blush-200/50 dark:bg-gold-500/10 blur-3xl opacity-60"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header (Slow reveal on scroll) */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 md:mb-20 transform-gpu">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 dark:border-gold-400/30 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-xs font-medium tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter V • The Master Artist</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-espresso-950 dark:text-ivory-50 mb-3">
            Behind the <span className="italic font-normal text-gold-600 dark:text-gold-400">Artistry</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm tracking-widest uppercase text-taupe-600 dark:text-ivory-300/80 font-medium">
            Meet Our Creative Director & Lead Educator
          </p>
        </div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Stats (lg:col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div
              ref={portraitRef}
              className="relative rounded-3xl overflow-hidden shadow-luxury-elevated border border-taupe-200/80 dark:border-white/10 bg-ivory-50 dark:bg-espresso-950 aspect-[4/5] max-w-md mx-auto transform-gpu will-change-transform"
            >
              <img
                src={artistData.image}
                alt={artistData.name}
                className="w-full h-full object-cover object-center filter contrast-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />

              {/* Bottom Name Plate */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl backdrop-blur-md bg-espresso-950/75 border border-white/15 text-ivory-50">
                <h3 className="font-serif text-2xl text-gold-300 font-normal mb-1">
                  {artistData.name}
                </h3>
                <p className="font-sans text-xs tracking-wider uppercase text-ivory-200/80">
                  {artistData.role}
                </p>
              </div>
            </div>

            {/* Quick Stats Grid underneath portrait (Slow staggered scrub reveal) */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 max-w-md mx-auto">
              {artistData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-ivory-50 dark:bg-espresso-900 border border-taupe-200 dark:border-white/10 text-center shadow-luxury-subtle transform-gpu"
                >
                  <span className="font-serif text-2xl text-gold-700 dark:text-gold-400 font-normal block">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[0.62rem] tracking-wider uppercase text-taupe-600 dark:text-ivory-300/70 block mt-0.5">
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

            {/* Narrative Paragraphs & Accolades */}
            <div ref={bioRef} className="space-y-4 mb-8 text-taupe-600 dark:text-ivory-300/80 text-sm sm:text-base leading-relaxed font-normal transform-gpu">
              {artistData.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}

              {/* Credentials / Certifications List */}
              <div className="p-6 rounded-2xl bg-ivory-50 dark:bg-espresso-900 border border-taupe-200 dark:border-white/10 shadow-luxury-subtle mt-8">
                <h4 className="font-sans text-xs uppercase tracking-widest text-espresso-950 dark:text-ivory-100 font-bold mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                  <span>Accreditations & Honors</span>
                </h4>
                <ul className="space-y-2.5">
                  {artistData.certifications.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-espresso-900 dark:text-ivory-200 leading-snug"
                    >
                      <CheckCircle className="w-4 h-4 text-gold-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20Aurelia%20Atelier,%20I%20would%20like%20to%20request%20a%20private%20consultation%20with%20${encodeURIComponent(
                    artistData.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-espresso-950 dark:bg-gold-500 text-ivory-50 dark:text-espresso-950 font-semibold text-xs tracking-widest uppercase hover:bg-gold-500 dark:hover:bg-gold-400 hover:text-espresso-950 transition-all duration-300 shadow-luxury-elevated"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 1:1 Bridal Consultation</span>
                </a>

                <a
                  href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20Aurelia%20Academy,%20I%20would%20like%20to%20know%20more%20about%20direct%20master%20classes%20with%20${encodeURIComponent(
                    artistData.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-espresso-950/20 dark:border-white/20 text-espresso-900 dark:text-ivory-100 hover:border-gold-600 dark:hover:border-gold-400 hover:text-gold-700 dark:hover:text-gold-300 text-xs font-semibold tracking-widest uppercase transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                  <span>Inquire About Mentorship</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
