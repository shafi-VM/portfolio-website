import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-light/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          {/* Section Title */}
          <div className="mb-12">
            <p className="text-anthropic-coral font-mono text-base mb-4">05. What's Next?</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">Get In Touch</h2>
            <p className="text-lg text-slate-dark/60 max-w-xl mx-auto leading-relaxed">
              I’m always open to exploring new roles, projects, or anything worth building together.
              If something on your mind sparked curiosity, feel free to reach out...I’d love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="grid sm:grid-cols-2 gap-6 mb-12"
          >
            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-slate-dark/10 hover:border-anthropic-coral/50 transition-all duration-300 hover:shadow-lg group"
            >
              <Mail className="w-8 h-8 text-anthropic-coral mx-auto mb-3" />
              <h3 className="font-semibold text-slate-dark mb-2 group-hover:text-anthropic-coral transition-colors">
                Email
              </h3>
              <p className="text-sm text-slate-dark/60 break-all">{personal.email}</p>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personal.phone}`}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-slate-dark/10 hover:border-anthropic-coral/50 transition-all duration-300 hover:shadow-lg group"
            >
              <Phone className="w-8 h-8 text-anthropic-coral mx-auto mb-3" />
              <h3 className="font-semibold text-slate-dark mb-2 group-hover:text-anthropic-coral transition-colors">
                Phone
              </h3>
              <p className="text-sm text-slate-dark/60">{personal.phone}</p>
            </a>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <a
              href={`mailto:${personal.email}`}
              className="inline-block px-10 py-4 border-2 border-anthropic-coral text-anthropic-coral hover:bg-anthropic-coral hover:text-white transition-all duration-300 font-mono text-base rounded mb-8"
            >
              Say Hello
            </a>
          </motion.div>

          {/* Social Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center gap-6 pt-6"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-dark/60 hover:text-anthropic-coral transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
              <span className="text-sm font-mono">GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-dark/60 hover:text-anthropic-coral transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
              <span className="text-sm font-mono">LinkedIn</span>
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
