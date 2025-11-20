
import React from 'react';
import { ArrowLeft, Linkedin, Twitter, Calendar } from 'lucide-react';
import { UI_TEXT, BOOKING_URL } from '../constants';
import { Language } from '../types';

interface AboutProps {
  onBack: () => void;
  language: Language;
}

const About: React.FC<AboutProps> = ({ onBack, language }) => {
  const t = UI_TEXT[language].about;

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-emerald-500 transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/>
          {t.back}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Profile & Quick Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
             <div className="relative w-64 h-64 mb-8 group cursor-pointer">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full border-[6px] border-white dark:border-zinc-800 shadow-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700">
                  <img 
                    src="/tewfiq-profile.jpg" 
                    alt="Tewfiq Ferahi" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('bg-zinc-100', 'dark:bg-zinc-800', 'flex', 'items-center', 'justify-center');
                      const span = document.createElement('span');
                      span.className = 'text-5xl font-bold text-emerald-600 dark:text-emerald-400';
                      span.innerText = 'TF';
                      e.currentTarget.parentElement?.appendChild(span);
                    }}
                  />
                </div>
                <div className="absolute bottom-4 right-4 bg-emerald-500 text-white p-2 rounded-full shadow-lg border-4 border-white dark:border-zinc-950 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="animate-pulse w-3 h-3 bg-white rounded-full"></div>
                </div>
             </div>
             
             <h1 className="text-4xl font-bold mb-2 text-zinc-900 dark:text-white tracking-tight">Tewfiq Ferahi</h1>
             <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mb-6">{t.role}</p>
             
             <div className="flex gap-4 mb-8">
               <a href="https://twitter.com/tewfiq" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-110">
                 <Twitter size={20} />
               </a>
               <a href="https://www.linkedin.com/in/tewfiq/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 transform hover:scale-110">
                 <Linkedin size={20} />
               </a>
               <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-110" title="Book a meeting">
                 <Calendar size={20} />
               </a>
             </div>

             <div className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">
                <p>Paris, France</p>
                <p>Since 2025</p>
             </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-8 space-y-8 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white leading-tight">
              {t.bioHighlight}
            </p>
            
            <div className="prose dark:prose-invert max-w-none space-y-6">
              <p>{t.bio1}</p>
              <p>{t.bio2}</p>

              <div className="relative pl-8 border-l-4 border-emerald-500 my-12 py-2">
                 <p className="text-2xl font-serif italic text-zinc-800 dark:text-zinc-100">
                  {t.quote}
                </p>
              </div>

              <p>{t.bio3}</p>
              <p>{t.bio4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
