export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'bridal' | 'nails' | 'hair';
  categoryLabel: string;
  image: string;
  tag: string;
  description: string;
  features: string[];
}

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'bridal', label: 'Bridal Makeovers' },
  { id: 'nails', label: 'Nail Extensions & Art' },
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
];


