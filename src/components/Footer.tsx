import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-anthropic-coral text-white rounded-full shadow-lg hover:bg-anthropic-coral-light transition-colors duration-300"
            aria-label="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer id="footer" className="relative overflow-hidden border-t border-slate-dark/10 px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Tagline + socials */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <p className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-dark max-w-md leading-tight">
              Let&apos;s build something<span className="text-anthropic-coral"> solid.</span>
            </p>
            <div className="flex gap-7">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-slate-dark/60 hover:text-anthropic-coral transition-colors duration-300" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-dark/60 hover:text-anthropic-coral transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${personal.email}`} className="text-slate-dark/60 hover:text-anthropic-coral transition-colors duration-300" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Giant wordmark */}
          <div
            aria-hidden="true"
            className="mt-10 select-none whitespace-nowrap font-display font-extrabold uppercase tracking-[-0.04em] leading-[0.8] text-slate-dark/[0.08] text-[clamp(2rem,11.2vw,7.5rem)]"
          >
            {personal.name}
          </div>

          {/* Copyright */}
          <div className="mt-2 flex flex-col sm:flex-row justify-between gap-2 pt-6 border-t border-slate-dark/10 text-xs font-mono text-slate-dark/45">
            <span>© {currentYear} {personal.name}</span>
            <span>Designed &amp; built with React · TypeScript · Tailwind · Framer Motion</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
