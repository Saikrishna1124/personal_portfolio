
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'xojkvkzd';
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-2"
          >
            Connection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white"
          >
            Get In Touch
          </motion.h2>
          <div className="h-1 w-20 bg-indigo-500 mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Let's build something together</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'My Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                { icon: Phone, label: 'My Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
                { icon: MapPin, label: 'My Location', value: PERSONAL_INFO.location },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-all border border-white/5">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-medium text-slate-200 hover:text-indigo-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-slate-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[2rem] border border-white/10"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-slate-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-indigo-400 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    disabled={status === 'sending'}
                    className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-indigo-500 focus:outline-none transition-all text-white placeholder:text-slate-600 disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Your Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    disabled={status === 'sending'}
                    className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-indigo-500 focus:outline-none transition-all text-white placeholder:text-slate-600 disabled:opacity-50"
                    placeholder="yourname@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    disabled={status === 'sending'}
                    className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-indigo-500 focus:outline-none transition-all text-white placeholder:text-slate-600 resize-none disabled:opacity-50"
                    placeholder="How can I help you?"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email me directly.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
