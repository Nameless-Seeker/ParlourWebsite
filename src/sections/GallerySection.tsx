import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryCategories, galleryItems } from '../data/gallery';
import { salonData } from '../data/salonInfo';
import { GalleryCategory, GalleryItem } from '../types';
import { Sparkles, Maximize2, X, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('grooming');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = galleryItems.filter((item) => item.category === activeCategory);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Slow reveal for lookbook header & category tabs
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

      // 2. Slow staggered scroll reveal for lookbook gallery cards
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        const cards = gridRef.current?.querySelectorAll('.gallery-card-item');
        if (cards && cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0.12, y: 80, scale: 0.94 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 80%',
                end: 'top 35%',
                scrub: 1.4,
              },
            }
          );
        }
      });

      mm.add('(max-width: 767px)', () => {
        if (gridRef.current) {
          gsap.fromTo(
            gridRef.current,
            { opacity: 0.2, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 85%',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalItem]);

  // Esc key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalItem) {
        setActiveModalItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full bg-ivory-50 dark:bg-espresso-950 px-4 sm:px-10 md:px-16 py-16 sm:py-24 md:py-32 text-espresso-900 dark:text-ivory-100 border-t border-taupe-200/60 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header (Slow reveal on scroll) */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-12 sm:mb-18 transform-gpu">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-gold-500/30 dark:border-gold-400/30 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-[0.65rem] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter IV • Training &amp; Mastery</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-espresso-950 dark:text-ivory-50 mb-3 sm:mb-4">
            What We <span className="italic font-normal text-gold-600 dark:text-gold-400">Teach</span>
          </h2>

          <p className="font-sans text-xs sm:text-base text-taupe-600 dark:text-ivory-300/80 max-w-2xl px-2 sm:px-0">
            A comprehensive look at the professional salon techniques, chemical hair procedures, clinical facials, and bridal makeovers taught to our students.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full bg-ivory-100 dark:bg-espresso-900 border border-taupe-200 dark:border-white/10 shadow-luxury-subtle max-w-full">
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as GalleryCategory)}
                  className={`relative px-3.5 sm:px-5 py-2 sm:py-2 rounded-xl sm:rounded-full text-[0.7rem] sm:text-sm font-medium tracking-wider uppercase transition-colors duration-300 focus:outline-none ${
                    isActive ? 'text-ivory-50 dark:text-espresso-950 font-semibold' : 'text-taupe-600 dark:text-ivory-300/70 hover:text-espresso-950 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGalleryPill"
                      className="absolute inset-0 rounded-xl sm:rounded-full bg-espresso-900 dark:bg-gold-400 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-taupe-500 dark:text-ivory-300/60 mb-3 px-1">
          <span className="flex items-center gap-1.5 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Swipe training looks horizontally</span>
          </span>
          <span className="text-[10px] tracking-widest uppercase font-mono text-gold-600 dark:text-gold-400">
            Swipe &rarr;
          </span>
        </div>

        {/* Gallery Grid (Horizontal snap carousel on phone, grid on desktop) */}
        <div
          ref={gridRef}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 md:gap-6 pb-6 md:pb-0 -mx-4 px-4 sm:-mx-10 sm:px-10 md:mx-0 md:px-0 md:grid-cols-2 lg:grid-cols-4 no-scrollbar overscroll-x-contain"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveModalItem(item)}
                className="gallery-card-item group relative rounded-2xl overflow-hidden cursor-pointer bg-taupe-100 shadow-luxury-subtle hover:shadow-luxury-elevated transition-all duration-500 border border-taupe-200/80 aspect-[3/4] transform-gpu will-change-transform w-[72vw] xs:w-[270px] max-w-[290px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:flex-shrink"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Ambient dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Corner Category Tag */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[0.62rem] tracking-widest uppercase px-2.5 py-1 rounded-full bg-espresso-950/70 backdrop-blur-md text-gold-300 border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Zoom Icon indicator */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-ivory-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Content Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                  <h3 className="font-serif text-xl font-normal text-ivory-50 group-hover:text-gold-300 transition-colors duration-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[0.72rem] text-ivory-200/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Lookbook Lightbox Modal */}
        <AnimatePresence>
          {activeModalItem && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={activeModalItem.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 bg-espresso-950/90 backdrop-blur-md overflow-y-auto"
              onClick={() => setActiveModalItem(null)}
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-ivory-50 dark:bg-espresso-950 text-espresso-950 dark:text-ivory-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 max-h-[92vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-espresso-950/70 hover:bg-espresso-950 text-ivory-50 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close lookbook modal"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Image (md:col-span-7) */}
                <div className="md:col-span-7 bg-espresso-900 relative aspect-[4/5] md:aspect-auto h-full max-h-[42vh] md:max-h-full">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content details (md:col-span-5) */}
                <div className="md:col-span-5 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400 mb-2 block">
                      {activeModalItem.tag} • {activeModalItem.categoryLabel}
                    </span>

                    <h3 className="font-serif text-3xl font-normal text-espresso-950 dark:text-ivory-50 mb-4">
                      {activeModalItem.title}
                    </h3>

                    <p className="font-sans text-sm text-taupe-600 dark:text-ivory-300/80 leading-relaxed mb-6 font-light">
                      {activeModalItem.description}
                    </p>

                    <div className="p-4 rounded-xl bg-ivory-100 dark:bg-espresso-900 border border-taupe-200/80 dark:border-white/10 mb-6">
                      <h4 className="font-sans text-[0.7rem] uppercase tracking-wider text-espresso-900 dark:text-ivory-200 font-semibold mb-1">
                        Atelier Signature Technique
                      </h4>
                      <p className="text-xs text-taupe-600 dark:text-ivory-300/70 leading-relaxed">
                        Customized shade-mapping, waterproof high-definition foundation, and micro-lash isolation.
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-taupe-200 dark:border-white/10 space-y-3">
                    <a
                      href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20${encodeURIComponent(
                        salonData.name
                      )},%20I%20loved%20the%20"${encodeURIComponent(
                        activeModalItem.title
                      )}"%20look%20from%20your%20lookbook.%20I%20would%20like%20to%20inquire%20about%20booking%20this%20treatment.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gold-500 text-espresso-950 font-semibold text-xs tracking-widest uppercase hover:bg-gold-400 transition-all shadow-glow-gold"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire About This Look</span>
                    </a>

                    <button
                      onClick={() => setActiveModalItem(null)}
                      className="w-full py-2.5 text-xs text-taupe-600 dark:text-ivory-400 hover:text-espresso-950 dark:hover:text-white tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Back to Portfolio
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
