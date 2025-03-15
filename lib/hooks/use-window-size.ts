"use client"

import { useState, useEffect } from "react"

interface WindowSize {
  width: number | undefined
  height: number | undefined
}

/**
 * A hook that tracks the current window size with debouncing for performance
 */
export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    let timeoutId: NodeJS.Timeout | null = null
    
    function handleResize() {
      // Clear previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      // Add delay to avoid excessive updates
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }, 100)
    }

    // Add event listener
    window.addEventListener("resize", handleResize)
    
    // Call handler right away so state gets updated with initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, []) // Empty array ensures effect runs only on mount and unmount

  return windowSize
} 