import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Zap, Pause, CheckCircle, Repeat } from 'lucide-react';

const processSteps = [
  { icon: <Zap className="size-6" />, name: 'Build' },
  { icon: <Pause className="size-6" />, name: 'Pause' },
  { icon: <CheckCircle className="size-6" />, name: 'Refine' },
  { icon: <Repeat className="size-6" />, name: 'Repeat' },
];

export default function StudioSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-up">
            <p className="font-semibold text-primary">Our Process</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mt-2">
              How we bring ideas to life.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At Intervals, we don't rush. We explore ideas and culture to inspire, sketch and experiment with concepts, build thoughtfully, pause to reflect, and iterate until every product achieves clarity and depth. This cycle is at the heart of everything we do.
            </p>
          </div>
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <div className="bg-card rounded-lg p-8">
                <h3 className="text-center font-medium mb-8">Our Creative Process</h3>
                <div className="flex items-center justify-between">
                {processSteps.map((step, index) => (
                    <React.Fragment key={step.name}>
                    <div className="flex flex-col items-center text-center w-20">
                        <div className="bg-secondary rounded-full p-4 mb-2">
                        {step.icon}
                        </div>
                        <span className="font-medium text-sm">{step.name}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                        <ArrowRight className="size-6 text-muted-foreground mx-auto flex-1 hidden sm:block" />
                    )}
                    </React.Fragment>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
