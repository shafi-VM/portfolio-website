import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;
  const [isNameHovered, setIsNameHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-anthropic-coral font-mono text-sm sm:text-base mb-4">
              Hi, my name is
            </p>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative inline-block"
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-dark tracking-tight cursor-pointer relative"
              onMouseEnter={() => setIsNameHovered(true)}
              onMouseLeave={() => setIsNameHovered(false)}
              animate={isNameHovered ? {
                y: [0, -8, -4, -6, -5],
                x: [0, -1, 1, -0.5, 0],
              } : {
                y: 0,
                x: 0,
              }}
              transition={{
                duration: 1.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.3, 0.6, 0.8, 1]
              }}
            >
              {/* Background highlight */}
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-dark/70"
          >
            {personal.title}
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl text-slate-dark/60 max-w-2xl leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-2 text-slate-dark/60"
          >
            <MapPin className="w-4 h-4" />
            <span>{personal.location}</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex gap-6 pt-4"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-dark/60 hover:text-anthropic-coral transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-dark/60 hover:text-anthropic-coral transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-dark/60 hover:text-anthropic-coral transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="pt-4"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-anthropic-coral text-anthropic-coral hover:bg-anthropic-coral hover:text-white transition-all duration-300 font-mono text-sm rounded"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
