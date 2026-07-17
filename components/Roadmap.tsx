'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Globe, Cpu, ArrowUpRight } from 'lucide-react';

interface RoadmapStep {
  phase: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  deliverables: string[];
  status: 'completed' | 'current' | 'future';
  date: string;
}

export function Roadmap() {
  const steps: RoadmapStep[] = [
    {
      phase: 'Phase 1',
      title: 'Foundational Research',
      date: '2023 - 2024',
      icon: Search,
      status: 'completed',
      description: 'Formal mathematical formulation of the SSOT-Centric Software Engineering (SCSE) framework. Publication of white papers and validation of the architecture.',
      deliverables: [
        'SSOT-Centric Engineering Core Thesis',
        'Academic publication ecosystem launch',
        'Mathematical proof of continuous synchronization'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Prototype & Integration',
      date: '2024 - 2025',
      icon: Cpu,
      status: 'completed',
      description: 'Developing the initial assembly engine and context injection pipeline. Successfully synchronizing system specifications with live code in laboratory environments.',
      deliverables: [
        'Context Assembly Engine MVP',
        'Git-integrated specification parser',
        'AI agent reference test bed'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'The Engineering Intelligence Platform',
      date: '2025 - 2026',
      icon: Code2,
      status: 'current',
      description: 'Launch of the production-ready developer platform. Unifying Requirements, Architecture, Code, and Docs into a synchronized Knowledge Graph with AI-powered planning and agent orchestration.',
      deliverables: [
        'Unified Knowledge Graph Visualizer',
        'Bidirectional agent synchronization sync-engine',
        'Next.js 15 / React 19 SDK integration'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Enterprise & Sovereignty',
      date: '2026 - 2027',
      icon: Globe,
      status: 'future',
      description: 'Expanding the platform for secure corporate deployments, air-gapped systems, custom agent planning architectures, and university collaborations.',
      deliverables: [
        'Air-gapped deployment profiles',
        'Multi-agent role planning systems',
        'Enterprise access control governance models'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Global Adoption',
      date: '2027+',
      icon: Globe,
      status: 'future',
      description: 'Standardizing SSOT-Centric Software Engineering protocols globally, forming the baseline requirements for fully autonomous engineering teams.',
      deliverables: [
        'ISO-compliant engineering sync schema',
        'Fully autonomous agent coding compliance specs',
        'Global developer R&D network integration'
      ]
    }
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className="w-full py-6">
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
        {steps.map((step, index) => {
          const isCompleted = step.status === 'completed';
          const isCurrent = step.status === 'current';

          return (
            <motion.div
              key={step.phase}
              className="relative pl-8 md:pl-10 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Dot Icon Indicator */}
              <div
                className={`absolute left-0 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isCompleted
                  ? 'bg-brand-primary border-brand-primary text-white dark:bg-white dark:border-white dark:text-brand-primary'
                  : isCurrent
                    ? 'bg-white border-brand-accent text-brand-accent dark:bg-brand-dark-bg animate-pulse'
                    : 'bg-white border-slate-300 text-slate-400 dark:bg-brand-dark-bg dark:border-slate-800'
                  }`}
              >
                <step.icon className="w-3.5 h-3.5" />
              </div>

              {/* Card Box */}
              <div className="bg-white dark:bg-brand-dark-surface/40 border border-slate-200/60 dark:border-slate-800/40 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isCompleted
                      ? 'bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-400'
                      : isCurrent
                        ? 'bg-brand-accent/10 text-brand-accent dark:bg-brand-accent/20'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400'
                      }`}>
                      {step.phase}
                    </span>
                    <span className="text-xs font-mono font-medium text-brand-muted dark:text-brand-dark-muted">
                      {step.date}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-brand-muted dark:text-brand-dark-muted">
                    {step.status === 'completed' && 'Completed'}
                    {step.status === 'current' && 'In Progress'}
                    {step.status === 'future' && 'Planned'}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base md:text-lg text-brand-primary dark:text-white mb-2 group-hover:text-brand-accent transition-colors duration-150">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-muted dark:text-brand-dark-muted leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-brand-primary dark:text-white font-display">
                    Key Outcomes:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-brand-muted dark:text-brand-dark-muted">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-brand-accent mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
