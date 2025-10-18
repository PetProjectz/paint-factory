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
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Adaptable performance',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Built to last',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Great user experience',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Innovative functionality',
    description:
      'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Reliable support',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precision in every detail',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
];

export default function HighlightsSection() {
  const [headerVisible, setHeaderVisible] = React.useState(false);
  const [itemVisible, setItemVisible] = React.useState<boolean[]>(new Array(6).fill(false));
  const headerRef = React.useRef<HTMLDivElement>(null);
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const handleScroll = () => {
      // Check header visibility
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight - 200 && !headerVisible) {
          setHeaderVisible(true);
        }
      }

      // Check each item visibility
      itemRefs.current.forEach((itemRef, index) => {
        if (itemRef) {
          const rect = itemRef.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top <= windowHeight - 150 && !itemVisible[index]) {
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
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
              Explore why our product stands out: adaptability, durability,
              user-friendly design, and innovation. Enjoy reliable customer support and
              precision in every detail.
            </Typography>
          </Box>
        </Fade>
        <Grid container spacing={2}>
          {items.map((item, index) => {
            // Calculate row-based index for timing delays
            const getRowIndex = (itemIndex: number) => {
              // For xs: 1 item per row, sm: 2 items per row, md: 3 items per row
              // We'll use a responsive approach - calculate based on current screen size
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