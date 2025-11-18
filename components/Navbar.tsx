import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  toggleLanguage: () => void;
  onNavigate: (target: string) => void;
  currentView: 'home' | 'about';
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, language, toggleLanguage, onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setMobileMenuOpen(false);
  };

  const items = NAV_ITEMS[language];
  const reserveLabel = language === 'fr' ? 'Réserver' : 'Book now';
  const reserveMobileLabel = language === 'fr' ? 'Réserver ma place' : 'Book my spot';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass border-b border-zinc-200 dark:border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          Vibe Coding<span className="hidden sm:inline opacity-50 font-normal">Paris</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
          
          <div className="flex items-center gap-2 border-l border-zinc-200 dark:border-zinc-800 pl-6">
            <button 
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-mono text-xs font-bold"
                aria-label="Toggle Language"
            >
                {language.toUpperCase()}
            </button>
            <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle Theme"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button 
            onClick={() => handleNavClick('#pricing')}
            className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
          >
            {reserveLabel}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button 
            onClick={toggleLanguage}
             className="p-2 font-mono text-xs font-bold"
          >
            {language.toUpperCase()}
          </button>
           <button 
            onClick={toggleDarkMode}
            className="p-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
           {items.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className="text-lg font-medium text-zinc-800 dark:text-zinc-200 py-2 border-b border-zinc-100 dark:border-zinc-900 text-left"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('#pricing')}
            className="bg-emerald-600 text-white w-full py-3 rounded-xl text-center font-bold mt-2"
          >
            {reserveMobileLabel}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;