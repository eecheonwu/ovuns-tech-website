'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Database, Activity, FileText, Cpu, Eye, GitBranch, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Platform() {
  const sections = [
    {
      id: 'ssot',
      icon: Database,
      title: 'Engineering SSOT Engine',
      tagline: 'The Memory of the Platform',
      desc: 'Creates, manages, versions, and maintains the authoritative engineering knowledge repository. The Engineering SSOT Engine addresses the Engineering Knowledge Crisis by consolidating requirements, architecture, decisions, APIs, tasks, tests, and their relationships into a single source of truth.',
      details: [
        'Import engineering artifacts in Markdown, YAML, JSON, OpenAPI, Mermaid, PDF, and DOCX formats.',
        'Version-control all Engineering SSOT artifacts with complete metadata.',
        'Maintain traceability relationships between requirements, architecture, and implementation.',
      ],
    },
    {
      id: 'graph',
      icon: Eye,
      title: 'Knowledge Graph Engine',
      tagline: 'Semantic Relationships',
      desc: 'Maintains and queries relationships between all engineering artifacts in the SSOT. Automatically generates a knowledge graph from imported engineering artifacts, enabling dependency discovery and graph traversal queries.',
      details: [
        'Automatic knowledge graph generation from engineering artifacts.',
        'Dependency discovery for upstream and downstream relationships.',
        'Graph traversal queries to navigate artifact relationships.',
      ],
    },
    {
      id: 'assembly',
      icon: FileText,
      title: 'Context Assembly Engine',
      tagline: 'Focused Prompt Injector',
      desc: 'Solves the "lost in the middle" token waste problem for LLMs. Instead of feeding entire directories, the engine dynamically crawls the Knowledge Graph to extract only the exact dependency paths, types, interfaces, and guidelines required for the current task.',
      details: [
        'Saves up to 80% on LLM token costs.',
        'Avoids context pollution and unrelated file noise.',
        'Ensures context package conforms to current branch realities.',
      ],
    },
    {
      id: 'planning',
      icon: Cpu,
      title: 'Planning Engine',
      tagline: 'Mathematical Sequencing',
      desc: 'Generates and manages engineering plans using the Engineering SSOT as input. Creates Implementation Plans, Task Plans, Sprint Plans, and Feature Plans with full traceability to originating SSOT artifacts.',
      details: [
        'Generate Implementation Plans from requirements and architecture.',
        'Create Task Plans with descriptions, acceptance criteria, and dependencies.',
        'Support plan approval workflows for human review.',
      ],
    },
    {
      id: 'agents',
      icon: Activity,
      title: 'Agent Orchestration Engine',
      tagline: 'Specialized Role Networks',
      desc: 'Creates and manages project-specific AI agents, each receiving only the knowledge relevant to its role. Supports Developer, Architecture, Review, Testing, Documentation, and Security agents with role-based knowledge access.',
      details: [
        'Project-specific AI agents with role-based knowledge access.',
        'Multi-turn conversations with context assembly.',
        'All agent interactions logged for audit and traceability.',
      ],
    },
    {
      id: 'sync',
      icon: GitBranch,
      title: 'Synchronization Engine',
      tagline: 'Bidirectional Git Hooks',
      desc: 'Detects and manages drift between the Engineering SSOT and implementation artifacts. Performs drift detection, generates drift reports, and suggests updates to resolve inconsistencies.',
      details: [
        'Detect drift between SSOT and imported code repositories.',
        'Generate drift reports with severity and recommended actions.',
        'Track synchronization history with timestamps and results.',
      ],
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent mb-3">
            Core Architecture
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-primary dark:text-white leading-tight">
            The Engineering Intelligence Platform
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-muted dark:text-brand-dark-muted leading-relaxed">
            A comprehensive suite of tools built to establish, govern, and synchronize the Single Source of Truth for software systems.
          </p>
        </div>

        {/* Modular Sections Grid */}
        <div className="space-y-16 md:space-y-24">
          {sections.map((section, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.section
                key={section.id}
                id={section.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-slate-100 dark:border-slate-900/50 pb-12 md:pb-20 last:border-b-0 last:pb-0 ${isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
              >
                {/* Content Block */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/5 dark:bg-white/5 flex items-center justify-center text-brand-accent border border-brand-accent/10">
                      <section.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">
                      {section.tagline}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-primary dark:text-white">
                    {section.title}
                  </h2>

                  <p className="text-sm sm:text-base text-brand-muted dark:text-brand-dark-muted leading-relaxed">
                    {section.desc}
                  </p>

                  <ul className="space-y-2.5 pt-3">
                    {section.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-muted dark:text-brand-dark-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Illustration Placeholder Block */}
                <div className="flex-1 w-full max-w-md lg:max-w-none aspect-[16/10] bg-slate-50 dark:bg-brand-dark-surface/10 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 p-6 flex flex-col justify-between shadow-inner relative overflow-hidden group">
                  <div className="text-[10px] font-mono text-brand-muted dark:text-brand-dark-muted uppercase tracking-wider">
                    Specification Matrix - {section.id.toUpperCase()}
                  </div>

                  {/* Decorative CSS visualizer for each category */}
                  <div className="py-8 flex flex-col items-center justify-center gap-3">
                    {section.id === 'ssot' && (
                      <div className="space-y-2 w-full max-w-[240px]">
                        <div className="h-6 rounded bg-white dark:bg-brand-dark-bg border border-brand-accent/20 px-2 py-1 text-[10px] font-mono flex justify-between text-brand-muted dark:text-brand-dark-muted">
                          <span>requirements.md</span>
                          <span className="text-green-500 font-bold">100% Sync</span>
                        </div>
                        <div className="h-6 rounded bg-white dark:bg-brand-dark-bg border border-slate-200 dark:border-slate-800 px-2 py-1 text-[10px] font-mono flex justify-between text-brand-muted dark:text-brand-dark-muted">
                          <span>architecture-adrs.md</span>
                          <span className="text-green-500 font-bold">100% Sync</span>
                        </div>
                        <div className="h-6 rounded bg-white dark:bg-brand-dark-bg border border-slate-200 dark:border-slate-800 px-2 py-1 text-[10px] font-mono flex justify-between text-brand-muted dark:text-brand-dark-muted">
                          <span>src/app/page.tsx</span>
                          <span className="text-green-500 font-bold">100% Sync</span>
                        </div>
                      </div>
                    )}
                    {section.id === 'graph' && (
                      <div className="relative w-32 h-20 flex items-center justify-center">
                        <div className="absolute w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-white text-[8px] font-bold">SSOT</div>
                        <div className="absolute -top-4 -left-4 w-4 h-4 bg-brand-primary dark:bg-white rounded-full" />
                        <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-brand-primary dark:bg-white rounded-full" />
                        <div className="absolute -top-4 -right-4 w-4 h-4 bg-brand-primary dark:bg-white rounded-full" />
                        <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-brand-primary dark:bg-white rounded-full" />
                        <svg className="absolute inset-0 w-full h-full stroke-brand-primary/20 dark:stroke-white/10" viewBox="0 0 128 80">
                          <line x1="64" y1="40" x2="16" y2="10" strokeWidth="1" />
                          <line x1="64" y1="40" x2="16" y2="70" strokeWidth="1" />
                          <line x1="64" y1="40" x2="112" y2="10" strokeWidth="1" />
                          <line x1="64" y1="40" x2="112" y2="70" strokeWidth="1" />
                        </svg>
                      </div>
                    )}
                    {section.id === 'assembly' && (
                      <div className="w-full max-w-[280px] p-3 rounded bg-white dark:bg-brand-dark-bg border border-slate-200 dark:border-slate-800 font-mono text-[9px] text-brand-primary dark:text-white space-y-1.5">
                        <div className="text-brand-accent font-semibold">// Assembling context package:</div>
                        <div className="text-green-600 dark:text-green-400">✓ Ingesting requirements range [L10-L45]</div>
                        <div className="text-green-600 dark:text-green-400">✓ Ingesting interface IAuthService</div>
                        <div className="text-brand-muted dark:text-brand-dark-muted">// 82% token reduction relative to whole-dir</div>
                      </div>
                    )}
                    {section.id === 'planning' && (
                      <div className="w-full max-w-[240px] space-y-2 text-[10px] font-mono">
                        <div className="p-2 rounded bg-white dark:bg-brand-dark-bg border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                          <span>1. Design Proposal</span>
                          <span className="text-green-500 font-semibold">APPROVED</span>
                        </div>
                        <div className="p-2 rounded bg-white dark:bg-brand-dark-bg border border-brand-accent/20 flex items-center justify-between">
                          <span>2. Code Implementation</span>
                          <span className="text-brand-accent font-semibold animate-pulse">RUNNING</span>
                        </div>
                      </div>
                    )}
                    {section.id === 'agents' && (
                      <div className="flex gap-3 justify-center items-center">
                        <div className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-brand-dark-bg border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-center">
                          <span className="font-bold text-brand-accent">Architect</span>
                        </div>
                        <div className="w-4 h-0.5 bg-slate-300 dark:bg-slate-700" />
                        <div className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-brand-dark-bg border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-center">
                          <span className="font-bold text-brand-primary dark:text-white">Coder</span>
                        </div>
                        <div className="w-4 h-0.5 bg-slate-300 dark:bg-slate-700" />
                        <div className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-brand-dark-bg border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-center">
                          <span className="font-bold text-green-500">Validator</span>
                        </div>
                      </div>
                    )}
                    {section.id === 'sync' && (
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-brand-dark-bg border border-slate-200 dark:border-slate-800 rounded text-center text-[10px] font-mono text-brand-primary dark:text-white">
                          git commit
                        </div>
                        <div className="text-brand-accent text-lg font-bold">➔</div>
                        <div className="p-2 bg-brand-primary dark:bg-brand-accent text-white rounded text-center text-[10px] font-mono animate-pulse">
                          sync docs
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-[9px] font-mono text-brand-muted dark:text-brand-dark-muted self-end">
                    OVUNS CORE R&D v1.1
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Platform CTA */}
        <div className="mt-20 md:mt-28 p-8 md:p-12 rounded-2xl bg-brand-primary text-white text-center relative overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="font-display font-bold text-2xl sm:text-3xl">
              Ready to Integrate Engineering Intelligence into Your Team?
            </h3>
            <p className="text-sm text-brand-dark-muted max-w-lg mx-auto leading-relaxed">
              Contact our solutions engineering desk to schedule an architecture alignment assessment.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-white text-brand-primary hover:bg-slate-50 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                Inquire About Collaboration <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          {/* Subtle logo bg */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-[0.03] pointer-events-none">
            <div className="relative w-full h-full">
              <Image
                src="/logo.png"
                alt="OVUNS.TECH watermark"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}