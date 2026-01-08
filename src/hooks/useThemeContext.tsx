'use client';

import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../contexts/ThemeContext';

/**
 * Custom hook to access ThemeContext
 * Ensures the hook is used inside a ThemeProvider
 */
const useThemeContext = (): ThemeContextType => {
  const context = useContext<ThemeContextType | undefined>(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
};

export default useThemeContext;
