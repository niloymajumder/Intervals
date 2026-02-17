"use client";

const companies = [
  { name: 'THIRTY', year: '2026' },
  { name: 'ANANTITYA', year: '2026' },
  { name: 'PAPERBOAT', year: '2026' },
  { name: 'SCRAPPY', year: '2026' },
];

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-foreground/10 bg-background overflow-hidden">
      {/* Label - centered */}
      <div className="text-center mb-6">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Companies we&apos;ve built</span>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex animate-marquee">
          {/* First set */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {companies.map((company, index) => (
                <div
                  key={`${setIndex}-${company.name}`}
                  className="flex items-center gap-8 px-12 group cursor-default"
                >
                  {/* Company name with abstract styling */}
                  <div className="flex items-center gap-3">
                    {/* Abstract mark */}
                    <div className="w-2 h-2 border border-foreground/20 rotate-45 group-hover:bg-foreground/10 transition-colors" />
                    
                    <span className="text-lg md:text-xl font-medium tracking-tight text-foreground/50 group-hover:text-foreground/80 transition-colors">
                      {company.name}
                    </span>
                    
                    <span className="text-[10px] text-muted-foreground/40">
                      {company.year}
                    </span>
                  </div>

                  {/* Separator */}
                  <div className="w-px h-6 bg-foreground/5" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}