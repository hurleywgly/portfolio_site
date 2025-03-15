"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

export function ParticlesBackground() {
  const { resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | null>(null)
  
  // Particle type definition
  type Particle = {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }
  
  // Only render particles after component has mounted on the client
  useEffect(() => {
    setIsMounted(true)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])
  
  useEffect(() => {
    if (!isMounted) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    // Set up canvas
    const context = canvas.getContext('2d')
    if (!context) return
    contextRef.current = context
    
    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Recreate particles when resizing
      initParticles()
    }
    
    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 200; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        })
      }
    }
    
    // Animation loop
    const animate = () => {
      if (!canvas || !context) return
      
      context.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw particles
      particlesRef.current.forEach((particle) => {
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = resolvedTheme === 'dark' 
          ? `rgba(255, 255, 255, ${particle.opacity})` 
          : `rgba(0, 0, 0, ${particle.opacity})`
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
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    // Set up and start animation
    handleResize()
    window.addEventListener('resize', handleResize)
    animate()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMounted, resolvedTheme])
  
  if (!isMounted) {
    return null
  }
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  )
} 