import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowDown, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;
  const [isNameHovered, setIsNameHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-anthropic-coral/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-anthropic-coral/10 blur-[120px]"
      />

      <div className="max-w-4xl w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-7"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-anthropic-coral/30 bg-anthropic-coral/5 px-3 py-1 font-mono text-xs text-anthropic-coral"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-anthropic-coral opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-anthropic-coral" />
            </span>
            Open to new opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className="text-anthropic-coral font-mono text-sm sm:text-base"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.4, 0, 0.2, 1] }}
            className="relative inline-block"
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-dark tracking-tight cursor-pointer relative"
              onMouseEnter={() => setIsNameHovered(true)}
              onMouseLeave={() => setIsNameHovered(false)}
              animate={isNameHovered ? { y: [0, -8, -4, -6, -5], x: [0, -1, 1, -0.5, 0] } : { y: 0, x: 0 }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], times: [0, 0.3, 0.6, 0.8, 1] }}
            >
              <motion.div
                className="absolute -inset-2 bg-anthropic-coral/10 rounded-lg -z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={isNameHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              />
              {personal.name}
            </motion.h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient"
          >
            {personal.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl text-slate-dark/60 max-w-2xl leading-relaxed text-balance"
          >
            {personal.tagline}
          </motion.p>

          {/* Location + socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-2 text-slate-dark/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-5">
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
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.54, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap gap-4 pt-1"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3 bg-anthropic-coral text-white hover:bg-anthropic-coral-light transition-all duration-300 font-mono text-sm rounded shadow-lg shadow-anthropic-coral/20"
            >
              View my work
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 border border-slate-dark/20 text-slate-dark/80 hover:border-anthropic-coral hover:text-anthropic-coral transition-all duration-300 font-mono text-sm rounded"
            >
              <FileText className="w-4 h-4" />
              Résumé
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
