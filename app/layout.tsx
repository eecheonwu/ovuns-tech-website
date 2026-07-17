import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'OVUNS.TECH | Engineering the Future of Intelligent Software',
    template: '%s | OVUNS.TECH',
  },
  description:
    'OVUNS.TECH develops AI-native software engineering platforms powered by Engineering Single Source of Truth (Engineering-SSOT), Agentic Software Engineering, and Engineering Intelligence.',
  metadataBase: new URL('https://ovuns.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'OVUNS.TECH | Engineering the Future of Intelligent Software',
    description:
      'AI-native software engineering platforms powered by Engineering-SSOT, Agentic Software Engineering, and Engineering Intelligence.',
    url: 'https://ovuns.tech',
    siteName: 'OVUNS.TECH',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'OVUNS.TECH Corporate Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OVUNS.TECH | Engineering the Future of Intelligent Software',
    description:
      'AI-native software engineering platforms powered by Engineering-SSOT, Agentic Software Engineering, and Engineering Intelligence.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

// Structured Data for Organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OVUNS.TECH',
  url: 'https://ovuns.tech',
  logo: 'https://ovuns.tech/logo.png',
  sameAs: [
    'https://linkedin.com/company/ovuns-tech',
    'https://github.com/eecheonwu',
  ],
  description:
    'AI-first Software Engineering Research & Development startup focused on Engineering Single Source of Truth, Agentic Software Engineering, and Engineering Intelligence.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-brand-text dark:bg-brand-dark-bg dark:text-brand-dark-text">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}