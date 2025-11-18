import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

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
          <button onClick={() => onNavigate('home')} className="hover:text-emerald-500 transition-colors">{t.links.contact}</button>
          <button onClick={() => onNavigate('home')} className="hover:text-emerald-500 transition-colors">{t.links.legal}</button>
        </div>

        <div className="flex gap-4">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;