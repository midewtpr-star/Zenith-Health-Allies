import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { submitToSheets } from '@/lib/forms';

const contactInfo = [
  { icon: Phone, label: 'Main Phone', value: '(240) 278-1871', href: 'tel:240-278-1871' },
{ icon: Phone, label: 'Secondary Phone', value: '(240) 610-1390', href: 'tel:240-610-1390' },
{ icon: Mail, label: 'Email', value: 'hello@moheritagecares.com', href: 'mailto:hello@moheritagecares.com' },
{ icon: MapPin, label: 'Office', value: '10005 Columbia Rd, suite L-261 Maryland, 21046' },
  { icon: Clock, label: 'Hours', value: 'Monday - Friday: 9AM - 5PM' },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    const result = await submitToSheets('contact', payload);

    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    } else {
      toast({
        title: 'Submission Failed',
        description: result.message || 'Please try again later.',
        variant: 'destructive',
      });
    }

    setIsLoading(false);
  };
if (response.ok) {

  // Fire GTM event
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "contact_form_success" });

  toast.success("Message Sent! We'll get back to you within 24 hours.");
}
  return (
    <Layout>
      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Info */}
            <div>
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                Get in Touch
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 md:mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                Home-like health care. Connect for expert guidance. Drop a message 
                for personalized assistance. Our team is ready to help you with 
                all your healthcare needs.
              </p>

              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 md:w-12 md:h-12 gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors text-sm md:text-base break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-sm md:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-10 p-4 md:p-6 gradient-hero rounded-2xl">
                <h3 className="font-serif text-lg md:text-xl text-primary-foreground mb-2">Service Areas</h3>
                <p className="text-primary-foreground/80 text-sm md:text-base">
                  We proudly serve all areas in Maryland. Contact us to learn more 
                  about our services in your area.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-medium p-5 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 md:mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" name="firstName" required placeholder="John" className="h-11 md:h-12" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" name="lastName" required placeholder="Doe" className="h-11 md:h-12" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="john@example.com" className="h-11 md:h-12" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" type="tel" placeholder="(240) 000-0000" className="h-11 md:h-12" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input id="subject" name="subject" required placeholder="How can we help?" className="h-11 md:h-12" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea id="message" name="message" required placeholder="Tell us more about your needs..." rows={4} />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  By submitting this form you agree to our Privacy Policy
                </p>
                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
