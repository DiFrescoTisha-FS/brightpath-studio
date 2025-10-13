// src/components/ThemeProvider.tsx
import React from 'react';
import { useAppStore } from '@/store/appStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useAppStore(state => state.theme);
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={themeClass}>
      {children}
    </div>
  );
};