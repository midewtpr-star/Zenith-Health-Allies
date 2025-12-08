import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

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
      <section className="relative py-16 md:py-24 gradient-hero">
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 md:mb-6">
            Careers
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto px-4">
            Join our team of dedicated healthcare professionals and make a difference 
            in people's lives every day.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                Why Join Us
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 md:mb-6">
                Build Your Career With Mo Heritage
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                At Mo Heritage Health Care Services, we believe our employees are our greatest asset. 
                We offer a supportive work environment where you can grow professionally while making 
                a meaningful impact on the lives of our patients and their families.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/30 p-6 md:p-10 rounded-2xl">
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 md:mb-4">Ready to Apply?</h3>
              <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                Submit your resume and cover letter to our HR department. We'll review 
                your application and get back to you within 5 business days.
              </p>
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
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
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Open Positions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4">
              Current Job Openings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
              Explore our available positions and find the right opportunity for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-card p-5 md:p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 md:mb-4">
                  <div>
                    <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      <span className="inline-flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                        <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
                        {position.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">{position.description}</p>
                <div className="mb-4 md:mb-6">
                  <p className="text-sm font-medium text-foreground mb-2 md:mb-3">Requirements:</p>
                  <ul className="space-y-1 md:space-y-2">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
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
