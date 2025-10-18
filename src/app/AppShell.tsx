'use client';

import React from 'react';

import Box from '@mui/material/Box';

import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navBar/NavBar';

function AppShell({ children }: { children: React.ReactNode }) {
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
