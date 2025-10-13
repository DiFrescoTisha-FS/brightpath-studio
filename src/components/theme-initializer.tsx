// src/components/theme-initializer.tsx
'use client';

import { useEffect } from 'react';
import { initializeTheme } from '@/store/appStore';

export function ThemeInitializer() {
  useEffect(() => {
    initializeTheme();
  }, []); // The empty dependency array ensures this effect runs only once

  return null; // This component doesn't render anything
}