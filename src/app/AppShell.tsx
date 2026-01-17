'use client';

import React from 'react';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
      <Fab
        color="primary"
        aria-label="WhatsApp"
        href="https://wa.me/94772500061"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </>
  );
}

export default AppShell;
