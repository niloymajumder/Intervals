import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const team = [
  {
    name: 'Shahriar Rohan',
    role: 'FOUNDER & MANAGING PARTNER',
    bio: 'Alex founded Intervals with a vision to build companies that matter. Previously led product at a Fortune 500 technology company.',
  },
  {
    name: 'Niloy Majumder',
    role: 'PARTNER',
    bio: 'Sarah leads our health and wellness investments. Former healthcare executive with 15 years of industry experience.',
  },
  {
    name: 'Mustakim Mohsin',
    role: 'PARTNER',
    bio: 'James focuses on sustainability and climate tech. Previously founded two successful cleantech startups.',
  },
  {
    name: 'Navid',
    role: 'PRINCIPAL',
    bio: 'Maya supports portfolio companies with go-to-market strategy. Background in product management and venture capital.',
  },
  {
    name: 'David Park',
    role: 'VENTURE PARTNER',
    bio: 'David advises on deep tech investments. Former CTO and serial entrepreneur in the AI space.',
  },
  {
    name: 'Emily Zhang',
    role: 'ASSOCIATE',
    bio: 'Emily supports deal sourcing and due diligence. Previously worked in investment banking and tech consulting.',
  },
];

export default function TeamPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="px-6 md:px-10">
            <h1 className="text-display max-w-3xl">Our Team</h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Meet the people building the future at Intervals. A diverse team of operators, investors, and builders.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24 md:py-32">
          <div className="px-6 md:px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-[3/4] bg-card border border-border mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-card" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
