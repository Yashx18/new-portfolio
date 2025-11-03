'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ModeToggle = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const SWITCH_THEME = () => {
    // When using system, toggle relative to the currently resolved theme
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

  return (
    <button
      onClick={SWITCH_THEME}
      className="bg-background dark:bg-foreground text-foreground dark:text-background border-foreground/20 fixed right-6 bottom-6 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border"
    >
      {mounted &&
        (resolvedTheme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />)}
    </button>
  );
};
