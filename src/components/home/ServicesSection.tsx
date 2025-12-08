import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Stethoscope, GraduationCap, Users, ArrowRight } from 'lucide-react';
import nurseImage from '@/assets/nurse-portrait.jpg';
import trainingImage from '@/assets/training-class.jpg';
import homeCareImage from '@/assets/home-care.jpg';

const services = [
  {
    icon: Stethoscope,
    title: 'Nursing Services',
    description: 'Offering unparalleled expertise in nursing training to DDA provider agencies. Expert nursing care in the comfort of home.',
    image: nurseImage,
    link: '/services',
  },
  {
    icon: GraduationCap,
    title: 'Training Classes',
    description: 'We provide comprehensive trainings to equip individuals with life-saving skills and confidence in emergency situations.',
    image: trainingImage,
    link: '/services',
  },
  {
    icon: Users,
    title: 'Staffing Services',
    description: 'Reliable staffing solutions, ensuring seamless support for optimal healthcare services. Depend on us for qualified professionals.',
    image: homeCareImage,
    link: '/staffing',
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Our Available Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6">
            Keeping You Safe and Sound at Home
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-4">
            Explore a spectrum of tailored services. Discover the excellence you deserve.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 md:w-14 md:h-14 gradient-hero rounded-xl flex items-center justify-center">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 md:mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
