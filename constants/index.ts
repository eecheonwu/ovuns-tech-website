// Constants for OVUNS.TECH

export const BRAND_COLORS = {
    primary: '#183153',
    accent: '#E63946',
    background: '#FFFFFF',
    surface: '#F7F9FC',
    text: '#222222',
    muted: '#6B7280',
} as const;

export const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Platform', href: '/platform' },
    { name: 'Research', href: '/research' },
    { name: 'Publications', href: '/publications' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
] as const;

export const RESEARCH_LINKS = {
    founder: 'https://eecheonwu.github.io',
    knowledgeBase: 'https://eecheonwu.github.io/scse-knowledge-base/',
} as const;

export const CONTACT_INFO = {
    email: 'research@ovuns.tech',
    linkedin: 'https://linkedin.com/company/ovuns-tech',
    github: 'https://github.com/eecheonwu',
} as const;

export const SITE_CONFIG = {
    name: 'OVUNS.TECH',
    tagline: 'Research. Intelligence. Engineering.',
    headline: 'Engineering the Future of Intelligent Software',
    url: 'https://ovuns.tech',
} as const;