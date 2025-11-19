import React, { useEffect } from 'react';
import { Language } from '../types';

interface SEOProps {
  language: Language;
  view: 'home' | 'about';
}

const SEO: React.FC<SEOProps> = ({ language, view }) => {
  const isFr = language === 'fr';
  const baseUrl = "https://vibecodingparis.com";

  const meta = {
    home: {
      title: isFr 
        ? "Vibe Coding Paris - Masterclass Product Builder IA" 
        : "Vibe Coding Paris - AI Product Builder Masterclass",
      description: isFr
        ? "Une compétence en 2h. Apprenez à coder sans coder avec l'IA. De l'idée au site en ligne. Masterclass Product Builder à Paris."
        : "One skill in 2 hours. Learn to code without coding using AI. From idea to live site. Product Builder Masterclass in Paris.",
      path: "/"
    },
    about: {
      title: isFr
        ? "À Propos - Tewfiq Ferahi | Vibe Coding Paris"
        : "About - Tewfiq Ferahi | Vibe Coding Paris",
      description: isFr
        ? "Découvrez Tewfiq Ferahi, fondateur de Vibe Coding Paris. Expert en transformation digitale et design UX/UI depuis 20 ans."
        : "Meet Tewfiq Ferahi, founder of Vibe Coding Paris. Digital transformation and UX/UI design expert with 20 years of experience.",
      path: "/about" // Note: Since it's an SPA, real path might be /#about or just /, but canonical helps define the "source of truth"
    }
  };

  const currentMeta = meta[view];

  useEffect(() => {
    // Update Title
    document.title = currentMeta.title;

    // Update HTML Lang
    document.documentElement.lang = language;

    // Helper function to update meta tags
    const updateMetaTag = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    // Helper function to update canonical link
    const updateCanonical = (url: string) => {
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', url);
    };

    // Update Description
    updateMetaTag('meta[name="description"]', currentMeta.description);

    // Update Open Graph
    updateMetaTag('meta[property="og:title"]', currentMeta.title);
    updateMetaTag('meta[property="og:description"]', currentMeta.description);
    updateMetaTag('meta[property="og:locale"]', isFr ? 'fr_FR' : 'en_US');
    updateMetaTag('meta[property="og:url"]', `${baseUrl}${currentMeta.path}`);

    // Update Twitter
    updateMetaTag('meta[property="twitter:title"]', currentMeta.title);
    updateMetaTag('meta[property="twitter:description"]', currentMeta.description);
    updateMetaTag('meta[property="twitter:url"]', `${baseUrl}${currentMeta.path}`);

    // Update Canonical
    updateCanonical(`${baseUrl}${currentMeta.path === '/' ? '' : currentMeta.path}`);

  }, [language, view, currentMeta, isFr]);

  return null;
};

export default SEO;