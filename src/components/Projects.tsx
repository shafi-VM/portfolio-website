import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Lock, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import type { Project } from '../types/portfolio';

const categoryStyles: Record<Project['category'], string> = {
  Professional: 'bg-anthropic-coral/10 text-anthropic-coral border-anthropic-coral/20',
  'Open Source': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  Personal: 'bg-slate-dark/5 text-slate-dark/60 border-slate-dark/10',
};

const ProjectCard = ({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) => {
  const featured = project.featured;

  const links = (
    <div className="flex items-center gap-3">
      {project.proprietary && (
        <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-dark/45">
          <Lock className="w-3.5 h-3.5" />
          Proprietary
        </span>
      )}
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-dark/55 hover:text-anthropic-coral transition-colors duration-300"
          aria-label={`${project.title} source on GitHub`}
        >
          <Github className="w-5 h-5" />
        </a>
      )}
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-dark/55 hover:text-anthropic-coral transition-colors duration-300"
          aria-label={`${project.title} live demo`}
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      )}
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col rounded-2xl border border-slate-dark/10 bg-surface/80 p-6 sm:p-7 transition-colors duration-300 hover:border-anthropic-coral/40 hover:shadow-[0_20px_50px_-20px_rgba(217,119,87,0.35)] ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className={`inline-flex items-center font-mono text-[11px] px-2.5 py-1 rounded-full border ${categoryStyles[project.category]}`}>
          {project.category}
        </span>
        {links}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-slate-dark transition-colors duration-300 group-hover:text-anthropic-coral">
        {project.title}
      </h3>
      {project.tagline && <p className="text-anthropic-coral/90 font-mono text-xs sm:text-sm mt-1">{project.tagline}</p>}

      {/* Body */}
      <div className={featured ? 'lg:grid lg:grid-cols-2 lg:gap-8 mt-4' : 'mt-4'}>
        <p className="text-slate-dark/65 leading-relaxed text-[15px]">{project.description}</p>
        <ul className={`space-y-2 ${featured ? 'mt-4 lg:mt-0' : 'mt-4'}`}>
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex gap-2.5 text-sm text-slate-dark/60 leading-relaxed">
              <span className="text-anthropic-coral mt-1 flex-shrink-0 text-[10px]">▹</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech footer */}
      <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-dark/5">
        {project.technologies.map((tech) => (
          <span key={tech} className="font-mono text-[11px] px-2 py-1 rounded bg-slate-dark/5 text-slate-dark/60">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { projects, personal } = portfolioData;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Title */}
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4 flex items-center gap-3">
              <span className="text-anthropic-coral font-mono text-xl">04.</span>
              Featured Projects
              <span className="hidden sm:block h-px flex-1 bg-slate-dark/10 ml-4" />
            </h2>
            <p className="text-slate-dark/55 max-w-2xl">
              A mix of production work and systems I&apos;ve built to understand things end to end.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
            ))}
          </div>

          {/* More on GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mt-14"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 border border-slate-dark/20 text-slate-dark/80 hover:border-anthropic-coral hover:text-anthropic-coral transition-all duration-300 font-mono text-sm rounded"
            >
              <Star className="w-4 h-4" />
              More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
