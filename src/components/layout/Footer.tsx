import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
  ],
  services: [
    { name: 'Nursing Services', path: '/services' },
    { name: 'Training Classes', path: '/services' },
    { name: 'Healthcare Staffing', path: '/staffing' },
    { name: 'Resources', path: '/resources' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">MH</span>
              </div>
              <div>
                <span className="font-serif text-xl">Mo Heritage</span>
                <p className="text-xs text-background/60">Health Care Services</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Dedicated to crafting a heritage of health excellence. Through compassionate care, 
              specialized training, and strategic staffing solutions.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Site Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:240-278-1871" className="flex items-start gap-3 text-background/70 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 text-accent" />
                  <span className="text-sm">240-278-1871</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@moheritagecares.com" className="flex items-start gap-3 text-background/70 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 text-accent" />
                  <span className="text-sm">hello@moheritagecares.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                  <span className="text-sm">7007 Sequoia Place, Beltsville, MD 20705</span>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-background/5 rounded-xl">
              <p className="text-sm text-background/60">Service Areas</p>
              <p className="text-accent font-medium">All Areas in MD</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© Copyright 2024 - 2025 Mo Heritage Health Care Services</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Notice</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
