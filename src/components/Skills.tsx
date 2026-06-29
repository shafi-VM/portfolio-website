import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Webhook, ShieldCheck, Server, Database, Sparkles, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const layerIcons = [Webhook, ShieldCheck, Server, Database, Sparkles, Cloud];

const Chip = ({ label }: { label: string }) => (
  <span className="font-mono text-xs px-2.5 py-1.5 rounded-md bg-slate-dark/5 text-slate-dark/70 transition-colors duration-200 hover:bg-anthropic-coral/10 hover:text-anthropic-coral">
    {label}
  </span>
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();
  const { stack, languages } = portfolioData;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-light/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Title */}
          <div className="mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-slate-dark mb-4 flex items-center gap-3">
              <span className="text-anthropic-coral font-mono text-xl">03.</span>
              Skills &amp; Technologies
              <span className="hidden sm:block h-px flex-1 bg-slate-dark/10 ml-4" />
            </h2>
            <p className="text-slate-dark/55 max-w-2xl">
              The way I build — each layer of a system, traced the way a request actually flows through it,
              and the tools I reach for in each.
            </p>
          </div>

          {/* Pipeline */}
          <div className="relative">
            {/* Rail */}
            <div className="absolute left-[17px] sm:left-[19px] top-3 bottom-3 w-px bg-slate-dark/15" aria-hidden />
            {/* Flowing dot */}
            {isInView && !reduceMotion && (
              <motion.div
                aria-hidden
                className="absolute left-[13px] sm:left-[15px] h-2.5 w-2.5 rounded-full bg-anthropic-coral shadow-[0_0_14px_3px_rgba(217,119,87,0.7)]"
                initial={{ top: '0%' }}
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
              />
            )}

            {stack.map((layer, i) => {
              const Icon = layerIcons[i % layerIcons.length];
              return (
                <motion.div
                  key={layer.layer}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  className="group relative grid grid-cols-[2.25rem_1fr] sm:grid-cols-[2.5rem_1fr] gap-4 sm:gap-7 pb-9 last:pb-0"
                >
                  {/* Node */}
                  <div className="relative z-10 flex justify-center">
                    <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-anthropic-coral/40 bg-paper font-mono text-[11px] font-bold text-anthropic-coral transition-colors duration-300 group-hover:bg-anthropic-coral group-hover:text-white group-hover:border-anthropic-coral">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <Icon className="h-4 w-4 text-anthropic-coral" />
                      <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-dark">
                        {layer.layer}
                      </h3>
                      <span className="font-mono text-xs text-slate-dark/45">{layer.note}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <Chip key={item} label={item} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Languages — the foundation under it all */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5, delay: 0.1 + stack.length * 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-7 rounded-2xl border border-slate-dark/10 bg-surface/70 p-5"
          >
            <div className="flex items-center gap-2.5 sm:w-[7.5rem] flex-shrink-0">
              <span className="font-mono text-xs text-anthropic-coral">{'</>'}</span>
              <span className="font-display text-base font-bold uppercase tracking-tight text-slate-dark">Languages</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Chip key={lang} label={lang} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
