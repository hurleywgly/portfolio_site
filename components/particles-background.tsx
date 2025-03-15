"use client"

import { Particles } from "@/components/ui/particles"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ParticlesBackground() {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  
  // Only render particles after component has mounted on the client
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  if (!isMounted) {
    return null
  }
  
  return (
    <Particles
      className="fixed inset-0 -z-10"
      quantity={200}
      staticity={30}
      color={theme === "dark" ? "#ffffff" : "#000000"}
      ease={50}
      refresh={false}
    />
  )
} 