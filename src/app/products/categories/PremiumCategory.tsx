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
    name: 'Exterior Interior Filler',
    description: 'Undercoat with high opacity',
    image: '/premium/exterior-interior-filler.jpg',
  },
  {
    id: 2,
    name: 'Premium Colour Emulsion',
    description: 'Rich colours with a smooth semi-gloss finish',
    image: '/premium/premium-colur-emultion.jpg',
  },
  {
    id: 3,
    name: 'Pure White',
    description: 'Interior Premium Brilliant White',
    image: '/premium/pure-white.jpg',
  },
  {
    id: 4,
    name: 'Roof Coat',
    description: 'Weather-resistant roof coating made with high-quality German pigments',
    image: '/premium/roof-coat.jpg',
  },
  {
    id: 5,
    name: 'Seal Top',
    description: 'Protective sealer for strong adhesion and lasting finish',
    image: '/premium/seal-top.jpg',
  },
  {
    id: 6,
    name: 'Wall Primer',
    description: 'Waterproof primer for added surface protection',
    image: '/premium/wall-primer.jpg',
  },
  {
    id: 7,
    name: 'Water Shade',
    description: 'Premium waterproof paint for long-lasting protection',
    image: '/premium/watershade.jpg',
  },
  {
    id: 8,
    name: 'Weather Shade Exterior Premium Paint',
    description: 'Superior weather protection with long-lasting colour',
    image: '/premium/weathershade.jpg',
  },
];

const categoryInfo = {
  title: 'PREMIUM',
  stars: '⭐⭐⭐⭐',
  description: 'High-performance paints with long-lasting colour, excellent washability, and smooth finish.',
};

export default function PremiumCategory() {
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
