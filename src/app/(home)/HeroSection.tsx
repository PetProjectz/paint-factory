'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grow from '@mui/material/Grow';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ThemeMode } from '@/contexts/ThemeContext';
import { useTheme } from '@mui/material/styles';
import useThemeContext from '@/hooks/useThemeContext';

function HeroSection() {
  const { themeMode } = useThemeContext();
  const isDarkMode = themeMode === ThemeMode.DARK;
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundImage: isDarkMode
          ? `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.getAlphaColor('primary', 0.5, 'dark')}, transparent)`
          : `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.getAlphaColor('primary', 0.6, 'light')}, transparent)`,
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
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Glazyara&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: isDarkMode ? 'primary.main' : 'primary.dark',
              }}
            >
              Reach
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            We Help Brands Grow Smarter
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Boost your visibility, drive real engagement, and turn clicks into customers.
          </Typography>
        </Stack>
        <Grow in={imageLoaded} timeout={600}>
          <Box
            id="image"
            sx={{
              alignSelf: 'center',
              width: '100%',
              height: 400,
              marginTop: 8,
              borderRadius: 1,
              outline: '6px solid',
              outlineColor: isDarkMode ? theme.getAlphaColor('primary', 0.15, 'dark') : theme.getAlphaColor('primary', 0.15, 'light'),
              border: '1px solid',
              borderColor: isDarkMode ? 'grey.700' : 'grey.200',
              boxShadow: isDarkMode ? `0 0 24px 12px ${theme.getAlphaColor('primary', 0.3, 'dark')}` : `0 0 12px 8px ${theme.getAlphaColor('primary', 0.3, 'light')}`,
              position: 'relative',
              overflow: 'hidden',
              '@media (min-width: 600px)': {
                marginTop: 10,
                height: 700,
              },
            }}
          >
            <Image
              src={
                isDarkMode
                  ? `${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg`
                  : `${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg`
              }
              alt="Hero Image"
              fill
              style={{
                objectFit: 'cover',
              }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              onLoad={() => setImageLoaded(true)}
            />
          </Box>
        </Grow>
      </Container>
    </Box>
  );
}

export default HeroSection;