// src/components/theme-toggle.tsx
'use client';

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/appStore";

export function ModeToggle() {
  // Only get toggleTheme since it's the only value needed
  const toggleTheme = useAppStore(state => state.toggleTheme);

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}