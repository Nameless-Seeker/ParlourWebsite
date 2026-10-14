import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { serviceCategories, servicesData } from '../data/services';
import { salonData } from '../data/salonInfo';
import { ServiceCategory } from '../types';
import { Clock, Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('grooming');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const consultationRef = useRef<HTMLDivElement>(null);

  const filteredServices = servicesData.filter(
    (service) => service.category === activeCategory
  );

  const currentCategoryInfo = serviceCategories.find((cat) => cat.id === activeCategory);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Slow reveal for section header & category filter
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

      // 2. Slow staggered scroll reveal for service cards (Hackspire cards pattern)
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        const cards = cardsContainerRef.current?.querySelectorAll('.service-card-item');
        if (cards && cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0.15, y: 75, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.18,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: 'top 80%',
                end: 'top 40%',
                scrub: 1.4,
              },
            }
          );
        }
      });

      mm.add('(max-width: 767px)', () => {
        if (cardsContainerRef.current) {
          gsap.fromTo(
            cardsContainerRef.current,
            { opacity: 0.2, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: 'top 85%',
              },
            }
          );
        }
      });

      // 3. Slow reveal for consultation callout banner
      gsap.fromTo(
        consultationRef.current,
        { opacity: 0.15, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: consultationRef.current,
            start: 'top 88%',
            end: 'top 60%',
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full bg-ivory-100 dark:bg-[#14100E] px-4 sm:px-10 md:px-16 py-16 sm:py-24 md:py-32 text-espresso-900 dark:text-ivory-100 border-t border-taupe-200/50 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Slow reveal on scroll) */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-12 sm:mb-18 transform-gpu">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-gold-500/30 dark:border-gold-400/30 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-[0.65rem] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter II • Client Services</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-espresso-950 dark:text-ivory-50 mb-3 sm:mb-4">
            Services We <span className="italic font-normal text-gold-600 dark:text-gold-400">Provide</span>
          </h2>

          <p className="font-sans text-xs sm:text-base text-taupe-600 dark:text-ivory-300/80 max-w-2xl px-2 sm:px-0">
            A comprehensive selection of specialized hair care, clinical skin therapies, and grooming treatments delivered with personal attention for our valued clients.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/10 shadow-luxury-subtle max-w-full">
            {serviceCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as ServiceCategory)}
                  className={`relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-[0.7rem] sm:text-sm font-medium tracking-wider uppercase transition-colors duration-300 focus:outline-none cursor-pointer ${
                    isActive ? 'text-ivory-50 dark:text-espresso-950 font-semibold' : 'text-taupe-600 dark:text-ivory-300/70 hover:text-espresso-950 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-xl sm:rounded-full bg-espresso-900 dark:bg-gold-400 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Editorial Subtitle */}
          {currentCategoryInfo && (
            <motion.p
              key={activeCategory}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 font-serif italic text-base sm:text-lg text-taupe-600 dark:text-gold-400/90"
            >
              {currentCategoryInfo.description}
            </motion.p>
          )}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-taupe-500 dark:text-ivory-300/60 mb-3 px-1">
          <span className="flex items-center gap-1.5 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Swipe services horizontally</span>
          </span>
          <span className="text-[10px] tracking-widest uppercase font-mono text-gold-600 dark:text-gold-400">
            Swipe &rarr;
          </span>
        </div>

        {/* Services Editorial Track / Grid (Horizontal snap carousel on phone, grid on desktop) */}
        <div
          ref={cardsContainerRef}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 sm:gap-6 md:gap-8 pb-6 md:pb-0 -mx-4 px-4 sm:-mx-10 sm:px-10 md:mx-0 md:px-0 md:grid-cols-2 lg:grid-cols-3 no-scrollbar overscroll-x-contain"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.article
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="service-card-item group flex flex-col w-[84vw] xs:w-[320px] max-w-[340px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:flex-shrink bg-ivory-50 dark:bg-espresso-900/90 rounded-2xl overflow-hidden border border-taupe-200/80 dark:border-white/10 shadow-luxury-subtle hover:shadow-luxury-elevated transition-all duration-500 transform-gpu will-change-transform"
              >
                {/* Image Cover Container with Inner Parallax */}
                <div className="relative aspect-[16/10] overflow-hidden bg-taupe-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-espresso-950/20 to-transparent" />

                  {/* Badges Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    {service.isPopular ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-espresso-950 text-[0.65rem] font-bold tracking-widest uppercase shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        Signature
                      </span>
                    ) : (
                      <span />
                    )}

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso-950/70 backdrop-blur-md text-ivory-100 text-[0.65rem] font-medium tracking-wider">
                      <Clock className="w-3 h-3 text-gold-400" />
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-espresso-950 dark:text-ivory-50 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs tracking-wider uppercase text-taupe-600 dark:text-gold-400/80 font-medium mb-3">
                      {service.subtitle}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-taupe-600 dark:text-ivory-300/80 font-normal leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Inclusions List */}
                    <div className="border-t border-taupe-200/60 dark:border-white/10 pt-4 mb-6">
                      <h4 className="font-sans text-[0.7rem] uppercase tracking-wider text-espresso-900 dark:text-ivory-200 font-semibold mb-3">
                        Treatment Inclusions:
                      </h4>
                      <ul className="space-y-2">
                        {service.inclusions.map((inclusion, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-taupe-600 dark:text-ivory-300/70 leading-snug"
                          >
                            <Check className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                            <span>{inclusion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Reserve Button (Direct WhatsApp Inquiry with Pre-filled service name) */}
                  <div className="pt-2 border-t border-taupe-200/60 dark:border-white/10">
                    <a
                      href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20${encodeURIComponent(
                        salonData.name
                      )},%20I%20would%20like%20to%20reserve%20an%20appointment%20for:%20${encodeURIComponent(
                        service.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-full border border-espresso-950/20 dark:border-white/20 bg-ivory-50 dark:bg-espresso-950 hover:bg-espresso-950 dark:hover:bg-gold-500 text-espresso-950 dark:text-ivory-50 hover:text-ivory-50 dark:hover:text-espresso-950 text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-gold-600 dark:text-gold-400 group-hover/btn:text-gold-300 dark:group-hover/btn:text-espresso-950 transition-colors" />
                      <span>Reserve Treatment</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Consultation Callout Banner (Slow reveal on scroll) */}
        <div
          ref={consultationRef}
          className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-espresso-950 via-espresso-900 to-espresso-950 text-ivory-50 shadow-luxury-elevated flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden transform-gpu"
        >
          {/* Subtle gold ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gold-500/20 blur-3xl"
          />

          <div className="relative z-10 text-center md:text-left max-w-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 font-light mb-2">
              Unsure which hair treatment, facial or styling service suits you best?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ivory-200/80 leading-relaxed">
              We offer personalized hair diagnostics, skin consultations, and customized beauty packages.
              Speak directly with our specialists to plan your appointment.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a
              href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20${encodeURIComponent(
                salonData.name
              )},%20I%20would%20like%20to%20schedule%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gold-500 text-espresso-950 font-semibold text-xs tracking-widest uppercase hover:bg-gold-400 transition-all duration-300 shadow-glow-gold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
