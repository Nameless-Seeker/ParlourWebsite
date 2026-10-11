import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const IntroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const hallmarksRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Slow reveal for section header & crest
      gsap.fromTo(
        headerRef.current,
        { opacity: 0.1, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );

      // 2. Parallax drift and unmasking for the editorial side image
      gsap.fromTo(
        imageRef.current,
        { y: 50, scale: 0.96, opacity: 0.3 },
        {
          y: -40,
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 20%',
            scrub: 1.4,
          },
        }
      );

      // 3. Signature slow word reveal for the manifesto statement (Hackspire progressive scrub pattern)
      const words = textContainerRef.current?.querySelectorAll('.reveal-word');
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          {
            opacity: 0.12,
            y: 10,
            filter: 'blur(3px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: 'top 75%',
              end: 'bottom 35%',
              scrub: 1.5,
            },
          }
        );
      }

      // 4. Hallmarks metrics cards reveal slowly in staggered sequence
      const hallmarkCards = hallmarksRef.current?.children;
      if (hallmarkCards && hallmarkCards.length > 0) {
        gsap.fromTo(
          hallmarkCards,
          { opacity: 0.1, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: hallmarksRef.current,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 1.2,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const manifestoText =
    'True beauty is never manufactured—it is uncovered through patient artistry, harmonious proportions, and exquisite skincare rituals tailored to celebrate your singular essence.';

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-ivory-50 dark:bg-espresso-950 px-6 sm:px-12 md:px-16 pt-16 pb-28 md:pt-24 md:pb-36 text-espresso-900 dark:text-ivory-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle background ambient blur graphic (inspired by Hackspire blend-multiply blur-2xl) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 w-96 h-96 rounded-full bg-blush-100/60 dark:bg-gold-500/10 blur-3xl mix-blend-multiply opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 w-96 h-96 rounded-full bg-taupe-100/70 dark:bg-gold-500/10 blur-3xl mix-blend-multiply opacity-50"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Eyebrow & Crest (Slow reveal on scroll) */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 md:mb-20 transform-gpu">
          <div className="w-12 h-12 rounded-full border border-gold-400/40 flex items-center justify-center mb-4 text-gold-600 dark:text-gold-400 bg-gold-200/20 dark:bg-gold-500/10 shadow-sm">
            <Sparkles className="w-5 h-5 text-gold-600 dark:text-gold-400" />
          </div>
          <span className="font-sans text-[0.7rem] sm:text-xs tracking-[0.35em] uppercase text-taupe-600 dark:text-gold-400/90 font-semibold mb-3">
            Chapter I • The Atelier Manifesto
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso-950 dark:text-ivory-50 max-w-2xl">
            Artistry Sculpted for the <span className="italic font-normal text-gold-600 dark:text-gold-400">Discerning</span>
          </h2>
        </div>

        {/* Asymmetrical Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Arch Framing and Parallax */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageRef}
              className="relative rounded-t-[14rem] rounded-b-2xl overflow-hidden shadow-luxury-elevated border border-gold-400/30 bg-espresso-950 aspect-[3/4] max-w-md mx-auto transform-gpu will-change-transform"
            >
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
                alt="Intimate bridal makeup and beauty artistry at Aurelia Atelier"
                className="w-full h-full object-cover object-[50%_25%] filter contrast-[1.04] brightness-[0.98]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent" />

              {/* Subtle Atelier Stamp Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md bg-espresso-950/80 border border-white/15 text-ivory-50 shadow-luxury-subtle">
                <p className="font-serif italic text-lg sm:text-xl text-gold-300 mb-0.5">
                  “Precision in every stroke”
                </p>
                <p className="font-sans text-[0.65rem] tracking-widest uppercase text-ivory-300">
                  Kolkata Flagship Atelier • Since 2012
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Scroll-Driven Slow Typography Reveal & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Scroll-scrubbed Manifesto text */}
            <div ref={textContainerRef} className="mb-8">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-[1.35] text-espresso-950 dark:text-ivory-50">
                {manifestoText.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className="reveal-word inline-block mr-[0.28em] will-change-transform will-change-[opacity,filter]"
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>

            <p className="font-sans text-sm sm:text-base text-taupe-600 dark:text-ivory-300/80 font-normal leading-relaxed mb-10 max-w-xl">
              Nestled in the architectural heart of Kolkata, Aurelia was founded on an unwavering ethos:
              to transcend conventional beauty parlours and offer an authentic sanctuary of high-fashion bridal
              aesthetics, medical-grade skin therapies, and an elite makeup masterclass academy.
            </p>

            {/* Brand Hallmarks Deck (Staggered scroll reveal) */}
            <div ref={hallmarksRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-taupe-200/80 dark:border-white/10">
              <div className="flex flex-col transform-gpu">
                <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 mb-2">
                  <Award className="w-4 h-4" />
                  <span className="font-serif text-3xl font-normal text-espresso-950 dark:text-ivory-50">12+</span>
                </div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-espresso-900 dark:text-ivory-100 mb-1">
                  Years of Couture
                </h4>
                <p className="font-sans text-xs text-taupe-600 dark:text-ivory-400/80 leading-snug">
                  Art-directed bridal styling and runway experience.
                </p>
              </div>

              <div className="flex flex-col transform-gpu">
                <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 mb-2">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="font-serif text-3xl font-normal text-espresso-950 dark:text-ivory-50">2,800+</span>
                </div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-espresso-900 dark:text-ivory-100 mb-1">
                  Brides Perfected
                </h4>
                <p className="font-sans text-xs text-taupe-600 dark:text-ivory-400/80 leading-snug">
                  Cherished bridal transformations across Eastern India.
                </p>
              </div>

              <div className="flex flex-col transform-gpu">
                <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-serif text-3xl font-normal text-espresso-950 dark:text-ivory-50">100%</span>
                </div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-espresso-900 dark:text-ivory-100 mb-1">
                  Pure Formulations
                </h4>
                <p className="font-sans text-xs text-taupe-600 dark:text-ivory-400/80 leading-snug">
                  Dermatologist-approved, cruelty-free international brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
