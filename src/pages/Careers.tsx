import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const positions = [
  {
    title: 'Registered Nurse (RN)',
    type: 'Full-Time',
    location: 'Maryland',
    description: 'Join our team of dedicated healthcare professionals providing compassionate care to patients in their homes.',
    requirements: ['Valid RN license', 'Minimum 2 years experience', 'BLS/CPR certification', 'Strong communication skills'],
  },
  {
    title: 'Licensed Practical Nurse (LPN)',
    type: 'Full-Time / Part-Time',
    location: 'Maryland',
    description: 'Provide nursing care under the supervision of registered nurses, ensuring patient comfort and safety.',
    requirements: ['Valid LPN license', 'Home health experience preferred', 'Current immunizations', 'Reliable transportation'],
  },
  {
    title: 'Certified Nursing Assistant (CNA)',
    type: 'Full-Time / Part-Time',
    location: 'Maryland',
    description: 'Assist patients with daily living activities and provide basic nursing care in home settings.',
    requirements: ['Valid CNA certification', 'Ability to lift patients', 'Background check clearance', 'Compassionate attitude'],
  },
  {
    title: 'Healthcare Trainer',
    type: 'Contract',
    location: 'Maryland',
    description: 'Deliver comprehensive healthcare training programs to DDA provider agencies and individuals.',
    requirements: ['Teaching certification', 'Healthcare background', 'Excellent presentation skills', 'Curriculum development experience'],
  },
];

const benefits = [
  'Competitive salary packages',
  'Flexible scheduling options',
  'Professional development opportunities',
  'Supportive work environment',
  'Health insurance benefits',
  'Paid time off',
];

export default function CareersPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 gradient-hero">
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            Careers
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Join our team of dedicated healthcare professionals and make a difference 
            in people's lives every day.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Why Join Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Build Your Career With Mo Heritage
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Mo Heritage Health Care Services, we believe our employees are our greatest asset. 
                We offer a supportive work environment where you can grow professionally while making 
                a meaningful impact on the lives of our patients and their families.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/30 p-10 rounded-2xl">
              <h3 className="font-serif text-2xl text-foreground mb-4">Ready to Apply?</h3>
              <p className="text-muted-foreground mb-6">
                Submit your resume and cover letter to our HR department. We'll review 
                your application and get back to you within 5 business days.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Open Positions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Current Job Openings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our available positions and find the right opportunity for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{position.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-medium text-foreground mb-3">Requirements:</p>
                  <ul className="space-y-2">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/contact">Apply for this Position</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
