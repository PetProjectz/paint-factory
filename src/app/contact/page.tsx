'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Link from '@mui/material/Link';

export default function Contact() {
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
            Contact&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: 'primary.dark',
              }}
            >
              Us
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
            Get in touch with us
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 4,
              width: '100%',
              maxWidth: '900px',
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
                p: 4,
                borderRadius: 2,
                bgcolor: 'background.paper',
                boxShadow: 2,
              }}
            >
              <LocationOnRoundedIcon
                sx={{ fontSize: 48, color: 'primary.main', opacity: 0.8 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Address
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', textAlign: 'center', lineHeight: 1.8 }}
              >
                310/2, Kuliyapitiya Road, Kithalawa,<br />
                Kurunegala, Sri Lanka
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                p: 4,
                borderRadius: 2,
                bgcolor: 'background.paper',
                boxShadow: 2,
              }}
            >
              <PhoneRoundedIcon
                sx={{ fontSize: 48, color: 'primary.main', opacity: 0.8 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Phone
              </Typography>
              <Link
                href="tel:+94772500061"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  077 250 0061
                </Typography>
              </Link>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                p: 4,
                borderRadius: 2,
                bgcolor: 'background.paper',
                boxShadow: 2,
              }}
            >
              <EmailRoundedIcon
                sx={{ fontSize: 48, color: 'primary.main', opacity: 0.8 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Email
              </Typography>
              <Link
                href="mailto:goldlac@yahoo.com"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  goldlac@yahoo.com
                </Typography>
              </Link>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
