'use client';

import React, { ReactNode } from 'react';
import { Box, Container, AppBar, Toolbar, Typography } from '@mui/material';

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* NAVIGATION */}
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" color="inherit" sx={{ fontWeight: 'bold' }}>
            Goldlac
          </Typography>
          <Box>
            <a href="/" style={{ marginRight: 16, color: 'inherit', textDecoration: 'none' }}>
              Home
            </a>
            <a href="/products" style={{ marginRight: 16, color: 'inherit', textDecoration: 'none' }}>
              Products
            </a>
            <a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
              About
            </a>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MAIN CONTENT */}
      <Container sx={{ mt: 4, flexGrow: 1 }}>{children}</Container>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          mt: 8,
          py: 4,
          textAlign: 'center',
          bgcolor: 'primary.main',
          color: 'white',
        }}
      >
        © {new Date().getFullYear()} Goldlac Paints. All rights reserved.
      </Box>
    </Box>
  );
}

