import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Building2, CheckCircle, Clock, Shield, Heart, ArrowRight } from 'lucide-react';
import nurseImage from '@/assets/nurse-portrait.jpg';
import homeCareImage from '@/assets/home-care.jpg';

const staffingTypes = [
  {
    title: 'Temporary Staffing',
    description: 'Short-term healthcare professionals to cover immediate needs, vacations, or leaves of absence.',
  },
  {
    title: 'Permanent Placement',
    description: 'Find the perfect long-term addition to your healthcare team with our comprehensive matching process.',
  },
  {
    title: 'Contract Staffing',
    description: 'Flexible contract arrangements for project-based needs or seasonal demands.',
  },
  {
    title: 'Travel Nursing',
    description: 'Experienced nurses available for travel assignments throughout Maryland.',
  },
];

const benefits = [
  { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock support for your staffing needs.' },
  { icon: Shield, title: 'Fully Vetted', description: 'All professionals undergo thorough background checks.' },
  { icon: Heart, title: 'Quality Care', description: 'Compassionate professionals committed to excellence.' },
  { icon: Users, title: 'Diverse Talent', description: 'Access to a wide range of healthcare specialists.' },
];

export default function StaffingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 gradient-hero">
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            Healthcare Staffing
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Reliable staffing solutions ensuring seamless support for optimal healthcare services. 
            Depend on us for qualified professionals.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Staffing Solutions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Your Partner in Healthcare Staffing
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Mo Heritage Health Care Services, we understand the challenges healthcare 
                facilities face in maintaining adequate staffing levels. Our comprehensive 
                staffing solutions connect you with qualified, compassionate healthcare 
                professionals who are ready to make a difference.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {staffingTypes.map((type, index) => (
                  <div key={index} className="p-4 bg-secondary/30 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">{type.title}</h4>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request Staffing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={nurseImage} alt="Nurse" className="rounded-2xl shadow-medium h-80 object-cover" />
              <img src={homeCareImage} alt="Healthcare" className="rounded-2xl shadow-medium h-80 object-cover mt-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              The Mo Heritage Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-soft text-center group hover:shadow-medium transition-shadow">
                <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Healthcare Facilities */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-card p-12 rounded-2xl shadow-medium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 gradient-warm rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="font-serif text-3xl text-foreground mb-4">For Healthcare Facilities</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Partner with us to ensure your facility always has the skilled professionals 
                  it needs. We handle the recruitment, vetting, and placement so you can focus 
                  on what matters most - patient care.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Quick turnaround on staffing requests',
                    'Credential verification and compliance',
                    'Flexible contract terms',
                    'Dedicated account management',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
              <div className="bg-secondary/50 p-8 rounded-xl">
                <h3 className="font-serif text-xl text-foreground mb-4">Request Staff Today</h3>
                <p className="text-muted-foreground mb-6">
                  Need healthcare professionals? Fill out our staffing request form or 
                  give us a call. We'll work to match you with qualified candidates quickly.
                </p>
                <div className="space-y-4">
                  <a href="tel:240-278-1871" className="block p-4 bg-card rounded-xl hover:shadow-soft transition-shadow">
                    <p className="text-sm text-muted-foreground">Call us directly</p>
                    <p className="text-lg font-medium text-primary">240-278-1871</p>
                  </a>
                  <a href="mailto:hello@moheritagecares.com" className="block p-4 bg-card rounded-xl hover:shadow-soft transition-shadow">
                    <p className="text-sm text-muted-foreground">Email us</p>
                    <p className="text-lg font-medium text-primary">hello@moheritagecares.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
