import * as React from 'react';

import HeroSectionClient from '@/app/(home)/HeroSectionClient';
import HighlightsSection from '@/app/(home)/HighlightsSection';

export default function Home() {
  return (
    <>
      <HeroSectionClient />
      <div>
        <HighlightsSection />
      </div>
    </>
  );
}
