'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, BookOpen, Layers, Milestone, Award, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Research() {
  const researchPillars = [
    {
      icon: Search,
      title: 'SSOT-Centric Software Engineering',
      desc: 'Formulates software design as a single source of truth co-located directly with implementations. It addresses desynchronization drift by enforcing that all specifications act as compile-time dependencies.',
    },
    {
      icon: Layers,
      title: 'Agentic Software Engineering',
      desc: 'Designs multi-agent architectures governed by strict verification boundaries. We construct planning engines that guide agents through systematic implementation loops rather than unstructured generation.',
    },
    {
      icon: BookOpen,
      title: 'Engineering Knowledge Systems',
      desc: 'Structures human developer intuition and organizational rules into readable schemas. Allows teams to maintain a persistent memory base independent of employee churn.',
    },
    {
      icon: Milestone,
      title: 'Engineering Intelligence',
      desc: 'Quantifies system health, code density, and test alignment. We develop metrics to assess how accurately live source code matches high-level design specifications.',
    },
  ];

  const ecosystemStages = [
    { id: '1', name: 'Founder Research', desc: 'Dr. Emmanuel Chinyere Echeonwu\'s academic foundation.' },
    { id: '2', name: 'SCSE Research Framework', desc: 'The mathematical specification of the SSOT principles.' },
    { id: '3', name: 'OVUNS.TECH', desc: 'The startup corporate engineering entity.' },
    { id: '4', name: 'Engineering Intelligence Platform', desc: 'Production-ready platform and compiler SDK.' },
    { id: '5', name: 'Enterprise Solutions', desc: 'Secure, air-gapped agent operations for corporate partners.' },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent mb-3">
            Academic Foundation
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-primary dark:text-white leading-tight">
            Scientific Research
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-muted dark:text-brand-dark-muted leading-relaxed">
            OVUNS.TECH bridges the gap between rigorous computer science research and production-grade software engineering solutions.
          </p>
        </div>

        {/* Ecosystem Flow Section */}
        <section className="mb-20 md:mb-28 bg-slate-50 dark:bg-brand-dark-surface/10 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-xl md:text-2xl text-brand-primary dark:text-white mb-2">
              Our Research-to-Industry Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted dark:text-brand-dark-muted">
              Tracing the flow from academic research to corporate implementation
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-2">
            {ecosystemStages.map((stage, idx) => (
              <React.Fragment key={stage.id}>
                {/* Stage Box */}
                <div className="flex-1 p-4 bg-white dark:bg-brand-dark-bg border border-slate-200/60 dark:border-slate-800/50 rounded-xl flex flex-col justify-center items-center text-center hover:border-brand-accent/25 hover:shadow-sm transition-all duration-200">
                  <span className="w-6 h-6 rounded-full bg-brand-primary/5 dark:bg-white/5 border border-brand-accent/20 text-brand-accent text-xs font-bold font-mono flex items-center justify-center mb-2">
                    0{stage.id}
                  </span>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-brand-primary dark:text-white">
                    {stage.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-brand-muted dark:text-brand-dark-muted mt-1 leading-normal max-w-[180px]">
                    {stage.desc}
                  </p>
                </div>
                {/* Arrow */}
                {idx < ecosystemStages.length - 1 && (
                  <div className="flex items-center justify-center text-brand-accent font-bold py-2 lg:py-0 px-2 lg:px-1 select-none">
                    <span className="hidden lg:inline text-lg">➔</span>
                    <span className="lg:hidden text-lg">↓</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Research Pillars */}
        <section className="mb-20 md:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-primary dark:text-white mb-3">
              Research Pillars
            </h2>
            <p className="text-sm text-brand-muted dark:text-brand-dark-muted leading-relaxed">
              We focus on core domains that enable fully synchronized software lifecycles and highly reliable agent environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-brand-dark-surface/30 border border-slate-200/60 dark:border-slate-800/40 rounded-xl hover:shadow-md transition-shadow duration-300 space-y-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-primary/5 dark:bg-white/5 flex items-center justify-center text-brand-accent border border-brand-accent/15">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-primary dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brand-muted dark:text-brand-dark-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Link to Founder and Framework Web Ecosystem */}
        <section className="bg-slate-50 dark:bg-brand-dark-surface/30 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 text-brand-accent">
              <GraduationCap className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Public R&D Ecosystem</span>
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-brand-primary dark:text-white">
              Explore Our Academic & Research Platforms
            </h2>
            <p className="text-sm text-brand-muted dark:text-brand-dark-muted leading-relaxed">
              For complete papers, literature listings, research references, and standard schemas, visit the founder\'s academic portal and the official SCSE Knowledge Base repository.
            </p>
          </div>

          <div className="flex-1 w-full flex flex-col sm:flex-row gap-4">
            <a
              href="https://eecheonwu.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-5 bg-white dark:bg-brand-dark-bg border border-slate-200/60 dark:border-slate-800/60 rounded-xl hover:border-brand-accent/25 hover:shadow-sm transition-all duration-200 flex flex-col justify-between h-36"
            >
              <div className="text-brand-accent flex justify-between items-start">
                <Award className="w-5 h-5" />
                <ArrowUpRight className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xs sm:text-sm text-brand-primary dark:text-white">
                  Dr. Echeonwu\'s Portal
                </h3>
                <p className="text-[10px] sm:text-xs text-brand-muted dark:text-brand-dark-muted mt-1 leading-normal">
                  Academic portal, founder background, and publication links.
                </p>
              </div>
            </a>

            <a
              href="https://eecheonwu.github.io/scse-knowledge-base/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-5 bg-white dark:bg-brand-dark-bg border border-slate-200/60 dark:border-slate-800/60 rounded-xl hover:border-brand-accent/25 hover:shadow-sm transition-all duration-200 flex flex-col justify-between h-36"
            >
              <div className="text-brand-accent flex justify-between items-start">
                <BookOpen className="w-5 h-5" />
                <ArrowUpRight className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xs sm:text-sm text-brand-primary dark:text-white">
                  SCSE Knowledge Base
                </h3>
                <p className="text-[10px] sm:text-xs text-brand-muted dark:text-brand-dark-muted mt-1 leading-normal">
                  Dynamic knowledge repository and core framework specs.
                </p>
              </div>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
