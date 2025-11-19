# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Vibe Coding Paris** is a React-based marketing landing page for an AI-assisted creative product building masterclass held in Paris. The site promotes a 2-hour workshop teaching users how to build projects using AI as a copilot, targeting students, job seekers, and professionals without prior coding knowledge.

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Status:** Private project (v0.0.0)
- **Deployment Target:** Google AI Studio + static hosting

## Common Development Commands

### Setup & Installation
```bash
npm install                          # Install dependencies (required first step)
```

### Development
```bash
npm run dev                          # Start dev server on http://localhost:3000
                                    # Server runs on 0.0.0.0 (accessible from network)
```

### Building & Deployment
```bash
npm run build                        # Build for production (outputs to dist/)
npm run preview                      # Preview production build locally
```

### Environment Setup
Create `.env.local` file in project root:
```
GEMINI_API_KEY=your_api_key_here
```

## Architecture & Code Organization

### Directory Structure
```
vibecodingparis/
├── components/                      # 11 React components
│   ├── Navbar.tsx                  # Navigation with theme/language toggle
│   ├── Hero.tsx                    # Main hero section with CTA
│   ├── SocialProof.tsx             # Testimonials/social proof
│   ├── Features.tsx                # Features grid + bento "Why" section
│   ├── Pricing.tsx                 # 2-tier pricing cards
│   ├── FAQ.tsx                     # Accordion-style questions
│   ├── Changelog.tsx               # Version history
│   ├── About.tsx                   # About page
│   ├── Notification.tsx            # Floating notification widget
│   ├── Footer.tsx                  # Footer section
│   └── ui/Section.tsx              # Reusable section wrapper
├── constants.ts                    # All content, translations, pricing (i18n)
├── types.ts                        # TypeScript type definitions
├── App.tsx                         # Root component (routing, theme, language)
├── index.tsx                       # React DOM entry point
├── index.html                      # HTML template with Tailwind CDN
├── vite.config.ts                  # Vite configuration
└── tsconfig.json                   # TypeScript config
```

### Core Architectural Patterns

**1. Component-Based Architecture**
- Modular React components with clear separation of concerns
- Each major page section is its own component
- Small reusable wrapper component (Section.tsx) for consistent spacing

**2. Centralized Content Management**
- ALL text, pricing tiers, FAQs, and features defined in `constants.ts`
- Makes translations and content updates easy without touching components
- Simplifies consistency across the site
- Key exports: `NAV_ITEMS`, `PRICING_TIERS`, `FAQS`, `FEATURES`, `UI_TEXT`, `COMMITS`

**3. Internationalization (i18n)**
- Bilingual support: French ('fr') and English ('en')
- Type-safe with `Language` type ('fr' | 'en')
- Language state managed in `App.tsx`, passed via props
- All UI text keyed in constants by language

**4. Theme Support (Light/Dark Mode)**
- Dark mode toggle in navbar with localStorage persistence
- Uses Tailwind `dark:` prefix classes throughout
- System preference detection on first visit
- Theme class applied to document root

**5. Client-Side Routing**
- Simple view-based routing: 'home' | 'about'
- Navigation handled via scroll behavior for home sections
- About page is separate view
- Managed in App.tsx with onClick handlers

### Key Component Patterns

**App.tsx (Root)**
- Manages dark mode state and localStorage persistence
- Manages language state ('fr' or 'en')
- Manages view routing (home vs about)
- Passes theme and language as props to all children
- Handles scroll-to-section behavior

**Navbar.tsx**
- Scroll detection for glass morphism effect
- Mobile menu toggle with responsive visibility
- Language selector badge
- Theme toggle icons (Moon/Sun from lucide-react)
- Sticky positioning with scroll-based opacity

**Section.tsx (Reusable Wrapper)**
- Consistent vertical spacing (py-20 md:py-32)
- Container width management (max-w-7xl)
- Optional full-width variant
- Used by most page sections for uniform spacing

**Feature Components**
- Accept `language` prop to select correct translations
- Render content from constants.ts
- Use Lucide icons for visual elements
- Implement responsive grids (md: breakpoint)
- Include smooth animations (framer-motion for transitions)

### Styling & Design System

- **CSS Framework:** Tailwind CSS (via CDN in index.html)
- **Icon Library:** Lucide React (0.554.0)
- **Animation Library:** Framer Motion (12.23.24)
- **Color Scheme:**
  - Primary Accent: Emerald (#10b981)
  - Neutrals: Zinc/Gray palette
  - Dark mode fully supported
- **Responsive:** Mobile-first with md (768px) and lg (1024px) breakpoints
- **Effects:** Glass morphism, smooth transitions, fade-in animations

### Type System

Key types defined in `types.ts`:
- `Language`: 'fr' | 'en'
- `ViewState`: 'home' | 'about'
- `NavItem`, `PricingTier`, `FaqItem`, `Commit`, `Feature`
- `UiTranslation`: Complete interface for all UI text

All components are typed with proper TypeScript interfaces for props.

## Important Implementation Details

### Adding New Features

**To add a new page section:**
1. Create new component in `components/YourSection.tsx`
2. Accept `language: Language` prop
3. Pull content from `constants.ts`
4. Use `Section` wrapper for consistent spacing
5. Import and add to appropriate location in App.tsx or other components

**To add new content/translations:**
1. Update `constants.ts` with new data
2. Update types in `types.ts` if adding new data structures
3. Reference in components via `language` prop

**To modify pricing, FAQs, or features:**
1. Only modify `constants.ts`
2. No component changes needed for content updates
3. Ensure both 'fr' and 'en' translations are complete

### Responsive Design Notes
- Desktop-first in Tailwind (apply large screen styles, then override with sm:, md:)
- Mobile menu hidden on desktop (hidden md:flex pattern)
- Bento grid in Features uses grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- All text responsive with sm: size variants

### Performance Considerations
- Minimal dependencies (React, Vite, Tailwind, Lucide, Framer Motion)
- Tailwind loaded from CDN (not bundled)
- No heavy build - Vite provides fast dev server and optimized builds
- No Redux or complex state - just React hooks sufficient for this scope

### Browser Support
- Modern browsers (ES2022 target)
- CSS Grid and Flexbox support required
- CSS custom properties (for Tailwind)
- localStorage API (for theme persistence)

## Git & Deployment

- **Version Control:** Git (check .gitignore for standard Node/Vite exclusions)
- **Deployment Target:** Google AI Studio + static hosting (Vercel/Netlify compatible)
- **Build Output:** `dist/` directory (production-ready)
- **Environment:** `.env.local` contains sensitive keys (Git ignored)

## Useful References

- [Vite Config](./vite.config.ts) - Dev server on port 3000, path aliases, API key exposure
- [TypeScript Config](./tsconfig.json) - ES2022 target, strict mode, decorator support
- [Constants](./constants.ts) - All translatable content and configuration
- [Types](./types.ts) - Complete type definitions for type safety
- [App.tsx](./App.tsx) - Root component structure and routing logic
