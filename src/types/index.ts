export interface NavItem {
  label: string;
  href: string;
  tag?: string;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  city: string;
  timings: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube?: string;
  };
}

export type ServiceCategory = 'bridal' | 'skincare' | 'hair' | 'nails';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: ServiceCategory;
  duration: string;
  pricePlaceholder: string;
  description: string;
  inclusions: string[];
  image: string;
  isPopular?: boolean;
}

export interface CourseItem {
  id: string;
  title: string;
  level: string;
  duration: string;
  batchSize: string;
  certification: string;
  kitIncluded: boolean;
  pricePlaceholder: string;
  tagline: string;
  description: string;
  curriculum: string[];
  image: string;
  isFeatured?: boolean;
}

export interface AcademyPerk {
  title: string;
  description: string;
  iconName: string;
}

export type GalleryCategory = 'all' | 'bridal' | 'reception' | 'editorial' | 'hair-skin';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  tag: string;
  description: string;
  aspectRatio?: 'tall' | 'square' | 'portrait';
}

export interface ArtistProfile {
  name: string;
  role: string;
  quote: string;
  bio: string[];
  certifications: string[];
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  occasion: string;
  quote: string;
  rating: number;
  location: string;
  image: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'bridal' | 'academy' | 'skincare' | 'general';
}
