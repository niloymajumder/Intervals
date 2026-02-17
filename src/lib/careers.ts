export type CareerRole = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
};

export const careerRoles: CareerRole[] = [
  {
    slug: 'creative-technologist',
    title: 'Creative Technologist',
    team: 'Technology',
    location: 'Remote, UTC+6',
    type: 'Full-time',
    summary:
      'Prototype interactive experiences, editorial tools, and calm software that supports creative work.',
    description:
      'You will translate ambitious editorial and brand ideas into prototypes, experiments, and lightweight products. This role blends engineering with a strong sense of visual storytelling.',
    responsibilities: [
      'Build prototypes that validate new storytelling formats and product ideas.',
      'Collaborate with design and editorial to shape interactive narratives.',
      'Ship production-ready tools that support internal workflows.',
      'Document experiments and share learnings with the broader team.',
    ],
    qualifications: [
      'Strong JavaScript or TypeScript fundamentals with a creative portfolio.',
      'Experience with modern web frameworks and creative coding libraries.',
      'Comfortable collaborating with non-technical partners.',
      'Curiosity about culture, design, and emerging tech.',
    ],
  },
  {
    slug: 'product-designer',
    title: 'Product Designer',
    team: 'Design',
    location: 'Dhaka or Remote',
    type: 'Full-time',
    summary:
      'Lead interface and systems design for our ventures with a strong point of view on craft.',
    description:
      'You will own end-to-end product design for new ventures and evolving platforms. This role requires deep systems thinking paired with elegant, detail-oriented execution.',
    responsibilities: [
      'Define product flows, interaction models, and design systems.',
      'Partner with engineering to ship polished, resilient interfaces.',
      'Translate research and strategy into tangible product direction.',
      'Guide visual design across web, editorial, and brand touchpoints.',
    ],
    qualifications: [
      '5+ years of product design experience with shipped work.',
      'Strong portfolio demonstrating systems and interaction design.',
      'Fluent in Figma, prototyping, and design documentation.',
      'Ability to balance craft with speed and clarity.',
    ],
  },
  {
    slug: 'editorial-lead',
    title: 'Editorial Lead',
    team: 'Editorial',
    location: 'Dhaka',
    type: 'Full-time',
    summary:
      'Shape the voice of Thirty and guide contributors across culture, science, and society.',
    description:
      'You will define the voice, cadence, and editorial direction for our flagship publication. This role blends writing, commissioning, and mentorship.',
    responsibilities: [
      'Develop story arcs and issue themes with the editorial team.',
      'Edit and commission writers across long-form and short-form formats.',
      'Maintain quality and fact-checking standards for every release.',
      'Experiment with new formats for narrative and research.',
    ],
    qualifications: [
      'Proven editorial leadership with published work.',
      'Strong writing, editing, and narrative structuring skills.',
      'Experience building diverse contributor networks.',
      'Curiosity about culture, science, and society.',
    ],
  },
  {
    slug: 'motion-designer',
    title: 'Motion Designer',
    team: 'Design',
    location: 'Remote',
    type: 'Contract',
    summary:
      'Create cinematic motion and transitions for brand films, campaigns, and product narratives.',
    description:
      'You will bring our brand and product storytelling to life with motion, transitions, and visual rhythm. We care about cinematic craft and narrative pacing.',
    responsibilities: [
      'Design and animate motion systems for brand and product assets.',
      'Collaborate with design to extend visual systems into motion.',
      'Deliver assets optimized for web, social, and video.',
      'Prototype motion ideas early to influence creative direction.',
    ],
    qualifications: [
      'Expertise in motion design tools and workflows.',
      'Portfolio with brand and product motion work.',
      'Ability to translate static design into dynamic storytelling.',
      'Comfort working asynchronously with a remote team.',
    ],
  },
  {
    slug: 'full-stack-engineer',
    title: 'Full-Stack Engineer',
    team: 'Technology',
    location: 'Remote, UTC+6',
    type: 'Full-time',
    summary:
      'Build the web platform and internal tools that power our editorial and commerce systems.',
    description:
      'You will build the systems that power our editorial and commerce stack, from front-end experiences to resilient back-end services.',
    responsibilities: [
      'Ship core platform features with a focus on speed and reliability.',
      'Collaborate with design and editorial to translate ideas into product.',
      'Own end-to-end features across front-end and back-end.',
      'Improve developer tooling and deployment workflows.',
    ],
    qualifications: [
      'Strong experience with TypeScript, Node.js, and modern front-end stacks.',
      'Comfortable with databases, APIs, and infrastructure basics.',
      'Proven ability to ship production features.',
      'Thoughtful about performance and usability.',
    ],
  },
  {
    slug: 'operations-people-partner',
    title: 'Operations and People Partner',
    team: 'Operations',
    location: 'Dhaka or Remote',
    type: 'Part-time',
    summary:
      'Support hiring, team rituals, and lightweight operations across our studios and ventures.',
    description:
      'You will help the team stay organized, supported, and growing with care. This role is a mix of people operations, process design, and cultural stewardship.',
    responsibilities: [
      'Coordinate hiring operations and candidate experience.',
      'Design team rituals, onboarding, and documentation flows.',
      'Support leaders with lightweight planning and reporting.',
      'Maintain operational calendars and vendor relationships.',
    ],
    qualifications: [
      'Experience in people operations or studio operations.',
      'Strong communication and organization skills.',
      'Empathy for team experience and culture building.',
      'Comfortable working across time zones.',
    ],
  },
];

export function getCareerRoleBySlug(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
