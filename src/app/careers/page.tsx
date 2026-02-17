import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

const openings = [
  {
    slug: 'venture-designer',
    title: 'Venture Designer',
    type: 'DESIGN',
    location: 'San Francisco / Remote',
    commitment: 'Full-time',
  },
  {
    slug: 'founding-engineer',
    title: 'Founding Engineer',
    type: 'ENGINEERING',
    location: 'San Francisco / Remote',
    commitment: 'Full-time',
  },
  {
    slug: 'research-associate',
    title: 'Research Associate',
    type: 'RESEARCH',
    location: 'San Francisco / Remote',
    commitment: 'Full-time',
  },
  {
    slug: 'operations-lead',
    title: 'Operations Lead',
    type: 'OPERATIONS',
    location: 'San Francisco',
    commitment: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="px-6 md:px-10">
            <h1 className="text-display max-w-3xl">Work with us.</h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              We collaborate with researchers, designers, developers, editors, strategists, and cultural thinkers to build companies that matter.
            </p>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="px-6 md:px-10">
            <p className="text-sm text-muted-foreground mb-4">OPEN POSITIONS</p>
            <h2 className="text-headline mb-16">Join the team.</h2>
            
            <div className="space-y-0">
              {openings.map((opening) => (
                <Link 
                  key={opening.slug} 
                  href={`/careers/${opening.slug}`}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-t border-border hover:bg-card transition-colors px-4 -mx-4"
                >
                  <span className="text-sm text-muted-foreground w-32">{opening.type}</span>
                  <h3 className="text-xl md:text-2xl font-bold flex-1 group-hover:opacity-70 transition-opacity">{opening.title}</h3>
                  <span className="text-sm text-muted-foreground">{opening.location}</span>
                  <span className="text-sm text-muted-foreground hidden md:block">{opening.commitment}</span>
                  <span className="text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* General Interest */}
        <section className="py-24 md:py-32">
          <div className="px-6 md:px-10">
            <div className="max-w-2xl">
              <h2 className="text-headline mb-8">Don&apos;t see a fit?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We&apos;re always looking for exceptional people. Send a note with your portfolio and a short introduction.
              </p>
              <Link 
                href="mailto:careers@intervals.studio"
                className="inline-flex text-sm font-medium tracking-wide border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
