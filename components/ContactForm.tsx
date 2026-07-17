'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  organization: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormState>({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        const error = await response.json();
        console.error('Form submission error:', error);
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-brand-dark-surface/30 border border-slate-200/60 dark:border-slate-800/40 rounded-2xl p-6 md:p-8 shadow-sm">
      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-8 text-center space-y-4"
          >
            <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-brand-primary dark:text-white">
              Message Sent Successfully
            </h3>
            <p className="text-sm text-brand-muted dark:text-brand-dark-muted max-w-md mx-auto leading-relaxed">
              Thank you for contacting OVUNS.TECH. Our team will review your inquiry and get back to you within 24 business hours.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="mt-4 px-4 py-2 text-xs font-semibold text-brand-accent hover:underline cursor-pointer"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200/40 dark:border-red-900/30 rounded-lg flex items-center gap-3 text-red-700 dark:text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>An error occurred while sending your message. Please try again.</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-semibold text-brand-primary dark:text-brand-dark-text uppercase tracking-wider">
                  Full Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-brand-dark-bg border text-sm rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-brand-accent ${errors.name
                      ? 'border-brand-accent focus:border-brand-accent'
                      : 'border-slate-200 dark:border-slate-800 focus:border-brand-accent'
                    }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-xs text-brand-accent">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-semibold text-brand-primary dark:text-brand-dark-text uppercase tracking-wider">
                  Email Address <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-brand-dark-bg border text-sm rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-brand-accent ${errors.email
                      ? 'border-brand-accent focus:border-brand-accent'
                      : 'border-slate-200 dark:border-slate-800 focus:border-brand-accent'
                    }`}
                  placeholder="john@organization.com"
                />
                {errors.email && (
                  <p className="text-xs text-brand-accent">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Organization */}
            <div className="space-y-1.5">
              <label htmlFor="organization" className="block text-xs font-semibold text-brand-primary dark:text-brand-dark-text uppercase tracking-wider">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-brand-dark-bg border border-slate-200 dark:border-slate-800 text-sm rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent"
                placeholder="Enterprise, University, or Agency name"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-semibold text-brand-primary dark:text-brand-dark-text uppercase tracking-wider">
                Message <span className="text-brand-accent">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-brand-dark-bg border text-sm rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-brand-accent ${errors.message
                    ? 'border-brand-accent focus:border-brand-accent'
                    : 'border-slate-200 dark:border-slate-800 focus:border-brand-accent'
                  }`}
                placeholder="How can we collaborate on AI and Agentic software engineering solutions?"
              />
              {errors.message && (
                <p className="text-xs text-brand-accent">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-lg bg-brand-primary text-white dark:bg-brand-accent dark:text-white font-semibold text-sm hover:opacity-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
