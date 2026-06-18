import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [15, -15]);
  const rotateY = useTransform(springX, [0, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 lg:pt-16">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet/10 blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Side: Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-sm md:text-base font-medium tracking-wide uppercase">
              Specializing in AI/ML & Backend
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-orbitron text-white mt-8 mb-6 uppercase tracking-wider leading-none">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet drop-shadow-[0_0_20px_rgba(0,212,255,0.35)]">Lokesh</span>
            </h1>

            <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start mb-8">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold font-orbitron text-gray-300">
                I am a <span className="text-cyan text-shadow-glow border-r-2 border-cyan animate-pulse pr-1">{text}</span>
              </h2>
            </div>

            <p className="text-gray-400 text-base md:text-lg max-w-2xl lg:max-w-xl mb-12 leading-relaxed">
              A recent B.E. Computer Science graduate from Chennai, focused on building smart AI/ML solutions and scalable backend applications.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 w-full sm:w-auto">
              <Link to="projects" smooth={true} duration={500} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 212, 255, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-48 py-4 rounded-full bg-cyan text-navy font-bold hover:bg-cyan/90 transition-all cursor-pointer text-lg tracking-wide uppercase"
                >
                  View Projects
                </motion.button>
              </Link>

              <a
                href="https://drive.google.com/file/d/1lWdsMdMwDQbiPstK_MCenPnbtvUbwFif/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-48 py-4 rounded-full border border-white/20 text-white font-bold hover:border-white transition-all cursor-pointer text-lg tracking-wide uppercase"
                >
                  Get Resume
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Floating Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5 flex justify-center items-center"
          >
            <div className="relative group flex items-center justify-center" style={{ perspective: 1000 }}>
              {/* Soft, blended radial glowing halo behind the transparent image */}
              <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full bg-gradient-to-tr from-cyan/20 to-violet/25 blur-[60px] group-hover:scale-110 transition duration-1000"></div>
              
              {/* Floating Container (no background box, no borders, no padding) with 3D Tilt */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0]
                }}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[390px] md:h-[390px] flex items-center justify-center select-none"
              >
                <img 
                  src="/profile.png" 
                  alt="Lokesh" 
                  style={{
                    transform: "translateZ(40px)"
                  }}
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,212,255,0.25)] transition duration-500 group-hover:scale-103"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
