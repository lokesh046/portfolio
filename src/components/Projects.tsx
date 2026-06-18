import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const PROJECTS = [
  {
    title: 'Wealth to FIRE Platform',
    description: 'A comprehensive wealth management platform helping users calculate, visualize, and achieve Financial Independence, Retire Early (FIRE) goals through secure data storage.',
    tech: ['FastAPI', 'PostgreSQL', 'ChromaDB', 'React', 'TypeScript'],
    github: 'https://github.com/lokesh046/fire_service_version_two',
    live: 'https://fwealth-to-fire.vercel.app/',
  },
  {
    title: 'Neural Mind ML & DL solving platform',
    description: 'An educational dashboard designed to host complex machine learning and deep learning problems, delivering semantic search and personalized tutorial generations.',
    tech: ['LangChain', 'FAISS', 'Gemini API', 'React', 'Python'],
    github: 'https://github.com/lokesh046/neural-mind',
    live: 'https://neural-mind-livid.vercel.app/login',
  },
  {
    title: 'Voice Agent',
    description: 'A real-time language tutoring application leveraging OpenAI Whisper for speech-to-text, FastAPI backends, and the native Web Speech API for interactive feedback.',
    tech: ['Whisper', 'FastAPI', 'Web Speech API', 'React', 'Python'],
    github: 'https://github.com/lokesh046/voice-agent',
    live: '#',
  },
  {
    title: 'RAG Project Backend',
    description: 'A basic document Q&A application utilizing RAG architecture. Built with FastAPI, LangChain, FAISS, and the Gemini API to retrieve context-aware answers from uploaded files.',
    tech: ['FastAPI', 'LangChain', 'FAISS', 'Gemini API', 'RAG'],
    github: 'https://github.com/lokesh046/RAG-APP.git',
    live: '#',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-navy/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">My Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mt-2 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-violet mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-card bg-navy/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col group transition-all duration-300 hover:border-cyan/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-cyan/10 rounded-xl text-cyan group-hover:bg-cyan group-hover:text-navy transition-all duration-300">
                  <FiGithub size={22} />
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-cyan transition-colors duration-200"
                    aria-label="GitHub repository"
                  >
                    <FiGithub size={20} />
                  </a>
                  {project.live !== '#' && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-cyan transition-colors duration-200"
                      aria-label="Live demo website"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold font-orbitron text-white mb-3 group-hover:text-cyan transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 flex-grow text-sm md:text-base leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-violet/10 text-violet border border-violet/20 group-hover:border-cyan/25 group-hover:text-cyan group-hover:bg-cyan/5 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

