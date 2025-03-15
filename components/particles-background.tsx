"use client"

import { Particles } from "@/components/ui/particles"
import { useTheme } from "next-themes"

export function ParticlesBackground() {
  const { theme } = useTheme()
  
  return (
    <Particles
      className="fixed inset-0 -z-10 animate-fade-in"
      quantity={200}
      staticity={30}
      color={theme === "dark" ? "#ffffff" : "#000000"}
      ease={50}
      refresh={false}
    />
  )
} 