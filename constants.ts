
import { NavItem, PricingTier, FaqItem, Commit, Feature, UiTranslation } from './types';
import { Code, Zap, Box, Globe } from 'lucide-react';

export const BOOKING_URL = "https://cal.com/tewfiqferahi/15min";
export const GITHUB_REPO = "tewfiq/vibecodingparis"; // Change this to your actual public repo name
export const STRIPE_LINK_STUDENT = "https://buy.stripe.com/bJe8wQ3dN7NGc5EcJv7EQ0b";
export const STRIPE_LINK_STANDARD = "https://buy.stripe.com/bJe5kEdSrgkcfhQaBn7EQ0c";

export const NAV_ITEMS: Record<'fr' | 'en', NavItem[]> = {
  fr: [
    { label: 'Programme', href: '#programme' },
    { label: 'Pourquoi', href: '#why' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  en: [
    { label: 'Program', href: '#programme' },
    { label: 'Why', href: '#why' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]
};

export const PRICING_TIERS: Record<'fr' | 'en', PricingTier[]> = {
  fr: [
    {
      name: 'Étudiant / -26 ans',
      price: '149 €',
      originalPrice: '299 €',
      description: 'Pour les étudiants et demandeurs d\'emploi.\nUne compétence décisive pour votre avenir.',
      features: [
        'Atelier 2h complet en présentiel',
        'Coaching & accompagnement personnalisé',
        'Accès aux outils IA (Cursor, V0, etc.)',
        'Projet déployé en ligne à la fin',
        'Communauté Discord privée'
      ],
      highlight: true,
      cta: "Je m'inscris — 149 €",
      link: STRIPE_LINK_STUDENT
    },
    {
      name: 'Professionnel',
      price: '299 €',
      originalPrice: '599 €',
      description: 'Pour les professionnels souhaitant maîtriser le Product Building assisté par IA.',
      features: [
        'Atelier 2h intensif en présentiel',
        'Méthode complète end-to-end',
        'Support prioritaire post-atelier',
        'Kit documentaire avancé',
        'Facture déductible (Frais pro)'
      ],
      highlight: false,
      cta: "Réserver — 299 €",
      link: STRIPE_LINK_STANDARD
    }
  ],
  en: [
    {
      name: 'Student / Under 26',
      price: '€149',
      originalPrice: '€299',
      description: 'For students and job seekers.\nA decisive skill for your future.',
      features: [
        'Full 2h in-person workshop',
        'Coaching & personalized support',
        'Access to AI tools (Cursor, V0, etc.)',
        'Project deployed online at the end',
        'Private Discord community'
      ],
      highlight: true,
      cta: "Sign up — €149",
      link: STRIPE_LINK_STUDENT
    },
    {
      name: 'Professional',
      price: '€299',
      originalPrice: '€599',
      description: 'For professionals wanting to master AI-assisted Product Building.',
      features: [
        'Intensive 2h in-person workshop',
        'Complete end-to-end method',
        'Priority post-workshop support',
        'Advanced documentation kit',
        'Deductible invoice (Pro expense)'
      ],
      highlight: false,
      cta: "Book now — €299",
      link: STRIPE_LINK_STANDARD
    }
  ]
};

export const FAQS: Record<'fr' | 'en', FaqItem[]> = {
  fr: [
    {
      question: "Faut-il savoir coder avant de venir ?",
      answer: "Absolument pas. C'est toute la promesse : apprendre à 'coder sans coder' en utilisant l'IA comme copilote. Nous utilisons le langage naturel (Français) pour générer du code."
    },
    {
      question: "Repartez-vous vraiment avec un site en ligne ?",
      answer: "Oui. À la fin des 2 heures, vous aurez déployé votre projet sur une URL publique (Netlify/Vercel) accessible depuis n'importe où."
    },
    {
      question: "Le code m'appartient-il ?",
      answer: "Totalement. Vous repartez avec votre dépôt GitHub, votre code source, et la propriété intellectuelle complète de ce que vous avez créé."
    },
    {
      question: "Et si je n'ai pas d'idée de projet ?",
      answer: "Aucun problème. La première phase 'Intention' sert justement à cela. Nous utilisons un LLM pour brainstorming et trouver une idée réalisable en 2h."
    }
  ],
  en: [
    {
      question: "Do I need to know how to code?",
      answer: "Absolutely not. That's the promise: learn to 'code without coding' using AI as a copilot. We use natural language to generate code."
    },
    {
      question: "Do I really leave with a live site?",
      answer: "Yes. By the end of the 2 hours, you will have deployed your project to a public URL (Netlify/Vercel) accessible from anywhere."
    },
    {
      question: "Do I own the code?",
      answer: "Totally. You leave with your GitHub repository, your source code, and full intellectual property of what you've created."
    },
    {
      question: "What if I don't have a project idea?",
      answer: "No problem. The first 'Intention' phase is designed for exactly that. We use an LLM to brainstorm and find an idea achievable in 2 hours."
    }
  ]
};

// Fallback data if GitHub API limit is reached
export const RECENT_COMMITS: Commit[] = [
  { message: "feat: update landing page for December 2025", date: "16 nov 2025", author: "Tewfiq", hash: "7a2b9c" },
  { message: "fix: mobile responsiveness for pricing grid", date: "15 nov 2025", author: "Tewfiq", hash: "8c3d1e" },
  { message: "docs: add student testimonials", date: "14 nov 2025", author: "Sarah", hash: "9e4f2a" },
];

export const FEATURES: Record<'fr' | 'en', Feature[]> = {
  fr: [
    {
      title: "Intention",
      description: "Clarifiez votre idée avec l'IA. Pas de jargon technique. Méthode Kindlin : Problème → Solution → Business Model.",
      icon: Box,
    },
    {
      title: "Build",
      description: "Codez en Français. 'Crée-moi une landing page'. L'IA écrit le React, le Tailwind, et la logique pour vous.",
      icon: Code,
    },
    {
      title: "Ship",
      description: "Mise en ligne immédiate. De votre ordinateur au monde entier via GitHub et Netlify en un clic.",
      icon: Globe,
    },
  ],
  en: [
    {
      title: "Intention",
      description: "Clarify your idea with AI. No technical jargon. Kindlin Method: Problem → Solution → Business Model.",
      icon: Box,
    },
    {
      title: "Build",
      description: "Code in plain English. 'Create a landing page'. AI writes React, Tailwind, and logic for you.",
      icon: Code,
    },
    {
      title: "Ship",
      description: "Immediate deployment. From your computer to the world via GitHub and Netlify in one click.",
      icon: Globe,
    },
  ]
};

export const PARTNERS = [
  "LVMH", "Station F", "HEC Paris", "Le Wagon", "Kengo", "Ray Ban Meta", "Moon Croissant"
];

export const UI_TEXT: Record<'fr' | 'en', UiTranslation> = {
  fr: {
    hero: {
      badge: "Prochaine Session : Décembre 2025",
      title: "Une compétence \nen 2 heures.",
      subtitle: "Apprenez à coder sans coder. De l'idée au site en ligne, en français, avec l'IA comme copilote. Rien de personnel, juste du shipping.",
      ctaPrimary: "Je m'inscris — 149 €",
      ctaSecondary: "Le Programme",
      socialProof: ["+1000 formés", "Paris Centre", "Débutant accepté"],
      codeComment: "// Génération du composant...",
      codeString: "Crée-moi une landing page moderne pour un atelier IA.",
    },
    features: {
      title: "Rien de magique.\nJuste de la méthode.",
      subtitle: "En 2 heures, nous passons de l'abstrait au concret.\nUne approche structurée pour dompter les LLMs.",
      bentoAdvantageTitle: "L'avantage injuste.",
      bentoAdvantageDesc: "Pendant que d'autres apprennent la syntaxe Python, vous apprenez à orchestrer l'IA.\nC'est la compétence la plus levier de la décennie.",
      bentoLangTitle: "En Français",
      bentoLangDesc: "\"Crée une app de to-do list\".\nC'est tout ce que vous avez à dire.\nLa barrière de la langue n'existe plus.\n\nPlus de syntaxe à apprendre. Concentrez-vous uniquement sur la valeur de votre produit.",
      cardDesign: "Design System",
      cardDesignDesc: "Inclus automatiquement.",
      cardDeploy: "Déploiement",
      cardDeployDesc: "En ligne en 1 clic.",
    },
    pricing: {
      title: "Investissez en vous.",
      subtitle: "Des tarifs clairs.\nUne compétence à vie.",
      company: "🏢 Entreprises ou Écoles ?",
      companyLink: "Demandez un devis",
      launchPeriod: "⚡️ Prix de lancement valables pour les sessions des 3 prochains mois.",
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir avant de réserver votre place.",
    },
    changelog: {
      label: "Changelog & Activité",
      title: "Construit en public.",
      subtitle: "Ce site utilise la méthode exacte enseignée lors de la masterclass.",
      link: "Voir le repo GitHub →",
    },
    footer: {
      copyright: "© 2025. Rien de personnel.",
      links: {
        about: "À propos",
        blog: "Blog",
        contact: "Contact",
        legal: "Mentions Légales",
      }
    },
    about: {
      back: "Retour à l'accueil",
      role: "Fondateur & Formateur Principal",
      bioHighlight: "Expert en transformation digitale avec plus de 20 ans d'expérience et 15 ans en design UX/UI.",
      bio1: "Tewfiq a collaboré avec plus de 30 clients, incluant des startups agiles, des PME ambitieuses, des entreprises du CAC 40, du Fortune 500 et des acteurs majeurs du service public français.",
      bio2: "Il excelle dans l'acculturation, la transmission et le coaching, s'engageant à accompagner les étudiants et les jeunes professionnels vers l'excellence technique et créative.",
      quote: "\"Ma mission est de rendre le Design Stratégique et les Solutions de Generative AI accessibles à tous, en combinant Créativité, Technologies et Business pour générer des impacts significatifs.\"",
      bio3: "Diplômé en sciences économiques, il a cofondé deux Startups à Paris et San Francisco, apportant un mindset entrepreneurial authentique et une expertise pointue en technologies émergentes.",
      bio4: "Early adopter invétéré et passionné par la veille technologique, il mêle design, digital, business et mentoring pour développer des solutions innovantes et percutantes.",
    },
    cookieConsent: {
      text: "Ce site utilise des cookies pour fonctionner. Rien de personnel.",
      accept: "Accepter",
      decline: "Refuser"
    },
    notification: {
      user: "Nouvel inscrit",
      action: "vient de réserver sa place",
      time: "à l'instant"
    }
  },
  en: {
    hero: {
      badge: "Next Session: December 2025",
      title: "One skill \nin 2 hours.",
      subtitle: "Learn to code without coding. From idea to live site, using AI as your copilot. Nothing personal, just shipping.",
      ctaPrimary: "Sign up — €149",
      ctaSecondary: "The Program",
      socialProof: ["+1000 trained", "Central Paris", "Beginners welcome"],
      codeComment: "// Generating component...",
      codeString: "Create a modern landing page for an AI workshop.",
    },
    features: {
      title: "No magic.\nJust method.",
      subtitle: "In 2 hours, we go from abstract to concrete.\nA structured approach to taming LLMs.",
      bentoAdvantageTitle: "The unfair advantage.",
      bentoAdvantageDesc: "While others learn Python syntax, you learn to orchestrate AI.\nIt's the highest leverage skill of the decade.",
      bentoLangTitle: "Natural Language",
      bentoLangDesc: "\"Create a to-do list app\".\nThat's all you have to say.\nThe language barrier is gone.\n\nNo more syntax to learn. Focus solely on the value of your product.",
      cardDesign: "Design System",
      cardDesignDesc: "Included automatically.",
      cardDeploy: "Deployment",
      cardDeployDesc: "Online in 1 click.",
    },
    pricing: {
      title: "Invest in yourself.",
      subtitle: "Clear pricing.\nA lifelong skill.",
      company: "🏢 Companies or Schools?",
      companyLink: "Request a quote",
      launchPeriod: "⚡️ Launch pricing valid for sessions in the next 3 months.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know before booking your spot.",
    },
    changelog: {
      label: "Changelog & Activity",
      title: "Built in public.",
      subtitle: "This site uses the exact method taught during the masterclass.",
      link: "View GitHub repo →",
    },
    footer: {
      copyright: "© 2025. Nothing personal.",
      links: {
        about: "About",
        blog: "Blog",
        contact: "Contact",
        legal: "Legal",
      }
    },
    about: {
      back: "Back to home",
      role: "Founder & Lead Instructor",
      bioHighlight: "Digital transformation expert with over 20 years of experience and 15 years in UX/UI design.",
      bio1: "Tewfiq has collaborated with over 30 clients, including agile startups, ambitious SMEs, CAC 40 companies, Fortune 500s, and major players in the French public service.",
      bio2: "He excels in acculturation, transmission, and coaching, committed to guiding students and young professionals toward technical and creative excellence.",
      quote: "\"My mission is to make Strategic Design and Generative AI Solutions accessible to everyone, combining Creativity, Technology, and Business to generate significant impact.\"",
      bio3: "A graduate in Economics, he co-founded two Startups in Paris and San Francisco, bringing an authentic entrepreneurial mindset and deep expertise in emerging technologies.",
      bio4: "An inveterate early adopter passionate about tech trends, he blends design, digital, business, and mentoring to develop innovative and impactful solutions.",
    },
    cookieConsent: {
      text: "This site uses cookies to function. Nothing personal.",
      accept: "Accept",
      decline: "Decline"
    },
    notification: {
      user: "New attendee",
      action: "just booked a spot",
      time: "just now"
    }
  }
};
