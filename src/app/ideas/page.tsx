import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

const ideas = [
  {
    category: 'TECHNOLOGY',
    type: 'ARTICLE',
    title: 'The Future of Building: Why Venture Studios Matter',
    excerpt: 'Exploring how the venture studio model is reshaping how breakthrough companies are built.',
    date: 'February 2026',
    slug: 'venture-studios',
  },
  {
    category: 'SUSTAINABILITY',
    type: 'ARTICLE',
    title: 'Investing in Climate Tech: A Framework for Impact',
    excerpt: 'How we evaluate climate technology investments and measure real-world impact.',
    date: 'January 2026',
    slug: 'climate-tech',
  },
  {
    category: 'HEALTH',
    type: 'NEWS',
    title: 'Announcing Our Health Innovation Fund',
    excerpt: 'A new $50M fund dedicated to backing founders improving human health and longevity.',
    date: 'December 2025',
    slug: 'health-fund',
  },
  {
    category: 'OPERATIONS',
    type: 'ARTICLE',
    title: 'Building for the Long Term',
    excerpt: 'Our philosophy on creating companies that last decades, not just quarters.',
    date: 'November 2025',
    slug: 'long-term',
  },
  {
    category: 'TECHNOLOGY',
    type: 'ARTICLE',
    title: 'The Rise of AI-Native Companies',
    excerpt: 'What it means to build companies with artificial intelligence at their core.',
    date: 'October 2025',
    slug: 'ai-native',
  },
  {
    category: 'SUSTAINABILITY',
    type: 'NEWS',
    title: 'Terra Raises Series A',
    excerpt: 'Our portfolio company Terra closes $20M to expand carbon tracking platform.',
    date: 'September 2025',
    slug: 'terra-series-a',
  },
];

const categories = ['ALL', 'ARTICLE', 'NEWS', 'TECHNOLOGY', 'HEALTH', 'SUSTAINABILITY'];

export default function IdeasPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="px-6 md:px-10">
            <h1 className="text-display max-w-4xl">Ideas</h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Explore the ideas, essays, and insights that shape how we think and invest in the world we want to create.
            </p>
          </div>
        </section>

        {/* Ideas Grid */}
        <section className="py-24 md:py-32">
          <div className="px-6 md:px-10">
            {/* Filters */}
            <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
              {categories.map((category) => (
                <button 
                  key={category} 
                  className="text-sm font-medium px-4 py-2 border border-border hover:bg-card transition-colors whitespace-nowrap"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Ideas list */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ideas.map((idea) => (
                <Link 
                  key={idea.slug}
                  href={`/ideas/${idea.slug}`}
                  className="group border border-border p-8 hover:bg-card transition-colors"
                >
                  <div className="flex gap-4 mb-6">
                    <span className="text-xs text-muted-foreground">{idea.category}</span>
                    <span className="text-xs text-muted-foreground border-l border-border pl-4">{idea.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:opacity-70 transition-opacity">
                    {idea.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">{idea.excerpt}</p>
                  <span className="text-xs text-muted-foreground">{idea.date}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
