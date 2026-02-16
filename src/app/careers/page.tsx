import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CareersHeroSection from '@/components/sections/careers-hero-section';
import CareersCultureSection from '@/components/sections/careers-culture-section';
import CareersRolesSection from '@/components/sections/careers-roles-section';
import CareersProcessSection from '@/components/sections/careers-process-section';
import CareersFAQSection from '@/components/sections/careers-faq-section';
import CareersCTASection from '@/components/sections/careers-cta-section';

const careerLinks = [
  { href: '/', label: 'Home' },
  { href: '#culture', label: 'Culture' },
  { href: '#roles', label: 'Roles' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
  { href: '#apply', label: 'Apply' },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header links={careerLinks} />
      <main className="flex-1">
        <CareersHeroSection />
        <CareersCultureSection />
        <CareersRolesSection />
        <CareersProcessSection />
        <CareersFAQSection />
        <CareersCTASection />
      </main>
      <Footer />
    </div>
  );
}
