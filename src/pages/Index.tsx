import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { AboutSection } from '@/components/home/AboutSection';
import { CTASection } from '@/components/home/CTASection';
import { MissionSection } from '@/components/home/MissionSection';
import { ContactSection } from '@/components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <MissionSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
