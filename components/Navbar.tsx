'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Platform', href: '/platform', planned: true },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'glassmorphism shadow-sm border-b border-brand-surface/30 dark:border-brand-dark-surface/10 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden bg-brand-primary rounded-lg flex items-center justify-center border border-brand-accent/20">
                <Image
                  src="/logo.png"
                  alt="OVUNS.TECH Logo"
                  fill
                  className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
                  sizes="40px"
                  priority
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-brand-primary dark:text-white transition-colors duration-200">
                OVUNS<span className="text-brand-accent">.TECH</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                    ? 'text-brand-accent font-semibold bg-brand-surface/80 dark:bg-brand-dark-surface/50'
                    : 'text-brand-primary/80 dark:text-brand-dark-text/80 hover:text-brand-accent dark:hover:text-brand-accent hover:bg-brand-surface/40 dark:hover:bg-brand-dark-surface/20'
                    }`}
                >
                  {link.name}
                  {link.planned && <sup className="text-[10px] ml-0.5 text-brand-accent">planned</sup>}
                </Link>
              );
            })}
          </nav>

          {/* CTAs and Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary/95 dark:bg-brand-accent dark:hover:bg-brand-accent/90 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-primary dark:text-brand-dark-text hover:text-brand-accent dark:hover:text-brand-accent focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] z-40 bg-white dark:bg-brand-dark-bg transition-all duration-300 ease-in-out transform border-t border-brand-surface dark:border-brand-dark-surface/20 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-lg h-full overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${isActive
                  ? 'text-brand-accent bg-brand-surface dark:bg-brand-dark-surface font-semibold border-l-4 border-brand-accent'
                  : 'text-brand-primary dark:text-brand-dark-text hover:text-brand-accent dark:hover:text-brand-accent hover:bg-brand-surface/50 dark:hover:bg-brand-dark-surface/50'
                  }`}
              >
                {link.name}
                {link.planned && <sup className="text-[10px] ml-0.5 text-brand-accent">planned</sup>}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-brand-surface dark:border-brand-dark-surface/20">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-lg text-base font-semibold text-white bg-brand-primary dark:bg-brand-accent hover:bg-brand-primary/95 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}