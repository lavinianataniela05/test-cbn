import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
}
