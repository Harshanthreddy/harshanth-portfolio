import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#07090e' },
    { media: '(prefers-color-scheme: light)', color: '#f6f8fb' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://harshanth.dev'),
  title: 'Duvvuru Harshanth Reddy | AI & Data Science | Full-Stack Developer | Cybersecurity',
  description: 'Portfolio of Duvvuru Harshanth Reddy — B.Tech in Artificial Intelligence & Data Science at NBKRIST, Full-Stack Developer, and Cybersecurity Enthusiast with hands-on experience in Python, Java, C, Web Development, AI, and Secure Systems.',
  keywords: [
    'Duvvuru Harshanth Reddy',
    'Harshanth Reddy',
    'AI & Data Science',
    'Full-Stack Developer',
    'Cybersecurity',
    'Python',
    'Java',
    'Next.js',
    'React',
    'NBKRIST',
    'Portfolio'
  ],
  authors: [{ name: 'Duvvuru Harshanth Reddy' }],
  openGraph: {
    title: 'Duvvuru Harshanth Reddy | AI & Data Science | Full-Stack Developer',
    description: 'B.Tech AI & Data Science Student | Full-Stack Developer | Cybersecurity Enthusiast',
    url: 'https://harshanth.dev',
    siteName: 'Harshanth Reddy Portfolio',
    images: [
      {
        url: '/images/avatar.jpg',
        width: 800,
        height: 800,
        alt: 'Duvvuru Harshanth Reddy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="bright" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
