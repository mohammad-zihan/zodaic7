import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ZodiacSigns from '@/components/ZodiacSigns';
import BirthdateCalculator from '@/components/BirthdateCalculator';
import AdBanner from '@/components/AdBanner';
import StarsBackground from '@/components/StarsBackground';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1A237E 0%, #4A148C 100%)' }}>
      <StarsBackground />
      <Header />
      <Hero />
      <AdBanner type="horizontal" />
      <About />
      <ZodiacSigns />
      <AdBanner type="sidebar" />
      <BirthdateCalculator />
      <AdBanner type="horizontal" />
      <Footer />
    </div>
  );
}