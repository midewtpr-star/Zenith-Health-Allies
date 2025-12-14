import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Heart, Award, Users, Target, Eye, Sparkles } from 'lucide-react';
import { ScrollAnimate } from '@/hooks/useScrollAnimation';
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
      <Helmet>
        <title>About Zenith Health Allies | Heritage in Health Excellence</title>
        <meta name="description" content="Learn about Zenith Health Allies’ mission, vision, and values, delivering compassionate healthcare, training, and staffing services across Maryland." />
        <link rel="canonical" href="https://zenithhealthallies.org/about" />
      </Helmet>
      {/* Who We Are */}
      <section className="py-20 md:py-28 relative bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <ScrollAnimate animation="slide-left">
              <div className="relative">
                <img
                  src={homeCareImage}
                  alt="Healthcare professional with patient"
                  className="rounded-3xl shadow-strong w-full h-[400px] lg:h-[550px] object-cover"
                />
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-card p-5 md:p-6 rounded-2xl shadow-medium border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                      <Award className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-foreground">10+</p>
                      <p className="text-sm text-muted-foreground">Years of Excellence</p>
                    </div>
                  </div>
                </div>
                {/* Background accent */}
                <div className="absolute -top-8 -left-8 w-full h-full bg-secondary rounded-3xl -z-10" />
              </div>
            </ScrollAnimate>

            {/* Content Column */}
            <ScrollAnimate animation="slide-right" delay={150}>
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
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
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimate key={index} delay={index * 100} animation="scale">
                <div className="text-center group">
                  <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimate className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Purpose
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
              Mission & Vision
            </h2>
          </ScrollAnimate>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollAnimate delay={100}>
              <div className="bg-card p-8 md:p-10 rounded-3xl shadow-soft border border-border group hover:shadow-medium transition-all h-full">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
            </ScrollAnimate>
            
            <ScrollAnimate delay={200}>
              <div className="bg-card p-8 md:p-10 rounded-3xl shadow-soft border border-border group hover:shadow-medium transition-all h-full">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollAnimate>
              <img 
                src={nurseImage} 
                alt="Healthcare professional" 
                className="rounded-2xl h-64 md:h-80 w-full object-cover shadow-soft"
              />
            </ScrollAnimate>
            <ScrollAnimate delay={100}>
              <img 
                src={trainingImage} 
                alt="Training class" 
                className="rounded-2xl h-64 md:h-80 w-full object-cover shadow-soft md:mt-8"
              />
            </ScrollAnimate>
            <ScrollAnimate delay={200}>
              <img 
                src={homeCareImage} 
                alt="Home care" 
                className="rounded-2xl h-64 md:h-80 w-full object-cover shadow-soft"
              />
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimate className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </ScrollAnimate>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft text-center group hover:shadow-medium transition-all border border-border h-full">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimate>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-accent-foreground mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Let us show you the Zenith Health Allies difference. Contact us today to discuss your healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-primary-foreground text-accent hover:bg-primary-foreground/90" asChild>
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button variant="glass" size="lg" className="text-accent-foreground border-accent-foreground/30" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </Layout>
  );
}
