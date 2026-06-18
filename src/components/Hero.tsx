import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["AI/ML Engineer", "Backend Developer", "Tech Enthusiast"];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(55);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(120);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(400);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet/10 blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-sm md:text-base font-medium tracking-wide uppercase">
            Specializing in AI/ML & Backend
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black font-orbitron text-white mt-8 mb-6 uppercase tracking-wider leading-none">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet drop-shadow-[0_0_20px_rgba(0,212,255,0.35)]">Lokesh</span>
          </h1>

          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold font-orbitron text-gray-300">
              I am a <span className="text-cyan text-shadow-glow border-r-2 border-cyan animate-pulse pr-1">{text}</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            A recent B.E. Computer Science graduate from Chennai, focused on building smart AI/ML solutions and scalable backend applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="projects" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 212, 255, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                className="w-48 py-4 rounded-full bg-cyan text-navy font-bold hover:bg-cyan/90 transition-all cursor-pointer text-lg tracking-wide uppercase"
              >
                View Projects
              </motion.button>
            </Link>

            <a 
              href="https://drive.google.com/file/d/1lWdsMdMwDQbiPstK_MCenPnbtvUbwFif/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-48 py-4 rounded-full border border-white/20 text-white font-bold hover:border-white transition-all cursor-pointer text-lg tracking-wide uppercase"
              >
                Get Resume
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
