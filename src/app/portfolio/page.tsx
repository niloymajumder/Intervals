import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

const ventures = [
  { year: 2022, name: 'THIRTY', category: 'MEDIA', description: 'Independent magazine exploring culture and long-form storytelling' },
  { year: 2023, name: 'ANANTITYA', category: 'FASHION', description: 'Design-led cultural brand rooted in material reinterpretation' },
  { year: 2023, name: 'FORGE', category: 'TECHNOLOGY', description: 'Developer tools reimagining how teams build software together' },
  { year: 2024, name: 'VITALIS', category: 'HEALTH', description: 'Personalized wellness platform using AI-driven health insights' },
  { year: 2024, name: 'TERRA', category: 'SUSTAINABILITY', description: 'Carbon tracking and sustainability tools for modern businesses' },
  { year: 2025, name: 'NEXUS', category: 'TECHNOLOGY', description: 'Next-generation infrastructure for decentralized applications' },
];

const spotlight = [
  { category: 'TECHNOLOGY', title: 'Building the tools that power tomorrow\'s teams', company: 'Forge', link: '#' },
  { category: 'HEALTH', title: 'Personalized wellness at scale', company: 'Vitalis', link: '#' },
  { category: 'SUSTAINABILITY', title: 'Making carbon visibility simple', company: 'Terra', link: '#' },
];

const filters = ['ALL', 'TECHNOLOGY', 'HEALTH', 'SUSTAINABILITY', 'MEDIA', 'FASHION'];

export default function PortfolioPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Spotlight */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="px-6 md:px-10">
            <p className="text-sm text-muted-foreground mb-4">COMPANY SPOTLIGHT</p>
            <h1 className="text-headline max-w-3xl mb-16">
              Get to know our exceptional founders building breakthrough solutions.
            </h1>
            
            <div className="grid md:grid-cols-3 gap-6">
              {spotlight.map((item) => (
                <Link 
                  key={item.company} 
                  href={item.link} 
                  className="group border border-border p-8 hover:bg-card transition-colors"
                >
                  <span className="text-xs text-muted-foreground">{item.category}</span>
                  <h3 className="text-xl font-semibold mt-4 group-hover:opacity-70 transition-opacity">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Companies */}
        <section className="py-24 md:py-32">
          <div className="px-6 md:px-10">
            <p className="text-sm text-muted-foreground mb-4">OUR PORTFOLIO COMPANIES</p>
            <h2 className="text-headline max-w-3xl mb-8">
              Explore the Intervals portfolio and learn about the companies driving humanity forward.
            </h2>

            {/* Filters */}
            <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
              {filters.map((filter) => (
                <button 
                  key={filter} 
                  className="text-sm font-medium px-4 py-2 border border-border hover:bg-card transition-colors whitespace-nowrap"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Companies list */}
            <div className="space-y-0">
              {ventures.map((venture) => (
                <div 
                  key={venture.name}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-t border-border hover:bg-card transition-colors px-4 -mx-4 cursor-pointer"
                >
                  <span className="text-sm text-muted-foreground w-16">{venture.year}</span>
                  <span className="text-xs text-muted-foreground w-28">{venture.category}</span>
                  <h3 className="text-xl md:text-2xl font-bold flex-1 group-hover:opacity-70 transition-opacity">
                    {venture.name}
                  </h3>
                  <p className="text-muted-foreground md:max-w-md">{venture.description}</p>
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
