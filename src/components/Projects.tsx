import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { projects } = portfolioData;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
              <span className="text-anthropic-coral font-mono text-xl mr-2">04.</span>
              Featured Projects
            </h2>
            <div className="h-px bg-slate-dark/10 max-w-xs"></div>
          </div>

          {/* Projects Grid - Zig-zag Layout */}
          <div className="space-y-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredIndex === index;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0, y: 0 }
                      : { opacity: 0, x: isEven ? -50 : 50, y: 30 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:direction-rtl'
                  }`}
                >
                  {/* Content Side */}
                  <motion.div
                    className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}
                  >
                    <motion.div
                      className="bg-white/60 backdrop-blur-sm rounded-xl border border-slate-dark/10 overflow-hidden relative"
                      animate={{
                        boxShadow: isHovered
                          ? '0 25px 50px -12px rgba(217, 119, 87, 0.15), 0 0 0 1px rgba(217, 119, 87, 0.1)'
                          : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                        y: isHovered ? -4 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {/* Subtle background gradient on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-anthropic-coral/5 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                      />
                      {/* Project Header */}
                      <div className="p-8 pb-6 relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <motion.p
                              className="text-anthropic-coral font-mono text-sm mb-2"
                              animate={{ y: isHovered ? -2 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              Featured Project {String(index + 1).padStart(2, '0')}
                            </motion.p>
                            <motion.h3
                              className="text-2xl sm:text-3xl font-bold text-slate-dark"
                              animate={{
                                y: isHovered ? -3 : 0,
                                color: isHovered ? '#d97757' : '#2a2a2a',
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {project.title}
                            </motion.h3>
                          </div>
                          <div className="flex gap-3 ml-4">
                            {project.githubLink && (
                              <motion.a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-dark/60 hover:text-anthropic-coral transition-colors duration-300"
                                aria-label="View code on GitHub"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Code className="w-5 h-5" />
                              </motion.a>
                            )}
                            {project.liveLink && (
                              <motion.a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-dark/60 hover:text-anthropic-coral transition-colors duration-300"
                                aria-label="View live project"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink className="w-5 h-5" />
                              </motion.a>
                            )}
                          </div>
                        </div>

                        {/* Project Description */}
                        <motion.p
                          className="text-slate-dark/70 leading-relaxed mb-6"
                          animate={{ y: isHovered ? -2 : 0 }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                        >
                          {project.description}
                        </motion.p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-6">
                          {project.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={
                                isInView
                                  ? {
                                      opacity: 1,
                                      x: 0,
                                      y: isHovered ? -1 : 0,
                                    }
                                  : { opacity: 0, x: -10 }
                              }
                              transition={{
                                duration: 0.4,
                                delay: isInView ? index * 0.2 + idx * 0.08 : idx * 0.05,
                              }}
                              className="flex items-start gap-2 text-sm text-slate-dark/60"
                            >
                              <motion.span
                                className="text-anthropic-coral mt-1"
                                animate={{
                                  scale: isHovered ? 1.2 : 1,
                                }}
                                transition={{ duration: 0.2, delay: idx * 0.05 }}
                              >
                                ▹
                              </motion.span>
                              <span>{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies Footer */}
                      <div className="px-8 py-4 bg-slate-dark/[0.02] border-t border-slate-dark/5">
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                isInView
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0, scale: 0.8 }
                              }
                              transition={{
                                duration: 0.3,
                                delay: index * 0.2 + techIndex * 0.03,
                              }}
                              whileHover={{ scale: 1.05 }}
                              className="text-slate-dark/60 font-mono text-xs px-3 py-1.5 bg-white/40 backdrop-blur-sm rounded-md border border-slate-dark/10 hover:text-anthropic-coral hover:border-anthropic-coral/30 transition-colors duration-200"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Empty space for zig-zag effect */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} hidden lg:block`}></div>
                </motion.article>
              );
            })}
          </div>

          {/* More Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mt-16"
          >
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-anthropic-coral text-anthropic-coral hover:bg-anthropic-coral hover:text-white transition-all duration-300 font-mono text-sm rounded"
            >
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
