'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ModeIcon } from './icons/Icons';
import { cn } from '@/lib/utils';

export const ModeToggle = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const SWITCH_THEME = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      return;
    }

    if (theme === 'dark') {
      setTheme('light');
      return;
    }

    setTheme('dark');
  };

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <button
      onClick={SWITCH_THEME}
      className={cn(
        'fixed right-4 bottom-4 z-10 flex size-12 cursor-pointer items-center justify-center rounded-lg border transition-transform duration-150 will-change-transform hover:scale-101 active:scale-98 md:right-6 md:bottom-6',
        currentTheme === 'dark'
          ? 'border-neutral-600/40 bg-foreground shadow-sm shadow-neutral-900'
          : 'border-neutral-300/80 bg-neutral-100 shadow-sm shadow-neutral-400'
      )}
    >
      <ModeIcon
        className={cn('size-6', currentTheme === 'dark' ? 'text-neutral-200' : 'text-neutral-800')}
      />
    </button>
  );
};
