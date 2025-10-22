import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/FooterSection';
import ChatBot from '@/components/ChatBot';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
      <ChatBot />
    </main>
  );
}