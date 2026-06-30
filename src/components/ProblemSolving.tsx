import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { FiCpu, FiExternalLink, FiCode, FiActivity } from 'react-icons/fi';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="py-20 relative border-t border-white/5 bg-navy/10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">Algorithmic Competence</span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mt-2 mb-4">
            Problem <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Solving</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-violet mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 font-light leading-relaxed text-sm md:text-base">
            Consistently sharpening core foundations through algorithmic puzzles and tensor math operations to ensure optimal execution in backend designs and machine learning models.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* LeetCode Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="glass-card bg-navy/40 border border-white/10 rounded-2xl p-8 flex flex-col group transition-all duration-300 hover:border-violet/40 hover:shadow-[0_0_30px_rgba(123,94,167,0.15)]"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-violet/10 rounded-2xl text-violet group-hover:bg-violet group-hover:text-white transition-all duration-300">
                <SiLeetcode size={28} />
              </div>
              <a
                href="https://leetcode.com/u/lokesh_coder/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-cyan transition-colors"
                aria-label="LeetCode Profile"
              >
                <FiExternalLink size={22} />
              </a>
            </div>

            <h3 className="text-2xl font-bold font-orbitron text-white mb-3 group-hover:text-violet transition-colors">
              LeetCode
            </h3>
            <span className="text-xs text-violet font-semibold tracking-wider uppercase mb-4 block">@lokesh_coder</span>

            <p className="text-gray-400 mb-6 font-light leading-relaxed text-sm md:text-base">
              Solving DSA puzzles to optimize execution speeds and space complexity, building robust algorithmic foundations for complex backends.
            </p>

            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-3 text-xs text-gray-300 bg-white/5 border border-white/5 rounded-xl p-3">
                <FiCode className="text-violet shrink-0" size={16} />
                <span>Focus: Arrays, Strings, Trees, Dynamic Programming</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-300 bg-white/5 border border-white/5 rounded-xl p-3">
                <FiActivity className="text-violet shrink-0" size={16} />
                <span>Striving for optimal time and space complexity designs</span>
              </div>
            </div>
          </motion.div>

          {/* TensorTonic Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="glass-card bg-navy/40 border border-white/10 rounded-2xl p-8 flex flex-col group transition-all duration-300 hover:border-cyan/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-cyan/10 rounded-2xl text-cyan group-hover:bg-cyan group-hover:text-navy transition-all duration-300">
                <FiCpu size={28} />
              </div>
              <a
                href="https://www.tensortonic.com/profile/lokesh_coder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-cyan transition-colors"
                aria-label="TensorTonic Profile"
              >
                <FiExternalLink size={22} />
              </a>
            </div>

            <h3 className="text-2xl font-bold font-orbitron text-white mb-3 group-hover:text-cyan transition-colors">
              TensorTonic
            </h3>
            <span className="text-xs text-cyan font-semibold tracking-wider uppercase mb-4 block">@loki_</span>

            <p className="text-gray-400 mb-6 font-light leading-relaxed text-sm md:text-base">
              Practicing deep learning tensor operations, matrix shapes, dimensional alignments, and mathematical constructs for custom model implementations.
            </p>

            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-3 text-xs text-gray-300 bg-white/5 border border-white/5 rounded-xl p-3">
                <FiCode className="text-cyan shrink-0" size={16} />
                <span>Focus: PyTorch, TensorFlow, Dimension manipulations</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-300 bg-white/5 border border-white/5 rounded-xl p-3">
                <FiActivity className="text-cyan shrink-0" size={16} />
                <span>Validating mathematical model properties and shape behaviors</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolving;
