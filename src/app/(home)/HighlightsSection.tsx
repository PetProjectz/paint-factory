'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import RecyclingRoundedIcon from '@mui/icons-material/RecyclingRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Superior Durability',
    description:
      'Formulated to withstand extreme weather and protect surfaces long-term, using high-quality raw materials sourced from globally reputed manufacturers in Germany, USA, UK, and Australia.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Professional Finish',
    description:
      'Premium & ultra-premium grades for professionals, delivering smooth application, rich color depth, and a finish trusted by professionals worldwide, meeting international quality standards.',
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Advanced Formulations',
    description:
      'European & USA modified technology combined with premium raw materials from Germany, USA, UK, and Australia delivers flawless coverage and strong adhesion. Backed by 7 years of research and thousands of trials, our master badge products ensure uncompromised, quality-focused performance—never cheap.',
  },
  {
    icon: <RecyclingRoundedIcon />,
    title: 'Eco-Friendly & Safe',
    description:
      'Formulated with less in-can preservatives and eco-conscious ingredients, our paints are safe for families and homes. With a one-year shelf life, they are among the safest paints in Sri Lanka.',
  },
  {
    icon: <PaletteRoundedIcon />,
    title: 'Wide Color Range',
    description:
      'Extensive selection of vibrant colors and shades, crafted with UK high-quality pigments guaranteed free from mercury, lead, or cadmium. We never use cheap raw materials, ensuring safe, rich, and long-lasting colors for every design vision.',
  },
  {
    icon: <LocationOnRoundedIcon />,
    title: 'Sri Lankan Made',
    description:
      'Proudly researched and manufactured in Sri Lanka by the new generation of innovators. We combine Sri Lankan expertise with global quality standards, showing that Sri Lankans can create world-class products. Our mission is to inspire future generations to build global brands from Sri Lanka.',
  },
];

export default function HighlightsSection() {
  const [headerVisible, setHeaderVisible] = React.useState(false);
  const [itemVisible, setItemVisible] = React.useState<boolean[]>(new Array(items.length).fill(false));
  const headerRef = React.useRef<HTMLDivElement>(null);
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const handleScroll = () => {
      // Check header visibility
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

        if (rect.top <= windowHeight - 200 && !headerVisible) {
          setHeaderVisible(true);
        }
      }

      // Check each item visibility
      itemRefs.current.forEach((itemRef, index) => {
        if (itemRef) {
          const rect = itemRef.getBoundingClientRect();
          const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

          if (rect.top <= windowHeight - 170 && !itemVisible[index]) {
            setItemVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        }
      });
    };

    // Check initial positions
    handleScroll();

    // Add scroll listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [headerVisible, itemVisible]);

  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        bgcolor: 'secondary',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Fade in={headerVisible} timeout={800}>
          <Box
            ref={headerRef}
            sx={{
              width: { sm: '100%', md: '60%' },
              textAlign: { sm: 'left', md: 'center' },
            }}
          >
            <Typography sx={{ color: 'primary.main' }} component="h2" variant="h4" gutterBottom>
              Highlights
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Experience premium quality paints with superior durability, advanced formulations, and weather resistance.
              Choose from our wide color range and enjoy a professional finish, all proudly made in Sri Lanka.
            </Typography>
          </Box>
        </Fade>
        <Grid container spacing={2}>
          {items.map((item, index) => {
            // Calculate row-based index for timing delays
            const getRowIndex = (itemIndex: number) => {
              // For xs: 1 item per row, sm: 2 items per row, md: 3 items per row
              // We'll use a responsive approach - calculate based on current screen size
              if (typeof window === 'undefined') {
                return itemIndex % 3; // Default to 3 items per row for SSR
              }

              const screenWidth = window.innerWidth;
              let itemsPerRow = 1;

              if (screenWidth >= 900) { // md breakpoint
                itemsPerRow = 3;
              } else if (screenWidth >= 600) { // sm breakpoint
                itemsPerRow = 2;
              }

              return itemIndex % itemsPerRow;
            };

            const rowIndex = getRowIndex(index);

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Grow
                  in={itemVisible[index]}
                  timeout={800 + rowIndex * 800}
                  style={{ transformOrigin: '0 0 0' }}
                >
                  <Stack
                    ref={(el) => { itemRefs.current[index] = el; }}
                    direction="column"
                    component={Card}
                    spacing={1}
                    useFlexGap
                    sx={{
                      p: 3,
                      height: '100%',
                      bgcolor: 'secondary',
                    }}
                  >
                    <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                    <div>
                      <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'primary.light' }}>
                        {item.description}
                      </Typography>
                    </div>
                  </Stack>
                </Grow>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}