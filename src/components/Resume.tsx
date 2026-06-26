import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiDownload } from 'react-icons/fi';

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative border-t border-white/5 bg-navy/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">Qualifications</span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mt-2 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-violet rounded-full mb-8"></div>

          <a
            href="https://drive.google.com/file/d/1-fevRiNdOvrJpeEY2aA9MRm3z6W9wIe8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan/10 border border-cyan text-cyan font-semibold hover:bg-cyan hover:text-navy transition-all shadow-[0_0_15px_rgba(0,212,255,0.2)] group"
          >
            <FiDownload className="group-hover:animate-bounce" />
            Download Full Resume
          </a>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline central line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-cyan via-violet to-transparent opacity-30 rounded-full"></div>

          {/* Education Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16"
          >
            <div className="order-1 md:w-5/12 hidden md:block"></div>

            <div className="z-20 flex items-center justify-center order-1 w-10 h-10 rounded-full bg-navy border-2 border-cyan shadow-[0_0_15px_rgba(0,212,255,0.5)] mb-4 md:mb-0 ml-1.5 md:ml-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <FiBook className="text-cyan text-lg" />
            </div>

            <div className="order-2 w-auto md:w-5/12 ml-8 md:ml-0 glass-card bg-navy/40 border border-white/10 rounded-2xl p-6 text-left hover:border-cyan/50 transition-all duration-300 group">
              <div className="text-cyan font-bold mb-1 font-orbitron text-sm">2022 – 2026</div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-cyan transition-colors">B.E. Computer Science</h3>
              <div className="text-gray-300 font-medium mb-3">Meenakshi College of Engineering</div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Specializing in Artificial Intelligence, Machine Learning and Backend Systems. Developed solid fundamentals in data structures, design and analysis of algorithms, and software engineering.
              </p>
              <div className="mt-4 inline-block px-3 py-1 bg-cyan/10 rounded-lg text-cyan text-sm font-semibold border border-cyan/20">
                CGPA: 7.81
              </div>
            </div>
          </motion.div>

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            <div className="order-2 md:order-1 w-auto md:w-5/12 ml-8 md:ml-0 glass-card bg-navy/40 border border-white/10 rounded-2xl p-6 text-left hover:border-violet/50 transition-all duration-300 group">
              <div className="text-violet font-bold mb-1 font-orbitron text-sm">Internship</div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-violet transition-colors">Python & ML Intern</h3>
              <div className="text-gray-300 font-medium mb-3">GUVI Geek Network Pvt. Ltd.</div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Assisted in research and engineering of custom machine learning models and NLP features. Wrote clean Python service connectors and API modules in support of internal database platforms.
              </p>
            </div>

            <div className="z-20 flex items-center justify-center order-1 md:order-2 w-10 h-10 rounded-full bg-navy border-2 border-violet shadow-[0_0_15px_rgba(123,94,167,0.5)] mb-4 md:mb-0 ml-1.5 md:ml-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <FiBriefcase className="text-violet text-lg" />
            </div>

            <div className="order-3 md:w-5/12 hidden md:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Resume;

