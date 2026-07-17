# OVUNS.TECH Corporate Website

A premium, modern, responsive corporate website for OVUNS.TECH, an AI-first Software Engineering Research & Development startup.

## Technology Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **next-themes** - Dark mode support
- **Lucide React** - Icon library

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
ovuns.net/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # SEO sitemap
│   ├── robots.ts          # SEO robots
│   ├── manifest.ts        # PWA manifest
│   ├── platform/          # Platform page
│   ├── research/          # Research page
│   ├── publications/      # Publications page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── KnowledgeGraph.tsx
│   ├── Roadmap.tsx
│   ├── ContactForm.tsx
│   ├── LogoCloud.tsx
│   ├── ThemeToggle.tsx
│   └── ThemeProvider.tsx
├── public/                # Static assets
│   └── logo.png           # Corporate logo
├── types/                 # TypeScript type definitions
├── constants/             # Application constants
├── utils/                 # Utility functions
├── hooks/                 # Custom React hooks
├── lib/                   # Server-side utilities
└── styles/                # Additional styles
```

## Features

- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Dark Mode** - Full dark mode support with system preference detection
- **SEO Optimized** - Metadata, Open Graph, Twitter Cards, sitemap, robots
- **PWA Ready** - Manifest for installable experience
- **Accessibility** - WCAG AA compliant with semantic HTML
- **Performance** - Optimized for Lighthouse scores 95+

## Deployment

Deploy to Vercel with zero configuration:

```bash
npm install -g vercel
vercel
```

## License

© 2024 OVUNS.TECH. All rights reserved.
