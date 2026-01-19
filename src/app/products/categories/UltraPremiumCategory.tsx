'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ProductCard, { type ProductCardProps } from '../../../components/productCard/ProductCard';

const products: ProductCardProps[] = [
  {
    id: 1,
    name: 'Aqua Shade Max',
    description: "Sri Lanka's waterproof, weatherproof paint with brightest white finish",
    image: '/ultra/aqua-shade-max.jpg',
  },
  {
    id: 2,
    name: 'Crack Bridging Primer',
    description: 'Sri Lanka\'s top ultra-premium crack-bridging primer',
    image: '/ultra/crack-bridging-primer.jpg',
  },
  {
    id: 3,
    name: 'Ultra Premium White',
    description: 'Most blue-toned white with the brightest finish in Sri Lanka',
    image: '/ultra/ultra-premium-white.jpg',
  },
  {
    id: 4,
    name: 'Ultra Shield Professional',
    description: 'Semi-gross waterproof paint with the whitest finish in Sri Lanka',
    image: '/ultra/ultra-shield-professional.jpg',
  },
];

const categoryInfo = {
  title: 'ULTRA-PREMIUM',
  stars: '⭐⭐⭐⭐⭐',
  description: 'Professional luxury coatings with superior durability, rich colour depth, and maximum protection for elite projects.',
};

export default function UltraPremiumCategory() {
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
