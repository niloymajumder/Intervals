import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export default function ThirtyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-foreground" />
              <span className="text-sm text-muted-foreground tracking-widest">MEDIA</span>
            </div>
            
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight mb-8">
              <span className="text-outline">THIRTY</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
              An independent magazine exploring culture, design, and long-form storytelling for the modern reader.
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">Founded 2022</span>
              <div className="w-px h-4 bg-foreground/20" />
              <Link 
                href="https://thirty.com" 
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
                  Thirty is a bi-annual publication that bridges the gap between digital noise and meaningful content. 
                  Each issue is a curated collection of essays, interviews, and visual stories that explore the 
                  intersection of culture, technology, and human experience.
                </p>
              </div>
              <div>
                <h2 className="text-sm text-muted-foreground tracking-widest mb-6">THE VISION</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  In an age of infinite scroll, Thirty champions depth over breadth. We believe in stories that 
                  deserve time—to be written, to be designed, and to be read. Our commitment is to create a 
                  publication that readers return to, share, and keep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6 md:px-10 border-t border-foreground/10 bg-card/30">
          <div className="max-w-6xl">
            <h2 className="text-sm text-muted-foreground tracking-widest mb-12">KEY FEATURES</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Long-Form Essays', desc: 'Deep dives into culture, design, and ideas that shape our world' },
                { title: 'Visual Storytelling', desc: 'Photography and art direction that elevates every narrative' },
                { title: 'Print & Digital', desc: 'Premium print editions paired with a thoughtful digital experience' },
              ].map((feature, i) => (
                <div key={i} className="border border-foreground/10 p-8">
                  <span className="text-5xl font-bold text-foreground/10 block mb-4">0{i + 1}</span>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 px-6 md:px-10 border-t border-foreground/10">
          <div className="max-w-6xl">
            <h2 className="text-sm text-muted-foreground tracking-widest mb-12">FOUNDING TEAM</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground/20">EL</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Emma Liu</h3>
                  <p className="text-sm text-muted-foreground">Editor-in-Chief</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground/20">MK</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Marcus Kim</h3>
                  <p className="text-sm text-muted-foreground">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-10 border-t border-foreground/10">
          <div className="max-w-6xl text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Thirty?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Subscribe to receive updates on new issues and exclusive content.
            </p>
            <Link 
              href="https://thirty.com" 
              target="_blank"
              className="inline-flex items-center gap-3 text-sm font-medium tracking-wide border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all"
            >
              VISIT THIRTY →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
