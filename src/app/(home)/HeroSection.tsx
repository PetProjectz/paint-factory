'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grow from '@mui/material/Grow';
import Image from 'next/image';

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
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.getAlphaColor('primary', 0.6, 'light')}, transparent)`,
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
        <Grow in={imageLoaded} timeout={600}>
          <Box
            id="image"
            sx={{
              alignSelf: 'center',
              width: '100%',
              aspectRatio: '1200/628',
              marginTop: 8,
              borderRadius: 1,
              outline: '6px solid',
              outlineColor: theme.getAlphaColor('primary', 0.15, 'light'),
              border: '1px solid',
              borderColor: 'grey.200',
              boxShadow: `0 0 12px 8px ${theme.getAlphaColor('primary', 0.3, 'light')}`,
              position: 'relative',
              overflow: 'hidden',
              '@media (min-width: 600px)': {
                marginTop: 10,
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
        </Grow>
      </Container>
    </Box>
  );
}

export default HeroSection;