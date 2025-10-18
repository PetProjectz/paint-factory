import * as React from 'react';

import HeroSection from '@/app/(home)/HeroSection';
import HighlightsSection from '@/app/(home)/HighlightsSection';

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
