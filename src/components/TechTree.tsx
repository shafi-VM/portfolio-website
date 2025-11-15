import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const TechTree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: 'React', category: 'Frontend', related: ['Next.js', 'TypeScript'] },
    { name: 'Next.js', category: 'Frontend', related: ['React', 'TypeScript'] },
    { name: 'FastAPI', category: 'Backend', related: ['Python', 'Go', 'Node.js'] },
    { name: 'Python', category: 'Backend', related: ['FastAPI'] },
    { name: 'Go', category: 'Backend', related: ['FastAPI', 'Node.js'] },
    { name: 'Node.js', category: 'Backend', related: ['Go', 'FastAPI'] },
    { name: 'PostgreSQL', category: 'Database', related: ['Redis', 'Supabase'] },
    { name: 'Redis', category: 'Database', related: ['PostgreSQL', 'Supabase'] },
    { name: 'Supabase', category: 'Database', related: ['PostgreSQL', 'Redis'] },
    { name: 'AWS', category: 'Cloud', related: ['Docker'] },
    { name: 'Docker', category: 'DevOps', related: ['AWS', 'Git'] },
    { name: 'Git', category: 'DevOps', related: ['Docker'] },
    { name: 'TypeScript', category: 'Frontend', related: ['React', 'Next.js'] },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  // Much wider spread branches - 13 positions (more spread to prevent overlap)
  const branches = [
    { x: 20, y: 35 },   // Far Left top
    { x: 180, y: 35 },  // Far Right top
    { x: 10, y: 75 },   // Far Left upper-middle
    { x: 190, y: 75 },  // Far Right upper-middle
    { x: 30, y: 115 },  // Left middle
    { x: 170, y: 115 }, // Right middle
    { x: 15, y: 155 },  // Left lower-middle
    { x: 185, y: 155 }, // Right lower-middle
    { x: 40, y: 195 },  // Left bottom
    { x: 160, y: 195 }, // Right bottom
    { x: 55, y: 235 },  // Left very bottom
    { x: 145, y: 235 }, // Right very bottom
    { x: 100, y: 270 }, // Center very bottom
  ];

  const currentTech = technologies[currentIndex];
  const visibleTechs = technologies.map((tech, i) => ({
    ...tech,
    index: i,
    isActive: i === currentIndex,
    isRelated: currentTech.related.includes(tech.name),
  }));

  return (
    <div ref={ref} className="relative w-full h-[450px] flex items-center justify-center">
      <svg
        viewBox="0 0 200 340"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Tree Trunk - Growing from soil */}
        <motion.line
          x1="100"
          y1="325"
          x2="100"
          y2="30"
          stroke="#d97757"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        />

        {/* Branches - Growing organically */}
        {branches.map((branch, index) => (
          <motion.g key={`branch-${index}`}>
            {/* Branch line */}
            <motion.line
              x1="100"
              y1={30 + index * 21}
              x2={branch.x}
              y2={branch.y}
              stroke="#d97757"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.8 + index * 0.08,
              }}
            />
            {/* Branch node */}
            <motion.circle
              cx={branch.x}
              cy={branch.y}
              r="4"
              fill="#d97757"
              opacity="0.9"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.9 } : { scale: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: 1.2 + index * 0.08,
              }}
            />
          </motion.g>
        ))}

        {/* Soil base - Rendered after branches so it's on top */}
        <motion.ellipse
          cx="100"
          cy="325"
          rx="70"
          ry="10"
          fill="#d97757"
          opacity="0.25"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 0.25 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.ellipse
          cx="100"
          cy="325"
          rx="50"
          ry="8"
          fill="#d97757"
          opacity="0.4"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 0.4 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />

        {/* Tech labels on branches - Show related techs */}
        {visibleTechs.map((tech, index) => {
          const branch = branches[index];
          const isHighlighted = tech.isActive;
          const isRelated = tech.isRelated;

          return (
            <motion.g key={tech.name}>
              {/* Background pill */}
              <motion.rect
                x={branch.x - 38}
                y={branch.y - 14}
                width="76"
                height="28"
                rx="14"
                fill={isHighlighted ? "#d97757" : isRelated ? "#e89b7f" : "#fff"}
                stroke="#d97757"
                strokeWidth="1.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        scale: isHighlighted ? 1.08 : 1,
                        opacity: isHighlighted || isRelated ? 1 : 0.6,
                      }
                    : { scale: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, delay: 1.5 + index * 0.05 }}
              />
              {/* Tech name */}
              <motion.text
                x={branch.x}
                y={branch.y + 5}
                fontSize="11"
                fill={isHighlighted || isRelated ? "#fff" : "#2a2a2a"}
                textAnchor="middle"
                fontFamily="monospace"
                fontWeight={isHighlighted ? "700" : isRelated ? "600" : "500"}
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? { opacity: isHighlighted || isRelated ? 1 : 0.7 }
                    : { opacity: 0 }
                }
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
          key={technologies[currentIndex].category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-anthropic-coral px-5 py-2 rounded-full"
        >
          <span className="text-sm font-mono text-white font-medium">
            {technologies[currentIndex].category}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicator - Below the soil */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mb-2">
        {technologies.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-anthropic-coral w-8' : 'bg-slate-dark/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechTree;
