import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { experience } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
              <span className="text-anthropic-coral font-mono text-xl mr-2">02.</span>
              Where I’m Working
            </h2>
            <div className="h-px bg-slate-dark/10 max-w-xs"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Company Tabs */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 border-b-2 lg:border-b-0 lg:border-l-2 border-slate-dark/10">
              {experience.map((exp, index) => (
                <motion.button
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  onClick={() => setActiveIndex(index)}
                  className={`px-6 py-3 text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 font-mono text-sm ${
                    activeIndex === index
                      ? 'text-anthropic-coral border-b-2 lg:border-b-0 lg:border-l-2 border-anthropic-coral bg-anthropic-coral/5'
                      : 'text-slate-dark/60 hover:text-anthropic-coral hover:bg-anthropic-coral/5'
                  }`}
                >
                  {exp.company}
                </motion.button>
              ))}
            </div>

            {/* Experience Details */}
            <motion.div
              key={activeIndex}
              className="flex-1 min-h-[400px]"
            >
              <div className="space-y-4">
                {/* Role & Company - Waterfall animation starts after company tabs load */}
                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: isInView ? 0.5 : 0 }}
                  className="text-2xl font-bold text-slate-dark"
                >
                  {experience[activeIndex].role}
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: isInView ? 0.6 : 0.1 }}
                    className="text-anthropic-coral"
                  >
                    {' '}@ {experience[activeIndex].company}
                  </motion.span>
                </motion.h3>

                {/* Period & Location */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: isInView ? 0.7 : 0.2 }}
                  className="flex flex-wrap gap-4 text-sm text-slate-dark/60 font-mono"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{experience[activeIndex].period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{experience[activeIndex].location}</span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: isInView ? 0.8 : 0.3 }}
                  className="text-slate-dark/70 leading-relaxed pt-2"
                >
                  {experience[activeIndex].description}
                </motion.p>

                {/* Highlights */}
                {experience[activeIndex].highlights.length > 0 && (
                  <ul className="space-y-3 pt-4">
                    {experience[activeIndex].highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: isInView ? 0.9 + idx * 0.1 : 0.4 + idx * 0.1 }}
                        className="flex gap-3 text-slate-dark/70 leading-relaxed"
                      >
                        <span className="text-anthropic-coral mt-1 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
