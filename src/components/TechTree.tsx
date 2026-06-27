import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const CORAL = 'rgb(var(--coral))';
const CORAL_LIGHT = 'rgb(var(--coral-light))';
const SURFACE = 'rgb(var(--surface))';
const INK = 'rgb(var(--ink))';

const TechTree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies = [
    { name: 'Go', category: 'Languages', related: ['Gin', 'Docker'] },
    { name: 'Python', category: 'Languages', related: ['FastAPI', 'pgvector'] },
    { name: 'FastAPI', category: 'Backend', related: ['Python', 'PostgreSQL'] },
    { name: 'PostgreSQL', category: 'Data', related: ['pgvector', 'Redis'] },
    { name: 'pgvector', category: 'AI & Search', related: ['PostgreSQL', 'RAG'] },
    { name: 'RAG', category: 'AI & Search', related: ['pgvector', 'OpenAI'] },
    { name: 'OpenAI', category: 'AI & Search', related: ['RAG'] },
    { name: 'Redis', category: 'Data', related: ['PostgreSQL'] },
    { name: 'Docker', category: 'DevOps', related: ['GCP', 'Go'] },
    { name: 'GCP', category: 'Cloud', related: ['Docker'] },
    { name: 'Gin', category: 'Backend', related: ['Go'] },
    { name: 'TypeScript', category: 'Languages', related: ['React'] },
    { name: 'React', category: 'Frontend', related: ['TypeScript'] },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  const branches = [
    { x: 20, y: 35 },
    { x: 180, y: 35 },
    { x: 10, y: 75 },
    { x: 190, y: 75 },
    { x: 30, y: 115 },
    { x: 170, y: 115 },
    { x: 15, y: 155 },
    { x: 185, y: 155 },
    { x: 40, y: 195 },
    { x: 160, y: 195 },
    { x: 55, y: 235 },
    { x: 145, y: 235 },
    { x: 100, y: 270 },
  ];

  const currentTech = technologies[currentIndex];
  const visibleTechs = technologies.map((tech, i) => ({
    ...tech,
    isActive: i === currentIndex,
    isRelated: currentTech.related.includes(tech.name),
  }));

  return (
    <div ref={ref} className="relative w-full h-[450px] flex items-center justify-center">
      <svg viewBox="0 0 200 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Trunk */}
        <motion.line
          x1="100"
          y1="325"
          x2="100"
          y2="30"
          style={{ stroke: CORAL }}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
        />

        {/* Branches */}
        {branches.map((branch, index) => (
          <motion.g key={`branch-${index}`}>
            <motion.line
              x1="100"
              y1={30 + index * 21}
              x2={branch.x}
              y2={branch.y}
              style={{ stroke: CORAL }}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 + index * 0.08 }}
            />
            <motion.circle
              cx={branch.x}
              cy={branch.y}
              r="4"
              style={{ fill: CORAL }}
              opacity="0.9"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.9 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: 1.2 + index * 0.08 }}
            />
          </motion.g>
        ))}

        {/* Soil */}
        <motion.ellipse
          cx="100"
          cy="325"
          rx="70"
          ry="10"
          style={{ fill: CORAL }}
          opacity="0.25"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 0.25 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <motion.ellipse
          cx="100"
          cy="325"
          rx="50"
          ry="8"
          style={{ fill: CORAL }}
          opacity="0.4"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 0.4 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        />

        {/* Tech labels */}
        {visibleTechs.map((tech, index) => {
          const branch = branches[index];
          const isHighlighted = tech.isActive;
          const isRelated = tech.isRelated;

          return (
            <motion.g key={tech.name}>
              <motion.rect
                x={branch.x - 38}
                y={branch.y - 14}
                width="76"
                height="28"
                rx="14"
                style={{
                  fill: isHighlighted ? CORAL : isRelated ? CORAL_LIGHT : SURFACE,
                  stroke: CORAL,
                }}
                strokeWidth="1.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: isHighlighted ? 1.08 : 1, opacity: isHighlighted || isRelated ? 1 : 0.6 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, delay: 1.5 + index * 0.05 }}
              />
              <motion.text
                x={branch.x}
                y={branch.y + 5}
                fontSize="11"
                style={{ fill: isHighlighted || isRelated ? '#fff' : INK }}
                textAnchor="middle"
                fontFamily="monospace"
                fontWeight={isHighlighted ? '700' : isRelated ? '600' : '500'}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: isHighlighted || isRelated ? 1 : 0.7 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.6 + index * 0.05 }}
              >
                {tech.name}
              </motion.text>
            </motion.g>
          );
        })}
      </svg>

      {/* Floating category indicator */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTech.category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="absolute top-2 left-1/2 -translate-x-1/2 bg-anthropic-coral px-5 py-2 rounded-full shadow-lg shadow-anthropic-coral/20"
        >
          <span className="text-sm font-mono text-white font-medium">{currentTech.category}</span>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 mb-2">
        {technologies.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-anthropic-coral w-8' : 'bg-slate-dark/30 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechTree;
