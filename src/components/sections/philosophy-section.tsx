"use client";

import Link from 'next/link';

const team = [
  { name: 'Alex Chen', role: 'FOUNDER & MANAGING PARTNER', href: '/team/alex-chen', initial: 'AC' },
  { name: 'Sarah Kim', role: 'PARTNER', href: '/team/sarah-kim', initial: 'SK' },
  { name: 'James Rivera', role: 'PARTNER', href: '/team/james-rivera', initial: 'JR' },
  { name: 'Maya Patel', role: 'PRINCIPAL', href: '/team/maya-patel', initial: 'MP' },
];

export default function PhilosophySection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-card/50">
      {/* Abstract background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid dots */}
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.03
        }} />
        
        {/* Large circle */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border border-foreground/5 rounded-full" />
        
        {/* Floating elements */}
        <div className="absolute top-32 right-20 w-20 h-20 rotate-45 border border-foreground/10" />
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-foreground/20 rounded-full" />
      </div>

      <div className="px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div className="flex items-end gap-8">
            {/* Abstract mark */}
            <div className="hidden md:block">
              <div className="w-1 h-24 bg-gradient-to-t from-foreground to-transparent" />
            </div>
            <div>
              <span className="text-sm text-muted-foreground tracking-widest block mb-4">TEAM</span>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1]">
                The people behind<br />
                <span className="text-outline">Intervals</span>
              </h2>
            </div>
          </div>
          <Link 
            href="/team" 
            className="mt-8 md:mt-0 group inline-flex items-center gap-3 text-sm font-medium tracking-wide"
          >
            <span>VIEW ALL</span>
            <div className="w-8 h-8 border border-foreground rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
              →
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <Link 
              key={member.name}
              href={member.href}
              className="group"
            >
              {/* Abstract portrait placeholder */}
              <div className="aspect-[3/4] relative mb-6 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent" />
                
                {/* Border frame */}
                <div className="absolute inset-0 border border-foreground/10 group-hover:border-foreground/30 transition-colors" />
                
                {/* Initial overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    {member.initial}
                  </span>
                </div>
                
                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-0 h-1 bg-foreground group-hover:w-full transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-1 h-0 bg-foreground group-hover:h-full transition-all duration-500 delay-100" />
              </div>
              
              <h3 className="font-semibold text-lg group-hover:translate-x-2 transition-transform">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
