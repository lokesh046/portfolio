import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCpu } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mojzovel', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/5 bg-navy/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">Communication</span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mt-2 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-violet mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card bg-navy/40 border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-orbitron">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-navy/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-orbitron">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-navy/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-orbitron">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-navy/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all resize-none font-light"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan text-navy font-bold hover:bg-cyan/90 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase text-sm tracking-wider"
              >
                {formStatus === 'submitting' ? 'Sending...' : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <p className="text-green-400 text-sm mt-4 text-center font-light">Message sent successfully! I'll get back to you soon.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-400 text-sm mt-4 text-center font-light">Oops! There was a problem sending your message.</p>
              )}
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            className="w-full lg:w-2/5 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass-card bg-navy/40 border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-8">Connect With Me</h3>

              <div className="space-y-6 flex-grow flex flex-col justify-center">
                <a href="mailto:lokeshlearn1@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-navy transition-all duration-300 shadow-[0_0_10px_rgba(0,212,255,0.1)]">
                    <FiMail size={20} />
                  </div>
                  <span className="font-light text-base md:text-lg transition-colors group-hover:text-white">lokeshlearn1@gmail.com</span>
                </a>

                <a href="https://github.com/lokesh046" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-violet transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center text-violet group-hover:bg-violet group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(123,94,167,0.1)]">
                    <FiGithub size={20} />
                  </div>
                  <span className="font-light text-base md:text-lg transition-colors group-hover:text-white">github.com/lokesh046</span>
                </a>

                <a href="https://www.linkedin.com/in/lokesh-m-91b6932a0/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-cyan/5 flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-navy transition-all duration-300 shadow-[0_0_10px_rgba(0,212,255,0.1)]">
                    <FiLinkedin size={20} />
                  </div>
                  <span className="font-light text-base md:text-lg transition-colors group-hover:text-white">linkedin.com/in/lokesh-m</span>
                </a>

                <a href="https://leetcode.com/u/lokesh_coder/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-violet transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center text-violet group-hover:bg-violet group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(123,94,167,0.1)]">
                    <SiLeetcode size={20} />
                  </div>
                  <span className="font-light text-base md:text-lg transition-colors group-hover:text-white">leetcode.com/u/lokesh_coder</span>
                </a>

                <a href="https://www.tensortonic.com/profile/loki_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-cyan/5 flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-navy transition-all duration-300 shadow-[0_0_10px_rgba(0,212,255,0.1)]">
                    <FiCpu size={20} />
                  </div>
                  <span className="font-light text-base md:text-lg transition-colors group-hover:text-white">tensortonic.com/profile/loki_</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

