import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import TechTree from './TechTree';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { bio } = portfolioData.personal;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-light/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Title */}
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4 flex items-center gap-3">
              <span className="text-anthropic-coral font-mono text-xl">01.</span>
              About Me
              <span className="hidden sm:block h-px flex-1 bg-slate-dark/10 ml-4" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-3 space-y-5 text-slate-dark/70 leading-relaxed text-[15px] sm:text-base"
            >
              {bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Animated Tech Tree */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-2 flex items-center justify-center"
            >
              <TechTree />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
