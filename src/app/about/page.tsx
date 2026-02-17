import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

const values = [
  {
    number: '01',
    title: 'Depth over speed',
    body: 'We prioritize rigorous research, editorial clarity, and long-term relevance.',
  },
  {
    number: '02',
    title: 'Institutional design',
    body: 'We build systems that endure: brand, product, governance, and operations.',
  },
  {
    number: '03',
    title: 'Founder partnership',
    body: 'We co-build with founders, not around them. We stay close from day one.',
  },
];

const teamMembers = [
  { name: 'Alex Chen', role: 'Founder & Managing Partner' },
  { name: 'Sarah Kim', role: 'Partner' },
  { name: 'James Rivera', role: 'Partner' },
  { name: 'Maya Patel', role: 'Principal' },
];

const process = [
  'Research-led venture thesis',
  'Integrated product architecture',
  'Incubation with systems and governance',
  'Independent scaling readiness',
];

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="px-6 md:px-10">
            <h1 className="text-display max-w-4xl">
              Building the future,<br />
              one venture at a time.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Intervals is a venture studio creating breakthrough companies across technology, health, and sustainability. Founded on a simple belief that the most valuable companies will be the ones building what the world needs most.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="px-6 md:px-10">
            <p className="text-sm text-muted-foreground mb-4">OUR VALUES</p>
            <h2 className="text-headline max-w-3xl mb-16">What drives us forward.</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="border border-border p-8">
                  <span className="text-sm text-muted-foreground">{value.number}</span>
                  <h3 className="text-2xl font-bold mt-4 mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="text-sm text-muted-foreground mb-4">OUR TEAM</p>
                <h2 className="text-headline">The people behind Intervals.</h2>
              </div>
              <Link 
                href="/team" 
                className="mt-6 md:mt-0 text-sm font-medium tracking-wide border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                VIEW ALL
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-[3/4] bg-card border border-border mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-card" />
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we operate */}
        <section className="py-24 md:py-32">
          <div className="px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-sm text-muted-foreground mb-4">HOW WE OPERATE</p>
                <h2 className="text-headline">A studio model built for endurance.</h2>
              </div>
              <div>
                <p className="text-muted-foreground text-lg mb-8">
                  We run research sprints, define venture architecture, and build the systems that allow each company to scale without losing clarity.
                </p>
                <div className="space-y-4">
                  {process.map((item) => (
                    <div key={item} className="border border-border px-6 py-5">
                      <p className="font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
