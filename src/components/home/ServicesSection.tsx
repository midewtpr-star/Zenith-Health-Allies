import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Stethoscope, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { ScrollAnimate } from '@/hooks/useScrollAnimation';
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
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimate className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Available Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-5">
            Keeping You Safe and Sound at Home
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore a spectrum of tailored services. Discover the excellence you deserve.
          </p>
        </ScrollAnimate>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimate key={index} delay={index * 100} animation="fade-up">
              <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-medium">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
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
            </ScrollAnimate>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimate delay={400} className="text-center mt-14">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </ScrollAnimate>
      </div>
    </section>
  );
}
