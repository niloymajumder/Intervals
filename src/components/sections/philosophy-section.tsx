import React from 'react';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Our Philosophy
          </h2>
          <div className="mt-8 space-y-6 text-lg text-muted-foreground">
            <p>
              The name Intervals represents the space between moments—where reflection happens, where disciplines intersect, and where new directions are formed. We exist to support ventures that operate between tradition and innovation, craft and system, art and infrastructure.
            </p>
            <p>
              As a parent organization, Intervals provides strategic vision, editorial integrity, creative infrastructure, and long-term scalability to its ventures. Our focus is not rapid output, but sustainable relevance - building institutions, not trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
