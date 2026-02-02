import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Transform data structure for tree layout
  const skillTree = [
    {
      category: 'Development',
      color: '#d97757',
      subcategories: [
        { name: 'Web Frameworks', skills: portfolioData.skills.development.webFrameworks },
        { name: 'Databases', skills: portfolioData.skills.development.databases },
        { name: 'Architecture', skills: portfolioData.skills.development.architecture },
        { name: 'DevOps & Infrastructure', skills: portfolioData.skills.development.devops },
        { name: 'Cloud Platforms', skills: portfolioData.skills.development.cloud },
      ],
    },
    {
      category: 'Languages',
      color: '#d97757',
      subcategories: [
        { name: 'Primary', skills: portfolioData.skills.languages.primary },
        { name: 'Systems', skills: portfolioData.skills.languages.systems },
        { name: 'Web', skills: portfolioData.skills.languages.web },
      ],
    },
    {
      category: 'AI & Machine Learning',
      color: '#d97757',
      subcategories: [
        { name: 'LLM Frameworks', skills: portfolioData.skills.aiAndML.frameworks },
        { name: 'AI Providers', skills: portfolioData.skills.aiAndML.providers },
        { name: 'Vector & RAG', skills: portfolioData.skills.aiAndML.vectorAndRAG },
        { name: 'Techniques', skills: portfolioData.skills.aiAndML.techniques },
        { name: 'Agents', skills: portfolioData.skills.aiAndML.agents },
      ],
    },
    {
      category: 'Tools & Workflow',
      color: '#d97757',
      subcategories: [
        { name: 'Development', skills: portfolioData.skills.tools.development },
        { name: 'API & Testing', skills: portfolioData.skills.tools.apiAndTesting },
        { name: 'Collaboration', skills: portfolioData.skills.tools.collaboration },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
              <span className="text-anthropic-coral font-mono text-xl mr-2">03.</span>
              Skills & Technologies
            </h2>
            <p className="text-slate-dark/60 font-mono text-sm mt-4 hidden lg:block">
              Hover over a category to see electricity flow
            </p>
          </div>

          {/* Tree Structure */}
          <div className="space-y-24">
            {skillTree.map((root, rootIndex) => {
              const isHovered = hoveredCategory === root.category;

              return (
                <motion.div
                  key={root.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.8,
                    delay: rootIndex * 0.2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="relative"
                >
                  {/* Main Category */}
                  <div className="flex justify-center mb-8 lg:mb-8">
                    <motion.div
                      className={`relative px-6 sm:px-8 py-3 rounded-lg border-2 font-mono text-sm sm:text-base font-semibold cursor-pointer transition-all duration-300 ${
                        isHovered
                          ? 'bg-anthropic-coral border-anthropic-coral text-white'
                          : 'bg-white/60 backdrop-blur-sm border-slate-dark/20 text-slate-dark'
                      }`}
                      onMouseEnter={() => setHoveredCategory(root.category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      {root.category}
                    </motion.div>
                  </div>

                  {/* Connector section - hidden on mobile, visible on desktop */}
                  <div className="relative hidden lg:block" style={{ height: '160px' }}>
                    {/* Subcategories Grid - positioned absolutely to measure positions */}
                    <div
                      className="grid gap-6 absolute top-0 left-0 right-0"
                      style={{
                        gridTemplateColumns: `repeat(${root.subcategories.length}, minmax(0, 1fr))`,
                      }}
                    >
                      {root.subcategories.map((_, subIndex) => (
                        <div key={subIndex} className="relative">
                          {/* Invisible box to measure center position */}
                          <div className="w-full h-1" id={`connector-${rootIndex}-${subIndex}`}></div>
                        </div>
                      ))}
                    </div>

                    {/* SVG for connectors and electricity */}
                    <svg
                      className="absolute top-0 left-0 w-full h-full pointer-events-none"
                      style={{ zIndex: 1 }}
                    >
                      {/* Main vertical line from category */}
                      <motion.line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="40"
                        stroke={isHovered ? root.color : '#2a2a2a20'}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 0.5, delay: rootIndex * 0.2 + 0.3 }}
                      />

                      {/* Horizontal line connecting subcategories */}
                      <motion.line
                        x1="5%"
                        y1="40"
                        x2="95%"
                        y2="40"
                        stroke={isHovered ? root.color : '#2a2a2a20'}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 0.6, delay: rootIndex * 0.2 + 0.5 }}
                      />

                      {/* Vertical lines to each subcategory - properly aligned */}
                      {root.subcategories.map((_, subIndex) => {
                        const numSubs = root.subcategories.length;
                        // Calculate exact center of each column with gap consideration
                        const totalWidth = 100;
                        const gapPercentage = 2.4; // 6 gaps * 2.4% = 14.4% total gap space
                        const contentWidth = totalWidth - (numSubs - 1) * gapPercentage;
                        const columnWidth = contentWidth / numSubs;
                        const xPos = (columnWidth / 2) + subIndex * (columnWidth + gapPercentage);

                        return (
                          <g key={subIndex}>
                            <motion.line
                              x1={`${xPos}%`}
                              y1="40"
                              x2={`${xPos}%`}
                              y2="160"
                              stroke={isHovered ? root.color : '#2a2a2a20'}
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: rootIndex * 0.2 + subIndex * 0.1 + 0.7,
                              }}
                            />

                            {/* Electricity flowing particles on hover */}
                            {isHovered && (
                              <>
                                {/* Particle 1 - flows down the vertical line */}
                                <motion.circle
                                  cx={`${xPos}%`}
                                  r="4"
                                  fill={root.color}
                                  filter="url(#glow)"
                                  initial={{ cy: 40 }}
                                  animate={{ cy: [40, 160, 40] }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: subIndex * 0.2,
                                  }}
                                />

                                {/* Particle 2 - slightly delayed */}
                                <motion.circle
                                  cx={`${xPos}%`}
                                  r="3"
                                  fill="#fff"
                                  opacity="0.8"
                                  initial={{ cy: 40 }}
                                  animate={{ cy: [40, 160, 40] }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: subIndex * 0.2 + 0.5,
                                  }}
                                />
                              </>
                            )}
                          </g>
                        );
                      })}

                      {/* Glow filter for electricity */}
                      <defs>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                    </svg>
                  </div>

                  {/* Subcategories Grid - actual content */}
                  <div
                    className={`grid gap-4 sm:gap-6 relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
                      root.subcategories.length === 5 ? 'xl:grid-cols-5' : 'xl:grid-cols-3'
                    }`}
                    style={{
                      zIndex: 10,
                    }}
                  >
                    {root.subcategories.map((subcategory, subIndex) => (
                      <motion.div
                        key={subcategory.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{
                          duration: 0.6,
                          delay: rootIndex * 0.2 + subIndex * 0.1 + 0.8,
                        }}
                        className="relative"
                      >
                        {/* Subcategory Box */}
                        <div
                          className={`px-3 sm:px-4 py-3 rounded-lg border transition-all duration-300 ${
                            isHovered
                              ? 'bg-anthropic-coral/5 border-anthropic-coral/30'
                              : 'bg-white/60 backdrop-blur-sm border-slate-dark/10'
                          }`}
                        >
                          {/* Subcategory Name */}
                          <div
                            className={`text-center font-mono text-xs sm:text-sm font-semibold mb-3 sm:mb-4 pb-2 sm:pb-3 border-b transition-colors duration-300 ${
                              isHovered
                                ? 'text-anthropic-coral border-anthropic-coral/20'
                                : 'text-slate-dark border-slate-dark/10'
                            }`}
                          >
                            {subcategory.name}
                          </div>

                          {/* Skills */}
                          <div className="space-y-1.5 sm:space-y-2">
                            {subcategory.skills.map((skill, skillIndex) => {
                              const isSkillHovered = hoveredSkill === skill;

                              return (
                                <motion.div
                                  key={skill}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={
                                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                                  }
                                  transition={{
                                    duration: 0.3,
                                    delay:
                                      rootIndex * 0.2 +
                                      subIndex * 0.1 +
                                      skillIndex * 0.05 +
                                      1,
                                  }}
                                  whileHover={{ x: 5, scale: 1.02 }}
                                  onMouseEnter={() => setHoveredSkill(skill)}
                                  onMouseLeave={() => setHoveredSkill(null)}
                                  className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded text-[10px] sm:text-xs font-mono text-center transition-all duration-200 cursor-pointer ${
                                    isSkillHovered
                                      ? 'bg-anthropic-coral text-white shadow-md'
                                      : isHovered
                                      ? 'bg-anthropic-coral/10 text-anthropic-coral'
                                      : 'bg-slate-dark/5 text-slate-dark/70 hover:bg-slate-dark/10'
                                  }`}
                                >
                                  {skill}
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
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
