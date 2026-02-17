"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="h-[100svh] relative overflow-hidden flex flex-col">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orb */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            left: `calc(20% + ${mousePos.x * 0.02}px)`,
            top: `calc(10% + ${mousePos.y * 0.02}px)`,
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-[15%] w-32 h-32 border border-foreground/10 rotate-45 animate-pulse" />
        <div className="absolute top-[40%] right-[10%] w-64 h-64 rounded-full border border-foreground/5" />
        <div className="absolute bottom-[20%] left-[5%] w-48 h-48 border border-foreground/10 rotate-12" />
        
        {/* Gradient lines */}
        <div className="absolute top-0 left-[30%] w-px h-[60%] bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
        <div className="absolute top-[20%] right-[25%] w-px h-[50%] bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
        
        {/* Abstract dots pattern */}
        <div className="absolute top-[30%] left-[60%] grid grid-cols-5 gap-4 opacity-20">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-foreground" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left column - Tagline first, prominent */}
            <div className="order-2 lg:order-1">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-foreground" />
                <span className="text-sm text-foreground/60 tracking-widest">VENTURE STUDIO</span>
              </div>
              
              {/* Main tagline - larger and more prominent */}
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8 max-w-xl">
                We build breakthrough companies from the ground up—partnering with visionary founders across <span className="text-foreground font-medium">technology</span>, <span className="text-foreground font-medium">health</span>, and <span className="text-foreground font-medium">sustainability</span>.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/portfolio" 
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-all"
                >
                  <span>EXPLORE PORTFOLIO</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-sm font-medium tracking-wide px-6 py-3 hover:opacity-70 transition-opacity"
                >
                  ABOUT US
                </Link>
              </div>
            </div>

            {/* Right column - Headline */}
            <div className="order-1 lg:order-2 lg:text-right">
              <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.9] tracking-tight">
                <span className="block">Building</span>
                <span className="block text-outline">the future,</span>
                <span className="block">one <span className="italic font-light">interval</span></span>
                <span className="block">at a time.</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-foreground to-transparent animate-pulse" />
      </div>
    </section>
  );
}
