'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Exterior Standard',
    image: '/standard/exterior-standard.jpg',
  },
  {
    id: 2,
    name: 'Exterior Undercoat Standard',
    image: '/standard/exterior-undercoat-standard.jpg',
  },
  {
    id: 3,
    name: 'Interior Undercoat Standard',
    image: '/standard/interior-undercoat-standard.jpg',
  },
  {
    id: 4,
    name: 'Interior White Standard',
    image: '/standard/interior-white-standard.jpg',
  },
];

const categoryInfo = {
  title: 'STANDARD',
  stars: '⭐⭐⭐',
  description: 'Balanced paints offering good coverage and durability for regular home applications.',
};

export default function StandardCategory() {
  if (products.length === 0) {
    return null;
  }

  return (
    <Box sx={{ width: '100%', mb: 6 }}>
      <Stack spacing={3} sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          {categoryInfo.title}
          <Typography component="span" variant="h4" sx={{ color: 'primary.main' }}>
            {categoryInfo.stars}
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          {categoryInfo.description}
        </Typography>
      </Stack>

      <Grid container spacing={3}>
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
                  alt={`${product.name} - Premium Quality Paint by Goldlac Paints`}
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
    </Box>
  );
}
