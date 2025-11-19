
import React from 'react';
import { Section } from './ui/Section';
import { FEATURES, UI_TEXT } from '../constants';
import { ArrowUpRight, Cpu, Layers, Zap } from 'lucide-react';
import { Language } from '../types';
import { motion } from 'framer-motion';

interface FeaturesProps {
  language: Language;
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const t = UI_TEXT[language].features;
  const featuresList = FEATURES[language];

  return (
    <Section id="programme">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 whitespace-pre-line">{t.title}</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto whitespace-pre-line">{t.subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresList.map((feature, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-colors duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="text-emerald-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bento Grid Extension for "Why" */}
      <div id="why" className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[500px]">
        
        {/* Big Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-zinc-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group"
        >
           <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
             <Cpu size={200} />
           </div>
           <div>
             <div className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold mb-6">FUTURE PROOF</div>
             <h3 className="text-3xl md:text-4xl font-bold mb-4">{t.bentoAdvantageTitle}</h3>
             <p className="text-zinc-400 text-lg whitespace-pre-line">{t.bentoAdvantageDesc}</p>
           </div>
           <div className="mt-8">
             <div className="bg-zinc-800/50 rounded-xl p-4 backdrop-blur-sm border border-zinc-700">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-red-500"/>
                 <div className="text-xs text-zinc-400">Terminal</div>
               </div>
               <code className="text-sm font-mono text-emerald-400 block relative">
                 <motion.span 
                   initial={{ opacity: 0 }} 
                   whileInView={{ opacity: 1 }} 
                   transition={{ duration: 1, delay: 0.5 }}
                 >
                   &gt; VibeCoding.init({'{'} skill: "Rare" {'}'});
                 </motion.span>
                 <br/>
                 <motion.span 
                   initial={{ opacity: 0 }} 
                   whileInView={{ opacity: 1 }} 
                   transition={{ duration: 1, delay: 1.5 }}
                 >
                   &gt; Success.
                 </motion.span>
                 <motion.span 
                   animate={{ opacity: [0, 1, 0] }} 
                   transition={{ repeat: Infinity, duration: 0.8 }}
                   className="inline-block w-2 h-4 bg-emerald-400 ml-1 align-middle"
                 />
               </code>
             </div>
           </div>
        </motion.div>

        {/* Tall Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/50 rounded-3xl p-8 flex flex-col items-start text-left justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-6 text-4xl animate-bounce duration-[2000ms]">
            {language === 'fr' ? '🇫🇷' : '🌍'}
          </div>
          <h3 className="text-xl font-bold mb-2 text-emerald-900 dark:text-emerald-100">{t.bentoLangTitle}</h3>
          <p className="text-sm text-emerald-800 dark:text-emerald-200/70 whitespace-pre-line leading-relaxed">
            {t.bentoLangDesc}
          </p>
        </motion.div>

        {/* Small Card 1 */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 flex flex-col justify-between group cursor-pointer"
        >
            <div className="flex justify-between items-start">
                <Layers className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
            </div>
            <div>
                <h4 className="font-bold text-lg">{t.cardDesign}</h4>
                <p className="text-xs text-zinc-500">{t.cardDesignDesc}</p>
            </div>
        </motion.div>

        {/* Small Card 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 flex flex-col justify-between group cursor-pointer"
        >
             <div className="flex justify-between items-start">
                <Zap className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
            </div>
            <div>
                <h4 className="font-bold text-lg">{t.cardDeploy}</h4>
                <p className="text-xs text-zinc-500">{t.cardDeployDesc}</p>
            </div>
        </motion.div>

      </div>
    </Section>
  );
};

export default Features;
