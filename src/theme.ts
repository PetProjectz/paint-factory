'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
  // palette: {
  //   primary: {
  //     main: '#1976d2',      // Base color
  //     light: '#42a5f5',     // Lighter shade
  //     dark: '#1565c0',      // Darker shade
  //     contrastText: '#fff', // Text color for contrast
  //   },
  //   secondary: {
  //     main: '#dc004e',      // Base color
  //     light: '#ff5983',     // Lighter shade
  //     dark: '#9a0036',      // Darker shade
  //     contrastText: '#fff', // Text color for contrast
  //   }
  // },
});

export default theme;
