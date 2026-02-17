import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import TrustBar from '@/components/sections/trust-bar';
import PortfolioSection from '@/components/sections/portfolio-section';
import ProductsSection from '@/components/sections/products-section';
import PhilosophySection from '@/components/sections/philosophy-section';
import StudioSection from '@/components/sections/studio-section';
import CareersSection from '@/components/sections/careers-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <PortfolioSection />
        <ProductsSection />
        <PhilosophySection />
        <StudioSection />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
}

