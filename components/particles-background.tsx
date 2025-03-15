"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

export function ParticlesBackground() {
  const { resolvedTheme, theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  // Particle type definition
  type Particle = {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
    
    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }
  }, [])
  
  // Handle resize
  useEffect(() => {
    if (!isMounted) return
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMounted])
  
  // Main animation effect
  useEffect(() => {
    if (!isMounted || dimensions.width === 0 || dimensions.height === 0) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    // Set canvas dimensions
    canvas.width = dimensions.width
    canvas.height = dimensions.height
    
    const context = canvas.getContext('2d')
    if (!context) return
    
    // Clear any existing animation
    if (animationRef.current) {
      window.cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
    
    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = []
      for (let i = 0; i < 200; i++) {
        particles.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        })
      }
      return particles
    }
    
    // Create particles
    particlesRef.current = initParticles()
    
    // Determine particle color based on theme
    const getParticleColor = (opacity: number) => {
      // Use multiple theme checks for redundancy
      const isDarkMode = 
        resolvedTheme === 'dark' || 
        theme === 'dark' || 
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      return isDarkMode 
        ? `rgba(255, 255, 255, ${opacity})` 
        : `rgba(0, 0, 0, ${opacity})`
    }
    
    // Animation loop
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach((particle) => {
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = getParticleColor(particle.opacity)
        context.fill()
        
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })
      
      animationRef.current = window.requestAnimationFrame(animate)
    }
    
    // Start animation
    animate()
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }
  }, [isMounted, dimensions, resolvedTheme, theme])
  
  // Don't render anything on server
  if (!isMounted) {
    return null
  }
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10
      }}
      aria-hidden="true"
    />
  )
} 