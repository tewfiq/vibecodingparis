import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FAQS, UI_TEXT } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { Language } from '../types';

interface FAQProps {
  language: Language;
}

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = UI_TEXT[language].faq;
  const faqs = FAQS[language];

  return (
    <Section id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            {t.subtitle}
          </p>
        </div>
        <div className="lg:col-span-8 space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <span className="font-medium text-lg pr-8">{faq.question}</span>
                {openIndex === idx ? <Minus size={20} className="text-emerald-500"/> : <Plus size={20} className="text-zinc-400"/>}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;