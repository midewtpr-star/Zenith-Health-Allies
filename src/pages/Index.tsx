import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { AboutSection } from '@/components/home/AboutSection';
import { CTASection } from '@/components/home/CTASection';
import { MissionSection } from '@/components/home/MissionSection';
import { ContactSection } from '@/components/home/ContactSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Zenith Health Allies | Nursing, Training, and Staffing in Maryland</title>
        <meta name="description" content="Premier nursing services, comprehensive healthcare training, and strategic staffing solutions throughout Maryland." />
        <link rel="canonical" href="https://zenithhealthallies.org/" />
      </Helmet>
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
