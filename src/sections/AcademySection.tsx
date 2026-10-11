import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { coursesData, academyPerks } from '../data/courses';
import { salonData } from '../data/salonInfo';
import {
  GraduationCap,
  Sparkles,
  Clock,
  Users,
  Award,
  Package,
  MessageCircle,
  FileText,
  UserCheck,
  PackageCheck,
  Camera,
  ArrowRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const AcademySection: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(coursesData[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const perksRef = useRef<HTMLDivElement>(null);
  const splitLeftRef = useRef<HTMLDivElement>(null);
  const splitRightRef = useRef<HTMLDivElement>(null);
  const alumniRef = useRef<HTMLDivElement>(null);

  const selectedCourse =
    coursesData.find((course) => course.id === selectedCourseId) || coursesData[0];

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

      // 2. Slow staggered reveal for 4 perk cards (Hackspire cards pattern)
      const perkCards = perksRef.current?.children;
      if (perkCards && perkCards.length > 0) {
        gsap.fromTo(
          perkCards,
          { opacity: 0.15, y: 65, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.16,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: perksRef.current,
              start: 'top 80%',
              end: 'top 45%',
              scrub: 1.4,
            },
          }
        );
      }

      // 3. Split-screen course showcase slow opposing reveal
      gsap.fromTo(
        splitLeftRef.current,
        { opacity: 0.15, x: -50 },
        {
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: splitLeftRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 1.3,
          },
        }
      );

      gsap.fromTo(
        splitRightRef.current,
        { opacity: 0.15, x: 50 },
        {
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: splitRightRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 1.3,
          },
        }
      );

      // 4. Alumni spotlight slow lift
      gsap.fromTo(
        alumniRef.current,
        { opacity: 0.15, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: alumniRef.current,
            start: 'top 88%',
            end: 'top 60%',
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderPerkIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-gold-400" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-gold-400" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-gold-400" />;
      case 'GraduationCap':
      default:
        return <GraduationCap className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section
      id="academy"
      ref={sectionRef}
      className="relative w-full bg-espresso-950 text-ivory-50 px-6 sm:px-12 md:px-16 py-20 md:py-32 overflow-hidden"
    >
      {/* Background Subtle Luxury Radial Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-1/4 w-[50vw] h-[50vw] rounded-full opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.4) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 w-[40vw] h-[40vw] rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(234, 216, 207, 0.3) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header (Slow reveal on scroll) */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 md:mb-20 transform-gpu">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/40 bg-white/5 backdrop-blur-md text-gold-300 text-xs font-medium tracking-[0.25em] uppercase mb-4 shadow-glow-gold">
            <GraduationCap className="w-3.5 h-3.5 text-gold-400" />
            <span>Chapter III • The Training Wing</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory-100 mb-4">
            Master the Craft at <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-gold-300">
              Aurelia Makeup Academy
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-ivory-300/80 max-w-2xl font-light leading-relaxed">
            Our intensive hands-on academy equips aspiring artists and seasoned professionals
            with couture techniques, portfolio branding, and real-world bridal mastery.
          </p>
        </div>

        {/* Four Core Pillars / Perks Grid (Slow staggered scrub reveal) */}
        <div ref={perksRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          {academyPerks.map((perk, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-400/50 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between transform-gpu will-change-transform"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center mb-4">
                  {renderPerkIcon(perk.iconName)}
                </div>
                <h3 className="font-serif text-lg text-ivory-100 font-normal mb-2">
                  {perk.title}
                </h3>
                <p className="font-sans text-xs text-ivory-300/70 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Course Showcase: Interactive Split Layout (Slow opposing scrub reveal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Course Selection Tabs */}
          <div ref={splitLeftRef} className="lg:col-span-5 space-y-4 transform-gpu">
            <h3 className="font-sans text-xs tracking-widest uppercase text-gold-400/90 font-medium mb-3">
              Available Cohorts & Diplomas
            </h3>

            {coursesData.map((course) => {
              const isSelected = course.id === selectedCourseId;
              return (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourseId(course.id)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 border relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white/10 border-gold-400/80 shadow-glow-gold'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gold-400" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[0.65rem] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-gold-400/15 text-gold-300 border border-gold-400/30">
                        {course.level}
                      </span>
                      {course.isFeatured && (
                        <span className="flex items-center gap-1 text-[0.65rem] tracking-wider uppercase text-gold-400 font-semibold">
                          <Sparkles className="w-3 h-3" /> Flagship
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl text-ivory-50 font-normal mb-1.5">
                      {course.title}
                    </h4>

                    <p className="font-sans text-xs text-ivory-300/70 line-clamp-2 mb-3">
                      {course.tagline}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-ivory-400/80 pt-3 border-t border-white/10">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {course.duration}
                    </span>
                    <span className="font-serif text-gold-300 text-sm font-medium">
                      {course.pricePlaceholder}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Course Details & Curriculum Spotlight */}
          <div ref={splitRightRef} className="lg:col-span-7 transform-gpu">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCourse.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white/[0.04] border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-luxury-elevated"
              >
                {/* Visual Header Image & Title */}
                <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-6 bg-espresso-900 border border-white/10">
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.title}
                    className="w-full h-full object-cover object-[50%_30%] filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-transparent" />

                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                    <div>
                      <span className="text-[0.65rem] tracking-widest uppercase font-semibold text-gold-400 block mb-1">
                        Cohort Overview
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-normal">
                        {selectedCourse.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-black/30 border border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-ivory-200">
                    <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-ivory-200">
                    <Users className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{selectedCourse.batchSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-ivory-200 col-span-2 sm:col-span-1">
                    <Package className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>
                      {selectedCourse.kitIncluded
                        ? 'Vanity Kit Included'
                        : 'Kit Guidance Provided'}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-ivory-200/90 leading-relaxed mb-6 font-light">
                  {selectedCourse.description}
                </p>

                {/* Certification Note */}
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs mb-8">
                  <Award className="w-4 h-4 flex-shrink-0 text-gold-400" />
                  <span>
                    <strong>Certification:</strong> {selectedCourse.certification}
                  </span>
                </div>

                {/* Syllabus Modules Breakdown */}
                <div className="mb-8">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-ivory-300 font-semibold mb-4 flex items-center justify-between">
                    <span>Curriculum Syllabus Highlights</span>
                    <span className="text-gold-400 text-[0.65rem]">
                      {selectedCourse.curriculum.length} Core Modules
                    </span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCourse.curriculum.map((module, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-ivory-200 leading-snug"
                      >
                        <span className="font-serif text-gold-400 font-medium text-sm flex-shrink-0">
                          0{idx + 1}
                        </span>
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Actions: WhatsApp Inquiry & Syllabus Request */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[0.65rem] tracking-wider uppercase text-ivory-400 block">
                      Course Investment
                    </span>
                    <span className="font-serif text-2xl text-gold-300 font-normal">
                      {selectedCourse.pricePlaceholder}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20Aurelia%20Academy,%20I%20am%20interested%20in%20enrolling%20in%20the%20${encodeURIComponent(
                        selectedCourse.title
                      )}.%20Please%20share%20upcoming%20batch%20dates%20and%20enrollment%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold-500 text-espresso-950 font-semibold text-xs tracking-widest uppercase hover:bg-gold-400 transition-all duration-300 shadow-glow-gold"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <a
                      href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20Aurelia%20Academy,%20please%20send%20me%20the%20detailed%20syllabus%20PDF%20for:%20${encodeURIComponent(
                        selectedCourse.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-full border border-white/20 text-ivory-200 hover:border-gold-400 hover:text-gold-300 hover:bg-white/5 transition-all duration-300"
                      title="Request Syllabus PDF"
                      aria-label="Request Syllabus PDF"
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Student Transformation Spotlight Banner (Slow reveal on scroll) */}
        <div
          ref={alumniRef}
          className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-espresso-900 via-espresso-950 to-espresso-900 border border-gold-400/20 flex flex-col md:flex-row items-center justify-between gap-8 transform-gpu"
        >
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-400 font-semibold block mb-2">
              Alumni Success Story
            </span>
            <p className="font-serif italic text-xl sm:text-2xl text-ivory-100 font-light leading-relaxed mb-4">
              “Completing the Diploma course at Aurelia changed my career trajectory. The 1:1 bridal model training gave me the exact confidence I needed to launch my independent bridal studio in Kolkata.”
            </p>
            <p className="font-sans text-xs tracking-wider uppercase text-ivory-400">
              — Debalina Sen <span className="text-gold-400">|</span> Class of 2024 Alumni & Independent Bridal Artist
            </p>
          </div>

          <a
            href={`https://wa.me/${salonData.whatsappNumber}?text=Hello%20Aurelia%20Academy,%20I%20would%20like%20to%20book%20a%20campus%20visit%20and%20speak%20with%20an%20instructor.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gold-400/60 bg-gold-500/10 hover:bg-gold-500 hover:text-espresso-950 text-gold-300 text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-glow-gold hover:shadow-none"
          >
            <span>Visit The Academy Studio</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
