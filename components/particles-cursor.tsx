"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  angle: number
  radius: number
  baseRadius: number
  ring: number // 0 = inner (sparse), 1 = mid, 2 = outer (dense)
  size: number
  speed: number
  opacity: number
  hue: number
  pulseSpeed: number
  pulsePhase: number
  orbitSpeed: number
}

const PARTICLE_COUNT = 120
const RING_CONFIG = [
  { minRadius: 100, maxRadius: 150, count: 10, sizeRange: [0.8, 1.5], opacityRange: [0.15, 0.35] },  // Inner ring - sparse, small, dim
  { minRadius: 150, maxRadius: 220, count: 30, sizeRange: [1, 2], opacityRange: [0.25, 0.55] },       // Mid ring - medium density
  { minRadius: 220, maxRadius: 320, count: 45, sizeRange: [1.2, 2.8], opacityRange: [0.4, 0.8] },     // Outer ring - dense, larger, brighter
  { minRadius: 300, maxRadius: 400, count: 35, sizeRange: [0.8, 2.2], opacityRange: [0.2, 0.5] },     // Outermost ring - fading out
]
const LERP_SPEED = 0.06
const BASE_HUE = 220

export function ParticlesCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const smoothMouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)
  const isActiveRef = useRef(false)
  const fadeRef = useRef(0) // 0 = invisible, 1 = fully visible

  const createParticles = useCallback(() => {
    const particles: Particle[] = []

    for (let ringIndex = 0; ringIndex < RING_CONFIG.length; ringIndex++) {
      const ring = RING_CONFIG[ringIndex]
      for (let i = 0; i < ring.count; i++) {
        // Distribute angles evenly within each ring, with random offset
        const baseAngle = (Math.PI * 2 * i) / ring.count
        const angle = baseAngle + (Math.random() - 0.5) * 0.5
        const radius = ring.minRadius + Math.random() * (ring.maxRadius - ring.minRadius)

        particles.push({
          x: 0,
          y: 0,
          targetX: 0,
          targetY: 0,
          angle,
          radius,
          baseRadius: radius,
          ring: ringIndex,
          size: ring.sizeRange[0] + Math.random() * (ring.sizeRange[1] - ring.sizeRange[0]),
          speed: LERP_SPEED + Math.random() * 0.03 - ringIndex * 0.008,
          opacity: ring.opacityRange[0] + Math.random() * (ring.opacityRange[1] - ring.opacityRange[0]),
          hue: BASE_HUE + (Math.random() - 0.5) * 50,
          pulseSpeed: 0.015 + Math.random() * 0.025,
          pulsePhase: Math.random() * Math.PI * 2,
          // Inner particles orbit faster, outer ones slower
          orbitSpeed: (0.006 - ringIndex * 0.001 + Math.random() * 0.004) * (Math.random() > 0.5 ? 1 : -1),
        })
      }
    }

    return particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      if (!isActiveRef.current) {
        isActiveRef.current = true
        smoothMouseRef.current.x = e.clientX
        smoothMouseRef.current.y = e.clientY
      }
    }

    const handleMouseLeave = () => {
      isActiveRef.current = false
    }

    handleResize()
    particlesRef.current = createParticles()

    let time = 0

    const animate = () => {
      time += 1
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Smooth fade in/out
      if (isActiveRef.current && fadeRef.current < 1) {
        fadeRef.current = Math.min(1, fadeRef.current + 0.02)
      } else if (!isActiveRef.current && fadeRef.current > 0) {
        fadeRef.current = Math.max(0, fadeRef.current - 0.015)
      }

      if (fadeRef.current <= 0) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      // Smooth mouse position with lerp
      smoothMouseRef.current.x +=
        (mouseRef.current.x - smoothMouseRef.current.x) * 0.1
      smoothMouseRef.current.y +=
        (mouseRef.current.y - smoothMouseRef.current.y) * 0.1

      const mx = smoothMouseRef.current.x
      const my = smoothMouseRef.current.y

      const particles = particlesRef.current
      const globalFade = fadeRef.current

      // Draw subtle connection lines between nearby particles in same/adjacent rings
      ctx.lineWidth = 0.4
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (Math.abs(particles[i].ring - particles[j].ring) > 1) continue
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distSq = dx * dx + dy * dy
          if (distSq < 3600) { // 60px
            const dist = Math.sqrt(distSq)
            const alpha = (1 - dist / 60) * 0.12 * globalFade
            ctx.strokeStyle = `hsla(${BASE_HUE}, 70%, 65%, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      for (const particle of particles) {
        // Orbit around cursor
        particle.angle += particle.orbitSpeed

        // Pulsating radius - outer rings pulse more
        const pulseAmplitude = 10 + particle.ring * 8
        const pulseOffset =
          Math.sin(time * particle.pulseSpeed + particle.pulsePhase) * pulseAmplitude

        const currentRadius = particle.baseRadius + pulseOffset

        // Target position: circular distribution around cursor
        particle.targetX = mx + Math.cos(particle.angle) * currentRadius
        particle.targetY = my + Math.sin(particle.angle) * currentRadius

        // Smooth movement toward target - outer rings lag more for organic feel
        const effectiveSpeed = particle.speed * (1 - particle.ring * 0.08)
        particle.x += (particle.targetX - particle.x) * effectiveSpeed
        particle.y += (particle.targetY - particle.y) * effectiveSpeed

        // Pulsating opacity
        const opacityPulse =
          Math.sin(time * particle.pulseSpeed * 0.6 + particle.pulsePhase) *
            0.25 + 0.75
        const displayOpacity = particle.opacity * opacityPulse * globalFade

        if (displayOpacity <= 0.01) continue

        // Draw glow
        const glowSize = particle.size * 3.5
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowSize
        )
        gradient.addColorStop(
          0,
          `hsla(${particle.hue}, 85%, 75%, ${displayOpacity * 0.7})`
        )
        gradient.addColorStop(
          0.4,
          `hsla(${particle.hue}, 80%, 60%, ${displayOpacity * 0.25})`
        )
        gradient.addColorStop(
          1,
          `hsla(${particle.hue}, 75%, 55%, 0)`
        )

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw core
        ctx.beginPath()
        ctx.fillStyle = `hsla(${particle.hue}, 90%, 85%, ${displayOpacity})`
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationRef.current)
    }
  }, [createParticles])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
