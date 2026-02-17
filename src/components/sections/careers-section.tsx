"use client";

import Link from 'next/link';

export default function CareersSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-foreground/5 via-transparent to-transparent" />
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-foreground/5 rotate-12" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-foreground/10 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-foreground/30" />
        
        {/* Lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-foreground/10 via-transparent to-foreground/10" />
      </div>

      <div className="px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              {/* Abstract marker */}
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-foreground" />
                <div className="w-2 h-2 bg-foreground/50" />
                <div className="w-2 h-2 bg-foreground/20" />
              </div>
              <span className="text-sm text-muted-foreground tracking-widest">HEADQUARTERS</span>
            </div>
            
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight mb-8">
              <span className="text-outline">OUR</span><br />
              OFFICE
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-md">
              Intervals is headquartered in the heart of the city, where we bring together builders, thinkers, and operators to create the future.
            </p>
          </div>
          
          <div className="flex flex-col justify-end gap-8">
            {/* Address card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="border border-foreground/10 p-8 relative">
                <span className="text-sm text-muted-foreground tracking-widest block mb-4">ADDRESS</span>
                <Link 
                  href="https://maps.google.com"
                  target="_blank"
                  className="text-2xl font-medium hover:opacity-70 transition-opacity block"
                >
                  123 Innovation Street<br />
                  San Francisco, CA 94105
                </Link>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12">
                  <div className="absolute top-0 right-0 w-full h-px bg-foreground/30" />
                  <div className="absolute top-0 right-0 w-px h-full bg-foreground/30" />
                </div>
              </div>
            </div>
            
            {/* Abstract map representation */}
            <div className="aspect-video relative overflow-hidden border border-foreground/10">
              {/* Grid pattern to represent map */}
              <div className="absolute inset-0 bg-card/50" />
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                opacity: 0.05
              }} />
              
              {/* Location marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-foreground animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-foreground/30 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-foreground/10 rounded-full" />
              </div>
              
              {/* Coordinates */}
              <div className="absolute bottom-4 left-4 text-xs text-muted-foreground font-mono">
                37.7749° N, 122.4194° W
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
