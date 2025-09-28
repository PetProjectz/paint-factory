import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface HeroSectionServerProps {
  themeMode?: 'light' | 'dark';
}

export default function HeroSectionServer({ themeMode = 'light' }: HeroSectionServerProps) {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: themeMode === 'dark'
          ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)'
          : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
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
                color: themeMode === 'dark' ? 'primary.main' : 'primary.dark',
              }}
            >
              Reach
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            We Help Brands Grow Smarter
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'secondary.light',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Boost your visibility, drive real engagement, and turn clicks into customers.
          </Typography>
        </Stack>
        <Box
          id="image"
          sx={{
            alignSelf: 'center',
            width: '100%',
            height: 400,
            marginTop: 8,
            borderRadius: 1,
            outline: '6px solid',
            outlineColor: themeMode === 'dark' ? 'hsla(220, 20%, 42%, 0.1)' : 'hsla(220, 25%, 80%, 0.2)',
            border: '1px solid',
            borderColor: themeMode === 'dark' ? 'grey.700' : 'grey.200',
            boxShadow: themeMode === 'dark' ? '0 0 24px 12px hsla(210, 100%, 25%, 0.2)' : '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
            backgroundImage: themeMode === 'dark'
              ? `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`
              : `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
            backgroundSize: 'cover',
            '@media (min-width: 600px)': {
              marginTop: 10,
              height: 700,
            },
          }}
        />
      </Container>
    </Box>
  );
}