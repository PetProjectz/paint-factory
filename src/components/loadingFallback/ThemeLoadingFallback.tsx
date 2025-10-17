import * as React from 'react';

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function ThemeLoadingFallback() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default ThemeLoadingFallback;