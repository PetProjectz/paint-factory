'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const reasons = [
  {
    title: 'SUPERIOR DURABILITY',
    description:
      'Formulated to withstand extreme weather conditions, ensuring long-lasting protection and surface integrity.',
  },
  {
    title: 'ADVANCED FORMULATIONS',
    description:
      'Engineered using modern coating technology to deliver consistent finish, high coverage, and strong adhesion.',
  },
  {
    title: 'WEATHER & MOISTURE RESISTANCE',
    description:
      'Designed to resist moisture penetration, UV exposure, and surface deterioration over time.',
  },
  {
    title: 'PROFESSIONAL FINISH',
    description:
      'Provides smooth application, rich color depth, and a premium finish trusted by professionals.',
  },
];

function WhyGoldlacSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'grey.50',
      }}
    >
      <Container maxWidth="lg">
        {/* SECTION HEADER */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            fontWeight={800}
            gutterBottom
          >
            WHY GOLDLAC
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 720, mx: 'auto' }}
          >
            Trusted paint solutions engineered for performance, protection, and
            long-term value.
          </Typography>
        </Box>

        {/* CARDS */}
        <Grid container spacing={4}>
          {reasons.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    gutterBottom
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyGoldlacSection;