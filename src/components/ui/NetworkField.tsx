import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

export default function NetworkField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let nodes: Node[] = []
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      width = rect?.width ?? window.innerWidth
      height = rect?.height ?? 480
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)

      const count = Math.min(70, Math.floor((width * height) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        if (!prefersReducedMotion) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.16 * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(79, 242, 224, 0.85)'
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const observer = new ResizeObserver(resize)
    if (canvas.parentElement) observer.observe(canvas.parentElement)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
