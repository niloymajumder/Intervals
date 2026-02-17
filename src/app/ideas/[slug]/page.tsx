import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

// Article data store
const articles: Record<string, {
  title: string;
  category: string;
  type: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string[];
  relatedArticles: { title: string; slug: string; category: string }[];
}> = {
  'venture-studios': {
    title: 'The Future of Building: Why Venture Studios Matter',
    category: 'TECHNOLOGY',
    type: 'ARTICLE',
    date: 'February 12, 2026',
    readTime: '8 min read',
    author: 'Alex Chen',
    authorRole: 'Founder & Managing Partner',
    excerpt: 'Exploring how the venture studio model is reshaping how breakthrough companies are built.',
    content: [
      'The traditional venture capital model has served innovation well for decades. But as the complexity of building companies increases, a new model has emerged: the venture studio.',
      'At Intervals, we believe the venture studio model represents the future of company building. Rather than simply writing checks and waiting, we roll up our sleeves and build alongside our founders from day one.',
      '## What Makes Venture Studios Different',
      'Unlike traditional VCs who evaluate hundreds of pitches to find promising founders, venture studios generate ideas internally, validate them rigorously, and then recruit exceptional operators to lead them.',
      'This approach offers several advantages:',
      '**Reduced Risk**: By the time a studio company launches, it has already validated its core assumptions, built initial product, and often secured early customers.',
      '**Operational Support**: Studio companies get immediate access to shared resources—from legal and finance to engineering and design. This dramatically accelerates the early stages.',
      '**Aligned Incentives**: Because studios often retain significant ownership, they remain deeply invested in each company\'s success over the long term.',
      '## The Intervals Approach',
      'At Intervals, we focus on three sectors: technology, health, and sustainability. We believe these areas offer the greatest potential for impact and returns over the coming decades.',
      'Our process begins with identifying fundamental problems worth solving. We spend months researching markets, interviewing potential customers, and mapping competitive landscapes before writing a single line of code.',
      'Once we\'ve validated an opportunity, we recruit a founding CEO—typically an experienced operator who shares our vision and brings deep domain expertise. We provide initial capital, a proven playbook, and ongoing support.',
      '## Looking Forward',
      'The venture studio model is still evolving. As we learn more about what works and what doesn\'t, we continue to refine our approach.',
      'What remains constant is our commitment to building companies that matter—companies that solve real problems and create lasting value for founders, investors, and society.',
      'If you\'re a founder or operator interested in building with us, we\'d love to hear from you.',
    ],
    relatedArticles: [
      { title: 'Building for the Long Term', slug: 'long-term', category: 'OPERATIONS' },
      { title: 'The Rise of AI-Native Companies', slug: 'ai-native', category: 'TECHNOLOGY' },
    ],
  },
  'climate-tech': {
    title: 'Investing in Climate Tech: A Framework for Impact',
    category: 'SUSTAINABILITY',
    type: 'ARTICLE',
    date: 'January 28, 2026',
    readTime: '10 min read',
    author: 'Sarah Kim',
    authorRole: 'Partner',
    excerpt: 'How we evaluate climate technology investments and measure real-world impact.',
    content: [
      'Climate change is the defining challenge of our generation. At Intervals, we believe business and technology have a critical role to play in addressing it.',
      'But not all climate investments are created equal. After years of building and investing in sustainability-focused companies, we\'ve developed a framework for evaluating opportunities in this space.',
      '## The Three Pillars of Climate Impact',
      '### 1. Measurable Carbon Reduction',
      'Every climate investment we make must demonstrate a clear, quantifiable path to reducing greenhouse gas emissions. We look for companies that can show exactly how many tons of CO2 their solution avoids or removes.',
      '### 2. Economic Viability',
      'Solutions that rely on altruism or regulation alone rarely scale. We focus on companies whose climate benefits come with genuine economic advantages—lower costs, better performance, or new revenue streams.',
      '### 3. Scalability',
      'A solution that works for one factory or one city isn\'t enough. We invest in technologies and business models that can scale globally within a decade.',
      '## Our Focus Areas',
      '**Carbon Tracking & Accounting**: You can\'t manage what you can\'t measure. We\'re backing companies building the infrastructure for corporate carbon accountability.',
      '**Clean Energy Infrastructure**: From battery storage to grid management, the energy transition requires massive infrastructure investment.',
      '**Sustainable Materials**: Replacing carbon-intensive materials like cement and steel with sustainable alternatives.',
      '**Climate Adaptation**: As the effects of climate change intensify, communities and businesses need tools to adapt.',
      '## The Role of Terra',
      'Our portfolio company Terra exemplifies our approach. By making carbon tracking accessible and actionable for mid-market companies, Terra is helping businesses understand and reduce their environmental footprint.',
      'Since launch, Terra has helped customers avoid over 500,000 tons of CO2 emissions—and they\'re just getting started.',
      '## Conclusion',
      'Climate tech is not charity. It\'s one of the greatest business opportunities of the 21st century. The companies that help the world decarbonize will be among the most valuable and impactful enterprises of our time.',
      'We\'re proud to be building them.',
    ],
    relatedArticles: [
      { title: 'Terra Raises Series A', slug: 'terra-series-a', category: 'NEWS' },
      { title: 'Building for the Long Term', slug: 'long-term', category: 'OPERATIONS' },
    ],
  },
  'health-fund': {
    title: 'Announcing Our Health Innovation Fund',
    category: 'HEALTH',
    type: 'NEWS',
    date: 'December 15, 2025',
    readTime: '4 min read',
    author: 'James Rivera',
    authorRole: 'Partner',
    excerpt: 'A new $50M fund dedicated to backing founders improving human health and longevity.',
    content: [
      'Today, we\'re excited to announce the launch of the Intervals Health Innovation Fund—a $50 million fund dedicated to building and backing companies at the frontier of human health.',
      '## Why Health, Why Now',
      'Healthcare is at an inflection point. Advances in AI, genomics, and biotechnology are converging to make precision medicine a reality. Meanwhile, demographic shifts are creating unprecedented demand for health solutions.',
      'We believe the next decade will see more progress in human health than the previous century. And we want to be part of it.',
      '## Our Thesis',
      'The Health Innovation Fund will focus on three areas:',
      '**Preventive Health**: Companies helping people stay healthy, not just treating disease. This includes diagnostics, monitoring, and lifestyle interventions.',
      '**Mental Health**: The mental health crisis demands new solutions. We\'re backing founders building accessible, effective mental health care.',
      '**Longevity Science**: From senolytics to regenerative medicine, we\'re investing in the science of healthy aging.',
      '## The Team',
      'The fund will be led by James Rivera, who joins Intervals from his role as Chief Medical Officer at a leading digital health company. James brings deep expertise in healthcare delivery and a passion for innovation.',
      '## What We\'re Looking For',
      'We\'re looking for founders who:',
      '- Have deep domain expertise in health or medicine',
      '- Are building products with clear clinical validation paths',
      '- Think in decades, not quarters',
      '- Share our commitment to improving human health',
      'If that sounds like you, we\'d love to talk.',
      '## Join Us',
      'The health challenges facing humanity are immense. But so is our capacity for innovation. With the right founders, the right technology, and the right support, we can build a healthier future for everyone.',
      'Applications are now open. Reach out at health@intervals.vc',
    ],
    relatedArticles: [
      { title: 'The Future of Building: Why Venture Studios Matter', slug: 'venture-studios', category: 'TECHNOLOGY' },
      { title: 'Investing in Climate Tech', slug: 'climate-tech', category: 'SUSTAINABILITY' },
    ],
  },
  'long-term': {
    title: 'Building for the Long Term',
    category: 'OPERATIONS',
    type: 'ARTICLE',
    date: 'November 20, 2025',
    readTime: '6 min read',
    author: 'Alex Chen',
    authorRole: 'Founder & Managing Partner',
    excerpt: 'Our philosophy on creating companies that last decades, not just quarters.',
    content: [
      'In a world obsessed with quick wins and quarterly results, building for the long term feels almost countercultural. But at Intervals, it\'s the only way we know how to build.',
      '## The Long-Term Advantage',
      'Companies built for the long term make different decisions. They invest in product quality over growth hacks. They build cultures that attract and retain exceptional people. They choose sustainable unit economics over subsidized growth.',
      'These choices often look suboptimal in the short term. But over years and decades, they compound into insurmountable advantages.',
      '## What Long-Term Thinking Looks Like',
      '**Hiring**: We hire for potential and values, not just immediate skills. The best companies are built by people who grow with the organization.',
      '**Product**: We build products that customers love, not just products they\'ll use. This means saying no to features that drive short-term metrics but create long-term friction.',
      '**Culture**: We invest heavily in culture from day one. A strong culture is a competitive moat that takes years to build and only days to destroy.',
      '**Partnerships**: We choose partners who share our timeline. Investors, customers, and employees who think in decades, not quarters.',
      '## The Role of Patience',
      'Long-term thinking requires patience—perhaps the scarcest resource in modern business. It means accepting slower initial growth for stronger foundations. It means turning down revenue that compromises your vision.',
      'This is hard. Markets reward growth. Competitors move fast. The pressure to optimize for the next quarter is immense.',
      'But the greatest companies in history—the ones that define industries and improve lives—were built by founders who refused to sacrifice tomorrow for today.',
      '## Our Commitment',
      'At Intervals, we\'re committed to building companies that last. This means we\'re patient with growth but impatient with quality. We\'re flexible on tactics but rigid on values.',
      'It\'s a harder path. But it\'s the only one worth walking.',
    ],
    relatedArticles: [
      { title: 'The Future of Building: Why Venture Studios Matter', slug: 'venture-studios', category: 'TECHNOLOGY' },
      { title: 'The Rise of AI-Native Companies', slug: 'ai-native', category: 'TECHNOLOGY' },
    ],
  },
  'ai-native': {
    title: 'The Rise of AI-Native Companies',
    category: 'TECHNOLOGY',
    type: 'ARTICLE',
    date: 'October 8, 2025',
    readTime: '7 min read',
    author: 'Maya Patel',
    authorRole: 'Principal',
    excerpt: 'What it means to build companies with artificial intelligence at their core.',
    content: [
      'A new category of company is emerging: the AI-native company. These aren\'t traditional software companies that added AI features. They\'re built from the ground up with artificial intelligence at their core.',
      '## What Makes a Company AI-Native',
      'AI-native companies share several characteristics:',
      '**Data as Foundation**: They\'re built on proprietary data assets that improve their AI over time. The more they\'re used, the better they get.',
      '**AI-First Architecture**: Their technical architecture assumes AI from the start, rather than bolting it on later.',
      '**New User Experiences**: They create experiences that wouldn\'t be possible without AI—not just faster versions of old experiences.',
      '## Why This Matters',
      'AI-native companies have structural advantages over traditional software:',
      '- **Network Effects**: Their AI improves with usage, creating powerful network effects.',
      '- **Switching Costs**: As the AI learns from customer data, switching costs increase.',
      '- **Efficiency**: They can often operate with smaller teams because AI handles tasks that would require humans at traditional companies.',
      '## The Challenges',
      'Building AI-native companies isn\'t easy:',
      '**Cold Start Problem**: AI needs data to work well, but you need users to get data. Breaking this cycle requires creative solutions.',
      '**Model Risk**: AI models can fail in unexpected ways. Building reliable, safe AI systems is genuinely hard.',
      '**Talent Scarcity**: The best AI talent is extremely scarce and expensive.',
      '## Our Approach at Intervals',
      'We\'re actively building and backing AI-native companies across our focus areas. In health, AI-native diagnostics. In sustainability, AI-native carbon optimization. In technology, AI-native developer tools.',
      'The pattern is consistent: start with a genuine problem, build proprietary data assets, and create experiences that wouldn\'t be possible without AI.',
      '## Looking Ahead',
      'We\'re still in the early days of the AI-native era. The biggest companies in this category haven\'t been built yet.',
      'If you\'re building one, we want to help.',
    ],
    relatedArticles: [
      { title: 'The Future of Building: Why Venture Studios Matter', slug: 'venture-studios', category: 'TECHNOLOGY' },
      { title: 'Building for the Long Term', slug: 'long-term', category: 'OPERATIONS' },
    ],
  },
  'terra-series-a': {
    title: 'Terra Raises Series A',
    category: 'SUSTAINABILITY',
    type: 'NEWS',
    date: 'September 5, 2025',
    readTime: '3 min read',
    author: 'Intervals Team',
    authorRole: '',
    excerpt: 'Our portfolio company Terra closes $20M to expand carbon tracking platform.',
    content: [
      'We\'re thrilled to announce that Terra, our portfolio company building carbon tracking and sustainability tools, has raised a $20 million Series A led by Sequoia Capital, with participation from Intervals and existing investors.',
      '## The Journey So Far',
      'Terra was founded in 2024 with a simple premise: you can\'t reduce what you can\'t measure. Since launch, the company has helped hundreds of mid-market businesses understand and reduce their carbon footprints.',
      'Key milestones:',
      '- **500+ customers** across manufacturing, logistics, and retail',
      '- **500,000+ tons** of CO2 emissions tracked and avoided',
      '- **95% customer retention** rate',
      '## What\'s Next',
      'The new funding will accelerate Terra\'s expansion into new industries and geographies. Specific plans include:',
      '**Product Development**: Expanding the platform to cover Scope 3 emissions and supply chain carbon tracking.',
      '**Global Expansion**: Opening offices in Europe and Asia to serve international customers.',
      '**Team Growth**: Doubling the team over the next 18 months, with a focus on engineering and customer success.',
      '## A Note from the Founders',
      '"This funding validates what we\'ve believed from the start: businesses want to do the right thing on climate, they just need the tools to do it," said Terra CEO Michael Chen. "With this investment, we can help thousands more companies measure, manage, and reduce their environmental impact."',
      '## Our Role',
      'As a founding investor and studio partner, Intervals has been with Terra from day one. We provided initial capital, helped recruit the founding team, and continue to support the company\'s growth.',
      'Terra exemplifies the Intervals approach: identifying a critical problem, building a world-class team, and staying committed for the long term.',
      'Congratulations to the entire Terra team. The best is yet to come.',
    ],
    relatedArticles: [
      { title: 'Investing in Climate Tech', slug: 'climate-tech', category: 'SUSTAINABILITY' },
      { title: 'Building for the Long Term', slug: 'long-term', category: 'OPERATIONS' },
    ],
  },
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="flex min-h-dvh flex-col bg-background">
        <Header />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/ideas" className="text-sm font-medium tracking-wide border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-all">
              BACK TO IDEAS
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Article Header */}
        <section className="py-16 md:py-24 border-b border-foreground/10">
          <div className="px-6 md:px-10 max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/ideas" className="hover:text-foreground transition-colors">Ideas</Link>
              <span>/</span>
              <span>{article.category}</span>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xs tracking-widest text-muted-foreground bg-foreground/5 px-3 py-1">
                {article.type}
              </span>
              <span className="text-sm text-muted-foreground">{article.date}</span>
              <span className="text-sm text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">{article.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8">
              {article.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-foreground/10">
              <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <span className="text-sm font-bold text-foreground/30">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-medium">{article.author}</p>
                {article.authorRole && (
                  <p className="text-sm text-muted-foreground">{article.authorRole}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 md:py-24">
          <div className="px-6 md:px-10 max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              {article.content.map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-12 mb-6">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-8 mb-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                // Handle bold text and regular paragraphs
                if (paragraph.startsWith('**') && paragraph.includes('**:')) {
                  const [boldPart, rest] = paragraph.split('**:');
                  const boldText = boldPart.replace('**', '');
                  return (
                    <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                      <strong className="text-foreground">{boldText}:</strong>{rest}
                    </p>
                  );
                }
                // Handle list items
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-foreground/80 leading-relaxed ml-6 mb-2">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                return (
                  <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        {/* Share & Navigation */}
        <section className="py-12 border-t border-foreground/10">
          <div className="px-6 md:px-10 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <Link 
                href="/ideas"
                className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
              >
                ← BACK TO IDEAS
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Share:</span>
                <a href="#" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity">
                  LINKEDIN
                </a>
                <a href="#" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity">
                  TWITTER
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {article.relatedArticles.length > 0 && (
          <section className="py-16 md:py-24 border-t border-foreground/10 bg-card/30">
            <div className="px-6 md:px-10 max-w-6xl mx-auto">
              <h2 className="text-sm text-muted-foreground tracking-widest mb-8">RELATED ARTICLES</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {article.relatedArticles.map((related) => (
                  <Link 
                    key={related.slug}
                    href={`/ideas/${related.slug}`}
                    className="group border border-foreground/10 p-8 hover:border-foreground/30 transition-colors"
                  >
                    <span className="text-xs text-muted-foreground tracking-widest block mb-4">
                      {related.category}
                    </span>
                    <h3 className="text-xl font-semibold group-hover:translate-x-2 transition-transform">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 border-t border-foreground/10">
          <div className="px-6 md:px-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to build with us?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We're always looking for exceptional founders and operators who share our vision.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 text-sm font-medium tracking-wide border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all"
            >
              GET IN TOUCH →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
