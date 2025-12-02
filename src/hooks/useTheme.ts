// src/hooks/useTheme.ts

import { useAppStore, Theme } from '../store/appStore';

/**
 * Custom hook to access and manage the application's theme state.
 * This hook is designed to be highly focused to minimize component re-renders,
 * only subscribing to the theme and toggleTheme functions.
 * * Mentorship Note (Dave): This pattern is superior to using the full store 
 * (e.g., const { theme, toggleTheme } = useAppStore()) because it ensures 
 * components only re-render when the 'theme' actually changes.
 */
export const useTheme = (): { theme: Theme; toggleTheme: () => void } => {
  
  // Use the selector function pattern to retrieve only the theme state and toggle function
  const theme = useAppStore(state => state.theme);
  const toggleTheme = useAppStore(state => state.toggleTheme);
  
  // Return the desired values
  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;