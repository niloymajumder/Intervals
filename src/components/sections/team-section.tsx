import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

const teamMembers = [
    { name: 'Rohan The Diddy', role: 'CEO' },
    { name: 'Niloy', role: 'UFO' },
    { name: 'Mustakim', role: 'CTO' },
    { name: 'HR', role: 'Navid' },
]

export default function TeamSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Our Team
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We are a small, independent studio of thinkers and makers. We believe in working on things that matter, and taking the time to do them right. Our process is collaborative and iterative, and we value open communication and transparency.
            </p>
             <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {teamMembers.map(member => (
                        <div key={member.name}>
                            <h4 className="font-bold text-lg">{member.name}</h4>
                            <p className="text-muted-foreground">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
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
