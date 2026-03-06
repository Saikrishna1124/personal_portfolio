
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-2"
          >
            Academic Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white"
          >
            Education
          </motion.h2>
          <div className="h-1 w-20 bg-indigo-500 mt-4 rounded-full" />
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent">
          {EDUCATION.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-slate-900 group-hover:border-indigo-500 transition-colors z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <GraduationCap size={18} className="text-indigo-400" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-3xl hover:border-indigo-500/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white text-lg">{item.degree}</div>
                  <time className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                    <Calendar size={12} />
                    {item.year.split(' ')[0]}
                  </time>
                </div>
                <div className="text-slate-400 font-medium mb-3">{item.institution}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-bold text-slate-300">
                  {item.grade}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
