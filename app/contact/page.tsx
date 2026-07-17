'use client';

import * as React from 'react';
import { Mail, Linkedin, Github, MapPin, Building, Globe } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export default function Contact() {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email Inquiry',
      value: 'research@ovuns.tech',
      href: 'mailto:research@ovuns.tech',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/company/ovuns-tech',
      href: 'https://linkedin.com',
    },
    {
      icon: Github,
      label: 'GitHub Organization',
      value: 'github.com/eecheonwu',
      href: 'https://github.com/eecheonwu',
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent mb-3">
            Get in Touch
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-primary dark:text-white leading-tight">
            Contact OVUNS.TECH
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-muted dark:text-brand-dark-muted leading-relaxed">
            Connect with our R&D desk for partnerships, investment proposals, and enterprise pilot integrations.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Cards group */}
            <div className="bg-slate-50 dark:bg-brand-dark-surface/20 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-6 md:p-8 space-y-6">
              <h2 className="font-display font-bold text-lg text-brand-primary dark:text-white mb-4">
                Corporate Channels
              </h2>
              
              <div className="space-y-5">
                {contactDetails.map((channel, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 bg-white dark:bg-brand-dark-bg border border-slate-200/50 dark:border-slate-800/40 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0">
                      <channel.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-primary dark:text-white uppercase tracking-wider">
                        {channel.label}
                      </p>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                        rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-brand-muted dark:text-brand-dark-muted hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-150 break-all"
                      >
                        {channel.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific credentials callout */}
            <div className="p-6 border-l-4 border-brand-accent bg-slate-50 dark:bg-brand-dark-surface/20 rounded-r-xl">
              <h3 className="font-display font-bold text-sm text-brand-primary dark:text-white mb-1.5">
                Institutional Partnerships
              </h3>
              <p className="text-xs text-brand-muted dark:text-brand-dark-muted leading-relaxed">
                We actively support university research, PhD research sandbox programs, and government AI strategy planning. For academic queries, please copy our lead researcher Dr. Emmanuel Chinyere Echeonwu on your emails.
              </p>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
