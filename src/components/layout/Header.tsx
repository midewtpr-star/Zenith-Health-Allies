import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
      <div className="bg-accent text-accent-foreground py-1.5 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:240-278-1871" className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span>(240) 278-1871</span>
            </a>
            <a href="mailto:hello@zenithallies.com" className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <span>hello@zenithallies.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-500',
          scrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg py-2' : 'bg-background py-2'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="Zenith Health Allies" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="hidden sm:block">
                <span className="font-serif text-lg md:text-xl text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                  Zenith Health Allies
                </span>
                <p className="text-xs text-muted-foreground">Nursing and Staffing Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300',
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden xl:flex items-center gap-4">
              <Button variant="default" size="default" className="group" asChild>
                <Link to="/contact">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2.5 rounded-lg hover:bg-muted transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={cn(
                  "absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300",
                  isOpen ? "top-2 rotate-45" : "top-0"
                )} />
                <span className={cn(
                  "absolute left-0 top-2 w-6 h-0.5 bg-foreground transition-all duration-300",
                  isOpen ? "opacity-0" : "opacity-100"
                )} />
                <span className={cn(
                  "absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300",
                  isOpen ? "top-2 -rotate-45" : "top-4"
                )} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="xl:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          'xl:hidden fixed left-0 right-0 bg-background border-t border-border shadow-xl z-50 transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[calc(100vh-7rem)] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        )}
        style={{ 
          top: scrolled ? '3.5rem' : '7rem'
        }}
      >
        <nav className="px-4 py-6 flex flex-col gap-2 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300',
                location.pathname === link.path
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
              style={{ 
                transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(-10px)'
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-6 pt-6 border-t border-border">
            <Button variant="default" className="w-full" size="lg" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get Started
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
          
          {/* Mobile Contact Info */}
          <div className="mt-8 pt-6 border-t border-border space-y-4">
            <a href="tel:240-278-1871" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span>(240) 278-1871</span>
            </a>
            <a href="mailto:hello@zenithallies.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="break-all">hello@zenithallies.com</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}