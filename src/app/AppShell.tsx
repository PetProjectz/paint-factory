'use client';

import React from 'react';

import Box from '@mui/material/Box';

import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navBar/NavBar';
import ThemeLoadingFallback from '@/components/loadingFallback/ThemeLoadingFallback';
import useThemeContext from '@/hooks/useThemeContext';

function AppShell({ children }: { children: React.ReactNode }) {
  const { isThemeReady } = useThemeContext();

  if (!isThemeReady) {
    return <ThemeLoadingFallback />;
  }

  return (
    <>
      <NavBar />
      <Box
        component="main"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          pt: 0,
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default AppShell;
