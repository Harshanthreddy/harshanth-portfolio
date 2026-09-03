'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'bright';

interface ThemeOption {
  id: Theme;
  name: string;
  color: string;
  accent: string;
  icon: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  { id: 'bright', name: 'Light Theme', color: '#f8fafc', accent: '#0369a1', icon: '☀️' },
  { id: 'dark', name: 'Dark Theme', color: '#07090e', accent: '#38bdf8', icon: '🌙' },
];

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'bright',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('bright');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('harsha-theme');
    // Default to 'bright' (light formal theme) unless explicitly set to 'dark'
    const initialTheme: Theme = saved === 'dark' ? 'dark' : 'bright';
    
    setThemeState(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('harsha-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'bright' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
