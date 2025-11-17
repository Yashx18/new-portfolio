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

  const currentTheme = mounted ? (theme === 'system' ? resolvedTheme : theme) : null;

  return (
    <button
      onClick={SWITCH_THEME}
      className={cn(
        'fixed right-6 bottom-6 flex size-10 cursor-pointer items-center justify-center rounded-lg border transition-transform duration-150 hover:scale-102 active:scale-98',
        currentTheme === 'dark'
          ? 'border-neutral-600/80 bg-neutral-950 shadow-sm shadow-neutral-800'
          : 'border-neutral-300/80 bg-neutral-100 shadow-sm shadow-neutral-400'
      )}
    >
      {mounted && (
        <ModeIcon
          className={cn(
            'size-6',
            currentTheme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
          )}
        />
      )}
    </button>
  );
};
