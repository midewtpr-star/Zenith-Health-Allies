import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Download, BookOpen, Video, HelpCircle } from 'lucide-react';
import { ScrollAnimate } from '@/hooks/useScrollAnimation';

const resources = [
  {
    icon: FileText,
    title: 'Patient Care Guides',
    description: 'Comprehensive guides for patients and families on various healthcare topics.',
    items: ['Home Care Best Practices', 'Medication Management', 'Fall Prevention Tips', 'Nutrition Guidelines'],
  },
  {
    icon: BookOpen,
    title: 'Training Materials',
    description: 'Educational resources for healthcare professionals and caregivers.',
    items: ['CPR Certification Guide', 'First Aid Procedures', 'Infection Control', 'Patient Safety Protocols'],
  },
  {
    icon: Video,
    title: 'Educational Videos',
    description: 'Video tutorials and demonstrations on healthcare procedures and best practices.',
    items: ['Proper Hand Hygiene', 'Patient Transfer Techniques', 'Emergency Response', 'Communication Skills'],
  },
];

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We provide healthcare services throughout all areas of Maryland. Contact us to confirm service availability in your specific location.',
  },
  {
    question: 'How do I request services?',
    answer: 'You can request services by calling us at (240) 278-1871 or (240) 610-1390, emailing hello@moheritagecares.com, or filling out our contact form.',
  },
  {
    question: 'What types of insurance do you accept?',
    answer: 'We work with various insurance providers and can help you understand your coverage options. Contact us for specific insurance inquiries.',
  },
  {
    question: 'How are your healthcare professionals vetted?',
    answer: 'All our healthcare professionals undergo thorough background checks, credential verification, and continuous training to ensure the highest quality of care.',
  },
];

export default function ResourcesPage() {
  return (
    <Layout>
      {/* Resources Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimate className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Helpful Materials
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4">
              Healthcare Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
              Browse our collection of resources designed to help you and your loved ones.
            </p>
          </ScrollAnimate>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {resources.map((resource, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="bg-card p-5 md:p-8 rounded-2xl shadow-soft border border-border/50">
                  <div className="w-12 h-12 md:w-14 md:h-14 gradient-hero rounded-xl flex items-center justify-center mb-4 md:mb-6">
                    <resource.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-foreground mb-2 md:mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">{resource.description}</p>
                  <ul className="space-y-2 md:space-y-3">
                    {resource.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="flex items-center gap-2 text-xs md:text-sm text-foreground hover:text-primary transition-colors group"
                        >
                          <Download className="w-3 h-3 md:w-4 md:h-4 opacity-50 group-hover:opacity-100" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollAnimate className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <HelpCircle className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-2" />
              FAQ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
          </ScrollAnimate>

          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="bg-card p-4 md:p-6 rounded-xl shadow-soft">
                  <h3 className="font-medium text-foreground mb-2 md:mb-3 text-sm md:text-base">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{faq.answer}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <ScrollAnimate className="text-center mt-8 md:mt-12">
            <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">Still have questions?</p>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </ScrollAnimate>
        </div>
      </section>
    </Layout>
  );
}
