
import React from 'react';
import { Language } from '../types';
import { UI_TEXT, BOOKING_URL } from '../constants';
import { motion } from 'framer-motion';

interface FooterProps {
  onNavigate: (target: string) => void;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, language }) => {
  const t = UI_TEXT[language].footer;

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-1">Vibe Coding Paris</h4>
          <p className="text-zinc-500">{t.copyright}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-zinc-600 dark:text-zinc-400">
          <button onClick={() => onNavigate('about')} className="hover:text-emerald-500 transition-colors">{t.links.about}</button>
          <button onClick={() => onNavigate('home')} className="hover:text-emerald-500 transition-colors">{t.links.blog}</button>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">{t.links.contact}</a>
          <button onClick={() => onNavigate('home')} className="hover:text-emerald-500 transition-colors">{t.links.legal}</button>
        </div>

        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-emerald-500"
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
