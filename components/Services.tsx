import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Rocket, Database, Globe, Cpu } from 'lucide-react';

const SERVICES = [
  {
    title: "AI & Machine Learning",
    description: "Developing intelligent algorithms and predictive models using Python, focusing on data-driven solutions.",
    icon: <Brain size={24} />,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Full-Stack Development",
    description: "Building scalable web applications using React, Django, and modern SQL/NoSQL databases.",
    icon: <Globe size={24} />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "System Architecture",
    description: "Designing robust and efficient administrative systems like college management portals.",
    icon: <Cpu size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Performance Optimization",
    description: "Ensuring high-performance and fluid user experiences through code splitting and efficient state management.",
    icon: <Rocket size={24} />,
    color: "from-pink-500 to-rose-500"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-2"
          >
            Expertise & Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What I Bring To The Table
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass p-8 rounded-[2rem] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white w-fit mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
