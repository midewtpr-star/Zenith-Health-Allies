import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import homeCareImage from '@/assets/home-care.jpg';

const features = [
  'Compassionate and personalized support',
  'Expert care ensuring comfort and well-being',
  'Services tailored to your unique needs',
  'Holistic approach to health',
  'Experienced and dedicated team',
];

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-medium">
              <img
                src={homeCareImage}
                alt="Home healthcare services"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 gradient-hero rounded-2xl -z-10 opacity-20" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 gradient-warm rounded-2xl -z-10 opacity-20" />
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-medium z-20 max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 gradient-warm rounded-xl flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">10+</span>
                </div>
                <div>
                  <p className="font-serif text-lg text-foreground">Years</p>
                  <p className="text-sm text-muted-foreground">of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Mo Heritage
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Start Your Home Health Care Journey With Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Mo Heritage Health Care Services, we invite you to commence your healthcare, 
              training, and staffing journey with a commitment to compassionate and personalized 
              support. Our dedicated team stands ready to guide you through a pathway of expert care, 
              ensuring comfort and well-being in the familiarity of your home.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
