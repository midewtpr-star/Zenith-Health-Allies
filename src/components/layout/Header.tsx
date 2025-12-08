import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Careers', path: '/careers' },
  { name: 'Resources', path: '/resources' },
  { name: 'Healthcare Staffing', path: '/staffing' },
  { name: 'Contact Us', path: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:240-278-1871" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>240-278-1871</span>
            </a>
            <a href="mailto:hello@moheritagecares.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>hello@moheritagecares.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80">Serving All Areas in MD</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-background'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">MH</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-serif text-xl text-foreground">Mo Heritage</span>
                <p className="text-xs text-muted-foreground">Health Care Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-medium transition-all duration-300 overflow-hidden',
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" className="mt-4" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}
