'use client';

import React, { createContext, useEffect, useState } from 'react';
import { useColorScheme } from '@mui/material/styles';

enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextType {
  themeMode: ThemeMode;
  isThemeReady: boolean;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { mode, setMode } = useColorScheme();
  const [systemTheme, setSystemTheme] = useState<ThemeMode>(ThemeMode.LIGHT);
  const [isThemeReady, setIsThemeReady] = useState(false);

  // Determine the actual theme mode
  const themeMode = mode === 'system' ? systemTheme : (mode as ThemeMode);

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const initialSystemTheme = mediaQuery.matches ? ThemeMode.DARK : ThemeMode.LIGHT;
    setSystemTheme(initialSystemTheme);
    setIsThemeReady(true);

    // Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? ThemeMode.DARK : ThemeMode.LIGHT);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setThemeMode = (mode: ThemeMode) => {
    setMode(mode);
  };

  const value = {
    themeMode,
    isThemeReady,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
export { ThemeContext, ThemeMode };
export type { ThemeContextType };