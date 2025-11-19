import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { ModeToggle } from '@/components/mode-toggle';
import { Geist } from 'next/font/google';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plus_jakarta_sans.variable} ${geist.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
