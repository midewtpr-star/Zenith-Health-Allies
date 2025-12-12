import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Stethoscope, GraduationCap, Users, ArrowRight } from 'lucide-react';
import nurseImage from '@/assets/nurse-portrait.jpg';
import trainingImage from '@/assets/training-class.jpg';
import homeCareImage from '@/assets/home-care.jpg';

const services = [
  {
    id: 'nursing',
    slug: 'nursing-services',
    icon: Stethoscope,
    title: 'Nursing Services for DDA Agencies',
    subtitle: 'Expert nursing care in the comfort of home',
    description: 'Offering unparalleled expertise in nursing training to DDA provider agencies. Expert nursing care in the comfort of home, enhancing well-being with skill and compassion.',
    image: nurseImage,
  },
  {
    id: 'training',
    slug: 'training-classes',
    icon: GraduationCap,
    title: 'Training Classes',
    subtitle: 'Comprehensive healthcare education',
    description: 'We provide comprehensive trainings to equip individuals with life-saving skills and confidence in emergency situations. Empower through education with informative classes.',
    image: trainingImage,
  },
  {
    id: 'staffing',
    slug: 'staffing-services',
    icon: Users,
    title: 'Staffing Services',
    subtitle: 'Reliable staffing solutions',
    description: 'Reliable staffing solutions, ensuring seamless support for optimal healthcare services. Depend on us for reliable and qualified professionals who meet your facility needs.',
    image: homeCareImage,
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 border border-secondary/30">
            What We Offer
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Comprehensive healthcare solutions designed to meet your unique needs with compassion and excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-secondary font-medium text-sm mb-3">{service.subtitle}</p>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{service.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary transition-all" asChild>
                    <Link to={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-secondary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-secondary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Contact us today to learn more about our services and how we can help you achieve your healthcare goals.
          </p>
          <Button variant="accent" size="lg" className="px-10" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
