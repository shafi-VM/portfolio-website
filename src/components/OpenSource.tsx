import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitMerge, ExternalLink, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const OpenSource = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { openSource } = portfolioData;

  // All current contributions share one upstream repo — surface it once in the header.
  const primary = openSource[0];

  return (
    <section id="open-source" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-light/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4 flex items-center gap-3">
              <span className="text-anthropic-coral font-mono text-xl">05.</span>
              Open Source
              <span className="hidden sm:block h-px flex-1 bg-slate-dark/10 ml-4" />
            </h2>
            <p className="text-slate-dark/60 max-w-2xl leading-relaxed">
              I contribute fixes upstream to{' '}
              {primary && (
                <a
                  href={primary.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-anthropic-coral font-medium hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  {primary.repo}
                  {primary.stars && (
                    <span className="inline-flex items-center gap-0.5 font-mono text-xs text-slate-dark/50">
                      <Star className="w-3 h-3" />
                      {primary.stars}
                    </span>
                  )}
                </a>
              )}
              {' '}— a major open-source commerce platform. Three of my pull requests are merged into{' '}
              <code className="font-mono text-sm text-slate-dark/80">core-flows</code>,{' '}
              <code className="font-mono text-sm text-slate-dark/80">auth</code>, and{' '}
              <code className="font-mono text-sm text-slate-dark/80">promotion</code>.
            </p>
          </div>

          {/* PR list */}
          <div className="space-y-4">
            {openSource.map((pr, index) => (
              <motion.a
                key={pr.id}
                href={pr.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="group block rounded-2xl border border-slate-dark/10 bg-surface/80 p-5 sm:p-6 transition-all duration-300 hover:border-anthropic-coral/40 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <GitMerge className="h-5 w-5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-purple-600 dark:text-purple-400">
                        <GitMerge className="h-3 w-3" />
                        Merged
                      </span>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-anthropic-coral/10 text-anthropic-coral">
                        {pr.area}
                      </span>
                      <span className="font-mono text-xs text-slate-dark/45">#{pr.prNumber}</span>
                    </div>

                    <h3 className="font-semibold text-slate-dark leading-snug transition-colors duration-300 group-hover:text-anthropic-coral">
                      {pr.title}
                    </h3>
                    <p className="text-sm text-slate-dark/60 leading-relaxed mt-1.5">{pr.description}</p>
                  </div>

                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-slate-dark/35 transition-colors duration-300 group-hover:text-anthropic-coral" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
