import React from 'react';
import { Code } from 'lucide-react';

export default function FutureSection() {
  return (
    <section id="future" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative text-center max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-card mx-auto mb-8">
              <Code className="h-8 w-8 text-muted-foreground" />
           </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Future Speculation
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We are quietly experimenting with new technologies. Our next interval involves exploring how software can create calm, focus, and long-term perspective in a world of digital noise. Stay tuned.
          </p>
        </div>
      </div>
    </section>
  );
}
