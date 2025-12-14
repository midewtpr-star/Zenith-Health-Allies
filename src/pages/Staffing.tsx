import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Building2, CheckCircle, Clock, Shield, Heart, ArrowRight, GraduationCap, BookOpen, Award, ExternalLink } from 'lucide-react';
import nurseImage from '@/assets/nurse-portrait.jpg';
import trainingImage from '@/assets/training-class.jpg';
import { ScrollAnimate } from '@/hooks/useScrollAnimation';

const trainingPrograms = [
  {
    title: 'Home Health Aide (HHA)',
    description: 'Comprehensive training for entry-level healthcare professionals providing in-home care.',
    duration: '75 Hours',
    certification: 'State Certified',
  },
  {
    title: 'Certified Nursing Assistant (CNA)',
    description: 'Prepare for a rewarding career assisting patients with daily activities and basic care.',
    duration: '120 Hours',
    certification: 'State Certified',
  },
  {
    title: 'CPR & First Aid',
    description: 'Life-saving skills certification for healthcare and non-healthcare professionals.',
    duration: '8 Hours',
    certification: 'AHA Certified',
  },
  {
    title: 'Medication Technician',
    description: 'Learn proper medication administration techniques and safety protocols.',
    duration: '16 Hours',
    certification: 'State Certified',
  },
];

const benefits = [
  { icon: GraduationCap, title: 'Expert Instructors', description: 'Learn from experienced healthcare professionals.' },
  { icon: BookOpen, title: 'Flexible Schedules', description: 'Day, evening, and weekend classes available.' },
  { icon: Award, title: 'Recognized Certifications', description: 'State-approved training programs.' },
  { icon: Users, title: 'Job Placement Support', description: 'Career assistance after graduation.' },
];

const staffingTypes = [
  {
    title: 'Temporary Staffing',
    description: 'Short-term healthcare professionals to cover immediate needs, vacations, or leaves of absence.',
  },
  {
    title: 'Permanent Placement',
    description: 'Find the perfect long-term addition to your healthcare team with our comprehensive matching process.',
  },
  {
    title: 'Contract Staffing',
    description: 'Flexible contract arrangements for project-based needs or seasonal demands.',
  },
  {
    title: 'Travel Nursing',
    description: 'Experienced nurses available for travel assignments throughout Maryland.',
  },
];

export default function StaffingPage() {
  return (
    <Layout>
      {/* Hero Section - Training Focused */}
      <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-accent/5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimate animation="slide-left">
              <div>
              <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-up">
                Healthcare Training & Staffing
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight opacity-0 animate-fade-up stagger-1">
                Launch Your Healthcare Career
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 opacity-0 animate-fade-up stagger-2">
                Whether you're starting your journey in healthcare or looking to advance your skills, 
                our comprehensive training programs and certification courses will prepare you for success.
              </p>
              
              {/* Primary CTA - LMS Link */}
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up stagger-3">
                <Button variant="default" size="lg" className="group" asChild>
                  <a href="https://www.zenithmastery.org/" target="_blank" rel="noopener noreferrer">
                    Start Learning Now
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Request Info</Link>
                </Button>
              </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="slide-right">
              <div className="relative">
              <img
                src={trainingImage}
                alt="Healthcare training class"
                className="rounded-3xl shadow-strong w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-medium">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-serif text-xl text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Graduates</p>
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Training Programs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Certification Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              State-approved training programs designed to launch your healthcare career
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trainingPrograms.map((program, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/50 group hover:shadow-medium transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal/10 text-teal rounded-full text-xs font-medium">
                    {program.duration}
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    {program.certification}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.description}</p>
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto" asChild>
                  <a href="https://lms.example.com" target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
              </ScrollAnimate>
            ))}
          </div>

          {/* CTA Banner */}
          <ScrollAnimate>
            <div className="bg-primary p-8 md:p-12 rounded-3xl text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-4">
              Ready to Start Your Healthcare Journey?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Access our complete course catalog, register for classes, and track your progress on our Learning Management System.
            </p>
            <Button variant="accent" size="lg" className="group" asChild>
              <a href="https://www.zenithmastery.org/" target="_blank" rel="noopener noreferrer">
                Access Training Portal
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              The Zenith Advantage
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div key={index} className="bg-card p-6 md:p-8 rounded-2xl shadow-soft text-center group hover:shadow-medium transition-all">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform bg-primary/10 text-primary">
                  <benefit.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base md:text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Staffing Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimate animation="slide-left">
              <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                For Healthcare Facilities
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Healthcare Staffing Solutions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Zenith Health Allies, we understand the challenges healthcare 
                facilities face in maintaining adequate staffing levels. Our comprehensive 
                staffing solutions connect you with qualified, compassionate healthcare 
                professionals who are ready to make a difference.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {staffingTypes.map((type, index) => (
                  <div key={index} className="p-4 bg-secondary/50 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">{type.title}</h4>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>
              
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Request Staffing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            </ScrollAnimate>
            
            <ScrollAnimate animation="slide-right">
              <div className="grid grid-cols-2 gap-4">
              <img src={nurseImage} alt="Nurse" className="rounded-2xl shadow-medium h-64 sm:h-72 md:h-80 object-cover w-full" />
              <img src={trainingImage} alt="Healthcare" className="rounded-2xl shadow-medium h-64 sm:h-72 md:h-80 object-cover mt-8 w-full" />
            </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-medium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimate animation="slide-left">
                <div>
                <div className="w-16 h-16 gradient-warm rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Partner With Us</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Whether you're a healthcare facility looking for qualified staff or an individual 
                  seeking to build your healthcare career, we're here to help.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Quick turnaround on staffing requests',
                    'Credential verification and compliance',
                    'Flexible contract terms',
                    'Dedicated account management',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                 </div>
                 </ScrollAnimate>
               
               <ScrollAnimate animation="slide-right">
                 <div className="bg-secondary/50 p-6 md:p-8 rounded-2xl">
                <h3 className="font-serif text-xl text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to learn more? Contact us for information about our training programs 
                  or staffing services.
                </p>
                <div className="space-y-4">
                  <a href="tel:+12402781871" className="block p-4 bg-card rounded-xl hover:shadow-soft transition-shadow">
                    <p className="text-sm text-muted-foreground">Call us directly</p>
                    <p className="text-lg font-medium text-primary">(240) 278-1871</p>
                  </a>
                  <a href="mailto:hello@moheritagecares.com" className="block p-4 bg-card rounded-xl hover:shadow-soft transition-shadow">
                    <p className="text-sm text-muted-foreground">Email us</p>
                    <p className="text-lg font-medium text-primary break-all">hello@moheritagecares.com</p>
                  </a>
                </div>
              </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>
    
    </Layout>
  );
}
