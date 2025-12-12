import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Clock, MapPin } from 'lucide-react';
import heroImage1 from '@/assets/hero-healthcare.jpg';
import heroImage2 from '@/assets/nurse-portrait.jpg';
import heroImage3 from '@/assets/home-care.jpg';

const heroImages = [heroImage1, heroImage2, heroImage3];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Images with Crossfade */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt="Healthcare professionals"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Simple Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/75 z-[1]" />

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-background w-8' 
                : 'bg-background/40 hover:bg-background/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-background mb-6 md:mb-8 opacity-0 animate-fade-up border border-background/20">
            <Award className="w-4 h-4" />
            <span className="text-xs md:text-sm font-medium tracking-wide uppercase">Excellence in Healthcare</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-background leading-[1.1] mb-6 md:mb-8 opacity-0 animate-fade-up stagger-1">
            Elevating Healthcare
            <span className="block text-secondary mt-2">Through Excellence</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-background/80 leading-relaxed mb-8 md:mb-10 max-w-xl opacity-0 animate-fade-up stagger-2 font-light">
            Zenith Health Allies delivers premier nursing services, comprehensive healthcare training, and strategic staffing solutions throughout Maryland.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16 opacity-0 animate-fade-up stagger-3">
            <Button size="lg" className="w-full sm:w-auto text-base px-8 bg-secondary hover:bg-secondary/90" asChild>
              <Link to="/services">
                Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 bg-transparent border-background/30 text-background hover:bg-background/10" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 opacity-0 animate-fade-up stagger-4">
            {[
              { icon: Clock, value: '24/7', desc: 'Round-the-clock care' },
              { icon: Award, value: '100+', desc: 'Healthcare professionals' },
              { icon: MapPin, value: 'Maryland', desc: 'Statewide service' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-background/5 backdrop-blur-sm rounded-lg border border-background/10">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-background">{stat.value}</p>
                  <p className="text-sm text-background/60">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
