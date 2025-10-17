'use client';

import React from 'react';

import HeroSectionServer from '@/app/(home)/HeroSectionServer';
import useTheme from '@/hooks/useTheme';

export default function HeroSectionClient() {
  const { themeMode } = useTheme();

  return <HeroSectionServer themeMode={themeMode} />;
}
