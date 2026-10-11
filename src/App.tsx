import { ThemeProvider } from './context/ThemeContext';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { HeroSection } from './sections/HeroSection';
import { IntroSection } from './sections/IntroSection';
import { ServicesSection } from './sections/ServicesSection';
import { AcademySection } from './sections/AcademySection';
import { GallerySection } from './sections/GallerySection';
import { AboutSection } from './sections/AboutSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { ContactSection } from './sections/ContactSection';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="min-h-screen bg-ivory-50 dark:bg-espresso-950 text-espresso-900 dark:text-ivory-100 flex flex-col selection:bg-gold-500 selection:text-white transition-colors duration-500">
          {/* Luxury Hairline Scroll Progress Bar */}
          <ScrollProgressBar />

        {/* Sticky Glass Navigation & Fullscreen Menu */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          {/* Phase 1: Cinematic Editorial Hero */}
          <HeroSection />

          {/* Phase 2: Brand Manifesto & Story with ScrollTrigger Reveal */}
          <IntroSection />

          {/* Phase 2: Interactive Bespoke Services & Rituals Showcase */}
          <ServicesSection />

          {/* Phase 3: Makeup & Beauty Academy Wing */}
          <AcademySection />

          {/* Phase 4: Editorial Portfolio Lookbook Gallery */}
          <GallerySection />

          {/* Phase 4: About the Master Artist & Founder */}
          <AboutSection />

          {/* Phase 5: Client Stories & Testimonials Carousel */}
          <TestimonialsSection />

          {/* Phase 5: Frequently Asked Questions Accordion */}
          <FAQSection />

          {/* Phase 5: Studio Concierge & Interactive WhatsApp Booking */}
          <ContactSection />
        </main>

        {/* Phase 6: Luxury Editorial Footer */}
        <Footer />

        {/* Phase 6: Instant Floating WhatsApp Concierge */}
        <FloatingWhatsApp />
      </div>
    </SmoothScroll>
    </ThemeProvider>
  );
};

export default App;
