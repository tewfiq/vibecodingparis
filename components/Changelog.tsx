
import React, { useEffect, useState } from 'react';
import { Section } from './ui/Section';
import { RECENT_COMMITS, UI_TEXT, GITHUB_REPO } from '../constants';
import { GitCommit, GitPullRequest, Loader2 } from 'lucide-react';
import { Language, Commit } from '../types';

interface ChangelogProps {
  language: Language;
}

const Changelog: React.FC<ChangelogProps> = ({ language }) => {
  const t = UI_TEXT[language].changelog;
  const [commits, setCommits] = useState<Commit[]>(RECENT_COMMITS);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/commits?per_page=3`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        const formattedCommits: Commit[] = data.map((item: any) => ({
          message: item.commit.message.split('\n')[0], // Get first line only
          date: new Date(item.commit.author.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
          author: item.commit.author.name,
          hash: item.sha.substring(0, 7)
        }));

        setCommits(formattedCommits);
        setIsLive(true);
      } catch (error) {
        console.warn('Using fallback commit data due to API error:', error);
        // Keep initial RECENT_COMMITS
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, [language]);
  
  return (
    <Section className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
            <div className="flex items-center gap-2 text-emerald-500 mb-2 font-mono text-sm">
                <GitPullRequest size={16} />
                <span>{t.label}</span>
                {isLive && (
                  <span className="flex h-2 w-2 relative ml-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                )}
            </div>
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <p className="text-zinc-500 text-sm mt-1">{t.subtitle}</p>
        </div>
        <a href={`https://github.com/${GITHUB_REPO}`} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-zinc-500 hover:text-emerald-500 underline decoration-dashed">
            {t.link}
        </a>
      </div>

      <div className="space-y-4">
        {loading ? (
           <div className="flex justify-center py-8">
             <Loader2 className="animate-spin text-zinc-400" />
           </div>
        ) : (
          commits.map((commit, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 font-mono text-sm group hover:border-emerald-500/30 transition-colors animate-in slide-in-from-bottom-2 fade-in duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
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
          ))
        )}
      </div>
    </Section>
  );
};

export default Changelog;
