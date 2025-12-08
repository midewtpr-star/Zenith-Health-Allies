import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';
import heroImage from '@/assets/hero-healthcare.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Compassionate healthcare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50 md:from-foreground/90 md:via-foreground/70 md:to-foreground/40" />
      </div>

      {/* Floating Elements - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="hidden md:block absolute bottom-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground mb-6 md:mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
            <span className="text-xs md:text-sm font-medium">Caring, Training, and Staffing Excellence</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background leading-tight mb-4 md:mb-6 opacity-0 animate-fade-up stagger-1">
            Your Heritage in{' '}
            <span className="text-accent">Health</span>{' '}
            Excellence
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-background/80 leading-relaxed mb-8 md:mb-10 max-w-2xl opacity-0 animate-fade-up stagger-2">
            Welcome to your gateway to a heritage of health excellence. 
            Your well-being is our legacy. Experience compassionate care, 
            specialized training, and expert staffing solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-12 opacity-0 animate-fade-up stagger-3">
            <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/services">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:flex md:flex-wrap md:gap-8 opacity-0 animate-fade-up stagger-4">
            {[
              { icon: Heart, label: 'Compassionate Care', value: '24/7' },
              { icon: Users, label: 'Expert Staff', value: '100+' },
              { icon: Shield, label: 'MD Areas Served', value: 'All' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3 text-center md:text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-background">{stat.value}</p>
                  <p className="text-xs md:text-sm text-background/60 hidden sm:block">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-background/60">
        <span className="text-sm">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
