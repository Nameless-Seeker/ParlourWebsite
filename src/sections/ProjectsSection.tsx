import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData, projectCategories, ProjectItem } from '../data/projects';
import { salonData } from '../data/salonInfo';
import { Sparkles, Maximize2, X, MessageCircle, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bridal' | 'nails' | 'hair' | 'grooming'>('all');
  const [activeModalItem, setActiveModalItem] = useState<ProjectItem | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((item) => item.category === activeCategory);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Slow reveal for header
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

      // Slow scrub reveal for cards
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.project-card-item');
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0.1, y: 50, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 85%',
                end: 'top 45%',
                scrub: 1.2,
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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-ivory-50 dark:bg-espresso-950 px-4 sm:px-10 md:px-16 py-16 sm:py-24 md:py-32 text-espresso-900 dark:text-ivory-100 border-t border-taupe-200/60 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 w-[45vw] h-[45vw] rounded-full bg-gold-400/10 blur-[130px] opacity-70"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-12 sm:mb-18 transform-gpu">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-gold-500/30 dark:border-gold-400/30 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-[0.65rem] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter III • Completed Work &amp; Portfolio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-espresso-950 dark:text-ivory-50 mb-3 sm:mb-4">
            Our Work &amp; <span className="italic font-normal text-gold-600 dark:text-gold-400">Transformations</span>
          </h2>

          <p className="font-sans text-xs sm:text-base text-taupe-600 dark:text-ivory-300/80 max-w-2xl font-light leading-relaxed px-2 sm:px-0">
            Authentic bridal makeovers, customized designer nail extensions, and hair transformations
            crafted for our real clients at {salonData.name}.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full bg-ivory-100 dark:bg-espresso-900 border border-taupe-200 dark:border-white/10 shadow-luxury-subtle max-w-full">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as 'all' | 'bridal' | 'nails' | 'hair' | 'grooming')}
                  className={`relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-[0.7rem] sm:text-sm font-medium tracking-wider uppercase transition-colors duration-300 focus:outline-none cursor-pointer ${
                    isActive
                      ? 'text-ivory-50 dark:text-espresso-950 font-semibold'
                      : 'text-taupe-600 dark:text-ivory-300/70 hover:text-espresso-950 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectPill"
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
            <span>Swipe portfolio horizontally</span>
          </span>
          <span className="text-[10px] tracking-widest uppercase font-mono text-gold-600 dark:text-gold-400">
            Swipe &rarr;
          </span>
        </div>

        {/* Projects Cards Grid (Horizontal snap carousel on phone, grid on desktop) */}
        <div
          ref={gridRef}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 sm:gap-6 md:gap-8 pb-6 md:pb-0 -mx-4 px-4 sm:-mx-10 sm:px-10 md:mx-0 md:px-0 md:grid-cols-2 lg:grid-cols-3 items-stretch no-scrollbar overscroll-x-contain"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="project-card-item group flex flex-col w-[82vw] xs:w-[310px] max-w-[330px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:flex-shrink bg-ivory-100 dark:bg-espresso-900/90 rounded-3xl overflow-hidden border border-taupe-200/80 dark:border-white/10 shadow-luxury-subtle hover:shadow-luxury-elevated transition-all duration-500 transform-gpu will-change-transform"
              >
                {/* Image Cover Container */}
                <div
                  onClick={() => setActiveModalItem(project)}
                  className="relative aspect-[4/5] overflow-hidden bg-taupe-200 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[0.65rem] tracking-widest uppercase font-semibold px-3 py-1 rounded-full bg-espresso-950/80 backdrop-blur-md text-gold-300 border border-white/10">
                      {project.tag}
                    </span>

                    <button
                      aria-label="View Full Photo"
                      className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-ivory-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold-500 hover:text-espresso-950"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-espresso-950 dark:text-ivory-50 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors duration-300 mb-1">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs tracking-wider uppercase text-taupe-600 dark:text-gold-400/80 font-medium mb-3">
                      {project.subtitle}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-taupe-600 dark:text-ivory-300/80 font-light leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Work Highlights */}
                    <div className="border-t border-taupe-200/60 dark:border-white/10 pt-4 mb-6">
                      <h4 className="font-sans text-[0.68rem] uppercase tracking-wider text-espresso-900 dark:text-ivory-200 font-semibold mb-2.5">
                        Project Highlights:
                      </h4>
                      <ul className="space-y-1.5">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs text-taupe-600 dark:text-ivory-300/70"
                          >
                            <Check className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions: View Photo + Inquire on WhatsApp */}
                  <div className="pt-2 border-t border-taupe-200/60 dark:border-white/10 flex items-center gap-3">
                    <button
                      onClick={() => setActiveModalItem(project)}
                      className="px-4 py-3 rounded-full border border-taupe-300 dark:border-white/15 text-espresso-900 dark:text-ivory-200 hover:border-gold-500 hover:text-gold-600 text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      View Photo
                    </button>
                    <a
                      href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20${encodeURIComponent(
                        salonData.name
                      )},%20I%20saw%20your%20completed%20work%20"${encodeURIComponent(
                        project.title
                      )}"%20on%20your%20website%20and%20would%20like%20to%20inquire.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-espresso-950 font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Photo Preview Modal */}
        <AnimatePresence>
          {activeModalItem && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={activeModalItem.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-espresso-950/90 backdrop-blur-md overflow-y-auto"
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
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Left: Big Photo */}
                <div className="md:col-span-7 bg-espresso-950 flex items-center justify-center max-h-[42vh] md:max-h-[85vh] overflow-hidden">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    className="w-full h-full object-contain max-h-[42vh] md:max-h-[85vh]"
                  />
                </div>

                {/* Right: Info & WhatsApp Booking */}
                <div className="md:col-span-5 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <span className="text-[0.65rem] tracking-[0.25em] uppercase font-semibold text-gold-600 dark:text-gold-400 block mb-2">
                      {activeModalItem.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 dark:text-ivory-50 font-normal mb-1">
                      {activeModalItem.title}
                    </h3>
                    <p className="font-sans text-xs tracking-wider uppercase text-taupe-600 dark:text-gold-400/80 font-medium mb-4">
                      {activeModalItem.subtitle}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-taupe-600 dark:text-ivory-300/80 leading-relaxed font-light mb-6">
                      {activeModalItem.description}
                    </p>

                    <div className="p-4 rounded-xl bg-ivory-100 dark:bg-espresso-900 border border-taupe-200/80 dark:border-white/10 mb-6">
                      <h4 className="font-sans text-[0.7rem] uppercase tracking-wider text-espresso-900 dark:text-ivory-200 font-semibold mb-2">
                        Work Done:
                      </h4>
                      <ul className="space-y-1.5">
                        {activeModalItem.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs text-taupe-600 dark:text-ivory-300/80"
                          >
                            <Check className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-taupe-200 dark:border-white/10 space-y-3">
                    <a
                      href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20${encodeURIComponent(
                        salonData.name
                      )},%20I%20loved%20this%20work%20"${encodeURIComponent(
                        activeModalItem.title
                      )}"%20and%20would%20like%20to%20book%20a%20similar%20service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gold-500 text-espresso-950 font-semibold text-xs tracking-widest uppercase hover:bg-gold-400 transition-all shadow-glow-gold"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book a Similar Look</span>
                    </a>

                    <button
                      onClick={() => setActiveModalItem(null)}
                      className="w-full py-2 text-xs text-taupe-600 dark:text-ivory-400 hover:text-espresso-950 dark:hover:text-white tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Back to Projects
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
