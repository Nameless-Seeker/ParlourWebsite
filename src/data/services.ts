import { ServiceItem } from '../types';

export const serviceCategories = [
  {
    id: 'grooming',
    label: 'Grooming & Relaxation',
    description: 'Essential brow shaping, bespoke hair trims, and therapeutic rejuvenation',
  },
  {
    id: 'hair-skin',
    label: 'Hair & Skin Treatments',
    description: 'Advanced chemical smoothing, revitalizing facials, and complete nail spa care',
  },
  {
    id: 'styling-makeup',
    label: 'Styling & Makeup',
    description: 'Full body wellness, creative hair artistry, and exquisite bridal makeovers',
  },
] as const;

export const servicesData: ServiceItem[] = [
  // 1. Grooming & Relaxation
  {
    id: 'threading',
    title: 'THREADING',
    subtitle: 'Eyebrow & Facial Precision Threading',
    category: 'grooming',
    duration: '15 - 20 Mins',
    description:
      'Expert shaping and painless threading techniques that define your natural brow arch and remove fine facial hair for a smooth, radiant canvas.',
    inclusions: [
      'Custom eyebrow mapping & symmetrical shaping',
      'Upper lip, chin, and forehead fine-hair removal',
      'Soothing organic aloe vera gel finish',
      'High-hygiene sanitized cotton thread',
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 'hair-cut',
    title: 'HAIR CUT',
    subtitle: 'Precision Cut, Layers & Blow-Dry Styling',
    category: 'grooming',
    duration: '45 Mins',
    description:
      'Personalized haircut tailored to your face structure, hair texture, and everyday lifestyle. Finished with a luxury wash and bouncy salon blow-dry.',
    inclusions: [
      'Detailed hair consultation & texture analysis',
      'Relaxing scalp cleansing wash & conditioning',
      'Precision layer, feather, or blunt cut',
      'Professional heat blow-dry & setting',
    ],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'spa',
    title: 'SPA',
    subtitle: 'Deep Nourishing Hair & Scalp Therapy',
    category: 'grooming',
    duration: '60 Mins',
    description:
      'An intensive hair spa ritual targeting dryness, damage, and hair fall. Restores moisture balance, imparts glossy shine, and stimulates scalp circulation.',
    inclusions: [
      'Deep cleansing detox shampoo',
      'Nutrient-rich hair spa cream & active serum massage',
      'Ozone warm steam therapy for deep cuticle penetration',
      'Hydrating mask seal & ultra-gloss finish',
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'massage',
    title: 'MASSAGE',
    subtitle: 'Stress Relief Head, Neck & Shoulder Massage',
    category: 'grooming',
    duration: '30 - 45 Mins',
    description:
      'Relieve daily fatigue and mental tension with our therapeutic pressure-point head and shoulder massage using warm natural herbal essential oils.',
    inclusions: [
      'Warm herbal ayurvedic oil application',
      'Targeted acupressure on scalp, neck & upper back',
      'Improves blood circulation & hair follicle vitality',
      'Warm towel steam compress for total relaxation',
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
  },

  // 2. Hair & Skin Treatments
  {
    id: 'straightening',
    title: 'STRAIGHTENING',
    subtitle: 'Permanent Hair Straightening & Rebonding',
    category: 'hair-skin',
    duration: '3 - 4.5 Hours',
    description:
      'Transform frizzy, curly, or unruly hair into pin-straight, ultra-glossy, and permanently manageable tresses with salon-grade bond-restructuring formulas.',
    inclusions: [
      'Structural strand test & hair elasticity assessment',
      'Premium straightening neutralizer with keratin protection',
      'Micro-precision flat iron smoothing',
      'Post-treatment deep repair mask & serum coat',
    ],
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 'smoothening',
    title: 'SMOOTHENING',
    subtitle: 'Keratin & Silk Protein Frizz-Free Smoothing',
    category: 'hair-skin',
    duration: '2.5 - 3.5 Hours',
    description:
      'Achieve naturally sleek, soft, and mirror-shiny hair with zero frizz. Infuses keratin protein deep into the hair cuticle while preserving natural body and bounce.',
    inclusions: [
      'Clarifying cleansing to open hair cuticles',
      'Hydrolyzed keratin and protein infusion formula',
      'Thermodynamic sealing for months of lasting silkiness',
      'Humidity-resistant smooth finish & anti-breakage care',
    ],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'facial',
    title: 'FACIAL',
    subtitle: 'Glow Enhancement, Deep Cleansing & Anti-Tan Facial',
    category: 'hair-skin',
    duration: '60 - 75 Mins',
    description:
      'A luxurious clinical facial treatment customized for your skin type. Removes dead cells, deep-cleans pores, clears pigmentation, and unveils luminous glass skin.',
    inclusions: [
      'Double cleansing, gentle enzymatic exfoliation & steam',
      'Blackhead extraction & gentle pore tightening',
      'Lymphatic drainage face massage with nutrient serums',
      'Brightening peel-off mask & hydration barrier lock',
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pedicure-menicure',
    title: 'PEDICURE MENICURE',
    subtitle: 'Deluxe Spa Foot & Hand Pampering Ritual',
    category: 'hair-skin',
    duration: '75 Mins',
    description:
      'Complete grooming and rejuvenation for tired hands and feet. Includes relaxing foot soaks, cuticle therapy, dead-skin buffing, and relaxing massage creams.',
    inclusions: [
      'Aromatherapy sea-salt warm water soak',
      'Dead-skin scrub, callus smoothing & cuticle shaping',
      'Deep moisturizing hand and calf massage',
      'Nail buffing, conditioning & long-lasting polish',
    ],
    image: 'https://images.unsplash.com/photo-1519014816548-bf785179c2ff?q=80&w=1200&auto=format&fit=crop',
  },

  // 3. Styling & Makeup
  {
    id: 'full-body-massage',
    title: 'FULL BODY MASSAGE',
    subtitle: 'Holistic Aromatherapy & Full Body Relaxation',
    category: 'styling-makeup',
    duration: '60 - 90 Mins',
    description:
      'A tranquil full-body wellness therapy designed to release deep muscular tension, soothe stress, improve lymphatic circulation, and revitalize mind and body.',
    inclusions: [
      'Selection of organic calming aromatherapy oils',
      'Full body pressure-point Swedish & Ayurvedic strokes',
      'Warm towel therapy & back muscle de-stressing',
      'Deep relaxation and total energy rejuvenation',
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'different-hair-style',
    title: 'DIFFERENT HAIR STYLE',
    subtitle: 'Artistic Updos, Curls, Braids & Party Styling',
    category: 'styling-makeup',
    duration: '45 - 60 Mins',
    description:
      'From modern beach waves and Hollywood curls to intricate traditional braids and romantic textured updos, customized to complement your outfit and occasion.',
    inclusions: [
      'Hair texture prep with thermal protection sprays',
      'Choice of textured messy bun, sleek ponytail, or mermaid braid',
      'Floral, accessory, or pearl pin placement',
      'Long-lasting humidity-resistant setting spray',
    ],
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'professional-makeup',
    title: 'PROFESSIONAL MAKEUP',
    subtitle: 'Glamour, Reception & Party Artistry',
    category: 'styling-makeup',
    duration: '90 Mins',
    description:
      'High-definition, camera-ready makeup designed for parties, engagements, sangeet, and festive celebrations. Enhances your best features with weightless elegance.',
    inclusions: [
      'Pore-minimizing primer and skin prep',
      'HD foundation sculpting tailored to your undertone',
      'Glamorous eye makeup with winged definition & lashes',
      'Custom lip blending & setting for all-night wear',
    ],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'bridal-makeup',
    title: 'BRIDAL MAKEUP',
    subtitle: 'Couture Traditional & Contemporary Bridal Makeover',
    category: 'styling-makeup',
    duration: '3 - 4 Hours',
    description:
      'Our signature bridal experience created for your most special day. Includes flawless waterproof airbrush base, traditional bridal artistry, jewelry setting, and dupatta draping.',
    inclusions: [
      'Bridal skin prep and 24-hour waterproof HD base',
      'Traditional royal bridal eye artistry & chandan design',
      'Complete jewelry setting, mukut, and dupatta draping',
      'Complimentary touch-up kit for wedding rituals',
    ],
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
    isPopular: true,
  },
];
