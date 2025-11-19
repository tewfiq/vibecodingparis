
import React from 'react';
import { Section } from './ui/Section';
import { PRICING_TIERS, UI_TEXT } from '../constants';
import { Check } from 'lucide-react';
import { Language } from '../types';

interface PricingProps {
  language: Language;
}

const Pricing: React.FC<PricingProps> = ({ language }) => {
  const t = UI_TEXT[language].pricing;
  const tiers = PRICING_TIERS[language];

  return (
    <Section id="pricing" className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h2>
        <p className="text-zinc-500 dark:text-zinc-400 whitespace-pre-line">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {tiers.map((tier, idx) => (
          <div 
            key={idx}
            className={`relative rounded-3xl p-8 flex flex-col ${
              tier.highlight 
                ? 'bg-white dark:bg-zinc-900 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10' 
                : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 opacity-90 hover:opacity-100 transition-opacity'
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                {language === 'fr' ? 'Recommandé' : 'Recommended'}
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-zinc-500 dark:text-zinc-400 mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-900 dark:text-white">{tier.price}</span>
                <span className="text-zinc-400 text-sm">/ session</span>
              </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                {tier.description}
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <Check className="text-emerald-500 shrink-0" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${
              tier.highlight
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:scale-[1.02]'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-zinc-500 text-sm">
          {t.company} <a href="#" className="text-emerald-500 underline font-medium">{t.companyLink}</a>
        </p>
      </div>
    </Section>
  );
};

export default Pricing;
