import * as React from 'react';
import type { Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import theme from '@/theme';
import AppShell from '@/app/AppShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paintfactory.lk';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Goldlac Paints - Premium Quality Paints & Coatings | Sri Lanka',
    template: '%s | Goldlac Paints',
  },
  description:
    'Goldlac Paints - Excellence of New Generation. Premium quality paints and coatings \
    manufactured in Sri Lanka. Superior durability, advanced formulations, and professional \
    finish. IDB verified business.',
  keywords: [
    'Goldlac Paints',
    'paints Sri Lanka',
    'premium paints',
    'paint coatings',
    'Sri Lankan paints',
    'exterior paints',
    'interior paints',
    'roof coating',
    'paint manufacturer Sri Lanka',
    'IDB verified paints',
    'Kurunegala paints',
    'Kithalawa paints',
  ],
  authors: [{ name: 'Goldlac Paints' }],
  creator: 'Goldlac Paints',
  publisher: 'Goldlac Paints',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Goldlac Paints',
    title: 'Goldlac Paints - Premium Quality Paints & Coatings | Sri Lanka',
    description:
      'Premium quality paints and coatings manufactured in Sri Lanka. Superior durability, advanced formulations, and professional finish.',
    images: [
      {
        url: `${siteUrl}/hero.jpg`,
        width: 1200,
        height: 628,
        alt: 'Goldlac Paints - Premium Quality Paints',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goldlac Paints - Premium Quality Paints & Coatings | Sri Lanka',
    description:
      'Premium quality paints and coatings manufactured in Sri Lanka. Superior durability, advanced formulations, and professional finish.',
    images: [`${siteUrl}/hero.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="msvalidate.01" content="99605041325C02C0FE79F978DEBF2848" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Goldlac Paints',
              description:
                'Premium quality paints and coatings manufacturer in Sri Lanka. Excellence of New Generation.',
              url: siteUrl,
              logo: `${siteUrl}/logo.jpg`,
              image: `${siteUrl}/hero.jpg`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '310/2, Kuliyapitiya Road, Kithalawa',
                addressLocality: 'Kurunegala',
                addressCountry: 'LK',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+94772500061',
                contactType: 'Customer Service',
                email: 'goldlac@yahoo.com',
                availableLanguage: ['English', 'Sinhala'],
              },
              sameAs: [
                'https://bizconnect.idb.gov.lk/listing/kurunegala/inks-chemicals-printing-materials/goldlac-paint-and-coating/',
              ],
              foundingDate: '2018',
              areaServed: {
                '@type': 'Country',
                name: 'Sri Lanka',
              },
            }),
          }}
        />
      </head>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <AppShell>
              {props.children}
            </AppShell>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
