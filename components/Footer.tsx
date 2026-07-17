'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github, Mail, ArrowRight, Check } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-brand-surface dark:bg-brand-dark-surface border-t border-brand-primary/10 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Logo & Brand Pitch */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-9 h-9 overflow-hidden bg-brand-primary rounded-lg flex items-center justify-center border border-brand-accent/20">
                <Image
                  src="/logo.png"
                  alt="OVUNS.TECH Logo"
                  fill
                  className="object-contain p-1.5"
                  sizes="36px"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-brand-primary dark:text-white">
                OVUNS<span className="text-brand-accent">.TECH</span>
              </span>
            </Link>
            <p className="text-sm text-brand-muted dark:text-brand-dark-muted max-w-sm leading-relaxed">
              OVUNS.TECH is an AI-first Software Engineering Research & Development startup. We build software platforms powered by Engineering-SSOT, Agentic Software Engineering and Engineering Intelligence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-brand-dark-bg text-brand-muted hover:text-brand-accent dark:text-brand-dark-muted dark:hover:text-brand-accent shadow-sm border border-brand-primary/5 dark:border-white/5 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/eecheonwu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-brand-dark-bg text-brand-muted hover:text-brand-accent dark:text-brand-dark-muted dark:hover:text-brand-accent shadow-sm border border-brand-primary/5 dark:border-white/5 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="p-2 rounded-lg bg-white dark:bg-brand-dark-bg text-brand-muted hover:text-brand-accent dark:text-brand-dark-muted dark:hover:text-brand-accent shadow-sm border border-brand-primary/5 dark:border-white/5 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-brand-primary dark:text-white text-sm uppercase tracking-wider">
              Sitemap
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-brand-muted dark:text-brand-dark-muted hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-brand-muted dark:text-brand-dark-muted hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-150">
                  About
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-brand-muted dark:text-brand-dark-muted hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-150">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-sm text-brand-muted dark:text-brand-dark-muted hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-150">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-brand-muted dark:text-brand-dark-muted hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ecosystem Sites */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-brand-primary dark:text-white text-sm uppercase tracking-wider">
              Ecosystem
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://eecheonwu.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-muted dark:text-brand-dark-muted hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-150"
                >
                  Founder Research
                </a>
              </li>
              <li>
                <a
                  href="https://eecheonwu.github.io/scse-knowledge-base/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-muted dark:text-brand-dark-muted hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-150"
                >
                  SCSE Knowledge Base
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-brand-muted dark:text-brand-dark-muted hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-150">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-brand-primary dark:text-white text-sm uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-xs text-brand-muted dark:text-brand-dark-muted leading-relaxed">
              Subscribe to receive our latest white papers, publications, and R&D announcements.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter work email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-brand-dark-bg border border-brand-primary/10 dark:border-white/5 rounded-lg focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
              />
              <button
                type="submit"
                className="absolute right-1 p-1.5 rounded-md text-white bg-brand-primary dark:bg-brand-accent hover:opacity-90 transition-opacity duration-150 cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? <Check className="w-4 h-4 text-white" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-green-600 dark:text-green-400 animate-fade-in">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-primary/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted dark:text-brand-dark-muted">
            &copy; {new Date().getFullYear()} OVUNS.TECH. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-brand-muted dark:text-brand-dark-muted">
            <Link href="/privacy" className="hover:text-brand-accent transition-colors duration-150">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-accent transition-colors duration-150">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}