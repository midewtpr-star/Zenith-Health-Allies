import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Send, Users, ArrowRight } from 'lucide-react';

const ctaCards = [
  {
    icon: Users,
    title: 'Meet Our Staff',
    description: 'Discover the faces shaping health, training, and staffing excellence here.',
    link: '/about',
    linkText: 'View Team',
  },
  {
    icon: Calendar,
    title: 'Set an Appointment',
    description: 'Secure your future in health and excellence. Schedule an appointment!',
    link: '/contact',
    linkText: 'Book Now',
  },
  {
    icon: Send,
    title: 'Send Your Referrals',
    description: 'Empower connections. Send referrals for top-tier healthcare solutions.',
    link: '/contact',
    linkText: 'Send Referral',
  },
];

export function CTASection() {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium mb-4">
            You're Important to Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Let's Get Started
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Ready for care? Let's begin the journey to wellness and comfort. Your health is our priority.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <card.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl text-primary-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                {card.description}
              </p>
              <Link
                to={card.link}
                className="inline-flex items-center gap-2 text-accent font-medium text-sm group/link"
              >
                {card.linkText}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
