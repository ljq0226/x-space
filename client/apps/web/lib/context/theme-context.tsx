'use client'
import { useState, useEffect, createContext, useContext } from 'react';
import type { ReactNode, ChangeEvent } from 'react';
import type { Theme, Accent } from '@lib/types/theme';

type ThemeContext = {
  theme: Theme;
  accent: Accent;
  changeTheme: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  changeAccent: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

type ThemeContextProviderProps = {
  children: ReactNode;
};

function setInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';

  const savedTheme = localStorage.getItem('theme') as Theme | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return savedTheme ?? (prefersDark ? 'dark' : 'light');
}

function setInitialAccent(): Accent {
  if (typeof window === 'undefined') return 'blue';
  const savedAccent = localStorage.getItem('accent') as Accent | null;
  return savedAccent ?? 'blue';
}

export function ThemeContextProvider({
  children
}: ThemeContextProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(setInitialTheme);
  const [accent, setAccent] = useState<Accent>(setInitialAccent);

  useEffect(() => {
    const flipTheme = (theme: Theme): NodeJS.Timeout | undefined => {
      const root = document.documentElement;
      const targetTheme = theme === 'dim' ? 'dark' : theme;

      root.style.color = targetTheme === 'dark' ? '#E7E9EA' : '#0F1419'
      root.style.setProperty('--main-background', `var(--${theme}-background)`);

      root.style.setProperty(
        '--main-search-background',
        `var(--${theme}-search-background)`
      );

      root.style.setProperty(
        '--main-sidebar-background',
        `var(--${theme}-sidebar-background)`
      );
      return undefined;
    };

    const timeoutId = flipTheme(theme);
    localStorage.setItem('theme', theme);
    return () => clearTimeout(timeoutId);
  }, [theme]);

  useEffect(() => {
    const flipAccent = (accent: Accent): NodeJS.Timeout | undefined => {
      const root = document.documentElement;
      root.style.setProperty('--main-accent', `var(--accent-${accent})`);
      return undefined;
    };

    const timeoutId = flipAccent(accent);
    localStorage.setItem('accent', accent);
    return () => clearTimeout(timeoutId);
  }, [accent]);

  const changeTheme = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>): void => setTheme(value as Theme);

  const changeAccent = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>): void => setAccent(value as Accent);

  const value: ThemeContext = {
    theme,
    accent,
    changeTheme,
    changeAccent
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContext {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useTheme must be used within an ThemeContextProvider');

  return context;
}
