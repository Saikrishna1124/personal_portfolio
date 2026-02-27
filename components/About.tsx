
import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail, Award } from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATIONS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-2"
          >
            Personal Info
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white"
          >
            About Me
          </motion.h2>
          <div className="h-1 w-20 bg-indigo-500 mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">Engineering Student & Developer</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              {PERSONAL_INFO.summary}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Location</p>
                  <p className="font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email</p>
                  <p className="font-medium truncate max-w-[150px]">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Phone</p>
                  <p className="font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Education</p>
                  <p className="font-medium">B.Tech CSE (AIML)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
              <Award className="text-indigo-400" /> Certifications
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div 
                   key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/50 transition-all cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-slate-200 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
