
export type Language = 'fr' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
  link: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Commit {
  message: string;
  date: string;
  author: string;
  hash: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: any;
}

export interface UiTranslation {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    socialProof: string[];
    codeComment: string;
    codeString: string;
  };
  features: {
    title: string;
    subtitle: string;
    bentoAdvantageTitle: string;
    bentoAdvantageDesc: string;
    bentoLangTitle: string;
    bentoLangDesc: string;
    cardDesign: string;
    cardDesignDesc: string;
    cardDeploy: string;
    cardDeployDesc: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    company: string;
    companyLink: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  changelog: {
    label: string;
    title: string;
    subtitle: string;
    link: string;
  };
  footer: {
    copyright: string;
    links: {
      about: string;
      blog: string;
      contact: string;
      legal: string;
    };
  };
  about: {
    back: string;
    role: string;
    bioHighlight: string;
    bio1: string;
    bio2: string;
    quote: string;
    bio3: string;
    bio4: string;
  };
  cookieConsent: {
    text: string;
    accept: string;
    decline: string;
  };
  notification: {
    user: string;
    action: string;
    time: string;
  };
}