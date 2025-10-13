'use client';

import { useAppStore } from '@/store/appStore';

export const ThemeAwareLogo = () => {
  const theme = useAppStore((state) => state.theme);
  
  // Choose the logo based on the current theme
  const logoSrc = theme === 'dark'
    ? '/images/brightpath-logo-dark.png' // This is the light-colored logo for the dark theme background
    : '/images/brightpath-logo-light.png';  // This is the dark-colored logo for the light theme background
  
  const altText = "BrightPath Web Studio Logo";

  return (
    <img src={logoSrc} alt={altText} className="h-16 w-auto" />
  );
};