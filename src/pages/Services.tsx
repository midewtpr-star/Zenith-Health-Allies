import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Stethoscope, GraduationCap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import nurseImage from '@/assets/nurse-portrait.jpg';
import trainingImage from '@/assets/training-class.jpg';
import homeCareImage from '@/assets/home-care.jpg';

const services = [
  {
    id: 'nursing',
    icon: Stethoscope,
    title: 'Nursing Services for DDA Agencies',
    subtitle: 'Expert nursing care in the comfort of home',
    description: 'Offering unparalleled expertise in nursing training to DDA provider agencies. Expert nursing care in the comfort of home, enhancing well-being with skill and compassion. Your health is our priority.',
    features: [
      'Skilled nursing assessments',
      'Medication management',
      'Wound care and treatment',
      'Health monitoring and reporting',
      'Care plan development',
      'Family education and support',
    ],
    image: nurseImage,
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Training Classes',
    subtitle: 'Comprehensive healthcare education',
    description: 'We provide comprehensive trainings to equip individuals with life-saving skills and confidence in emergency situations. Empower through education with informative classes for enhanced healthcare knowledge.',
    features: [
      'CPR and First Aid certification',
      'Medication administration training',
      'Patient care techniques',
      'Emergency response protocols',
      'Health and safety compliance',
      'Continuing education units',
    ],
    image: trainingImage,
  },
  {
    id: 'staffing',
    icon: Users,
    title: 'Staffing Services',
    subtitle: 'Reliable staffing solutions',
    description: 'Reliable staffing solutions, ensuring seamless support for optimal healthcare services. Depend on us for reliable and qualified professionals who meet your healthcare facility needs.',
    features: [
      'Temporary staffing solutions',
      'Permanent placement services',
      'Healthcare facility staffing',
      'Qualified and vetted professionals',
      'Flexible scheduling options',
      '24/7 availability',
    ],
    image: homeCareImage,
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 gradient-hero">
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Welcome to our suite of services, where compassionate healthcare, training, 
            and staffing excellence converge.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We specialize in delivering personalized care within the comfort of the home, 
              addressing diverse needs with empathy and expertise.
            </p>
          </div>

          {/* Service Details */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-3xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-accent font-medium mb-4">{service.subtitle}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-medium w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our services and how we can help you 
            achieve your healthcare goals.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
