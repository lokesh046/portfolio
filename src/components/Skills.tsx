import { motion } from 'framer-motion';

const SKILLS_DATA = {
  languagesAndFrameworks: [
    { name: 'Python', level: 90 },
    { name: 'FastAPI', level: 85 },
    { name: 'LangChain', level: 85 },
    { name: 'LLMs & Prompt Engineering', level: 85 },
    { name: 'Deep Learning & NLP', level: 80 },
    { name: 'PyTorch / Machine Learning', level: 75 },
    { name: 'RAG (Retrieval-Augmented Generation)', level: 90 },
  ],
  toolsAndPlatforms: [
    'FAISS',
    'Gemini API',
    'PostgreSQL',
    'Docker',
    'Git',
    'PaddleOCR',
    'ChromaDB',
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative border-t border-white/5 bg-navy/10">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-96 h-96 bg-violet/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mt-2 mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-violet mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Languages & Frameworks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card bg-navy/30 border border-white/5 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-6 h-1 bg-cyan rounded-full"></span>
              Languages & Frameworks
            </h3>
            <div className="space-y-6">
              {SKILLS_DATA.languagesAndFrameworks.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2 font-medium">
                    <span className="text-gray-300 font-light">{skill.name}</span>
                    <span className="text-cyan">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-navy/60 border border-white/10 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-cyan to-violet h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card bg-navy/30 border border-white/5 rounded-2xl p-8 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-6 h-1 bg-violet rounded-full"></span>
                Tools & Platforms
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed font-light">
                Proficient with database storage engines, modern containerization patterns, standard control workflows, and optical character extraction libraries.
              </p>
              <div className="flex flex-wrap gap-4">
                {SKILLS_DATA.toolsAndPlatforms.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ 
                      y: -4, 
                      borderColor: 'rgba(0, 214, 255, 0.4)', 
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.15)' 
                    }}
                    className="px-5 py-3 rounded-xl bg-navy/50 border border-white/10 text-gray-300 hover:text-white transition-all cursor-default text-sm font-medium tracking-wide"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-cyan/5 border border-cyan/10">
              <p className="text-xs text-cyan/80 leading-relaxed font-light">
                ⚡ Constantly exploring LLM fine-tuning mechanisms, prompt optimization strategies, and microservice integration workflows to enhance core intelligence capabilities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

