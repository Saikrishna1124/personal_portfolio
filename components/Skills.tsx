
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-2"
          >
            Toolbox
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white"
          >
            Technical Expertise
          </motion.h2>
          <div className="h-1 w-20 bg-indigo-500 mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, groupIdx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="glass p-6 rounded-3xl hover:border-indigo-500/30 transition-all group"
            >
              <h3 className="text-lg font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors uppercase tracking-wider text-sm">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium border border-white/5 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
