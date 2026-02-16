import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const highlights = [
  {
    title: 'Remote-friendly by design',
    description: 'Work from Dhaka or anywhere within 4 hours of UTC+6.',
  },
  {
    title: 'Small teams, deep focus',
    description: 'We keep teams lean so every voice shapes the outcome.',
  },
  {
    title: 'Long-term craft',
    description: 'We build institutions, not short-lived trends.',
  },
];

const focusTags = ['Editorial', 'Design', 'Technology', 'Culture'];

export default function CareersHeroSection() {
  return (
    <section id="careers" className="relative overflow-hidden bg-background pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_55%)]" aria-hidden="true" />
      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-primary">Careers</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-headline">
            Build with intention, in the spaces between disciplines.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Intervals is a creative-technology studio and cultural house. We are hiring people who care about
            clarity, craft, and the quiet power of thoughtful work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {focusTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#roles">
                See open roles <ArrowRight />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:careers@intervals.live">Email careers</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-lg border bg-card/60 p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
