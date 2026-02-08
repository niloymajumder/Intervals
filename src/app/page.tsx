import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import PhilosophySection from '@/components/sections/philosophy-section';
import ProductsSection from '@/components/sections/products-section';
import TeamSection from '@/components/sections/team-section';
import ContactSection from '@/components/sections/contact-section';
import StudioSection from '@/components/sections/studio-section';
import FutureSection from '@/components/sections/future-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <PhilosophySection />
        <StudioSection />
        <TeamSection />
        <FutureSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
