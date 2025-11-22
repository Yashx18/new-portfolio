import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Geist } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { ModeToggle } from '@/components/mode-toggle';
import { Analytics } from "@vercel/analytics/next"

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yash - Design Engineer',
  description: 'Portfolio of a Design Engineer who can design and develop websites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModeToggle />
          {children}
	  <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
