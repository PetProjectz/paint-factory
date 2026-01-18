'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ProductCard from '../../../components/productCard/ProductCard';

const products = [
  {
    id: 1,
    name: 'Aquashade Exterior Waterproofing Paint',
    description: 'Exterior Standard Emulsion',
    image: '/standard/exterior-standard.jpg',
  },
  {
    id: 2,
    name: 'Exterior Filler',
    description: 'Standard Undercoat',
    image: '/standard/exterior-undercoat-standard.jpg',
  },
  {
    id: 3,
    name: 'Interior Filler',
    description: 'Standard Undercoat',
    image: '/standard/interior-undercoat-standard.jpg',
  },
  {
    id: 4,
    name: 'Interior Brilliant White',
    description: 'Standard Collection',
    image: '/standard/interior-white-standard.jpg',
  },
  {
    id: 5,
    name: 'Colour Emulsion',
    description: 'Standard Interior Matt Colour Emulsion',
    image: '/standard/colour-emultion.jpg',
  },
  {
    id: 6,
    name: 'Bonding Polymer',
    description: 'Waterproofing Elastrometric Bonding Solution',
    image: '/standard/bonding-polymer.jpg',
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
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textAlign: 'left',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1,
          }}
        >
          {categoryInfo.title}
          <Typography component="span" variant="h5" sx={{ color: 'primary.main' }}>
            {categoryInfo.stars}
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            textAlign: 'left',
            width: '100%',
          }}
        >
          {categoryInfo.description}
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
