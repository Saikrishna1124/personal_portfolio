
import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'internship', label: 'Internship' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume', isExternal: true, href: '/sai_resume.pdf' },
  ];

  const scrollTo = (id: string) => {
    const item = navItems.find(i => i.id === id);
    if (item?.isExternal) {
      window.open(item.href, '_blank');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6"
    >
      <nav className="glass rounded-full px-4 py-2 flex items-center gap-1 sm:gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeSection === item.id 
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
