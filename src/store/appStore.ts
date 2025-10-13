// src/store/appStore.ts
import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface AppState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  theme: 'light', // Default theme

  setTheme: (theme: Theme) => {
    // Only update if the theme has actually changed
    if (get().theme !== theme) {
        set({ theme });
        localStorage.setItem('theme', theme);
        document.documentElement.className = theme;
    }
  },

  toggleTheme: () => {
    const currentTheme = get().theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    get().setTheme(newTheme);
  },
}));

export const initializeTheme = () => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme') as Theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = storedTheme || systemTheme;
    useAppStore.getState().setTheme(initialTheme);
  }
};