
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Changelog from './components/Changelog';
import Footer from './components/Footer';
import About from './components/About';
import CookieConsent from './components/CookieConsent';
import SEO from './components/SEO';
import { Language } from './types';

export type ViewState = 'home' | 'about';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [language, setLanguage] = useState<Language>('fr');

  // Theme toggle logic
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  }

  const handleNavigate = (target: string) => {
    if (target === 'about') {
      setCurrentView('about');
      window.scrollTo(0, 0);
    } else if (target === 'home') {
      setCurrentView('home');
      window.scrollTo(0, 0);
    } else if (target.startsWith('#')) {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo(0,0);
        }
      }, 100);
    }
  };

  return (
    <>
      <SEO language={language} view={currentView} />
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-300">
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          language={language}
          toggleLanguage={toggleLanguage}
          onNavigate={handleNavigate}
          currentView={currentView}
        />
        
        <main className="relative">
          {/* Background Gradients for "Vibe" */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />
          
          {currentView === 'home' ? (
            <div className="animate-fade-in-up">
              <Hero language={language} />
              <SocialProof />
              <Features language={language} />
              <Pricing language={language} />
              <Changelog language={language} />
              <FAQ language={language} />
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <About language={language} onBack={() => handleNavigate('home')} />
            </div>
          )}
        </main>

        <Footer language={language} onNavigate={handleNavigate} />
        
        <CookieConsent language={language} />
      </div>
    </>
  );
}

export default App;
