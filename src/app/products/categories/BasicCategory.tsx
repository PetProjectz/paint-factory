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
    name: 'Product Name',
    image: '/products/product1.jpg',
  },
];

const categoryInfo = {
  title: 'BASIC',
  stars: '⭐⭐',
  description: 'Cost-effective paints with simple, reliable performance for everyday use. (Budget emulsion, entry-level)',
};

export default function BasicCategory() {
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
