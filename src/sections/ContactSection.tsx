import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { salonData } from '../data/salonInfo';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightFormRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceCategory: 'Bridal Artistry',
    preferredDate: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

      // 2. Slow reveal for left studio card and right booking form
      gsap.fromTo(
        leftCardRef.current,
        { opacity: 0.15, y: 65, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: 'top 82%',
            end: 'top 45%',
            scrub: 1.3,
          },
        }
      );

      gsap.fromTo(
        rightFormRef.current,
        { opacity: 0.15, y: 65, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rightFormRef.current,
            start: 'top 82%',
            end: 'top 45%',
            scrub: 1.3,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Construct pre-filled WhatsApp message
    const message = `*New Booking Request from Website*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service/Course:* ${encodeURIComponent(
      formData.serviceCategory
    )}%0A*Preferred Date:* ${encodeURIComponent(
      formData.preferredDate || 'To be decided'
    )}%0A*Notes:* ${encodeURIComponent(formData.notes || 'None')}`;

    const whatsappUrl = `https://wa.me/${salonData.whatsappNumber}?text=${message}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-ivory-50 dark:bg-espresso-950 px-6 sm:px-12 md:px-16 py-20 md:py-32 text-espresso-900 dark:text-ivory-100 border-t border-taupe-200/60 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Subtle Warm Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full bg-blush-100/60 dark:bg-gold-500/10 blur-3xl opacity-60"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header (Slow reveal on scroll) */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 md:mb-20 transform-gpu">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 dark:border-gold-400/30 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-xs font-medium tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter VIII • Concierge & Booking</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-espresso-950 dark:text-ivory-50 mb-3">
            Begin Your <span className="italic font-normal text-gold-600 dark:text-gold-400">Journey</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-taupe-600 dark:text-ivory-300/80 max-w-xl">
            Reserve your bridal trial, book an aesthetic treatment, or apply for our upcoming academy cohorts.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Form (Slow scrub reveal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Information & Map Card */}
          <div ref={leftCardRef} className="lg:col-span-5 space-y-6 transform-gpu">
            <div className="p-8 rounded-3xl bg-ivory-100 dark:bg-espresso-900 border border-taupe-200/80 dark:border-white/10 shadow-luxury-subtle">
              <h3 className="font-serif text-2xl text-espresso-950 dark:text-ivory-50 font-normal mb-6">
                The Flagship Atelier
              </h3>

              <div className="space-y-5 text-sm text-espresso-900 dark:text-ivory-100">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-gold-500/10 dark:bg-gold-400/10 text-gold-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-0.5">
                      Address
                    </h4>
                    <p className="leading-relaxed font-light text-espresso-900 dark:text-ivory-200">{salonData.address}</p>
                    <p className="font-light text-espresso-900 dark:text-ivory-200">{salonData.city}</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-gold-500/10 dark:bg-gold-400/10 text-gold-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-0.5">
                      Concierge Desk
                    </h4>
                    <a
                      href={`tel:${salonData.phone}`}
                      className="hover:text-gold-700 dark:hover:text-gold-300 transition-colors font-medium text-espresso-900 dark:text-ivory-200"
                    >
                      {salonData.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-gold-500/10 dark:bg-gold-400/10 text-gold-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-0.5">
                      Instant WhatsApp
                    </h4>
                    <a
                      href={`https://wa.me/${salonData.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold-700 dark:hover:text-gold-300 transition-colors font-medium text-espresso-900 dark:text-ivory-200"
                    >
                      Chat on WhatsApp (+91 98765 43210)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-gold-500/10 dark:bg-gold-400/10 text-gold-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-0.5">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${salonData.email}`}
                      className="hover:text-gold-700 dark:hover:text-gold-300 transition-colors font-light text-espresso-900 dark:text-ivory-200"
                    >
                      {salonData.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-taupe-200/80 dark:border-white/10">
                  <div className="w-9 h-9 rounded-full bg-gold-500/10 dark:bg-gold-400/10 text-gold-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-0.5">
                      Studio Hours
                    </h4>
                    <p className="text-xs text-taupe-600 dark:text-ivory-300/70 leading-relaxed font-light">
                      {salonData.timings}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Location Card / Google Maps Placeholder */}
            <div className="p-6 rounded-3xl bg-ivory-100 dark:bg-espresso-900 border border-taupe-200/80 dark:border-white/10 relative overflow-hidden flex flex-col justify-between">
              <div className="relative aspect-[16/7] rounded-2xl overflow-hidden bg-taupe-200 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
                  alt="Aurelia Studio Interior"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-espresso-950/40 flex items-center justify-center text-ivory-50">
                  <div className="text-center p-3">
                    <span className="font-serif text-lg font-normal block">Park Avenue Row</span>
                    <span className="text-[0.65rem] tracking-wider uppercase text-gold-300">
                      Central Kolkata Location
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-gold-700 dark:text-gold-400 hover:text-espresso-950 dark:hover:text-white transition-colors pt-1 cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Booking & WhatsApp Inquiry Form */}
          <div ref={rightFormRef} className="lg:col-span-7 transform-gpu">
            <div className="p-8 sm:p-10 rounded-3xl bg-ivory-100 dark:bg-espresso-900 border border-taupe-200/80 dark:border-white/10 shadow-luxury-elevated">
              <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 dark:text-ivory-50 font-normal mb-2">
                Reserve An Appointment or Course
              </h3>
              <p className="font-sans text-xs sm:text-sm text-taupe-600 dark:text-ivory-300/80 leading-relaxed mb-8 font-light">
                Fill in your details below to instantly generate a verified WhatsApp consultation
                request with our concierge desk.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-gold-500/15 border border-gold-500/30 text-espresso-950 dark:text-gold-300 flex items-center gap-3 text-xs sm:text-sm">
                  <CheckCircle className="w-5 h-5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
                  <span>
                    WhatsApp consultation window opened! Our bridal concierge will respond promptly.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/15 text-espresso-950 dark:text-ivory-50 text-sm focus:outline-none focus:border-gold-600 dark:focus:border-gold-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-2">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/15 text-espresso-950 dark:text-ivory-50 text-sm focus:outline-none focus:border-gold-600 dark:focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Category & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-2">
                      Service / Course Interest *
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceCategory: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/15 text-espresso-950 dark:text-ivory-50 text-sm focus:outline-none focus:border-gold-600 dark:focus:border-gold-400 transition-colors cursor-pointer"
                    >
                      <option value="Bridal Artistry & Makeover">Couture Bridal Artistry</option>
                      <option value="Pre-Bridal Skincare & Facials">Pre-Bridal Clinical Skincare</option>
                      <option value="Haute Hair & Updo Styling">Haute Hair Styling</option>
                      <option value="Nails & Cashmere Lashes">Nail & Lash Studio</option>
                      <option value="Diploma in Professional Artistry (8 Weeks)">
                        Academy: 8-Week Diploma
                      </option>
                      <option value="Airbrush Masterclass (2 Weeks)">
                        Academy: Airbrush Masterclass
                      </option>
                      <option value="Hair Architecture Course">Academy: Bridal Hair Course</option>
                      <option value="Personal Self-Grooming Masterclass">
                        Academy: Self-Grooming
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-2">
                      Preferred Date / Wedding Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/15 text-espresso-950 dark:text-ivory-50 text-sm focus:outline-none focus:border-gold-600 dark:focus:border-gold-400 transition-colors cursor-pointer"
                    />
                  </div>
                </div>

                {/* Notes / Special Requests */}
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-2">
                    Message or Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event, venue, outfit palette, or any specific questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/15 text-espresso-950 dark:text-ivory-50 text-sm focus:outline-none focus:border-gold-600 dark:focus:border-gold-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-espresso-950 font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-glow-gold cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Proceed to WhatsApp Concierge</span>
                    <Send className="w-3.5 h-3.5 ml-1" />
                  </button>
                  <p className="mt-2.5 text-center text-[0.65rem] tracking-wider uppercase text-taupe-600 dark:text-ivory-400 font-medium">
                    Instant response • Zero booking commitment until consultation
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
