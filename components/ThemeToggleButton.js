"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='outline'
      size='icon'
      className='rounded-full'
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}>
      <Sun className='h-[1.8rem] w-[1.8rem] rotate-0 scale-100 transition-all dark:-rotate-180 dark:scale-0' />
      <Moon className='absolute h-[1.8rem] w-[1.8rem] rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ThemeToggleButton;
