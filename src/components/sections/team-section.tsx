import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

const teamMembers = [
  { name: 'Rohan The Diddy', role: 'Founder + Strategy' },
  { name: 'Niloy', role: 'Creative Direction' },
  { name: 'Mustakim', role: 'Product + Technology' },
  { name: 'Navid', role: 'People + Operations' },
];

export default function TeamSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl font-headline">
              Small team, high conviction.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We are a compact studio of strategists, designers, and engineers. We embed with founders, build in public, and translate ambition into real systems.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Active ventures', value: '5' },
                { label: 'Founder partners', value: '14' },
                { label: 'Prototype to launch', value: '45 days' },
                { label: 'Signals tracked', value: '120+' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-foreground/10 bg-card/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold font-headline">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="rounded-2xl border border-foreground/10 bg-card/70 p-4">
                  <h4 className="font-semibold text-lg font-headline">{member.name}</h4>
                  <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/5] relative rounded-3xl overflow-hidden border border-foreground/10">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
