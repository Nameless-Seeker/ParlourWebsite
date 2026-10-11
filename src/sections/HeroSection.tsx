import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, GraduationCap, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const bgMediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const archMaskRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial slow, elegant entrance for content elements
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.2 }
      )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1.4 },
          '-=0.8'
        )
        .fromTo(
          '.hero-tagline',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.2 },
          '-=0.9'
        )
        .fromTo(
          '.hero-ctas',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.8'
        )
        .fromTo(
          '.hero-scroll-indicator',
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '-=0.5'
        );

      // 2. Slow, gradual scroll-driven transform (Hackspire scrub pattern)
      // Background subtle parallax scale & fade out slowly
      gsap.to(bgMediaRef.current, {
        scale: 1.18,
        yPercent: 12,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      });

      // Center editorial content lifts and fades out slowly
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0.05,
        scale: 0.96,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: '10% top',
          end: '80% top',
          scrub: 1.2,
        },
      });

      // Signature bottom curved arch divider lifts slowly over the hero layer
      gsap.to(archMaskRef.current, {
        y: -30,
        scaleY: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: '25% top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] w-full overflow-hidden select-none bg-espresso-950 flex flex-col justify-between"
    >
      {/* 1. Ambient Editorial Visual Layer */}
      <div
        ref={bgMediaRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none transform-gpu origin-center will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2600&auto=format&fit=crop"
          alt="Editorial bridal makeup and beauty aesthetics"
          className="h-full w-full object-cover object-[50%_35%] filter brightness-[0.72] contrast-[1.08] saturate-[0.95]"
          loading="eager"
        />

        {/* Cinematic dark champagne & espresso vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/80 via-espresso-950/45 to-espresso-950/95" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-espresso-950/30 to-espresso-950/80 mix-blend-multiply" />
      </div>

      {/* Subtle Ambient Golden Glow (inspired by hackspire's radial glow) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] rounded-full blur-[120px] opacity-25"
        style={{
          background:
            'radial-gradient(circle, rgba(197, 168, 128, 0.45) 0%, rgba(234, 216, 207, 0.15) 50%, transparent 80%)',
        }}
      />

      {/* Top spacing for fixed header */}
      <div className="h-24 sm:h-32" />

      {/* 2. Hero Center Editorial Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center justify-center px-6 sm:px-10 text-center max-w-5xl mx-auto my-auto transform-gpu will-change-transform"
      >
        {/* Eyebrow / Brand Seal Badge */}
        <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-white/5 backdrop-blur-md text-gold-300 text-[0.7rem] sm:text-xs font-medium tracking-[0.25em] uppercase mb-6 shadow-glow-gold">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span>Haute Bridal Artistry & Masterclass Academy</span>
        </div>

        {/* Master Headline (Cormorant Garamond editorial serif) */}
        <h1 className="hero-title font-serif text-[clamp(2.75rem,7vw,5.5rem)] font-light leading-[1.04] tracking-tight text-ivory-50 max-w-4xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
          Where Artistry Meets <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-gold-300">
            Timeless Elegance
          </span>
        </h1>

        {/* Narrative Tagline */}
        <p className="hero-tagline mt-6 font-sans text-sm sm:text-base md:text-lg text-ivory-200/80 max-w-2xl font-light leading-relaxed tracking-wide drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
          An intimate Kolkata atelier dedicated to bespoke bridal aesthetics, skin rituals,
          and professional makeup artistry education for aspiring masters.
        </p>

        {/* Dual CTA Button Deck (Hackspire pill inspired with glowing physics) */}
        <div className="hero-ctas mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary CTA: Book an Experience */}
          <a
            href="#contact"
            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-ivory-50 text-espresso-950 font-sans font-semibold text-xs tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-luxury-elevated"
          >
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: 'inset 0 0 15px rgba(197, 168, 128, 0.4)',
              }}
            />
            <span className="relative z-10">Reserve An Experience</span>
            <ArrowRight className="w-4 h-4 text-espresso-950 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA: Explore Academy */}
          <a
            href="#academy"
            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full border border-ivory-50/30 bg-white/5 backdrop-blur-md text-ivory-100 font-sans font-medium text-xs tracking-widest uppercase overflow-hidden transition-all duration-300 hover:border-gold-400 hover:text-gold-300 hover:bg-gold-500/10 active:scale-[0.98]"
          >
            <GraduationCap className="w-4 h-4 text-gold-400 transition-transform duration-300 group-hover:scale-110" />
            <span>Explore Academy</span>
          </a>
        </div>
      </div>

      {/* 3. Bottom Transition Zone: Scroll Indicator & Signature Curved SVG Divider */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Floating Scroll Indicator */}
        <a
          href="#about"
          className="hero-scroll-indicator group flex flex-col items-center gap-2 mb-6 text-ivory-300/60 hover:text-gold-300 transition-colors cursor-pointer"
          aria-label="Scroll to learn more about the atelier"
        >
          <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-400" />
        </a>

        {/* Signature Curved Mask (Translating Hackspire's bottom curved SVG arch) */}
        <div
          ref={archMaskRef}
          className="w-full overflow-hidden leading-none pointer-events-none transform-gpu origin-bottom will-change-transform"
        >
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-14 sm:h-20 md:h-24 text-ivory-50 dark:text-espresso-950 fill-current block transition-colors duration-500"
            aria-hidden="true"
          >
            <path d="M0,0 C480,110 960,110 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};
