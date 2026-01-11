import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Copyright from '@/components/footer/Copyright';

export default function Footer() {
  return (
    <>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
            gap: { xs: 4, sm: 2 },
            alignItems: { xs: 'center', sm: 'flex-start' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', sm: 'flex-start' },
              gap: 1,
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            {/* Follow Us */}
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
              Follow Us
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                justifyContent: { xs: 'center', sm: 'flex-start' },
                color: 'text.secondary',
              }}
            >
              <IconButton
                color="inherit"
                size="small"
                href="https://www.facebook.com/profile.php?id=61556343994194"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
                href="#"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: { xs: 'center', sm: 'flex-end' },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
              Quick Links
            </Typography>
            <Link color="text.secondary" variant="body2" href="/products">
              Products
            </Link>
            <Link color="text.secondary" variant="body2" href="/about">
              About Us
            </Link>
            <Link color="text.secondary" variant="body2" href="/contact">
              Contact Us
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
              Powered by{' '}
              <Link
                color="text.secondary"
                href="https://www.facebook.com/profile.php?id=61581866430688"
                target="_blank"
                rel="noopener noreferrer"
              >
                Boostify
              </Link>
            </Typography>
            <Copyright />
          </div>
        </Box>
      </Container>
    </>
  );
}