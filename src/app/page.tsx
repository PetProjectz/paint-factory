import * as React from 'react';

import HeroSection from './home/HeroSection';
import HighlightsSection from './home/HighlightsSection';
import WhyGoldlacSection from './home/WhyGoldlacSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <WhyGoldlacSection />
    </main>
  );
}

