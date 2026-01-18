'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ProductCard, { type ProductCardProps } from '../../../components/productCard/ProductCard';

const products: ProductCardProps[] = [
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
