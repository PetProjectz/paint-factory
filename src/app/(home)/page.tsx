import * as React from 'react';
import type { Metadata } from 'next';

import HeroSection from '@/app/(home)/HeroSection';
import HighlightsSection from '@/app/(home)/HighlightsSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paintfactory.lk';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Goldlac Paints - Excellence of New Generation. Premium quality paints and coatings manufactured in Sri Lanka. Discover superior durability, advanced formulations, and professional finish.',
  openGraph: {
    title: 'Goldlac Paints - Premium Quality Paints & Coatings | Sri Lanka',
    description:
      'Premium quality paints and coatings manufactured in Sri Lanka. Superior durability, advanced formulations, and professional finish.',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/hero.jpg`,
        width: 1200,
        height: 628,
        alt: 'Goldlac Paints - Premium Quality Paints',
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

function Home() {
  return (
    <>
      <HeroSection />
      <div>
        <HighlightsSection />
      </div>
    </>
  );
}

export default Home;
