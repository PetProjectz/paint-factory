'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Image from 'next/image';
import NextLink from 'next/link';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

const HERO_IMAGES = ['/hero/hero1.jpg', '/hero/hero3.jpg', '/hero/hero4.jpg', '/hero/hero5.png', '/hero/hero6.jpg'];

const BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

const SLIDE_DURATION_MS = 5000;
const FADE_DURATION_MS = 1200;

function HeroSection() {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const theme = useTheme();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.getAlphaColor('primary', 0.6, 'light')}, transparent)`,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 18, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Fade in timeout={800}>
          <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }}>
            <Typography
              component="span"
              variant="overline"
              sx={{
                display: 'inline-block',
                color: 'primary.main',
                letterSpacing: 2,
                fontWeight: 600,
                mb: 1,
              }}
            >
              Premium Paints · Made in Sri Lanka
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                lineHeight: 1.2,
                mb: 1.5,
                '@media (min-width: 600px)': { fontSize: 'clamp(2rem, 4vw, 3rem)' },
              }}
            >
              Excellence of New Generation
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Premium paints & coatings trusted by professionals. Superior durability, rich colors, and a finish that lasts.
            </Typography>
          </Box>
        </Fade>

        <Grow in={imageLoaded} timeout={600}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              id="image"
              sx={{
                alignSelf: 'center',
                width: '100%',
                aspectRatio: '1200/628',
                marginTop: 4,
                borderRadius: 2,
                outline: '6px solid',
                outlineColor: theme.getAlphaColor('primary', 0.15, 'light'),
                border: '1px solid',
                borderColor: 'grey.200',
                boxShadow: `0 4px 24px ${theme.getAlphaColor('primary', 0.2, 'light')}, 0 0 40px ${theme.getAlphaColor('primary', 0.12, 'light')}`,
                position: 'relative',
                overflow: 'hidden',
                '@media (min-width: 600px)': {
                  marginTop: 5,
                  borderRadius: 3,
                },
              }}
            >
              {HERO_IMAGES.map((src, index) => (
                <Box
                  key={src}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: index === currentIndex ? 1 : 0,
                    transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
                    zIndex: index === currentIndex ? 1 : 0,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Goldlac Paints - Premium Quality Paints and Coatings manufactured in Sri Lanka ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    onLoad={() => index === 0 && setImageLoaded(true)}
                  />
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 1,
                mt: 2,
                mb: 3,
              }}
            >
              {HERO_IMAGES.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: index === currentIndex ? 20 : 8,
                    height: 8,
                    borderRadius: 1,
                    bgcolor: index === currentIndex ? 'primary.main' : 'grey.400',
                    transition: 'all 0.3s ease',
                  }}
                  aria-hidden
                />
              ))}
            </Box>

            <Button
              component={NextLink}
              href="/products"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                boxShadow: (t) => t.shadows[4],
                '&:hover': { boxShadow: (t) => t.shadows[8] },
              }}
            >
              Explore Products
            </Button>
          </Box>
        </Grow>
      </Container>
    </Box>
  );
}

export default HeroSection;