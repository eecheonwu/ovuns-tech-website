// Type definitions for OVUNS.TECH

export interface Publication {
    id: string;
    title: string;
    category: 'paper' | 'whitepaper' | 'book' | 'report';
    authors: string;
    venue: string;
    year: string;
    abstract: string;
    link: string;
    tags: string[];
}

export interface ResearchPillar {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    desc: string;
}

export interface RoadmapStep {
    phase: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    deliverables: string[];
    status: 'completed' | 'current' | 'future';
    date: string;
}

export interface Feature {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    desc: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface ContactDetail {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
    href: string;
}

export interface Value {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    desc: string;
}