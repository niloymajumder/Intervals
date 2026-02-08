import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-dvh flex flex-col items-center justify-center text-center bg-background px-6">
      <div className="z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 font-headline">
          Ideas, built with intention.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Intervals is a multidisciplinary creative and intellectual house that builds, curates, and scales ideas across media, culture, design, and technology.
        </p>
        <Button size="lg" asChild>
            <a href="#contact">
              Let's work together <ArrowRight />
            </a>
        </Button>
      </div>
    </section>
  );
}
