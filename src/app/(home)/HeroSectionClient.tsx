'use client';

import React, { useState, useEffect } from 'react';

import { useColorScheme } from '@mui/material/styles';

import HeroSectionServer from '@/app/(home)/HeroSectionServer';

export default function HeroSectionClient() {
  const { mode } = useColorScheme();
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const actualTheme = mode === 'system' ? systemTheme : mode;

  return <HeroSectionServer themeMode={actualTheme} />;
}
