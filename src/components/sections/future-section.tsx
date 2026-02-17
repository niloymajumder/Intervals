import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const futureImage = PlaceHolderImages.find(p => p.id === 'future-lab');

export default function FutureSection() {
  return (
    <section id="future" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Future Lab</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl font-headline">
              Speculative systems for a calmer digital world.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We are experimenting with software that removes friction, restores attention, and helps teams build in deliberate cycles. The lab publishes quarterly notes and early prototypes.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center text-sm uppercase tracking-[0.2em]">
              Join the lab briefings <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent/30 blur-3xl animate-float-slow" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-foreground/10 bg-card">
              {futureImage && (
                <Image
                  src={futureImage.imageUrl}
                  alt={futureImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={futureImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
