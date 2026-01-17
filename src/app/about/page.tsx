'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

export default function About() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
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
            width: { xs: '100%', sm: '80%', md: '70%' },
            textAlign: 'center',
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
            About&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: 'primary.dark',
              }}
            >
              Goldlac Paints
            </Typography>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'text.primary',
              fontWeight: 'medium',
              maxWidth: '600px',
            }}
          >
            Excellence of New Generation
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 4,
              width: '100%',
              maxWidth: '800px',
              mt: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                p: 3,
                borderRadius: 2,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: 4,
              }}
            >
              <CalendarTodayRoundedIcon
                sx={{ fontSize: 48, color: 'primary.main', opacity: 0.8 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Established 2018
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                We started our journey back in 2018 with a vision to create premium quality paints
                that meet international standards while being accessible to all.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                p: 3,
                borderRadius: 2,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: 4,
              }}
            >
              <LocationOnRoundedIcon
                sx={{ fontSize: 48, color: 'primary.main', opacity: 0.8 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Sri Lankan Made
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                Fully Sri Lankan product from the new generation, proudly manufactured with local
                expertise and supporting our local economy.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 4,
              p: 4,
              borderRadius: 2,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: 4,
              maxWidth: '900px',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                mb: 3,
              }}
            >
              <AutoFixHighRoundedIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Our Mission
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              At Goldlac Paints, we are committed to delivering premium quality paints that combine
              superior durability, advanced formulations, and professional finish. As a new generation
              Sri Lankan company, we blend traditional craftsmanship with modern technology to create
              products that stand the test of time. Our mission is to provide exceptional value while
              supporting local manufacturing and contributing to the growth of Sri Lanka's economy.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 4,
              p: 4,
              borderRadius: 2,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: 4,
              maxWidth: '900px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <VerifiedRoundedIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                IDB Verified Business
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'center',
              }}
            >
              Our business is verified by the Industrial Development Board of Sri Lanka (IDB),
              confirming our commitment to quality, standards, and contribution to Sri Lanka's
              industrial development.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="https://bizconnect.idb.gov.lk/listing/kurunegala/inks-chemicals-printing-materials/goldlac-paint-and-coating/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2,
              }}
            >
              View Our IDB Profile
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
