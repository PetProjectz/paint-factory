import * as React from 'react';

import Box from '@mui/material/Box';
import Image from 'next/image';

export default function SiteMark() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Image
        src="/logo.jpg"
        alt="Site Logo"
        width={60}
        height={60}
        style={{
          objectFit: 'contain',
        }}
      />
    </Box>
  );
}
