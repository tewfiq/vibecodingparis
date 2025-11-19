
import React from 'react';
import { Section } from './ui/Section';
import { FEATURES, UI_TEXT } from '../constants';
import { ArrowUpRight, Cpu, Layers, Zap } from 'lucide-react';
import { Language } from '../types';

interface FeaturesProps {
  language: Language;
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const t = UI_TEXT[language].features;
  const featuresList = FEATURES[language];

  return (
    <Section id="programme">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 whitespace-pre-line">{t.title}</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto whitespace-pre-line">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresList.map((feature, idx) => (
          <div key={idx} className="group bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <feature.icon className="text-emerald-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bento Grid Extension for "Why" */}
      <div id="why" className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[500px]">
        
        {/* Big Card */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-zinc-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
           <div className="absolute top-0 right-0 p-12 opacity-10">
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
               <code className="text-sm font-mono text-emerald-400">
                 &gt; VibeCoding.init({'{'} skill: "Rare" {'}'});<br/>
                 &gt; Success.
               </code>
             </div>
           </div>
        </div>

        {/* Tall Card */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/50 rounded-3xl p-8 flex flex-col items-center text-center justify-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-6 text-4xl">
            {language === 'fr' ? '🇫🇷' : '🌍'}
          </div>
          <h3 className="text-xl font-bold mb-2 text-emerald-900 dark:text-emerald-100">{t.bentoLangTitle}</h3>
          <p className="text-sm text-emerald-800 dark:text-emerald-200/70 whitespace-pre-line">
            {t.bentoLangDesc}
          </p>
        </div>

        {/* Small Card 1 */}
        <div className="col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 flex flex-col justify-between group cursor-pointer">
            <div className="flex justify-between items-start">
                <Layers className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
                <h4 className="font-bold text-lg">{t.cardDesign}</h4>
                <p className="text-xs text-zinc-500">{t.cardDesignDesc}</p>
            </div>
        </div>

        {/* Small Card 2 */}
        <div className="col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 flex flex-col justify-between group cursor-pointer">
             <div className="flex justify-between items-start">
                <Zap className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
                <h4 className="font-bold text-lg">{t.cardDeploy}</h4>
                <p className="text-xs text-zinc-500">{t.cardDeployDesc}</p>
            </div>
        </div>

      </div>
    </Section>
  );
};

export default Features;
