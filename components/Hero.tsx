import React from 'react';
import { ArrowRight, Terminal, CheckCircle2 } from 'lucide-react';
import { Section } from './ui/Section';
import { UI_TEXT, STRIPE_LINK_STUDENT } from '../constants';
import { Language } from '../types';
import { motion } from 'framer-motion';
import FloatingIcons from './ui/FloatingIcons';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = UI_TEXT[language].hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <Section className="pt-32 md:pt-48 pb-20 relative">
      {/* Floating Icons Background Layer */}
      <div className="absolute inset-0 z-0">
        <FloatingIcons />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 space-y-8 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.badge}
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] whitespace-pre-line"
          >
            {t.title}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance"
          >
            {t.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <motion.a 
                href={STRIPE_LINK_STUDENT} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-lg shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              {t.ctaPrimary}
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            {t.socialProof.map((proof, i) => (
                <span key={i} className="flex items-center gap-1"><CheckCircle2 size={16} className="text-emerald-500"/> {proof}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual Element - Abstract Code Interface */}
        <motion.div 
          className="flex-1 w-full max-w-lg lg:max-w-xl relative group"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-zinc-100 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-700 p-3 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-4 text-xs text-zinc-400 font-mono">vibecoding-landing.tsx</div>
                  </div>
                  <div className="p-6 font-mono text-sm space-y-4 text-zinc-700 dark:text-zinc-300">
                      <div className="flex gap-2">
                          <span className="text-emerald-500">{'>'}</span>
                          <span className="typing-demo">{t.codeString}</span>
                      </div>
                      <div className="pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-2 opacity-75">
                          <p className="text-blue-500">{t.codeComment}</p>
                          <p><span className="text-purple-500">import</span> React <span className="text-purple-500">from</span> 'react';</p>
                          <p><span className="text-purple-500">export const</span> Hero = () ={'>'} (</p>
                          <p className="pl-4 text-emerald-600 dark:text-emerald-400">{'<h1 className="text-6xl font-bold">Vibe Coding</h1>'}</p>
                          <p>);</p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800/50 flex items-center gap-3">
                          <Terminal size={20} className="text-emerald-600 dark:text-emerald-400" />
                          <span className="font-bold text-emerald-800 dark:text-emerald-200">Deployed: https://vibe-coding.app</span>
                      </div>
                  </div>
              </div>
            </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;