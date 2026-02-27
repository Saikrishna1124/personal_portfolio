
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  // We use the image provided in the prompt. Since we are in a simulated development environment, 
  // we reference the image directly if it were saved as 'profile.jpg' or use the provided data.
  const profileImgUrl = "https://raw.githubusercontent.com/Saikrishna1124/Saikrishna1124/main/profile.jpg"; // Fallback/Placeholder path
  
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-400 font-medium tracking-widest uppercase text-sm mb-4"
          >
            Welcome to my professional space
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-transparent"
          >
            I'm {PERSONAL_INFO.name.split(' ')[0]} <br className="hidden md:block" /> {PERSONAL_INFO.name.split(' ').slice(1).join(' ')}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl"
          >
            {PERSONAL_INFO.title} specialized in building high-performance AI-driven applications.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10"
          >
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
            >
              Get In Touch
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-300 hover:text-white transition-colors border border-white/10">
                <Github size={20} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-300 hover:text-white transition-colors border border-white/10">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-300 hover:text-white transition-colors border border-white/10">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-64 h-64 md:w-96 md:h-96"
        >
          <div className="absolute inset-0 bg-indigo-500 rounded-full blur-[60px] opacity-20 animate-pulse" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 glass p-2 group">
            <img 
              src={PERSONAL_INFO.profileImage} 
              alt={PERSONAL_INFO.name}
              onError={(e) => {
                // Fallback to a placeholder if the specific image link is unavailable
                const target = e.target as HTMLImageElement;
                target.src = `https://picsum.photos/seed/${PERSONAL_INFO.name}/800/800`;
              }}
              className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
