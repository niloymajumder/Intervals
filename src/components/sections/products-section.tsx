"use client";

import Link from 'next/link';

const pillars = [
  {
    number: '01',
    title: 'TECHNOLOGY',
    description: 'Building next-generation platforms, tools, and infrastructure.',
    link: '/portfolio?pillar=technology',
    shape: 'circle',
  },
  {
    number: '02',
    title: 'ART & MEDIA',
    description: 'Crafting compelling visual narratives and creative digital experiences.',
    link: '/portfolio?pillar=art-media',
    shape: 'square',
  },
  {
    number: '03',
    title: 'SUSTAINABILITY',
    description: 'Investing in the green economy and a sustainable future.',
    link: '/portfolio?pillar=sustainability',
    shape: 'triangle',
  },
];

export default function ProductsSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-foreground/5" />
      </div>

      <div className="px-6 md:px-10 relative z-10">
        {/* Header with abstract elements */}
        <div className="flex items-start gap-8 mb-24">
          <div className="hidden md:block w-32 h-32 border border-foreground/10 rotate-45 flex-shrink-0" />
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-foreground" />
              <span className="text-sm text-muted-foreground tracking-widest">PHILOSOPHY</span>
            </div>
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-bold leading-[1.1] max-w-4xl">
              Three pillars.<br />
              <span className="text-outline">Infinite</span> possibilities.
            </h2>
          </div>
        </div>

        {/* Pillars with abstract shapes */}
        <div className="grid md:grid-cols-3 gap-0">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.number}
              href={pillar.link}
              className="group relative p-8 md:p-12 border-t border-l border-border last:border-r hover:bg-card/50 transition-all duration-500"
            >
              {/* Abstract shape for each pillar */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-30 transition-opacity">
                {pillar.shape === 'circle' && (
                  <div className="w-24 h-24 rounded-full border-2 border-foreground" />
                )}
                {pillar.shape === 'square' && (
                  <div className="w-20 h-20 border-2 border-foreground rotate-12" />
                )}
                {pillar.shape === 'triangle' && (
                  <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-foreground/50" />
                )}
              </div>

              <span className="text-6xl md:text-8xl font-bold text-foreground/5 absolute -top-4 -left-2">
                {pillar.number}
              </span>
              
              <div className="relative pt-16">
                <h3 className="text-2xl md:text-4xl font-bold mb-6 group-hover:translate-x-2 transition-transform">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground mb-8 max-w-xs">{pillar.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>EXPLORE</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-foreground transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
