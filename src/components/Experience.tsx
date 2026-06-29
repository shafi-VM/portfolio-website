import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Title */}
          <div className="mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-slate-dark mb-4 flex items-center gap-3">
              <span className="text-anthropic-coral font-mono text-xl">02.</span>
              Experience
              <span className="hidden sm:block h-px flex-1 bg-slate-dark/10 ml-4" />
            </h2>
          </div>

          {/* Roles */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="relative rounded-2xl border border-slate-dark/10 bg-surface/80 p-6 sm:p-8 transition-colors duration-300 hover:border-anthropic-coral/30"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-dark">
                    {exp.role}
                    <span className="text-anthropic-coral"> @ </span>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-anthropic-coral hover:underline underline-offset-4 inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-anthropic-coral">{exp.company}</span>
                    )}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-dark/55 font-mono mb-5">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-slate-dark/70 leading-relaxed mb-5">{exp.description}</p>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                      className="flex gap-3 text-slate-dark/70 leading-relaxed text-[15px]"
                    >
                      <span className="text-anthropic-coral mt-1.5 flex-shrink-0 text-xs">▹</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {exp.stack && (
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-dark/5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-anthropic-coral/10 text-anthropic-coral"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="mt-12"
          >
            <h3 className="flex items-center gap-2 font-mono text-sm text-slate-dark/60 mb-4">
              <GraduationCap className="w-4 h-4 text-anthropic-coral" />
              Education
            </h3>
            <div className="grid gap-4 sm:grid-cols-1">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-xl border border-slate-dark/10 bg-surface/70 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <p className="font-semibold text-slate-dark">{edu.institution}</p>
                    <p className="text-sm text-slate-dark/65">{edu.degree}</p>
                  </div>
                  <div className="text-sm font-mono text-slate-dark/55 sm:text-right">
                    <p className="text-anthropic-coral">{edu.period}</p>
                    <p>
                      {edu.gpa ? `GPA ${edu.gpa} · ` : ''}
                      {edu.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
