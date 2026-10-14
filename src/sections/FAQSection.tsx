import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faqData } from '../data/faq';
import { salonData } from '../data/salonInfo';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqData[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqListRef = useRef<HTMLDivElement>(null);

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

      // 2. Slow staggered reveal for FAQ accordion items
      const items = faqListRef.current?.children;
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0.15, y: 55, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.14,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: faqListRef.current,
              start: 'top 80%',
              end: 'top 40%',
              scrub: 1.3,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative w-full bg-ivory-100 dark:bg-[#14100E] px-4 sm:px-10 md:px-16 py-16 sm:py-24 md:py-32 text-espresso-900 dark:text-ivory-100 border-t border-taupe-200/60 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header (Slow reveal on scroll) */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-12 sm:mb-18 transform-gpu">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-gold-500/30 dark:border-gold-400/30 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-[0.65rem] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Chapter VI • Inquiries &amp; Guidance</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-espresso-950 dark:text-ivory-50 mb-3">
            Frequently Asked <span className="italic font-normal text-gold-600 dark:text-gold-400">Questions</span>
          </h2>

          <p className="font-sans text-xs sm:text-base text-taupe-600 dark:text-ivory-300/80 max-w-xl px-2 sm:px-0">
            Everything you need to know about salon booking timelines, hair treatments, bridal trials, and appointments.
          </p>
        </div>

        {/* FAQ Accordion List (Slow staggered scrub reveal) */}
        <div ref={faqListRef} className="space-y-3.5 sm:space-y-4">
          {faqData.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-ivory-50 dark:bg-espresso-900/90 border border-taupe-200/80 dark:border-white/10 overflow-hidden shadow-luxury-subtle transition-colors duration-300 transform-gpu will-change-transform"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-4.5 sm:p-7 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-2xl text-espresso-950 dark:text-ivory-50 font-normal leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-espresso-950 dark:bg-gold-500 text-gold-400 dark:text-espresso-950 rotate-180'
                        : 'bg-ivory-200/60 dark:bg-white/10 text-espresso-900 dark:text-ivory-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-taupe-200/50 dark:border-white/10 text-taupe-600 dark:text-ivory-300/80 text-sm sm:text-base leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center text-xs sm:text-sm text-taupe-600 dark:text-ivory-400 flex items-center justify-center gap-2">
          <span>Have an unanswered question?</span>
          <a
            href={`https://wa.me/${salonData.whatsappNumber}?text=${encodeURIComponent(
              `Hello ${salonData.name}, I have a question regarding services and appointments.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-700 dark:text-gold-400 font-semibold underline underline-offset-4 hover:text-espresso-950 dark:hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat directly with our concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
};
