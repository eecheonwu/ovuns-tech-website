'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, BookOpen, Layers, ShieldCheck, Zap, Database, GitMerge } from 'lucide-react';
import { KnowledgeGraph } from '@/components/KnowledgeGraph';

export default function Home() {
  const problemPoints = [
    { title: 'Requirements', desc: 'Fragmented across SRDs, Google Docs, and email chains.' },
    { title: 'Architecture', desc: 'Stale UMLs, system documentation, and forgotten Miro boards.' },
    { title: 'Source Code', desc: 'Implicit design patterns hidden in files without sync indicators.' },
    { title: 'Human Mind', desc: 'Tribal engineering knowledge that walks out the door daily.' },
  ];

  const features = [
    {
      icon: Database,
      title: 'Engineering SSOT',
      desc: 'Consolidate requirements, architecture specifications, and implementation logic into a single source of truth.',
    },
    {
      icon: Layers,
      title: 'Knowledge Graphs',
      desc: 'Build dynamic mathematical representations of all software modules, API contracts, and structural boundaries.',
    },
    {
      icon: Zap,
      title: 'AI Planning Engine',
      desc: 'Provide AI agents with complete, structured system context to generate code matching architecture bounds.',
    },
    {
      icon: GitMerge,
      title: 'Continuous Synchronization',
      desc: 'Automatically maintain bidirectional sync between specifications, docs, and implementation code on every commit.',
    },
  ];

  return (
    <div className="overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 bg-gradient-to-b from-brand-surface/40 to-transparent dark:from-brand-dark-surface/10 dark:to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="relative w-24 h-24 bg-brand-primary/5 dark:bg-white/5 rounded-2xl flex items-center justify-center p-3 border border-brand-accent/25">
              <Image
                src="/logo.png"
                alt="OVUNS.TECH Icon Logo"
                fill
                className="object-contain p-3"
                sizes="96px"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-brand-primary dark:text-white max-w-4xl mx-auto leading-tight"
          >
            Engineering the Future of <span className="text-gradient">Intelligent Software</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-base sm:text-lg md:text-xl text-brand-accent font-semibold max-w-2xl mx-auto"
          >
            Research. Intelligence. Engineering
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-brand-muted dark:text-brand-dark-muted max-w-2xl mx-auto leading-relaxed"
          >
            OVUNS.TECH develops AI-native software engineering platforms powered by Engineering Single Source of Truth (Engineering-SSOT), Agentic Software Engineering and Engineering Intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/platform"
              className="px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary/95 dark:bg-brand-accent dark:hover:bg-brand-accent/90 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 group"
            >
              Explore Platform <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/research"
              className="px-6 py-3.5 rounded-lg text-sm font-semibold text-brand-primary dark:text-white bg-brand-surface dark:bg-brand-dark-surface border border-slate-200/60 dark:border-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 shadow-sm transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              Read Research
            </Link>
          </motion.div>
        </div>

        {/* Ambient background accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 dark:bg-brand-accent/3 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </section>

      {/* 2. The Problem Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-brand-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent mb-3">
                The Core Challenge
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary dark:text-white leading-tight">
                Software Knowledge is Fragmented. AI Cannot Code What It Doesn't Understand.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-brand-muted dark:text-brand-dark-muted leading-relaxed">
                Conventional AI coding assistants fail on complex tasks because the system specifications—requirements, architecture, code models, and human decisions—are scattered across separate systems and tools.
              </p>
              <div className="mt-8 space-y-4">
                {problemPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-accent/10 dark:bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold text-xs">
                      !
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-primary dark:text-white">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-brand-muted dark:text-brand-dark-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration block */}
            <div className="relative p-6 bg-slate-50 dark:bg-brand-dark-surface/20 rounded-2xl border border-slate-200/50 dark:border-slate-800/40">
              <div className="absolute top-4 left-4 text-[10px] font-mono text-brand-muted dark:text-brand-dark-muted">
                Figure 1.0: Desynchronization Cycle
              </div>
              <div className="py-12 flex flex-col items-center justify-center gap-6">
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  <div className="p-3 bg-white dark:bg-brand-dark-bg border border-brand-accent/30 rounded-lg text-center font-mono text-xs text-brand-accent animate-pulse">
                    Doc / Specs
                  </div>
                  <div className="p-3 bg-white dark:bg-brand-dark-bg border border-slate-300 dark:border-slate-800 rounded-lg text-center font-mono text-xs text-brand-primary dark:text-white">
                    Live Code
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-dashed bg-slate-300 dark:bg-slate-700" />
                <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-brand-accent/20 rounded-xl max-w-sm text-center">
                  <h4 className="text-xs font-semibold text-brand-accent font-mono uppercase tracking-wider mb-1">
                    System Drift Effect
                  </h4>
                  <p className="text-[11px] text-brand-muted dark:text-brand-dark-muted leading-relaxed">
                    Specifications and code drift apart within days, rendering autonomous agent models contextually blind and prone to regressions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Solution Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-brand-dark-surface/10 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent mb-3">
              The Architecture
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary dark:text-white leading-tight">
              Unify specifications into an Engineering Single Source of Truth
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-muted dark:text-brand-dark-muted leading-relaxed">
              Our framework organizes development files, UML representations, docstrings, and tests into a dynamic Engineering Knowledge Graph, continuously updated and synchronized.
            </p>
          </div>

          <KnowledgeGraph />
        </div>
      </section>

      {/* 4. Platform Core Modules */}
      <section className="py-16 md:py-24 bg-white dark:bg-brand-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent mb-3">
              Engineering Intelligence Platform
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary dark:text-white leading-tight">
              Engineered for Enterprise Intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                className="p-6 md:p-8 bg-slate-50 dark:bg-brand-dark-surface/30 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl hover:border-brand-accent/20 hover:shadow-sm transition-all duration-300 flex gap-4 md:gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 bg-white dark:bg-brand-dark-bg border border-slate-200/80 dark:border-slate-800/80 rounded-xl flex items-center justify-center flex-shrink-0 text-brand-accent shadow-sm">
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg text-brand-primary dark:text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-brand-muted dark:text-brand-dark-muted leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call To Action / Contact Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-brand-dark-bg text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent">
            Apply / Partner / Invest
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand-primary dark:text-white max-w-3xl mx-auto leading-tight">
            Accelerate the Transition to Agentic Engineering
          </h2>
          <p className="text-sm sm:text-base text-brand-muted dark:text-brand-dark-muted max-w-2xl mx-auto leading-relaxed">
            Collaborate with Dr. Emmanuel Chinyere Echeonwu and the OVUNS.TECH R&D team to build systems that scale software delivery with mathematical correctness.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary/95 dark:bg-brand-accent dark:hover:bg-brand-accent/90 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="px-6 py-3.5 rounded-lg text-sm font-semibold text-brand-primary dark:text-white bg-brand-surface dark:bg-brand-dark-surface border border-slate-200/60 dark:border-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 shadow-sm transition-all duration-200 cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Ambient Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/5 dark:bg-brand-accent/2 rounded-full blur-[100px] -z-10 pointer-events-none" />
      </section>
    </div>
  );
}