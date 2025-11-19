
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { Cookie } from 'lucide-react';

interface CookieConsentProps {
  language: Language;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = UI_TEXT[language].cookieConsent;

  useEffect(() => {
    const consent = localStorage.getItem('vibe-cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('vibe-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('vibe-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 right-4 z-[60] max-w-[90vw] w-[340px] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full shrink-0 text-emerald-600 dark:text-emerald-400">
                    <Cookie size={20} />
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium pt-1">
                    {t.text}
                </p>
            </div>
            <div className="flex gap-2 justify-end mt-1">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-xs font-semibold text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                {t.decline}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 text-xs font-bold text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-lg hover:scale-105 transition-transform shadow-lg shadow-zinc-900/10 dark:shadow-white/10"
              >
                {t.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
