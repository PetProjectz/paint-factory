'use client';

import React from 'react';
import Grid from '@mui/material/GridLegacy';
import {
  Card,
  CardContent,
  Box,
  Container,
  Typography,
  Divider,
  Stack,
} from '@mui/material';

const products = [
  {
    id: 1,
    name: 'ULTRA PROFESSIONAL ROOF COAT',
    description:
      'A high-performance roof coating designed to withstand extreme weather conditions, providing long-lasting protection and heat resistance.',
    volumes: [
      { size: '1 L', price: 'LKR 3,200' },
      { size: '4 L', price: 'LKR 11,800' },
      { size: '10 L', price: 'LKR 28,000' },
    ],
  },
  {
    id: 2,
    name: 'ULTRA PREMIUM WHITE',
    description:
      'A premium interior and exterior white paint offering superior brightness, smooth finish, and excellent coverage.',
    volumes: [
      { size: '1 L', price: 'LKR 2,900' },
      { size: '4 L', price: 'LKR 10,500' },
      { size: '10 L', price: 'LKR 25,000' },
    ],
  },
  {
    id: 3,
    name: 'ULTRASHIELD PROFESSIONAL',
    description:
      'Advanced exterior wall protection paint formulated to resist moisture, algae, and harsh environmental exposure.',
    volumes: [
      { size: '1 L', price: 'LKR 3,500' },
      { size: '4 L', price: 'LKR 13,200' },
      { size: '10 L', price: 'LKR 31,000' },
    ],
  },
  {
    id: 4,
    name: 'AQUASHADEMAX',
    description:
      'A water-based decorative paint offering rich color depth, fast drying, and eco-friendly performance.',
    volumes: [
      { size: '1 L', price: 'LKR 2,600' },
      { size: '4 L', price: 'LKR 9,800' },
      { size: '10 L', price: 'LKR 23,000' },
    ],
  },
];

export default function ProductPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography
        variant="h2"
        textAlign="center"
        fontWeight={700}
        gutterBottom
      >
        GOLDLAC PAINT PRODUCTS
      </Typography>

      <Typography
        variant="subtitle1"
        textAlign="center"
        color="text.secondary"
        sx={{ mb: 8 }}
      >
        Premium quality paints engineered for durability, protection, and
        superior finish.
      </Typography>

      <Grid container spacing={5}>
        {products.map(product => (
          <Grid item xs={12} md={6} key={product.id}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
              }}
            >
              {/* IMAGE PLACEHOLDER */}
              <Box
                sx={{
                  height: 240,
                  bgcolor: 'grey.200',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  color: 'grey.600',
                }}
              >
                PRODUCT IMAGE
              </Box>

              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  {product.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {product.description}
                </Typography>

                <Divider sx={{ mb: 2 }} />

                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  sx={{ mb: 1 }}
                >
                  AVAILABLE VOLUMES & PRICING
                </Typography>

                <Stack spacing={1}>
                  {product.volumes.map((v, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant="body2">{v.size}</Typography>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        color="primary"
                      >
                        {v.price}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

