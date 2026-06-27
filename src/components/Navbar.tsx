import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about', number: '01' },
  { name: 'Experience', href: '#experience', number: '02' },
  { name: 'Skills', href: '#skills', number: '03' },
  { name: 'Projects', href: '#projects', number: '04' },
  { name: 'Open Source', href: '#open-source', number: '05' },
  { name: 'Contact', href: '#contact', number: '06' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { resumeUrl } = portfolioData.personal;

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      ticking = false;
      setIsScrolled(window.scrollY > 50);

      const footer = document.getElementById('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
          setActiveSection('contact');
          return;
        }
      }

      const sections = ['about', 'experience', 'skills', 'projects', 'open-source'];
      const threshold = 200;
      let current = '';
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > 0) current = section;
        }
      });
      setActiveSection(current);
    };

    // Throttle to one layout-read per animation frame to avoid scroll jank.
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-paper/85 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(0,0,0,0.25)] border-b border-slate-dark/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-slate-dark font-mono"
              aria-label="Home"
            >
              <span className="text-anthropic-coral">&lt;</span>
              SA
              <span className="text-anthropic-coral">/&gt;</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.5, delay: 0.08 * (index + 1) }}
                    className={`relative font-mono text-sm transition-colors duration-300 ${
                      isActive ? 'text-anthropic-coral' : 'text-slate-dark/70 hover:text-anthropic-coral'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -inset-2 bg-anthropic-coral/10 rounded -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="text-anthropic-coral text-xs">{link.number}. </span>
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-2 px-4 py-2 border border-anthropic-coral text-anthropic-coral hover:bg-anthropic-coral hover:text-white transition-all duration-300 font-mono text-sm rounded"
              >
                <FileText className="w-4 h-4" />
                Résumé
              </motion.a>
              <ThemeToggle />
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-dark p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-slate-dark/30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-64 bg-paper/95 backdrop-blur-lg shadow-xl border-l border-slate-dark/10">
              <div className="flex flex-col gap-6 p-8 pt-20">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="text-slate-dark hover:text-anthropic-coral transition-colors duration-300 font-mono"
                  >
                    <span className="text-anthropic-coral text-xs">{link.number}. </span>
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="inline-flex items-center justify-center gap-2 text-center px-4 py-2 border border-anthropic-coral text-anthropic-coral hover:bg-anthropic-coral hover:text-white transition-all duration-300 font-mono text-sm rounded"
                >
                  <FileText className="w-4 h-4" />
                  Résumé
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
