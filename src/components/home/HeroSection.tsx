import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Clock, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-healthcare.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Compassionate healthcare professionals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60 md:from-primary/90 md:via-primary/75 md:to-primary/40" />
      </div>

      {/* Decorative Elements */}
      <div className="hidden lg:block absolute top-1/4 right-20 w-72 h-72 border border-secondary/20 rounded-full" />
      <div className="hidden lg:block absolute bottom-1/4 right-32 w-48 h-48 border border-accent/20 rounded-full" />

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-primary-foreground mb-6 md:mb-8 opacity-0 animate-fade-up border border-secondary/30">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-xs md:text-sm font-medium tracking-wide uppercase">Excellence in Healthcare</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6 md:mb-8 opacity-0 animate-fade-up stagger-1">
            Elevating Healthcare
            <span className="block text-accent mt-2">Through Excellence</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8 md:mb-10 max-w-xl opacity-0 animate-fade-up stagger-2 font-light">
            Zenith Health Allies delivers premier nursing services, comprehensive healthcare training, and strategic staffing solutions throughout Maryland.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16 opacity-0 animate-fade-up stagger-3">
            <Button variant="accent" size="lg" className="w-full sm:w-auto text-base px-8" asChild>
              <Link to="/services">
                Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto text-base px-8" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-0 animate-fade-up stagger-4">
            {[
              { icon: Clock, label: 'Availability', value: '24/7', desc: 'Round-the-clock care' },
              { icon: Award, label: 'Certified Staff', value: '100+', desc: 'Healthcare professionals' },
              { icon: MapPin, label: 'Coverage', value: 'Maryland', desc: 'Statewide service' },
            ].map((stat, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/70">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
