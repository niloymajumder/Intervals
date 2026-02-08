import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl font-headline">
            Let's create something together.
          </h2>
          <a
            href="mailto:hello@intervals.live"
            className="mt-8 inline-flex items-center text-2xl sm:text-3xl font-medium text-primary hover:text-primary/80 transition-colors"
          >
            hello@intervals.live
            <ArrowRight className="ml-2 h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
