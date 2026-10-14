import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { salonData } from '../data/salonInfo';
import {
  Sparkles,
  MapPin,
  Phone,
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
    serviceCategory: 'Choose',
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
      formData.serviceCategory === 'Choose' ? 'Consultation / To be decided' : formData.serviceCategory
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
      className="relative w-full scroll-mt-20 bg-ivory-50 dark:bg-espresso-950 px-4 sm:px-10 md:px-16 py-16 sm:py-24 md:py-32 text-espresso-900 dark:text-ivory-100 border-t border-taupe-200/60 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Subtle Warm Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full bg-blush-100/60 dark:bg-gold-500/10 blur-3xl opacity-60"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header (Slow reveal on scroll) */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-12 sm:mb-20 transform-gpu">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-gold-500/30 dark:border-gold-400/30 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-[0.65rem] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter VII • Concierge &amp; Booking</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-espresso-950 dark:text-ivory-50 mb-3">
            Begin Your <span className="italic font-normal text-gold-600 dark:text-gold-400">Journey</span>
          </h2>

          <p className="font-sans text-xs sm:text-base text-taupe-600 dark:text-ivory-300/80 max-w-xl px-2 sm:px-0">
            Reserve your hair transformation, bridal makeover, or skin rejuvenation ritual.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Form (Slow scrub reveal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Studio Information & Map Card */}
          <div ref={leftCardRef} className="lg:col-span-5 space-y-6 transform-gpu">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-ivory-100 dark:bg-espresso-900 border border-taupe-200/80 dark:border-white/10 shadow-luxury-subtle">
              <h3 className="font-serif text-xl sm:text-2xl text-espresso-950 dark:text-ivory-50 font-normal mb-5 sm:mb-6">
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
                      Salon Address
                    </h4>
                    <p className="leading-relaxed font-light text-espresso-900 dark:text-ivory-200">
                      {salonData.address}
                    </p>
                    <p className="font-light text-espresso-900 dark:text-ivory-200">{salonData.city}</p>
                  </div>
                </div>

                {/* Telephone / Phone Dialer Intent */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-gold-500/10 dark:bg-gold-400/10 text-gold-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-0.5">
                      Direct Call (Phone Dialer)
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      <a
                        href={`tel:${salonData.phoneRaw}`}
                        className="hover:text-gold-700 dark:hover:text-gold-300 transition-colors font-medium text-espresso-900 dark:text-ivory-100 text-sm tracking-wide"
                      >
                        {salonData.phone}
                      </a>
                      <a
                        href={`tel:${salonData.phoneRaw}`}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-500/15 dark:bg-gold-500/20 text-gold-700 dark:text-gold-300 hover:bg-gold-500 hover:text-espresso-950 text-[0.65rem] font-semibold uppercase tracking-wider transition-colors"
                        title="Open phone dialer"
                      >
                        <Phone className="w-2.5 h-2.5" />
                        <span>Tap to Call</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat Intent */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-0.5">
                      WhatsApp Concierge
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      <a
                        href={`https://wa.me/${salonData.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold-700 dark:hover:text-gold-300 transition-colors font-medium text-espresso-900 dark:text-ivory-100 text-sm tracking-wide"
                      >
                        {salonData.phone}
                      </a>
                      <a
                        href={`https://wa.me/${salonData.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white text-[0.65rem] font-semibold uppercase tracking-wider transition-colors"
                        title="Open WhatsApp chat"
                      >
                        <MessageCircle className="w-2.5 h-2.5" />
                        <span>Tap to Chat</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-taupe-200/80 dark:border-white/10">
                  <div className="w-9 h-9 rounded-full bg-gold-500/10 dark:bg-gold-400/10 text-gold-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-semibold mb-0.5">
                      Salon Hours
                    </h4>
                    <p className="text-xs text-taupe-600 dark:text-ivory-300/70 leading-relaxed font-light">
                      {salonData.timings}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Location Card / Interactive Embedded Google Map */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-ivory-100 dark:bg-espresso-900 border border-taupe-200/80 dark:border-white/10 relative overflow-hidden flex flex-col justify-between shadow-luxury-subtle">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-serif text-lg text-espresso-950 dark:text-ivory-50 font-normal">
                    Interactive Location Map
                  </h4>
                  <p className="text-[0.7rem] uppercase tracking-wider text-taupe-600 dark:text-gold-400/80 font-medium">
                    Konnagar, Kanaipur • Gourango Road
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-700 dark:text-gold-400 text-[0.65rem] font-semibold uppercase tracking-wider">
                  <MapPin className="w-3 h-3 text-gold-600 dark:text-gold-400" />
                  Live Navigation
                </span>
              </div>

              {/* Embedded Google Map Iframe with data-lenis-prevent to isolate scroll */}
              <div
                data-lenis-prevent
                className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-taupe-200/80 dark:border-white/10 shadow-inner mb-4 bg-taupe-100 dark:bg-espresso-950"
              >
                <iframe
                  src={salonData.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Stylish Beauty Salon Location Map"
                  className="w-full h-full filter saturate-[1.1] contrast-[1.02]"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[0.7rem] text-taupe-600 dark:text-ivory-300/70 font-light">
                  Near Chotu Cycle Shop, Konnagar
                </span>
                <a
                  href={salonData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-gold-700 dark:text-gold-400 hover:text-espresso-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <span>Open Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking & WhatsApp Inquiry Form */}
          <div ref={rightFormRef} className="lg:col-span-7 transform-gpu">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-ivory-100 dark:bg-espresso-900 border border-taupe-200/80 dark:border-white/10 shadow-luxury-elevated">
              <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 dark:text-ivory-50 font-normal mb-2">
                Reserve An Appointment or Course
              </h3>
              <p className="font-sans text-xs sm:text-sm text-taupe-600 dark:text-ivory-300/80 leading-relaxed mb-6 sm:mb-8 font-light">
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

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/15 text-espresso-950 dark:text-ivory-50 text-base sm:text-sm focus:outline-none focus:border-gold-600 dark:focus:border-gold-400 transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/15 text-espresso-950 dark:text-ivory-50 text-base sm:text-sm focus:outline-none focus:border-gold-600 dark:focus:border-gold-400 transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/15 text-espresso-950 dark:text-ivory-50 text-base sm:text-sm focus:outline-none focus:border-gold-600 dark:focus:border-gold-400 transition-colors cursor-pointer"
                    >
                      <option value="Choose">Choose</option>
                      <option value="Hair Treatment">Hair Treatment</option>
                      <option value="Straightening">Straightening</option>
                      <option value="Smoothing">Smoothing</option>
                      <option value="Silk Treatment">Silk Treatment</option>
                      <option value="Rebonding">Rebonding</option>
                      <option value="Keratin Treatment">Keratin Treatment</option>
                      <option value="Botox Treatment">Botox Treatment</option>
                      <option value="Permanent Spa">Permanent Spa</option>
                      <option value="Different Types Spa (Dandruff Treatment)">Different Types Spa (Dandruff Treatment)</option>
                      <option value="Kera Smooth">Kera Smooth</option>
                      <option value="Botox Smooth">Botox Smooth</option>
                      <option value="Nanoplastia Treatment">Nanoplastia Treatment</option>
                      <option value="Permanent Nanoplastia">Permanent Nanoplastia</option>
                      <option value="Treatment Spa">Treatment Spa</option>
                      <option value="Head Massage">Head Massage</option>
                      <option value="Hair Color">Hair Color</option>
                      <option value="Pedicure">Pedicure</option>
                      <option value="Body Polishing">Body Polishing</option>
                      <option value="Anti Aging Treatment">Anti Aging Treatment</option>
                      <option value="Detan with Polishing">Detan with Polishing</option>
                      <option value="Hydro Facial">Hydro Facial</option>
                      <option value="Glycolic Peel">Glycolic Peel</option>
                      <option value="Lactic Peel">Lactic Peel</option>
                      <option value="Ozone Treatment">Ozone Treatment</option>
                      <option value="Melasma - Hyper">Melasma - Hyper</option>
                      <option value="Earlobe Pasting (Ear hole joining)">Earlobe Pasting (Ear hole joining)</option>
                      <option value="Fire Botox">Fire Botox</option>
                      <option value="Body Massage">Body Massage</option>
                      <option value="Piercing done (Ear piercing)">Piercing done (Ear piercing)</option>
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
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/15 text-espresso-950 dark:text-ivory-50 text-base sm:text-sm focus:outline-none focus:border-gold-600 dark:focus:border-gold-400 transition-colors cursor-pointer"
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
                    className="w-full px-4 py-3 rounded-xl bg-ivory-50 dark:bg-espresso-950 border border-taupe-200 dark:border-white/15 text-espresso-950 dark:text-ivory-50 text-base sm:text-sm focus:outline-none focus:border-gold-600 dark:focus:border-gold-400 transition-colors resize-none"
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
