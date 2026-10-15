export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'bridal' | 'nails' | 'hair' | 'grooming';
  categoryLabel: string;
  image: string;
  tag: string;
  description: string;
  features: string[];
}

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'bridal', label: 'Bridal Makeovers' },
  { id: 'hair', label: 'Hair Styling & Cuts' },
  { id: 'nails', label: 'Nail Extensions & Art' },
  { id: 'grooming', label: 'Brows & Grooming' },
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'The Royal Crimson Bride',
    subtitle: 'Signature Bengali Bridal Makeover',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-1.jpg',
    tag: 'Bridal Makeover',
    description:
      'Traditional Bengali bridal makeover featuring authentic red Benarasi styling, hand-painted forehead chandan motifs, and a customized bridal mukut for an auspicious wedding ceremony.',
    features: ['Waterproof HD base', 'Traditional chandan forehead design', 'Complete mukut & jewelry setting'],
  },
  {
    id: 'project-2',
    title: 'Ivory & Crimson Heritage Bride',
    subtitle: 'Classic Bengali Silk Bridal Look',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-2.jpg',
    tag: 'Bridal Artistry',
    description:
      'Timeless traditional bridal look crafted in white and red Benarasi silk, adorned with royal gold ornamentation, floral bun styling, and radiant natural makeup.',
    features: ['Luminous skin preparation', 'Intricate forehead chandan artistry', 'Bridal gaach kouto ritual styling'],
  },
  {
    id: 'project-3',
    title: 'Intricate Bridal Hair Bun & Veil',
    subtitle: 'Profile Styling & Jewelry Architecture',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-3.jpg',
    tag: 'Hair Architecture & Jewelry',
    description:
      'Detailed side-profile artistry highlighting traditional floral jasmine hair bun ornamentation, gold nath with multi-strand ear chains, and delicate red bridal veil draping.',
    features: ['Architectural hair bun with floral crown', 'Gold nath & chain precision setting', 'Double dupatta draping technique'],
  },
  {
    id: 'project-4',
    title: 'Couture Nail Art & Extensions',
    subtitle: 'Custom Acrylic & Gel Extension Studio',
    category: 'nails',
    categoryLabel: 'Nail Extensions & Art',
    image: '/images/projects/project-nail-art.jpg',
    tag: 'Nail Extension & Artistry',
    description:
      'Extensive showcase of customized nail extensions created at our salon: emerald green chrome, 3D bow studs, luxury rhinestone crystal embellishments, and artistic French tips.',
    features: ['Long-lasting gel extensions', '3D bridal jewel embellishments', 'Matte, chrome & glitter fusion designs'],
  },
  {
    id: 'project-5',
    title: 'Evening Reception Bridal Portrait',
    subtitle: 'Nocturne Festive Illumination',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-4.jpg',
    tag: 'Bridal Makeover',
    description:
      'Captured in low-light wedding festivities with warm fairy-light bokeh. Highlighting sweat-proof bridal makeup with flawless skin sculpting that lasts throughout all ceremonies.',
    features: ['Long-wear transfer-proof finish', 'Warm gold bridal eye shadow', 'Traditional vermillion styling'],
  },
  {
    id: 'project-6',
    title: 'Bengali Bride Side Profile & Kan Pasha',
    subtitle: 'Traditional Floral Bun & Kan-Pasha Artistry',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-5.jpg',
    tag: 'Bridal Profile Artistry',
    description:
      'Side-profile bridal portrait exhibiting floral jasmine bun crown, gold jhumka, ornate kan-pasha chain setting, traditional nath, and authentic bridal mukut.',
    features: ['Jasmine floral garland hair bun', 'Kan-pasha & nath chain setting', 'Traditional bridal mukut alignment'],
  },
  {
    id: 'project-7',
    title: 'Bridal Veil & Auspicious Gaach Kouto',
    subtitle: 'Ceremonial Vermillion Ritual Pose',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-6.jpg',
    tag: 'Ceremonial Bridal',
    description:
      'Enchanting bridal portrait framed by a delicate red sheer veil, featuring traditional gold choker, kamarbandh, and holding the auspicious bridal gaach kouto.',
    features: ['Delicate sheer veil framing', 'Auspicious gaach kouto styling', 'Royal gold choker & necklace setting'],
  },
  {
    id: 'project-8',
    title: 'Classic Silk Benarasi Saree Draping',
    subtitle: 'Complete Bridal Architecture & Saree Pleating',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-7.jpg',
    tag: 'Full Saree Draping',
    description:
      'Full-length traditional bridal portrait showcasing flawless Benarasi saree pleating and pallu draping, complemented by a complete traditional gold bridal jewelry ensemble.',
    features: ['Signature Benarasi saree pleating', 'Complete gold bridal set positioning', 'Long-lasting radiant bridal finish'],
  },
  {
    id: 'project-9',
    title: 'Couture Chandan Forehead Motifs',
    subtitle: 'Hand-Crafted Forehead Art & Matha Patti',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-8.jpg',
    tag: 'Chandan Artistry',
    description:
      'Detailed frontal bridal portrait focusing on delicate hand-painted chandan forehead art, bridal matha patti, radiant contouring, and luminous bridal eye makeup.',
    features: ['Hand-drawn chandan motifs', 'Intricate matha patti setting', 'Luminous bridal eye and lip contour'],
  },
  {
    id: 'project-10',
    title: 'Royal Heritage Red Veil Portrait',
    subtitle: 'Elegance & Auspicious Bridal Grace',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-9.jpg',
    tag: 'Heritage Bridal',
    description:
      'Poetic bridal pose capturing traditional Bengali wedding grace, dressed in crimson silk with zari borders, traditional red veil, and ceremonial gaach kouto.',
    features: ['High-definition sweat-proof makeup', 'Traditional red zari veil styling', 'Auspicious bridal ceremonial look'],
  },
  {
    id: 'project-11',
    title: 'Ivory Silk & Red Zari Bride',
    subtitle: 'Ceremonial Saree Styling & Kamarbandh Pose',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-10.jpg',
    tag: 'Bridal Artistry',
    description:
      'Stunning Bengali bridal pose in pure ivory silk with royal crimson and gold zari border, paired with traditional waist kamarbandh, hand-held red veil, and ceremonial gaach kouto.',
    features: ['Ivory & crimson silk styling', 'Gold kamarbandh & bangle ensemble', 'Artistic veil holding pose'],
  },
  {
    id: 'project-12',
    title: 'Rose Blush Ombre Gel Extensions',
    subtitle: 'Soft Gradient & French Finish',
    category: 'nails',
    categoryLabel: 'Nail Extensions & Art',
    image: '/images/projects/project-nail-2.jpg',
    tag: 'Gel Nail Extensions',
    description:
      'Delicate pink-to-white ombre gradient nail extensions crafted with high-gloss gel overlay for an elegant, understated luxury aesthetic.',
    features: ['Seamless pink & milky-white ombre', 'Glossy UV gel topcoat protection', 'Precision cuticle care & nail shaping'],
  },
  {
    id: 'project-13',
    title: 'Sculpted Profile Bridal Artistry',
    subtitle: 'Traditional Floral Bun & Crimson Veil',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-11.jpg',
    tag: 'Bridal Profile',
    description:
      'Graceful side profile bride featuring a traditional jasmine floral bun crown, hand-crafted gold nath and jhumka setting, elegant forehead chandan, and crimson veil draping.',
    features: ['Jasmine floral garland bun setting', 'Traditional gold nath & jhumka alignment', 'Radiant HD contouring & bridal blush'],
  },
  {
    id: 'project-14',
    title: 'Sapphire & Magenta Festive Bridal Look',
    subtitle: 'Royal Saree Draping & Festive Radiance',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-12.jpg',
    tag: 'Festive Bridal & Reception',
    description:
      'Regal bridal makeover adorned in vibrant royal blue and magenta silk, completed with hand-painted chandan forehead motifs, bridal mukut, and auspicious gaach kouto.',
    features: ['Vibrant silk saree drape styling', 'Intricate forehead chandan motifs', 'Mukut & bridal gaach kouto coordination'],
  },
  {
    id: 'project-15',
    title: 'Layered Silk Feather Haircut & Styling',
    subtitle: 'Precision Layer Cut & Salon Blowout',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    image: '/images/projects/project-hair-1.jpg',
    tag: 'Hair Transformation',
    description:
      'Multi-dimensional cascading step layer haircut finished with a high-shine volume blowout, adding bounce, texture, and effortless movement.',
    features: ['Custom multi-tier layer cut', 'High-volume blowout & heat styling', 'Silk-finish split-end treatment'],
  },
  {
    id: 'project-16',
    title: 'Lilac Dream Almond Extensions',
    subtitle: 'Pastel Gloss & Precision Sculpting',
    category: 'nails',
    categoryLabel: 'Nail Extensions & Art',
    image: '/images/projects/project-nail-3.jpg',
    tag: 'Designer Nail Art',
    description:
      'Tapered almond nail extensions rendered in high-gloss pastel lilac, offering a modern, sleek silhouette designed for everyday glamour and special occasions.',
    features: ['Sculpted almond shape extensions', 'High-shine pastel gel lacquer', 'Chip-resistant reinforced structure'],
  },
  {
    id: 'project-17',
    title: 'Haute Bridal Bun & Floral Crown',
    subtitle: 'Artisanal Coiffure & Rose Embellishment',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    image: '/images/projects/project-hair-bun-1.jpg',
    tag: 'Bridal Coiffure',
    description:
      'Sculpted low chignon hair bun adorned with handmade red floral accents and luxury gold cord tassels, crafted for bridal ceremonies and grand receptions.',
    features: ['Architectural low chignon structure', 'Handcrafted red rose garland setting', 'Bridal tassel & pin stabilization'],
  },
  {
    id: 'project-18',
    title: 'Precision Eyebrow Threading & Shaping',
    subtitle: 'Arch Architecture & Symmetrical Mapping',
    category: 'grooming',
    categoryLabel: 'Brows & Grooming',
    image: '/images/projects/project-brow-1.jpg',
    tag: 'Eyebrow Architecture',
    description:
      'High-precision thread shaping creating razor-clean arches and natural density, tailored to complement individual facial bone structure.',
    features: ['Symmetrical arch mapping', 'Clean pain-minimized thread technique', 'Soothing post-threading aloe finish'],
  },
  {
    id: 'project-19',
    title: 'Luminous Sindoor Festive Makeover',
    subtitle: 'Warm Tonal Radiance & Defined Eyes',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-13.jpg',
    tag: 'Festive & Reception Makeover',
    description:
      'Glow-focused bridal makeover highlighting fresh luminous skin prep, crisp kohl-defined winged eyes, traditional vermillion, and berry-tinted lips.',
    features: ['Luminous dewy skin preparation', 'Precision winged liner & defined brows', 'Hydrating rich berry lip contouring'],
  },
  {
    id: 'project-20',
    title: 'Cascading Step Feather Cut (Back View)',
    subtitle: 'Dimensional Density & Tapered Layers',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    image: '/images/projects/project-hair-2.jpg',
    tag: 'Step & Feather Cut',
    description:
      'Rich brunette step-layer haircut crafted with feathered ends to retain length while removing bulk, delivering soft fluidity and natural volume.',
    features: ['Multi-level step graduation', 'Lightweight feather edge texturing', 'Gloss-infusing leave-in treatment'],
  },
  {
    id: 'project-21',
    title: 'Face-Framing Curtain Layer Cut',
    subtitle: 'Soft Contour & Bouncy Inward Blowout',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    image: '/images/projects/project-hair-3.jpg',
    tag: 'Salon Haircut & Blowout',
    description:
      'Classic face-framing step cut styled with bouncy inward-curved ends, accentuating facial contours and adding instant fullness to medium-length hair.',
    features: ['Face-framing graduated layers', 'Inward curved thermal blowout', 'Long-lasting frizz-free finish'],
  },
  {
    id: 'project-22',
    title: 'Permanent Silk Rebonding & Highlights',
    subtitle: 'Poker-Straight Gloss & Honey Streaks',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    image: '/images/projects/project-hair-4.jpg',
    tag: 'Straightening & Rebonding',
    description:
      'Transformative permanent rebonding treatment delivering pin-straight sleekness, mirror-like gloss, and subtle honey-caramel ribbon highlights.',
    features: ['Formaldehyde-free keratin bonding', 'High-gloss mirror straightening', 'Subtle warm honey streak highlights'],
  },
  {
    id: 'project-23',
    title: 'Certified Beautician Master Diploma',
    subtitle: 'Tina’s Makeover Academy Convocation Award',
    category: 'grooming',
    categoryLabel: 'Brows & Grooming',
    image: '/images/projects/project-cert-1.jpg',
    tag: 'Professional Certification',
    description:
      'Official certified convocation diploma awarded to Master Artist Banasri Mahato from Tina’s Makeover & Academy for excellence in professional bridal makeover and beauty sciences.',
    features: ['Certified Academy Master Diploma', 'Comprehensive salon & bridal curriculum', 'Mentorship & professional excellence'],
  },
  {
    id: 'project-24',
    title: 'Micro-Thread Arch Contouring (Side Profile)',
    subtitle: 'Clean Tail Definition & Brow Lift',
    category: 'grooming',
    categoryLabel: 'Brows & Grooming',
    image: '/images/projects/project-brow-2.jpg',
    tag: 'Eyebrow Shaping',
    description:
      'Detailed close-up profile showing razor-sharp eyebrow tail definition, seamless brow bone clearing, and natural arch curvature.',
    features: ['Micro-thread tail definition', 'Symmetrical brow bone clearance', 'Natural hair growth contouring'],
  },
  {
    id: 'project-25',
    title: 'Gloss Crown & Caramel Balayage Highlights',
    subtitle: 'Top-Down Lustre & Multi-Tonal Streaks',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    image: '/images/projects/project-hair-5.jpg',
    tag: 'Caramel Highlights',
    description:
      'Top-down crown perspective highlighting silky hair smoothening, frizz neutralization, and hand-painted caramel balayage streaks.',
    features: ['Hand-painted caramel streaks', 'Anti-frizz moisture infusion', 'High-shine reflective finish'],
  },
  {
    id: 'project-26',
    title: 'Crimson Wine Ombre & Defined Natural Curls',
    subtitle: 'Vibrant Dual-Tone Hair Color & Bounce',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    image: '/images/projects/project-hair-6.jpg',
    tag: 'Ombre Hair Color & Curls',
    description:
      'Striking rich burgundy-crimson ombre color melt on textured curly hair, hydrating curls while providing vivid, multi-dimensional color payoff.',
    features: ['Rich ruby wine ombre color melt', 'Curl-defining hydration treatment', 'Damage-minimizing color formulation'],
  },
  {
    id: 'project-27',
    title: 'Classic Chignon Bun & White Floral Crown',
    subtitle: 'Smooth Bridal Silhouette & Fresh Bloom Styling',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    image: '/images/projects/project-hair-bun-2.jpg',
    tag: 'Bridal Floral Bun',
    description:
      'Polished low bun styled with fresh white blooms along the side, offering a timeless and pristine hairdo for traditional weddings and festive ceremonies.',
    features: ['Ultra-sleek low bun contour', 'Fresh white floral bloom attachment', 'Pin-secured structure for long celebrations'],
  },
  {
    id: 'project-28',
    title: 'The Royal Bengali Vivah Couple',
    subtitle: 'Complete Bride & Groom Wedding Coordination',
    category: 'bridal',
    categoryLabel: 'Bridal Makeovers',
    image: '/images/projects/project-bridal-14.jpg',
    tag: 'Full Bridal Vivah Makeover',
    description:
      'Auspicious Bengali wedding celebration featuring authentic bridal mukut, red rose floral ornamentation, traditional forehead chandan, gold nose ring, and vibrant crimson Benarasi silk styling.',
    features: ['Royal bridal mukut & rose setting', 'Authentic forehead chandan motifs', 'Coordinated royal crimson wedding styling'],
  },
  {
    id: 'project-29',
    title: 'Jasmine Gajra Braided Bun Architecture',
    subtitle: 'Full Circle Floral Garland & Crown Braid',
    category: 'hair',
    categoryLabel: 'Hair Styling & Cuts',
    image: '/images/projects/project-hair-bun-3.jpg',
    tag: 'Traditional Gajra Bun',
    description:
      'Artisanal traditional hair bun encircled by a lush fragrant white jasmine gajra garland, accented by intricate top braids crafted in the salon chair.',
    features: ['Intricate circular jasmine gajra wreath', 'Woven top braided bun architecture', 'Long-lasting ceremonial hold'],
  },
];


