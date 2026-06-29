import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';

const codeLines: { k: string; v: string; last?: boolean }[] = [
  { k: 'role', v: '"Backend & AI Engineer"' },
  { k: 'based', v: '"Hyderabad, India"' },
  { k: 'focus', v: '["multi-tenancy", "RAG", "distributed-systems"]' },
  { k: 'writes', v: '["Go", "Python", "TypeScript"]' },
  { k: 'shipping', v: '"QORRO — AI banking platform"' },
  { k: 'openSource', v: '"3 PRs merged → medusajs/medusa"' },
  { k: 'openTo', v: '"backend · AI roles"', last: true },
];

const CodeCard = () => (
  <div className="rounded-xl border border-slate-dark/10 bg-surface/90 overflow-hidden shadow-[0_20px_50px_-24px_rgba(0,0,0,0.4)]">
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-dark/10 bg-slate-dark/[0.03]">
      <span className="h-3 w-3 rounded-full" style={{ background: '#ff5f57' }} />
      <span className="h-3 w-3 rounded-full" style={{ background: '#febc2e' }} />
      <span className="h-3 w-3 rounded-full" style={{ background: '#28c840' }} />
      <span className="ml-2 font-mono text-xs text-slate-dark/50">shafi.ts</span>
    </div>
    {/* Code */}
    <div className="p-5 font-mono text-[12.5px] sm:text-[13px] leading-[1.9] overflow-x-auto">
      <div>
        <span className="text-anthropic-coral">const</span> <span className="text-slate-dark">shafi</span>
        <span className="text-slate-dark/40"> = </span>
        <span className="text-slate-dark/40">{'{'}</span>
      </div>
      {codeLines.map((line) => (
        <div key={line.k} className="pl-5 whitespace-nowrap">
          <span className="text-anthropic-coral">{line.k}</span>
          <span className="text-slate-dark/40">: </span>
          <span className="text-slate-dark/75">{line.v}</span>
          <span className="text-slate-dark/40">{line.last ? '' : ','}</span>
        </div>
      ))}
      <div>
        <span className="text-slate-dark/40">{'}'}</span>
        <span className="ml-1 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-anthropic-coral animate-pulse" />
      </div>
    </div>
  </div>
);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { bio } = portfolioData.personal;
  const { now } = portfolioData;
  const [lead, ...paragraphs] = bio;

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
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-slate-dark mb-4 flex items-center gap-3">
              <span className="text-anthropic-coral font-mono text-xl">01.</span>
              About Me
              <span className="hidden sm:block h-px flex-1 bg-slate-dark/10 ml-4" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Left — narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-3"
            >
              <p className="text-xl sm:text-2xl font-medium text-slate-dark leading-snug text-balance">
                {lead}
              </p>
              <div className="mt-6 space-y-4 text-slate-dark/65 leading-relaxed text-[15px] sm:text-base">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Currently */}
              <div className="mt-8">
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-anthropic-coral mb-3">
                  // currently
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {now.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-dark/70">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-anthropic-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right — code card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-2 lg:sticky lg:top-24"
            >
              <CodeCard />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
