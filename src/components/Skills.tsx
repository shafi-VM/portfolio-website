import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Sparkles, Database, Wrench, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const icons = [Code2, Server, Sparkles, Database, Wrench, Cloud];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-light/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Title */}
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4 flex items-center gap-3">
              <span className="text-anthropic-coral font-mono text-xl">03.</span>
              Skills &amp; Technologies
              <span className="hidden sm:block h-px flex-1 bg-slate-dark/10 ml-4" />
            </h2>
            <p className="text-slate-dark/55 max-w-2xl">
              The tools I reach for when building backends, AI systems, and the infrastructure around them.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-slate-dark/10 bg-surface/80 p-6 transition-colors duration-300 hover:border-anthropic-coral/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-anthropic-coral/10 text-anthropic-coral transition-colors duration-300 group-hover:bg-anthropic-coral group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="font-semibold text-slate-dark">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2.5 py-1.5 rounded-md bg-slate-dark/5 text-slate-dark/70 transition-colors duration-200 hover:bg-anthropic-coral/10 hover:text-anthropic-coral"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
