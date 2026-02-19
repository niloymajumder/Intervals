import Script from 'next/script';
import MaintenanceSection from '@/components/sections/maintenance-section';

export default function MaintenancePage() {
  return (
    <>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="8fd43d7e-8063-489b-9f3a-2314829acc53"
        strategy="afterInteractive"
      />
      <MaintenanceSection />
    </>
  );
}
