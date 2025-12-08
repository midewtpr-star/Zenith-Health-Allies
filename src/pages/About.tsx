import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Heart, Award, Users } from 'lucide-react';
import homeCareImage from '@/assets/home-care.jpg';
import nurseImage from '@/assets/nurse-portrait.jpg';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '1000+', label: 'Patients Served' },
  { value: '100+', label: 'Healthcare Professionals' },
  { value: '24/7', label: 'Support Available' },
];

const values = [
  { icon: Heart, title: 'Compassion', description: 'We treat every patient with genuine care and empathy.' },
  { icon: Award, title: 'Excellence', description: 'We maintain the highest standards in healthcare delivery.' },
  { icon: Users, title: 'Teamwork', description: 'Our collaborative approach ensures comprehensive care.' },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 gradient-hero">
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 md:mb-6">
            About Us
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto px-4">
            Caring for your loved ones with compassion and expertise.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                Who We Are
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 md:mb-6">
                A Heritage in Health Excellence
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                As a leading healthcare, training, and staffing services provider, Mo Heritage 
                Health Care Services takes pride in delivering exceptional services tailored to 
                our clients' unique needs. Our team of dedicated healthcare professionals is 
                committed to ensuring the well-being and comfort of your loved ones within the 
                familiar surroundings of their homes.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                With a focus on enhancing the overall quality of life for our clients, we strive 
                to create a nurturing environment that fosters independence and promotes holistic 
                well-being.
              </p>
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src={homeCareImage}
                alt="Healthcare professional with patient"
                className="rounded-2xl shadow-medium w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 left-4 sm:-bottom-8 sm:-left-8 bg-card p-4 md:p-6 rounded-xl md:rounded-2xl shadow-medium">
                <div className="flex items-center gap-3 md:gap-4">
                  <img src={nurseImage} alt="Nurse" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover" />
                  <div>
                    <p className="font-serif text-base md:text-lg text-foreground">Expert Team</p>
                    <p className="text-xs md:text-sm text-muted-foreground">100+ Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary mb-1 md:mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-card p-6 md:p-10 rounded-2xl shadow-soft border border-border/50">
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 md:mb-6">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Our mission is to provide personalized, reliable services that foster a legacy of 
                optimal health, dedicated to crafting a heritage of health excellence. Through 
                compassionate care, specialized training, and strategic staffing solutions, we 
                commit to enhancing the well-being of individuals and organizations alike.
              </p>
            </div>
            <div className="bg-card p-6 md:p-10 rounded-2xl shadow-soft border border-border/50">
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 md:mb-6">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Empowering lives through compassionate healthcare and expert training and staffing. 
                We envision a future where every individual receives personalized, reliable services 
                that contribute to a heritage of health excellence. Our commitment is to enhance 
                well-being, foster independence, and redefine the standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 md:p-8 rounded-2xl shadow-soft text-center group hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 md:w-16 md:h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-2 md:mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
