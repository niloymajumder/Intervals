import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export default function AnantityaPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-foreground" />
              <span className="text-sm text-muted-foreground tracking-widest">FASHION</span>
            </div>
            
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight mb-8">
              <span className="text-outline">ANANTITYA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
              A design-led cultural brand rooted in material reinterpretation, bridging heritage craft with contemporary design.
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">Founded 2023</span>
              <div className="w-px h-4 bg-foreground/20" />
              <Link 
                href="https://anantitya.com" 
                target="_blank"
                className="text-sm font-medium tracking-wide border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity"
              >
                VISIT WEBSITE →
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 px-6 md:px-10 border-t border-foreground/10">
          <div className="max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm text-muted-foreground tracking-widest mb-6">ABOUT</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Anantitya (Sanskrit: &quot;eternity&quot;) is a fashion and lifestyle brand that celebrates the 
                  timeless nature of craft. We work with artisan communities across South Asia to create 
                  contemporary pieces that honor traditional techniques while embracing modern aesthetics.
                </p>
              </div>
              <div>
                <h2 className="text-sm text-muted-foreground tracking-widest mb-6">THE PHILOSOPHY</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  In a world of fast fashion, Anantitya stands for permanence. Each piece is designed to 
                  last generations—not just in quality, but in relevance. We believe that true luxury lies 
                  in the story of making, not just the finished product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-16 px-6 md:px-10 border-t border-foreground/10 bg-card/30">
          <div className="max-w-6xl">
            <h2 className="text-sm text-muted-foreground tracking-widest mb-12">COLLECTIONS</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'ORIGINS', season: 'SS23', desc: 'Our debut collection exploring the roots of textile craft' },
                { name: 'WOVEN', season: 'AW23', desc: 'Handwoven pieces celebrating traditional loom techniques' },
                { name: 'ELEMENTS', season: 'SS24', desc: 'Natural dyes and organic materials in harmony' },
              ].map((collection, i) => (
                <div key={i} className="group relative aspect-[3/4] border border-foreground/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs text-muted-foreground block mb-2">{collection.season}</span>
                    <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                    <p className="text-sm text-muted-foreground">{collection.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Craft */}
        <section className="py-16 px-6 md:px-10 border-t border-foreground/10">
          <div className="max-w-6xl">
            <h2 className="text-sm text-muted-foreground tracking-widest mb-12">THE CRAFT</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: 'Artisan Partners', value: '50+' },
                { label: 'Traditional Techniques', value: '12' },
                { label: 'Sustainable Materials', value: '100%' },
                { label: 'Hours per Piece', value: '40+' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="text-4xl md:text-5xl font-bold block mb-2">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founding Team */}
        <section className="py-16 px-6 md:px-10 border-t border-foreground/10">
          <div className="max-w-6xl">
            <h2 className="text-sm text-muted-foreground tracking-widest mb-12">FOUNDING TEAM</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground/20">PS</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Priya Sharma</h3>
                  <p className="text-sm text-muted-foreground">Founder & Creative Director</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground/20">AR</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Arun Rao</h3>
                  <p className="text-sm text-muted-foreground">Co-Founder & Head of Production</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-10 border-t border-foreground/10">
          <div className="max-w-6xl text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Anantitya</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Explore our collections and learn about the artisans behind each piece.
            </p>
            <Link 
              href="https://anantitya.com" 
              target="_blank"
              className="inline-flex items-center gap-3 text-sm font-medium tracking-wide border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all"
            >
              SHOP ANANTITYA →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
