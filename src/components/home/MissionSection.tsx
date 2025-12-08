import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Dedicated to crafting a heritage of health excellence. Through compassionate care, specialized training, and strategic staffing solutions, we commit to enhancing the well-being of individuals and organizations alike. We strive to be the cornerstone of excellence in the healthcare and staffing industry with a focus on professional growth and client satisfaction.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'Empowering lives through compassionate healthcare and expert training and staffing. We envision a future where every individual receives personalized, reliable services that contribute to a heritage of health excellence.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'We are committed to enhancing well-being, fostering independence, and redefining the standards of excellence in health services. Our core values center around compassion, integrity, and excellence.',
  },
];

export function MissionSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Commitment
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Mission Statement
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 group border border-border/50"
            >
              {/* Icon */}
              <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Number */}
              <div className="absolute top-6 right-6 font-serif text-6xl font-bold text-primary/5">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
