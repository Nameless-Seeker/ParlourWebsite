import { CourseItem, AcademyPerk } from '../types';

export const academyPerks: AcademyPerk[] = [
  {
    title: '1:1 Hands-on Practical Training',
    description: 'Direct step-by-step master correction with real bridal models for every single student.',
    iconName: 'UserCheck',
  },
  {
    title: 'Professional Vanity Kit Included',
    description: 'Comprehensive kit with high-grade brushes, HD palettes, and tools to begin professional practice immediately.',
    iconName: 'PackageCheck',
  },
  {
    title: 'Editorial Portfolio Photoshoot',
    description: 'Graduation shoot with professional studio lighting and models to build your high-end client showcase.',
    iconName: 'Camera',
  },
];

export const coursesData: CourseItem[] = [
  {
    id: 'pro-bridal-diploma',
    title: 'Diploma in Professional Bridal & Couture Artistry',
    level: 'Beginner to Advanced Master',
    duration: '8 Weeks (Monday to Thursday)',
    batchSize: 'Limited to 6 Students per Cohort',
    certification: 'Aurelia Master Academy Diploma & ISO Certified',
    kitIncluded: true,
    pricePlaceholder: '₹55,000 (Installments Available)',
    tagline: 'The flagship complete career launchpad for aspiring celebrity and bridal makeup artists.',
    description:
      'From color theory fundamentals, skin anatomy, and corrective techniques to traditional Royal Bengali, North Indian, and Western reception bridal transformations. Includes live practicals, business branding, and client consultation masterclasses.',
    curriculum: [
      'Skin Anatomy, Undertones & Medical Skin Preparation',
      'Color Correcting, Foundation Physics & Invisible Concealing',
      'Airbrush HD Application, Pressure Control & Maintenance',
      'Eye Artistry: Classic Smoked, Cut-Crease, Halo & Monochromatic',
      'Dupatta Draping, Jewelry Architecture & Bridal Styling',
      'Social Media Branding, Client Pricing & Bridal Business Launch',
    ],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    isFeatured: true,
  },
  {
    id: 'advanced-airbrush-specialization',
    title: 'Advanced Airbrush & High-Definition Masterclass',
    level: 'Intermediate to Professional Artists',
    duration: '2 Weeks (Intensive Hands-on)',
    batchSize: 'Limited to 4 Artists',
    certification: 'Certified Airbrush Master Specialist',
    kitIncluded: true,
    pricePlaceholder: '₹28,000',
    tagline: 'Master the art of weightless, 24-hour waterproof bridal bases with pneumatic airbrush systems.',
    description:
      'Designed for practicing makeup artists who want to elevate their speed, flawless coverage, and high-ticket bridal booking rates with compressor-driven silicon and water-based airbrush formulas.',
    curriculum: [
      'Pneumatic Gun Mechanics, Disassembly & Deep Cleaning',
      'Airbrush Foundation Blending, Stippling & Micro-Mist Control',
      'Tattoo & Blemish Neutralization with Airbrush Pigments',
      'Airbrush Blush, Contour & Luminous Highlight Sculpting',
      'Live Bride High-Stress Humidity Durability Simulation',
    ],
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'bridal-hair-architecture',
    title: 'Couture Bridal Hair Architecture & Styling',
    level: 'All Levels (Bridal Hair Focus)',
    duration: '4 Weeks (Bi-Weekly)',
    batchSize: 'Limited to 8 Students',
    certification: 'Master Bridal Hair Stylist Certificate',
    kitIncluded: false,
    pricePlaceholder: '₹22,000',
    tagline: 'Construct show-stopping traditional and contemporary bridal hairstyles that hold through any celebration.',
    description:
      'Learn the structural engineering behind durable bridal updos, intricate Russian braids, royal floral jada arrangements, and romantic Hollywood waves that remain flawless all night.',
    curriculum: [
      'Thermal Science, Tool Ergonomics & Texture Prep',
      'Structural Sectioning & Weight Distribution for Heavy Veils',
      'Classic & Textured French Buns with Fresh Flower Placement',
      'Traditional South Indian / Bengali Matha Patti Anchor Techniques',
      'Hollywood Waves with Mirror Gloss Texture Locking',
    ],
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'self-grooming-mastery',
    title: 'Personal Grooming & Daily Elegance Masterclass',
    level: 'Beginner / Self-Styling Enthusiasts',
    duration: '3 Days (Weekend Intensive)',
    batchSize: 'Small Group (Max 5)',
    certification: 'Certificate of Completion',
    kitIncluded: false,
    pricePlaceholder: '₹8,500',
    tagline: 'Transform your daily routine into effortless luxury with personalized color selection.',
    description:
      'Demystify everyday makeup. Discover your exact shade matches, master a 10-minute glowing corporate look, and learn how to seamlessly transition into an opulent cocktail party look using your own vanity kit.',
    curriculum: [
      'Personal Skin Analysis & Vanity Bag Product Audit',
      'The 10-Minute "No-Makeup" Luminous Morning Base',
      'Symmetric Quick Brow Mapping & Everyday Mascara Application',
      'Transitioning to Smokey Evening Glamour & Statement Lips',
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
  },
];
