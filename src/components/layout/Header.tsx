import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4 lg:gap-6">
            <a href="tel:240-278-1871" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">240-278-1871</span>
            </a>
            <a href="mailto:hello@zenithallies.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden lg:inline">hello@zenithallies.com</span>
              <span className="lg:hidden">Email Us</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80 text-xs lg:text-sm">Serving All Areas in MD</span>
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
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img src={logo} alt="Zenith Health Allies" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <div className="hidden xs:block">
                <span className="font-serif text-lg md:text-xl text-primary font-semibold">Zenith Health Allies</span>
                <p className="text-xs text-muted-foreground hidden sm:block">Nursing and Staffing Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    location.pathname === link.path
                      ? 'bg-secondary/20 text-secondary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden xl:flex items-center gap-4">
              <Button variant="hero" size="default" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'xl:hidden fixed inset-x-0 top-[64px] md:top-[80px] bottom-0 bg-background z-40 transition-all duration-300',
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2 h-full overflow-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                  location.pathname === link.path
                    ? 'bg-secondary/20 text-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Button variant="hero" className="w-full" size="lg" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
            
            {/* Mobile Contact Info */}
            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <a href="tel:240-278-1871" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors">
                <Phone className="w-5 h-5" />
                <span>240-278-1871</span>
              </a>
              <a href="mailto:hello@zenithallies.com" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="break-all">hello@zenithallies.com</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
