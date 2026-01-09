"use client"

import { useEffect, useRef, useState } from "react"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

// Helper function to get primary color based on theme
function getPrimaryColor(): string {
  if (typeof window === "undefined") return "59, 130, 246" // Default blue

  const isDark = document.documentElement.classList.contains("dark")
  // Light mode: pitch black
  // Dark mode: navy blue (HSL 235 30% 55%) -> RGB: ~100, 110, 160
  return isDark ? "100, 110, 160" : "0, 0, 0"
}

// Helper function to get blend mode based on theme
function getBlendMode(): string {
  if (typeof window === "undefined") return "screen"
  const isDark = document.documentElement.classList.contains("dark")
  // Light mode: use multiply to darken, dark mode: use screen to lighten
  return isDark ? "screen" : "multiply"
}

// Helper function to get opacity based on theme
function getOpacity(): number {
  if (typeof window === "undefined") return 1.0
  return 1.0 // 100% opacity in both light and dark mode
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef({ x: 0, y: 0 })
  const pointsRef = useRef<Point[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size - use document height for scrolling
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      // Use document height instead of window height so it scrolls with content
      const newHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight,
        window.innerHeight
      )
      canvas.height = newHeight
      // Set CSS height to match canvas height
      canvas.style.height = `${newHeight}px`
      // Reinitialize points on resize
      const pointCount = Math.floor((canvas.width * canvas.height) / 15000)
      pointsRef.current = Array.from({ length: pointCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }))
    }
    resizeCanvas()

    // Update canvas height on scroll and resize
    const updateCanvasHeight = () => {
      const newHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight,
        window.innerHeight
      )
      if (canvas.height !== newHeight) {
        canvas.height = newHeight
        canvas.style.height = `${newHeight}px`
        // Redistribute points if canvas got taller
        const currentPoints = pointsRef.current.length
        const expectedPoints = Math.floor((canvas.width * canvas.height) / 15000)
        if (expectedPoints > currentPoints) {
          const additionalPoints = expectedPoints - currentPoints
          const newPoints = Array.from({ length: additionalPoints }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
          }))
          pointsRef.current = [...pointsRef.current, ...newPoints]
        }
      }
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("scroll", updateCanvasHeight)

    // Use MutationObserver to detect content height changes
    const observer = new MutationObserver(updateCanvasHeight)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    })

    // Mouse tracking - update ref directly for better performance
    // Account for scroll position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY
      }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop - runs continuously
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const points = pointsRef.current
      const mousePos = mousePosRef.current
      const maxDistance = 150
      const primaryColor = getPrimaryColor() // Get color dynamically each frame

      // Update canvas height dynamically to match document height
      const currentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight,
        window.innerHeight
      )
      if (canvas.height !== currentHeight) {
        canvas.height = currentHeight
        canvas.style.height = `${currentHeight}px`
      }
      // Also update canvas width on each frame to handle window resizing
      if (canvas.width !== window.innerWidth) {
        canvas.width = window.innerWidth
        canvas.style.width = `${window.innerWidth}px`
      }

      // Update points - always animating
      for (let i = 0; i < points.length; i++) {
        const point = points[i]

        // Continuous random movement - particles always drift with more variation
        const randomForce = 0.02
        point.vx += (Math.random() - 0.5) * randomForce
        point.vy += (Math.random() - 0.5) * randomForce

        // Add periodic random impulses for more organic movement
        if (Math.random() < 0.1) { // 10% chance each frame
          point.vx += (Math.random() - 0.5) * 0.3
          point.vy += (Math.random() - 0.5) * 0.3
        }

        // Update position
        point.x += point.vx
        point.y += point.vy

        // Boundary bounce with wrap-around effect
        if (point.x < 0) {
          point.x = canvas.width
        } else if (point.x > canvas.width) {
          point.x = 0
        }
        if (point.y < 0) {
          point.y = canvas.height
        } else if (point.y > canvas.height) {
          point.y = 0
        }

        // Damping to prevent excessive speed
        point.vx *= 0.99
        point.vy *= 0.99

        // Limit max velocity
        const maxVel = 2
        point.vx = Math.max(-maxVel, Math.min(maxVel, point.vx))
        point.vy = Math.max(-maxVel, Math.min(maxVel, point.vy))
      }

      // Draw connections between points
      ctx.lineWidth = 0.5

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.4
            ctx.strokeStyle = `rgba(${primaryColor}, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw connections to mouse when detected
      if (mousePos.x > 0 && mousePos.y > 0) {
        ctx.lineWidth = 0.8
        for (let i = 0; i < points.length; i++) {
          const dx = mousePos.x - points[i].x
          const dy = mousePos.y - points[i].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const mouseConnectionDistance = 200

          if (distance < mouseConnectionDistance) {
            const opacity = (1 - distance / mouseConnectionDistance) * 0.5
            ctx.strokeStyle = `rgba(${primaryColor}, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(mousePos.x, mousePos.y)
            ctx.stroke()
          }
        }
        ctx.lineWidth = 0.5 // Reset line width
      }

      // Draw points
      ctx.fillStyle = `rgba(${primaryColor}, 0.4)`
      for (const point of points) {
        ctx.beginPath()
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", updateCanvasHeight)
      window.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const [blendMode, setBlendMode] = useState<React.CSSProperties["mixBlendMode"]>("screen")
  const [opacity, setOpacity] = useState(0.8)

  useEffect(() => {
    // Update blend mode and opacity based on theme
    const updateTheme = () => {
      setBlendMode(getBlendMode() as React.CSSProperties["mixBlendMode"])
      setOpacity(getOpacity())
    }

    // Check theme on mount
    updateTheme()

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 pointer-events-none z-0"
      style={{ mixBlendMode: blendMode, opacity: opacity, width: "100%" }}
    />
  )
}

