'use client';

import * as React from 'react';
import Image from 'next/image';
import { ShieldCheck, Target, Eye, Award, GraduationCap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Scientific Rigor',
      desc: 'Grounding every architecture decision in mathematical formalisms, validated proofs, and reproducible empirical research.',
    },
    {
      icon: Target,
      title: 'Precision Execution',
      desc: 'Enforcing strict boundaries and automated verification logic to ensure code matches specifications 100% of the time.',
    },
    {
      icon: Eye,
      title: 'System Transparency',
      desc: 'Rejecting black-box coding models in favor of explainable engineering planning loops that maintain developer control.',
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent mb-3">
            Our Organization
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-primary dark:text-white leading-tight">
            About OVUNS.TECH
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-muted dark:text-brand-dark-muted leading-relaxed">
            Leading the R&D transition to fully synchronized software systems and agentic software execution frameworks.
          </p>
          <p className="mt-2 text-sm text-brand-accent font-medium">
            OVUNS.TECH is registered by the Corporate Affairs Commission of Nigeria with Registration Number 8121122.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start mb-20 md:mb-28">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-brand-primary dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-accent rounded-full" />
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-brand-muted dark:text-brand-dark-muted leading-relaxed">
              To formalize the software engineering lifecycle into a synchronized, queryable Single Source of Truth (SSOT), enabling autonomous AI agents to code with mathematical correctness and zero specification drift.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-brand-primary dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-accent rounded-full" />
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-brand-muted dark:text-brand-dark-muted leading-relaxed">
              A future where software systems are designed, compiled, verified, and evolved through synchronized knowledge graphs, establishing a new baseline of reliability for enterprise, governmental, and scientific codebases.
            </p>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-20 md:mb-28">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-brand-primary dark:text-white mb-4">
              Services Offered
            </h2>
            <p className="text-sm sm:text-base text-brand-muted dark:text-brand-dark-muted leading-relaxed mb-4">
              We provide specialized services to support our research and development initiatives:
            </p>
            <ul className="space-y-2 text-sm text-brand-muted dark:text-brand-dark-muted">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-brand-accent rounded-full mt-2 flex-shrink-0" />
                <span>IT Consulting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-brand-accent rounded-full mt-2 flex-shrink-0" />
                <span>Artificial Intelligence Development and Consulting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-brand-accent rounded-full mt-2 flex-shrink-0" />
                <span>Software Engineering R&D</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-brand-accent rounded-full mt-2 flex-shrink-0" />
                <span>IT Equipment Supplies</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Founder Focus Block */}
        <section className="mb-20 md:mb-28 bg-slate-50 dark:bg-brand-dark-surface/10 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Logo / Image visualizer */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-brand-primary overflow-hidden flex-shrink-0 flex items-center justify-center border-2 border-brand-accent/25">
            <Image
              src="/logo.png"
              alt="Dr. Emmanuel Chinyere Echeonwu"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 160px, 192px"
            />
          </div>

          <div className="space-y-4 flex-grow">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">Founder & Lead Researcher</span>
              <span className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden sm:inline" />
              <div className="flex items-center gap-1 text-xs text-brand-muted dark:text-brand-dark-muted">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>eecheonwu.github.io</span>
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-primary dark:text-white">
              Dr. Emmanuel Chinyere Echeonwu
            </h2>

            <p className="text-sm sm:text-base text-brand-muted dark:text-brand-dark-muted leading-relaxed">
              Dr. Echeonwu is the pioneer of the SSOT-Centric Software Engineering (SCSE) framework. His academic research addresses the fundamental limitations of modern software development, specifically the structural "drift" between requirements, system architectures, and live repositories.
            </p>

            <p className="text-sm text-brand-muted dark:text-brand-dark-muted leading-relaxed">
              Under his direction, OVUNS.TECH operates as a research sandbox and product launchpad, translating formal computer science theories into tools integrated directly into modern development tools.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="https://eecheonwu.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-brand-accent hover:underline flex items-center gap-1 cursor-pointer"
              >
                Founder Portal <Award className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://eecheonwu.github.io/scse-knowledge-base/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-brand-accent hover:underline flex items-center gap-1 cursor-pointer"
              >
                SCSE Knowledge Base
              </a>
            </div>
          </div>
        </section>

        {/* Corporate Values */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-primary dark:text-white">
              Corporate Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-brand-dark-surface/30 border border-slate-200/60 dark:border-slate-800/40 rounded-xl hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-brand-primary/5 dark:bg-white/5 flex items-center justify-center text-brand-accent border border-brand-accent/15">
                  <val.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base md:text-lg text-brand-primary dark:text-white">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted dark:text-brand-dark-muted leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
