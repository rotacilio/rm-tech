import { useRef, type MouseEvent, type ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface/50 backdrop-blur transition-colors duration-300 hover:border-violet/40 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(320px circle at var(--x) var(--y), rgba(139,92,246,0.14), transparent 70%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
