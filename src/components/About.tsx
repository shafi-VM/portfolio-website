import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

type Tok = { t: string; c: 'kw' | 'id' | 'p' | 'key' | 'str' };

const cls: Record<Tok['c'], string> = {
  kw: 'text-anthropic-coral',
  id: 'text-slate-dark',
  p: 'text-slate-dark/40',
  key: 'text-anthropic-coral',
  str: 'text-slate-dark/70',
};

// The profile, as source code (kept short so nothing overflows the card).
const lines: Tok[][] = [
  [{ t: 'const', c: 'kw' }, { t: ' shafi', c: 'id' }, { t: ' = ', c: 'p' }, { t: '{', c: 'p' }],
  [{ t: '  role', c: 'key' }, { t: ': ', c: 'p' }, { t: '"Backend & AI Engineer"', c: 'str' }, { t: ',', c: 'p' }],
  [{ t: '  based', c: 'key' }, { t: ': ', c: 'p' }, { t: '"Hyderabad, India"', c: 'str' }, { t: ',', c: 'p' }],
  [{ t: '  focus', c: 'key' }, { t: ': ', c: 'p' }, { t: '["multi-tenancy", "RAG", "systems"]', c: 'str' }, { t: ',', c: 'p' }],
  [{ t: '  writes', c: 'key' }, { t: ': ', c: 'p' }, { t: '["Go", "Python", "TypeScript"]', c: 'str' }, { t: ',', c: 'p' }],
  [{ t: '  shipping', c: 'key' }, { t: ': ', c: 'p' }, { t: '"QORRO — AI banking platform"', c: 'str' }, { t: ',', c: 'p' }],
  [{ t: '  openSource', c: 'key' }, { t: ': ', c: 'p' }, { t: '"3 PRs → medusajs/medusa"', c: 'str' }, { t: ',', c: 'p' }],
  [{ t: '  openTo', c: 'key' }, { t: ': ', c: 'p' }, { t: '"backend · AI roles"', c: 'str' }],
  [{ t: '}', c: 'p' }],
];

const lineLens = lines.map((line) => line.reduce((a, t) => a + t.t.length, 0));
const cumStart: number[] = [];
{
  let acc = 0;
  lineLens.forEach((len, i) => {
    cumStart[i] = acc;
    acc += len + 1; // + newline
  });
}
const TOTAL = cumStart[cumStart.length - 1] + lineLens[lineLens.length - 1] + 1;

const Cursor = () => (
  <span className="ml-[1px] inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-anthropic-coral align-middle animate-pulse" />
);

const TypedCode = ({ start }: { start: boolean }) => {
  const reduce = useReducedMotion();
  const [n, setN] = useState(() => (reduce ? TOTAL : 0));

  useEffect(() => {
    if (!start || reduce) return;
    const id = setInterval(() => {
      setN((prev) => {
        const next = prev + 2;
        if (next >= TOTAL) clearInterval(id);
        return Math.min(next, TOTAL);
      });
    }, 20);
    return () => clearInterval(id);
  }, [start, reduce]);

  const done = n >= TOTAL;

  return (
    <div className="rounded-xl border border-slate-dark/10 bg-surface/90 overflow-hidden shadow-[0_20px_50px_-24px_rgba(0,0,0,0.4)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-dark/10 bg-slate-dark/[0.03]">
        <span className="h-3 w-3 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="h-3 w-3 rounded-full" style={{ background: '#febc2e' }} />
        <span className="h-3 w-3 rounded-full" style={{ background: '#28c840' }} />
        <span className="ml-2 font-mono text-xs text-slate-dark/50">shafi.ts</span>
      </div>
      {/* Code */}
      <div className="p-5 font-mono text-xs leading-[1.9]">
        {lines.map((line, li) => {
          const budget = n - cumStart[li];
          const active = done ? li === lines.length - 1 : n >= cumStart[li] && n < cumStart[li] + lineLens[li] + 1;
          let consumed = 0;
          return (
            <div key={li} className="whitespace-pre min-h-[1.9em]">
              {line.map((tok, ti) => {
                const show = Math.max(0, Math.min(tok.t.length, budget - consumed));
                consumed += tok.t.length;
                return (
                  <span key={ti} className={cls[tok.c]}>
                    {tok.t.slice(0, show)}
                  </span>
                );
              })}
              {active && <Cursor />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
              <p className="text-xl sm:text-2xl font-medium text-slate-dark leading-snug text-balance">{lead}</p>
              <div className="mt-6 space-y-4 text-slate-dark/65 leading-relaxed text-[15px] sm:text-base">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Currently */}
              <div className="mt-8">
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-anthropic-coral mb-3">// currently</div>
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

            {/* Right — self-typing code card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-2 lg:sticky lg:top-24"
            >
              <TypedCode start={isInView} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
