"use client";

import Link from 'next/link';

const ideas = [
  {
    category: 'TECHNOLOGY',
    type: 'ARTICLE',
    title: 'The Future of Building: Why Venture Studios Matter',
    href: '/ideas/venture-studios',
    number: '01',
  },
  {
    category: 'SUSTAINABILITY', 
    type: 'ARTICLE',
    title: 'Investing in Climate Tech: A Framework for Impact',
    href: '/ideas/climate-tech',
    number: '02',
  },
  {
    category: 'HEALTH',
    type: 'NEWS',
    title: 'Announcing Our Health Innovation Fund',
    href: '/ideas/health-fund',
    number: '03',
  },
];

export default function StudioSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large diagonal line */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 -left-20 w-[150%] h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent rotate-[15deg]" />
          <div className="absolute top-1/3 -left-20 w-[150%] h-px bg-gradient-to-r from-transparent via-foreground/5 to-transparent rotate-[15deg]" />
        </div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-foreground/10 rounded-full" />
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-foreground/20" />
        <div className="absolute top-1/2 right-1/4 w-2 h-20 bg-foreground/10" />
      </div>

      <div className="px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="relative">
            {/* Decorative bracket */}
            <div className="absolute -left-8 top-0 h-full w-px bg-gradient-to-b from-foreground/50 via-foreground/20 to-transparent" />
            <div className="absolute -left-8 top-0 w-4 h-px bg-foreground/50" />
            
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight">
              BUILDING A<br />
              <span className="text-outline">FUTURE</span><br />
              POSITIVE
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Explore the ideas, essays, and insights that shape how we think and invest in the world we want to create.
            </p>
            <Link 
              href="/ideas" 
              className="group inline-flex items-center gap-4 text-sm font-medium tracking-wide w-fit"
            >
              <span className="border-b border-foreground pb-1">EXPLORE OUR STORIES</span>
              <span className="w-8 h-8 border border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Ideas Grid - Abstract cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ideas.map((idea, index) => (
            <Link 
              key={idea.title}
              href={idea.href}
              className="group relative"
            >
              {/* Card */}
              <div className="relative border border-foreground/10 p-8 pt-16 hover:border-foreground/30 transition-colors min-h-[280px] flex flex-col">
                {/* Large number watermark */}
                <span className="absolute top-4 right-6 text-7xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
                  {idea.number}
                </span>
                
                {/* Category tags */}
                <div className="flex gap-4 mb-auto relative z-10">
                  <span className="text-xs text-muted-foreground px-2 py-1 border border-foreground/10">
                    {idea.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{idea.type}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold relative z-10 mt-8 group-hover:translate-x-2 transition-transform">
                  {idea.title}
                </h3>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-foreground transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
