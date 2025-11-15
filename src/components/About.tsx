import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TechTree from './TechTree';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-light/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
              <span className="text-anthropic-coral font-mono text-xl mr-2">01.</span>
              About Me
            </h2>
            <div className="h-px bg-slate-dark/10 max-w-xs"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - About Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-5 text-slate-dark/70 text-justify leading-loose"
            >
              <p>
                Hi, I'm <span className="text-anthropic-coral font-medium">Shafi Ahmed</span>, a full-stack engineer who loves building systems that actually make sense — clean, reliable, and built to last.
              </p>
              <p>
                I work on projects that blend{' '}
                <span className="text-anthropic-coral font-medium">AI</span>, backend engineering, and modern cloud platforms — from architecting multi-tenant systems on Supabase and PostgreSQL to integrating RAG pipelines, OpenAI APIs, and LangChain-based automations.
              </p>
              <p>
                I've built end-to-end platforms with{' '}
                <span className="text-anthropic-coral font-medium">React + Next.js</span> frontends and{' '}
                <span className="text-anthropic-coral font-medium">FastAPI + Go</span> backends, stitched together with microservices, queues, and containerized deployments.
              </p>
              <p>
                What excites me most is the craft of{' '}
                <span className="text-anthropic-coral font-medium">learning continuously</span> — understanding how things work under the hood, experimenting, breaking, rebuilding. Every project I take on is about leaving the system a little cleaner, faster, and smarter than I found it.
              </p>
              <p>
                I deeply value sincerity in work — doing things with care, owning every detail, and taking pride in building something others can rely on. I want my work to reflect clarity, reliability, and quiet excellence.
              </p>
              <p>
                As I grow in my career, I'm driven by one goal — to keep building meaningful systems, learn from brilliant people, and contribute to something larger than myself.
              </p>
            </motion.div>

            {/* Right Column - Animated Tech Tree */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center justify-center"
            >
              <TechTree />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
