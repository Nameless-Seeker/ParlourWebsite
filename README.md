# AURELIA | Luxury Beauty Atelier & Professional Makeup Academy

An editorial, scroll-driven static website inspired by contemporary luxury fashion lookbooks and atmospheric digital experiences (inspired by [hackspire.tech](https://www.hackspire.tech/)).

---

## 🌟 Features & Architecture

- **Cinematic Ambient Hero:** Dark espresso & champagne vignette with oversized `Cormorant Garamond` serif typography, dual glow-pill CTAs, and a signature concave curved SVG bottom arch mask transitioning into warm ivory.
- **Scroll-Triggered Manifesto Reveal:** Word-by-word unmasking using GSAP ScrollTrigger with asymmetric parallax editorial imagery and brand hallmark metrics.
- **Curated Services Showcase:** Interactive category pills (*Bridal Artistry, Clinical Skincare, Haute Hair Design, Nails & Lashes*) powered by Motion for React layout animations, featuring treatment duration, pricing placeholders, and direct WhatsApp reservation links.
- **Makeup & Beauty Academy Wing:** High-contrast prestige layout spotlighting professional diplomas and masterclasses, interactive curriculum syllabus modules (01, 02, 03...), accredited certifications, vanity kit inclusions, and WhatsApp syllabus PDF request triggers.
- **Editorial Lookbook Portfolio:** Masonry-inspired gallery with category filters and a fullscreen Lightbox modal with direct "Inquire About This Look" action.
- **About the Master Artist:** Editorial portrait, founder philosophy quote, credentials, accolades, and 1:1 consultation triggers.
- **Client Stories & Testimonials:** Interactive carousel spotlighting real-feel bridal reviews from luxury venues (*Taj Bengal, ITC Sonar, Oberoi Udaivilas*) with star ratings.
- **Interactive FAQ Accordion:** Smooth expand/collapse guidance covering lead times, bridal trials, kit inclusions, and destination wedding travel.
- **Studio Concierge & Interactive Booking Form:** Live booking request generator that compiles form details into a structured, pre-filled WhatsApp consultation message, paired with Kolkata studio address, telephone line, email, timings, and map directions.
- **Floating WhatsApp Concierge:** Bottom-right floating badge with live availability pulse.
- **Luxury Editorial Footer:** 4-column directory with social channels, operating hours, and smooth back-to-top button.

---

## 🛠️ Technology Stack

- **React 18** with **TypeScript**
- **Vite** with chunk-splitting rollup optimizations
- **Tailwind CSS** with a custom luxury beauty palette (`ivory`, `taupe`, `blush`, `gold`, `espresso`)
- **GSAP & ScrollTrigger** for scroll-driven animations and scrub timelines
- **Motion for React (Framer Motion)** for fluid layout animations, tab pills, and modals
- **Lucide React** for clean geometric icons
- **Google Fonts:** *Cormorant Garamond*, *Plus Jakarta Sans*, and *Italiana*

---

## 📂 Project Structure & Easy Customization

All website content is completely decoupled into typed TypeScript files in `src/data/`:

| File | Purpose |
| :--- | :--- |
| `src/data/salonInfo.ts` | Studio name, phone, WhatsApp number, email, address, timings, and social handles |
| `src/data/services.ts` | Service categories, durations, pricing, descriptions, and treatment inclusions |
| `src/data/courses.ts` | Academy courses, batch sizes, curriculum modules, certifications, and perks |
| `src/data/gallery.ts` | Editorial portfolio items, categories, tags, and photography |
| `src/data/artist.ts` | Founder name, biography, quote, certifications, and stats |
| `src/data/testimonials.ts` | Client reviews, star ratings, and wedding venue locations |
| `src/data/faq.ts` | Frequently asked questions and answers |
| `src/data/navigation.ts` | Header and fullscreen menu navigation links |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

### Static Deployment to Vercel
1. Push repository to GitHub or run `vercel` in the project root directory.
2. Build command: `npm run build`
3. Output directory: `dist`
