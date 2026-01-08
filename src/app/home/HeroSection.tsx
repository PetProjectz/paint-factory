'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grow from '@mui/material/Grow';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

function HeroSection() {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `radial-gradient(
          ellipse 80% 50% at 50% -20%,
          ${theme.getAlphaColor('primary', 0.55, 'light')},
          transparent
        )`,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        {/* TEXT CONTENT */}
        <Stack
          spacing={2.5}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 9vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '0.04em',
            }}
          >
            GOLDLAC&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: 'primary.dark',
                fontWeight: 800,
              }}
            >
              PAINTS
            </Typography>
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              fontSize: '1.15rem',
              width: { sm: '100%', md: '85%' },
            }}
          >
            Premium Paint Solutions for Superior Protection and Finish
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '85%' },
            }}
          >
            Engineered coatings designed to enhance durability, resist harsh
            environments, and deliver long-lasting aesthetic excellence for
            residential, commercial, and industrial surfaces.
          </Typography>
        </Stack>

        {/* HERO IMAGE */}
        <Grow in={imageLoaded} timeout={700}>
          <Box
            id="image"
            sx={{
              alignSelf: 'center',
              width: '100%',
              height: 420,
              mt: 8,
              borderRadius: 2,
              outline: '6px solid',
              outlineColor: theme.getAlphaColor('primary', 0.12, 'light'),
              border: '1px solid',
              borderColor: 'grey.200',
              boxShadow: `0 25px 60px ${theme.getAlphaColor(
                'primary',
                0.25,
                'light'
              )}`,
              position: 'relative',
              overflow: 'hidden',
              '@media (min-width: 600px)': {
                mt: 10,
                height: 680,
              },
            }}
          >
            <Image
              src="/images/hero-paint.jpg" // replace with real Goldlac image
              alt="Goldlac Paint Applications"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, 100vw"
              onLoad={() => setImageLoaded(true)}
            />
          </Box>
        </Grow>
      </Container>
    </Box>
  );
}

export default HeroSection;