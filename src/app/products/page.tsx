'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Aquashade Max',
    image: '/products/product1.jpg',
  },
  {
    id: 2,
    name: 'Ultra Premium White',
    image: '/products/product2.jpg',
  },
  {
    id: 3,
    name: 'Ultra Roof Coat',
    image: '/products/product3.jpg',
  },
  {
    id: 4,
    name: 'Ultrashield White',
    image: '/products/product4.jpg',
  },
  {
    id: 5,
    name: 'Standard Colour',
    image: '/products/product5.jpg',
  },
  {
    id: 6,
    name: 'Crack Bridging Premier',
    image: '/products/product6.jpg',
  },
];

export default function Products() {
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
            width: '100%',
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

          <Typography
            variant="h5"
            sx={{
              color: 'text.primary',
              fontWeight: 'medium',
              maxWidth: '600px',
            }}
          >
            Discover our premium paint collection
          </Typography>

          <Grid container spacing={3} sx={{ width: '100%', mt: 2 }}>
            {products.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    boxShadow: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '4/3',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 'bold',
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
