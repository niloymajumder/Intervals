"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

const jobDetails: Record<string, {
  title: string;
  type: string;
  location: string;
  commitment: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
}> = {
  'venture-designer': {
    title: 'Venture Designer',
    type: 'DESIGN',
    location: 'San Francisco / Remote',
    commitment: 'Full-time',
    salary: '$120,000 - $180,000',
    description: 'We\'re looking for a Venture Designer to lead the design and brand development of new ventures from zero to one. You\'ll work directly with founders and the studio leadership team to shape product experiences, brand identities, and go-to-market strategies for breakthrough companies.',
    responsibilities: [
      'Lead end-to-end design for new ventures, from discovery to launch',
      'Define brand systems, visual identities, and design languages',
      'Create product interfaces, prototypes, and design specifications',
      'Collaborate with founders to translate vision into tangible design',
      'Establish design processes and documentation for portfolio companies',
      'Mentor junior designers and contribute to studio culture',
    ],
    requirements: [
      '5+ years of experience in product design, brand design, or venture design',
      'Strong portfolio demonstrating end-to-end product and brand work',
      'Experience working in early-stage or 0-to-1 environments',
      'Proficiency in Figma, and familiarity with modern design tools',
      'Excellent communication and presentation skills',
      'Ability to work autonomously and manage multiple projects',
    ],
    niceToHave: [
      'Experience at a venture studio, startup, or design agency',
      'Background in motion design or interactive prototyping',
      'Understanding of front-end development (HTML, CSS, React)',
      'Experience with user research and validation methodologies',
    ],
    benefits: [
      'Competitive salary and equity in portfolio companies',
      'Flexible work arrangements (remote-friendly)',
      'Health, dental, and vision insurance',
      'Unlimited PTO policy',
      'Learning and development budget',
      'Access to studio events and founder network',
    ],
  },
  'founding-engineer': {
    title: 'Founding Engineer',
    type: 'ENGINEERING',
    location: 'San Francisco / Remote',
    commitment: 'Full-time',
    salary: '$150,000 - $220,000',
    description: 'We\'re seeking a Founding Engineer to build the technical foundations of new ventures. You\'ll work closely with founders and designers to architect, prototype, and ship products from scratch. This is a high-impact role for engineers who thrive in ambiguity and want to shape companies from day one.',
    responsibilities: [
      'Architect and build MVPs and early product versions',
      'Make technology decisions that scale with company growth',
      'Collaborate with designers to implement exceptional user experiences',
      'Establish engineering best practices and technical documentation',
      'Evaluate build vs. buy decisions for new ventures',
      'Potentially transition into CTO or technical co-founder roles',
    ],
    requirements: [
      '5+ years of software engineering experience',
      'Proficiency in modern web technologies (React, Node.js, TypeScript)',
      'Experience building products from 0-to-1',
      'Strong system design and architecture skills',
      'Ability to ship fast while maintaining code quality',
      'Excellent problem-solving and communication skills',
    ],
    niceToHave: [
      'Experience with AI/ML technologies and integrations',
      'Background in mobile development (React Native, Swift, Kotlin)',
      'DevOps and infrastructure experience (AWS, GCP, Vercel)',
      'Previous startup or venture studio experience',
    ],
    benefits: [
      'Competitive salary and equity in portfolio companies',
      'Flexible work arrangements (remote-friendly)',
      'Health, dental, and vision insurance',
      'Unlimited PTO policy',
      'Top-tier equipment and tools',
      'Path to technical leadership or co-founder roles',
    ],
  },
  'research-associate': {
    title: 'Research Associate',
    type: 'RESEARCH',
    location: 'San Francisco / Remote',
    commitment: 'Full-time',
    salary: '$80,000 - $120,000',
    description: 'We\'re looking for a Research Associate to conduct deep market research, competitive analysis, and opportunity identification for new ventures. You\'ll work across the portfolio to surface insights that shape investment theses and venture strategies.',
    responsibilities: [
      'Conduct market research and competitive landscape analysis',
      'Identify emerging trends and investment opportunities',
      'Build financial models and market sizing estimates',
      'Interview industry experts and potential customers',
      'Create research reports and presentations for leadership',
      'Support due diligence for new venture ideas',
    ],
    requirements: [
      '2+ years of experience in research, consulting, or venture capital',
      'Strong analytical and quantitative skills',
      'Excellent written and verbal communication',
      'Proficiency in research tools and data analysis',
      'Ability to synthesize complex information into actionable insights',
      'Self-motivated with strong attention to detail',
    ],
    niceToHave: [
      'MBA or advanced degree in relevant field',
      'Experience in technology, healthcare, or sustainability sectors',
      'Background in investment banking or strategy consulting',
      'Familiarity with startup ecosystems and venture capital',
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Flexible work arrangements (remote-friendly)',
      'Health, dental, and vision insurance',
      'Unlimited PTO policy',
      'Professional development opportunities',
      'Exposure to diverse industries and founders',
    ],
  },
  'operations-lead': {
    title: 'Operations Lead',
    type: 'OPERATIONS',
    location: 'San Francisco',
    commitment: 'Full-time',
    salary: '$100,000 - $150,000',
    description: 'We\'re seeking an Operations Lead to manage studio operations and support portfolio company growth. You\'ll be the backbone of our organization, ensuring smooth operations across finance, HR, legal, and administrative functions.',
    responsibilities: [
      'Manage day-to-day studio operations and administration',
      'Oversee finance, accounting, and budget management',
      'Coordinate HR processes including hiring and onboarding',
      'Support legal and compliance requirements',
      'Manage relationships with vendors and service providers',
      'Develop and improve operational processes and systems',
    ],
    requirements: [
      '4+ years of experience in operations, finance, or business management',
      'Strong organizational and project management skills',
      'Experience with financial planning and budgeting',
      'Excellent communication and interpersonal skills',
      'Proficiency in productivity and collaboration tools',
      'Ability to handle confidential information with discretion',
    ],
    niceToHave: [
      'Experience at a startup, VC firm, or venture studio',
      'Background in accounting or finance',
      'Familiarity with startup legal and compliance requirements',
      'Experience with HR systems and processes',
    ],
    benefits: [
      'Competitive salary and equity participation',
      'Health, dental, and vision insurance',
      'Unlimited PTO policy',
      'Professional development budget',
      'Central San Francisco office location',
      'Close collaboration with leadership team',
    ],
  },
};

