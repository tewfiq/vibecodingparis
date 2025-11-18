import React from 'react';
import { Section } from './ui/Section';
import { RECENT_COMMITS, UI_TEXT } from '../constants';
import { GitCommit, GitPullRequest } from 'lucide-react';
import { Language } from '../types';

interface ChangelogProps {
  language: Language;
}

const Changelog: React.FC<ChangelogProps> = ({ language }) => {
  const t = UI_TEXT[language].changelog;
  
  return (
    <Section className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
            <div className="flex items-center gap-2 text-emerald-500 mb-2 font-mono text-sm">
                <GitPullRequest size={16} />
                <span>{t.label}</span>
            </div>
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <p className="text-zinc-500 text-sm mt-1">{t.subtitle}</p>
        </div>
        <a href="#" className="text-sm font-mono text-zinc-500 hover:text-emerald-500 underline decoration-dashed">
            {t.link}
        </a>
      </div>

      <div className="space-y-4">
        {RECENT_COMMITS.map((commit, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 font-mono text-sm group hover:border-emerald-500/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                    <GitCommit size={16} className="text-zinc-500 group-hover:text-emerald-500" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="truncate text-zinc-800 dark:text-zinc-200 font-medium">{commit.message}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{commit.date} {language === 'fr' ? 'par' : 'by'} <span className="text-emerald-600 dark:text-emerald-400">{commit.author}</span></p>
                </div>
                <div className="hidden sm:block px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-xs">
                    {commit.hash}
                </div>
            </div>
        ))}
      </div>
    </Section>
  );
};

export default Changelog;