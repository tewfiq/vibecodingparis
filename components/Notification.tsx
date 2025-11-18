import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface NotificationProps {
  language: Language;
}

const Notification: React.FC<NotificationProps> = ({ language }) => {
  const [visible, setVisible] = useState(false);
  const t = UI_TEXT[language].notification;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000); // Show after 3 seconds
    
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 8000); // Hide after 5 seconds

    return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:w-auto bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-4 rounded-2xl shadow-2xl z-50 flex items-center gap-4 max-w-sm border border-zinc-800 dark:border-zinc-200"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-lg shadow-inner shrink-0">
            👀
          </div>
          <div>
            <p className="text-sm font-bold">{t.user}</p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">{t.action}</p>
          </div>
          <div className="ml-auto text-xs text-zinc-500 font-mono">
            {t.time}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;