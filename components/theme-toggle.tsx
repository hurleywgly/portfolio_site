'use client'

import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md p-2 hover:bg-accent"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
    </button>
  )
} 