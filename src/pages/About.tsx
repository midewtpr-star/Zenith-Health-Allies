import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Heart, Award, Users, Target, Eye, Sparkles } from 'lucide-react';
import homeCareImage from '@/assets/home-care.jpg';
import nurseImage from '@/assets/nurse-portrait.jpg';
import trainingImage from '@/assets/training-class.jpg';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '1000+', label: 'Patients Served' },
  { value: '100+', label: 'Healthcare Professionals' },
  { value: '24/7', label: 'Support Available' },
];

const values = [
  { icon: Heart, title: 'Compassion', description: 'We treat every patient with genuine care, empathy, and respect for their dignity.' },
  { icon: Award, title: 'Excellence', description: 'We maintain the highest standards in healthcare delivery and professional development.' },
  { icon: Users, title: 'Teamwork', description: 'Our collaborative approach ensures comprehensive, coordinated care for every patient.' },
  { icon: Sparkles, title: 'Innovation', description: 'We embrace modern healthcare practices and continuous improvement.' },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section - Elegant, light */}
      <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-transparent to-accent/5" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-up">
              Our Story
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 opacity-0 animate-fade-up stagger-1">
              About Zenith Health Allies
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Caring for your loved ones with compassion, expertise, and an unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are - Split layout with overlapping elements */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <img
                  src={homeCareImage}
                  alt="Healthcare professional with patient"
                  className="rounded-3xl shadow-strong w-full h-[400px] lg:h-[550px] object-cover"
                />
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-card p-5 md:p-6 rounded-2xl shadow-medium border border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center">
                      <Award className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-foreground">10+</p>
                      <p className="text-sm text-muted-foreground">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background accent */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-secondary/50 rounded-3xl -z-10" />
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-6">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                A Heritage in Health Excellence
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  As a leading healthcare, training, and staffing services provider, Zenith Health 
                  Allies takes pride in delivering exceptional services tailored to our clients' unique needs.
                </p>
                <p>
                  Our team of dedicated healthcare professionals is committed to ensuring the well-being 
                  and comfort of your loved ones within the familiar surroundings of their homes, fostering 
                  independence and promoting holistic well-being.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary mb-2 group-hover:text-teal transition-colors">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Cards with icons */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Purpose
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-soft border border-border/50 group hover:shadow-medium transition-all">
              <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide personalized, reliable services that foster a legacy of 
                optimal health, dedicated to crafting a heritage of health excellence. Through 
                compassionate care, specialized training, and strategic staffing solutions, we 
                commit to enhancing the well-being of individuals and organizations alike.
              </p>
            </div>
            
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-soft border border-border/50 group hover:shadow-medium transition-all">
              <div className="w-16 h-16 gradient-warm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering lives through compassionate healthcare and expert training and staffing. 
                We envision a future where every individual receives personalized, reliable services 
                that contribute to a heritage of health excellence. Our commitment is to enhance 
                well-being, foster independence, and redefine the standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <img 
              src={nurseImage} 
              alt="Healthcare professional" 
              className="rounded-2xl h-64 md:h-80 w-full object-cover shadow-soft"
            />
            <img 
              src={trainingImage} 
              alt="Training class" 
              className="rounded-2xl h-64 md:h-80 w-full object-cover shadow-soft md:mt-8"
            />
            <img 
              src={homeCareImage} 
              alt="Home care" 
              className="rounded-2xl h-64 md:h-80 w-full object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-card p-6 md:p-8 rounded-2xl shadow-soft text-center group hover:shadow-medium transition-all border border-border/50"
              >
                <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Let us show you the Zenith Health Allies difference. Contact us today to discuss your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
