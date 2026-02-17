"use client";

import Link from 'next/link';

const ventures = [
  { year: 2026, name: 'THIRTY', category: 'MEDIA', accent: 'from-purple-500/20', href: '/products/thirty' },
  { year: 2026, name: 'ANANTITYA', category: 'ART & FASHION', accent: 'from-blue-500/20', href: '/products/anantitya' },
  /*{ year: 2023, name: 'FORGE', category: 'TECHNOLOGY', accent: 'from-green-500/20', href: '/portfolio#forge' },*/
 { year: 2026, name: 'PaperBoat', category: 'CREATIVE AGENCY', accent: 'from-pink-500/20', href: '/portfolio#vitalis' }, 
  { year: 2026, name: 'Scrappy', category: 'SUSTAINABILITY', accent: 'from-emerald-500/20', href: '/portfolio#terra' },
 /* { year: 2025, name: 'NEXUS', category: 'TECHNOLOGY', accent: 'from-cyan-500/20', href: '/portfolio#nexus' },*/
];

export default function PortfolioSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-card/30">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-foreground/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full border border-foreground/5" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <div className="flex items-end gap-8">
            {/* Abstract element */}
            <div className="hidden md:flex flex-col gap-2">
              <div className="w-2 h-2 bg-foreground" />
              <div className="w-2 h-8 bg-foreground/50" />
              <div className="w-2 h-16 bg-foreground/20" />
            </div>
            <div>
              <span className="text-sm text-muted-foreground tracking-widest block mb-4">PORTFOLIO</span>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1]">
                Companies we&apos;ve<br />
                <span className="text-outline">built</span> together
              </h2>
            </div>
          </div>
          <Link 
            href="/portfolio" 
            className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide"
          >
            <span>VIEW ALL</span>
            <div className="w-8 h-8 border border-foreground rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </Link>
        </div>

        {/* Ventures Grid - Bento style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {ventures.map((venture, index) => (
            <Link
              key={venture.name}
              href={venture.href}
              className={`group relative overflow-hidden ${
                index === 0 ? 'col-span-2 aspect-[2/1]' : 
                index === 3 ? 'col-span-2 md:col-span-1 aspect-square' : 
                'aspect-square'
              }`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${venture.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Border */}
              <div className="absolute inset-0 border border-foreground/10 group-hover:border-foreground/30 transition-colors" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-muted-foreground">{venture.category}</span>
                  <span className="text-xs text-muted-foreground">{venture.year}</span>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold group-hover:translate-x-2 transition-transform">
                    {venture.name}
                  </h3>
                  {/* Abstract accent */}
                  <div className="mt-4 w-0 group-hover:w-16 h-px bg-foreground transition-all duration-500" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-foreground/5 border-l-[40px] border-l-transparent group-hover:border-t-foreground/20 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
