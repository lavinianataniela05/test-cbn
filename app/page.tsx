import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/FooterSection';
import CreativeChatBot from '@/components/ChatBot';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
      <CreativeChatBot />
    </main>
  );
}