export default function JobDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const job = jobDetails[slug];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverLetter: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!job) {
    return (
      <div className="flex min-h-dvh flex-col bg-background">
        <Header />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Position not found</h1>
            <Link href="/careers" className="text-sm font-medium tracking-wide border-b border-foreground pb-1">
              ← Back to Careers
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log('Application submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Back Link */}
        <div className="px-6 md:px-10 py-6 border-b border-border">
          <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to all positions
          </Link>
        </div>

        {/* Job Header */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="px-6 md:px-10">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="text-sm text-muted-foreground border border-border px-3 py-1">{job.type}</span>
              <span className="text-sm text-muted-foreground border border-border px-3 py-1">{job.location}</span>
              <span className="text-sm text-muted-foreground border border-border px-3 py-1">{job.commitment}</span>
            </div>
            <h1 className="text-display max-w-3xl">{job.title}</h1>
            <p className="mt-6 text-xl text-muted-foreground">{job.salary}</p>
          </div>
        </section>

        {/* Job Content */}
        <section className="py-16 md:py-24">
          <div className="px-6 md:px-10">
            <div className="grid lg:grid-cols-[1fr_400px] gap-16">
              {/* Main Content */}
              <div className="space-y-12">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">About the Role</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{job.description}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="text-foreground">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="text-foreground">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nice to Have */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Nice to Have</h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="text-foreground">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Benefits</h2>
                  <ul className="space-y-3">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="text-foreground">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Application Form Sidebar */}
              <div className="lg:sticky lg:top-32 h-fit">
                <div className="border border-border p-8">
                  <h3 className="text-xl font-bold mb-6">Apply for this position</h3>
                  
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-4">✓</div>
                      <h4 className="text-xl font-bold mb-2">Application Received</h4>
                      <p className="text-muted-foreground">
                        Thank you for your interest. We&apos;ll review your application and get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="text-sm text-muted-foreground" htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 focus:border-foreground focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-muted-foreground" htmlFor="email">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 focus:border-foreground focus:outline-none transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-muted-foreground" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 focus:border-foreground focus:outline-none transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-muted-foreground" htmlFor="linkedin">
                          LinkedIn URL *
                        </label>
                        <input
                          id="linkedin"
                          type="url"
                          required
                          value={formData.linkedin}
                          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                          className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 focus:border-foreground focus:outline-none transition-colors"
                          placeholder="linkedin.com/in/yourprofile"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-muted-foreground" htmlFor="portfolio">
                          Portfolio / Website
                        </label>
                        <input
                          id="portfolio"
                          type="url"
                          value={formData.portfolio}
                          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                          className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 focus:border-foreground focus:outline-none transition-colors"
                          placeholder="yourportfolio.com"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-muted-foreground" htmlFor="coverLetter">
                          Why do you want to join Intervals? *
                        </label>
                        <textarea
                          id="coverLetter"
                          required
                          rows={4}
                          value={formData.coverLetter}
                          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                          className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 focus:border-foreground focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about yourself..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full border border-foreground bg-foreground px-6 py-4 text-sm font-medium tracking-wide text-background hover:bg-transparent hover:text-foreground transition-colors"
                      >
                        SUBMIT APPLICATION
                      </button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting, you agree to our privacy policy.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
