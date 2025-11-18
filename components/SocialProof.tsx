import React from 'react';
import { PARTNERS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <div className="py-10 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 dark:from-zinc-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 dark:from-zinc-900 to-transparent z-10"></div>
        
        <div className="flex w-[200%] animate-scroll-left">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-zinc-300 dark:text-zinc-700 uppercase tracking-widest hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors cursor-default select-none">
                        {partner}
                    </span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default SocialProof;
