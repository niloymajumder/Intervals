import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="border-t border-foreground/15 pt-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.5em] text-muted-foreground">Get in touch</p>
              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold font-headline">
                Interested in working with us?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Share a venture idea, partnership inquiry, or long-term research question.
              </p>
            </div>
            <div className="flex items-center justify-between border border-foreground/15 px-6 py-5">
              <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Email</span>
              <a
                href="mailto:hello@intervals.studio"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] border-b border-foreground/30 pb-1"
              >
                hello@intervals.studio
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
