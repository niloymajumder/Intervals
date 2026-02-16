import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CareersCTASection() {
  return (
    <section id="apply" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline">
            Ready to build the next interval?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Share your work and tell us what you want to explore. We reply to every application.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/careers/apply">
                Apply now <ArrowRight />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/">Back to Intervals</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
