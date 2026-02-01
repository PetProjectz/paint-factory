'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import BasicCategory from './categories/BasicCategory';
import StandardCategory from './categories/StandardCategory';
import PremiumCategory from './categories/PremiumCategory';
import UltraPremiumCategory from './categories/UltraPremiumCategory';

export default function Products() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.getAlphaColor('primary', 0.6, 'light')}, transparent)`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={4}
          useFlexGap
          sx={{
            alignItems: 'center',
            width: '100%',
            textAlign: 'center',
            mb: 6,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
              fontWeight: 'bold',
            }}
          >
            Our&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: 'primary.dark',
              }}
            >
              Products
            </Typography>
          </Typography>
        </Stack>

        <Box sx={{ width: '100%' }}>
          <UltraPremiumCategory />
          <PremiumCategory />
          <StandardCategory />
          <BasicCategory />
        </Box>
      </Container>
    </Box>
  );
}
