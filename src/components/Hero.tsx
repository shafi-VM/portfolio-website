import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ArrowDown, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const lineUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-28 overflow-hidden">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-anthropic-coral/15 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-anthropic-coral/10 blur-[120px]" />

      <div className="max-w-6xl w-full mx-auto relative">
        {/* Availability badge */}
        <motion.div
          custom={0}
          variants={lineUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-anthropic-coral/30 bg-anthropic-coral/5 px-3 py-1 font-mono text-xs text-anthropic-coral mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-anthropic-coral opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-anthropic-coral" />
          </span>
          Open to new opportunities
        </motion.div>

        {/* Greeting */}
        <motion.p custom={1} variants={lineUp} initial="hidden" animate="show" className="font-mono text-sm sm:text-base text-slate-dark/60 mb-4">
          Hi, I&apos;m <span className="text-anthropic-coral font-medium">{personal.name}</span> —
        </motion.p>

        {/* Giant editorial role */}
        <h1 className="font-display font-extrabold uppercase tracking-[-0.03em] leading-[0.86] text-slate-dark text-[clamp(2.75rem,10.5vw,9rem)]">
          <span className="sr-only">{personal.name} — Backend and AI Engineer. </span>
          <motion.span custom={2} variants={lineUp} initial="hidden" animate="show" className="block" aria-hidden="true">
            Backend &amp; <span className="text-anthropic-coral">AI</span>
          </motion.span>
          <motion.span custom={3} variants={lineUp} initial="hidden" animate="show" className="block" aria-hidden="true">
            Engineer
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.p
          custom={4}
          variants={lineUp}
          initial="hidden"
          animate="show"
          className="text-lg sm:text-xl text-slate-dark/60 max-w-2xl leading-relaxed text-balance mt-8"
        >
          {personal.tagline}
        </motion.p>

        {/* Location + socials */}
        <motion.div
          custom={5}
          variants={lineUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8"
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
        <motion.div custom={6} variants={lineUp} initial="hidden" animate="show" className="flex flex-wrap gap-4 mt-8">
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
      </div>
    </section>
  );
};

export default Hero;
