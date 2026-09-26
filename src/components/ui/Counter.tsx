import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CounterProps {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function Counter({ to, suffix = '', prefix = '', className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 24, stiffness: 60 })

  useEffect(() => {
    if (isInView) motionValue.set(to)
  }, [isInView, motionValue, to])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
      }
    })
  }, [spring, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
