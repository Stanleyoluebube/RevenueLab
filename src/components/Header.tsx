import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#about' },
  { label: 'Founders', href: '#founders' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setIsMobileMenuOpen(false);

      if (href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }
    },
    []
  );

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-black/80 backdrop-blur-sm border-b border-white/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 md:px-10 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg"
            aria-label="RevenueLab Academy Home"
          >
            <img
              src="/images/logo.jpg"
              alt="RevenueLab Academy logo"
              className="h-10 w-10 rounded-lg object-cover border border-white/10 group-hover:border-white/25 transition-colors duration-200"
            />
            <span className="font-serif text-xl sm:text-2xl text-white tracking-tight leading-none group-hover:text-white/90 transition-colors duration-200">
              RevenueLab Academy
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#purchase"
              onClick={(e) => handleNavClick(e, '#purchase')}
              className="rounded-full border border-white/15 bg-white/10 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition duration-200 inline-flex items-center justify-center whitespace-nowrap active:scale-95"
            >
              Enroll Now
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange transition duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden pt-28 px-6 pb-10 flex flex-col justify-between"
          >
            <nav
              className="flex flex-col items-center justify-center space-y-6 flex-1"
              aria-label="Mobile navigation links"
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.25 }}
                  className="font-serif text-3xl text-white/70 hover:text-white transition-colors duration-200 tracking-wide text-center"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * NAV_ITEMS.length, duration: 0.25 }}
                className="pt-6 w-full max-w-xs"
              >
                <a
                  href="#purchase"
                  onClick={(e) => handleNavClick(e, '#purchase')}
                  className="block text-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/20 transition duration-200"
                >
                  Enroll Now
                </a>
              </motion.div>
            </nav>

            <div className="text-center text-xs tracking-widest uppercase text-white/40 font-mono">
              RevenueLab Academy
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
