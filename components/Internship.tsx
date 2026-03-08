
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Internship: React.FC = () => {
  return (
    <section id="internship" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-2"
          >
            Professional Experience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white"
          >
            Internships
          </motion.h2>
          <div className="h-1 w-20 bg-indigo-500 mt-4 rounded-full" />
        </div>

        <div className="flex justify-center">
          {EXPERIENCE.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl glass p-8 rounded-3xl hover:border-indigo-500/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                  </div>
                  <div className="text-indigo-400 font-medium text-lg ml-11">{item.company}</div>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold self-start md:self-center">
                  <Calendar size={14} />
                  {item.period}
                </div>
              </div>
              
              <p className="text-slate-400 text-lg leading-relaxed pl-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
