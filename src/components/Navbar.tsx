import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if footer is visible in viewport
      const footer = document.getElementById('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // If any part of footer is visible in viewport, highlight contact
        if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
          setActiveSection('contact');
          return;
        }
      }

      // Detect active section
      const sections = ['about', 'experience', 'skills', 'projects'];
      let current = '';

      // Get all section positions (excluding contact, handled by footer check above)
      const sectionPositions: Array<{id: string, top: number, bottom: number}> = [];

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          sectionPositions.push({
            id: section,
            top: rect.top,
            bottom: rect.bottom
          });
        }
      });

      // Find the section that is currently most in view
      // A section is "active" when its top is in the upper portion of viewport
      const threshold = 200; // pixels from top

      for (const sectionPos of sectionPositions) {
        if (sectionPos.top <= threshold && sectionPos.bottom > 0) {
          current = sectionPos.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', number: '01' },
    { name: 'Experience', href: '#experience', number: '02' },
    { name: 'Skills', href: '#skills', number: '03' },
    { name: 'Projects', href: '#projects', number: '04' },
    { name: 'Contact', href: '#contact', number: '05' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/50 backdrop-blur-xl shadow-lg border-b border-white/20'
            : 'bg-transparent'
        }`}
        style={isScrolled ? {
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-slate-dark font-mono"
            >
              <span className="text-anthropic-coral">&lt;</span>
              SA
              <span className="text-anthropic-coral">/&gt;</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: isActive ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    className={`relative font-mono text-sm transition-colors duration-300 ${
                      isActive
                        ? 'text-anthropic-coral'
                        : 'text-slate-dark/70 hover:text-anthropic-coral'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -inset-2 bg-anthropic-coral/10 rounded -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="text-anthropic-coral text-xs">{link.number}. </span>
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.a
                href="https://drive.google.com/file/d/1X8FwploIrOhO3FPAqwJas8J_ms5CElw0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="px-4 py-2 border border-anthropic-coral text-anthropic-coral hover:bg-anthropic-coral hover:text-white transition-all duration-300 font-mono text-sm rounded"
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-dark p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            <div
              className="absolute inset-0 bg-slate-dark/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-64 bg-white/80 backdrop-blur-lg shadow-xl">
              <div className="flex flex-col gap-6 p-8 pt-20">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-slate-dark hover:text-anthropic-coral transition-colors duration-300 font-mono"
                  >
                    <span className="text-anthropic-coral text-xs">{link.number}. </span>
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="https://drive.google.com/file/d/1X8FwploIrOhO3FPAqwJas8J_ms5CElw0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="inline-block text-center px-4 py-2 border border-anthropic-coral text-anthropic-coral hover:bg-anthropic-coral hover:text-white transition-all duration-300 font-mono text-sm rounded"
                >
                  Resume
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
