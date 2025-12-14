import { Link } from 'react-router-dom';
import { Calendar, Send, Users, ArrowRight } from 'lucide-react';
import { ScrollAnimate } from '@/hooks/useScrollAnimation';

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
    <section className="py-20 md:py-28 bg-accent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimate className="text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-2 bg-accent-foreground/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
            You're Important to Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-accent-foreground mb-4">
            Let's Get Started
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
            Ready for care? Let's begin the journey to wellness and comfort. Your health is our priority.
          </p>
        </ScrollAnimate>

        {/* CTA Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {ctaCards.map((card, index) => (
            <ScrollAnimate key={index} delay={index * 100} animation="fade-up">
              <div className="bg-accent-foreground/10 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-accent-foreground/20 hover:bg-accent-foreground/15 transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-accent-foreground/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl text-accent-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-accent-foreground/70 text-sm leading-relaxed mb-5">
                  {card.description}
                </p>
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  {card.linkText}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
