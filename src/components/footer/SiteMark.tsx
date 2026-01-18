import * as React from 'react';

import Box from '@mui/material/Box';
import Image from 'next/image';
import NextLink from 'next/link';

interface SiteMarkProps {
  linkToHome?: boolean;
}

export default function SiteMark({ linkToHome = false }: SiteMarkProps) {
  const logo = (
    <Image
      src="/logo.jpg"
      alt="Goldlac Paints - Premium Quality Paints and Coatings Logo"
      width={60}
      height={60}
      style={{
        objectFit: 'contain',
      }}
    />
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      {linkToHome ? (
        <NextLink href="/" aria-label="Goldlac Paints Home">
          {logo}
        </NextLink>
      ) : (
        logo
      )}
    </Box>
  );
}
