
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{PERSONAL_INFO.name}</h3>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          Crafting modern digital experiences with code and creativity.
        </p>
        <div className="flex justify-center gap-8 mb-8">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors">Email</a>
        </div>
        <div className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
