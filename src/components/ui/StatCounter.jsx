import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCounter({ value, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })
  const [displayNumber, setDisplayNumber] = useState(0)

  // Parse numeric part and suffix/prefix (e.g., '15+', '*99%', '280+')
  const numericMatch = value.match(/\d+/)
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0
  const prefix = value.startsWith('*') ? '*' : ''
  const suffix = value.replace(/^[*\d]+/, '')

  useEffect(() => {
    if (!isInView || targetNumber === 0) return

    let start = 0
    const duration = 1600 // ms
    const startTime = performance.now()

    function step(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = Math.floor(easeProgress * targetNumber)

      setDisplayNumber(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setDisplayNumber(targetNumber)
      }
    }

    requestAnimationFrame(step)
  }, [isInView, targetNumber])

  return (
    <div ref={ref}>
      <dt className="font-['Bebas_Neue',Impact,sans-serif] text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl lg:text-[42px] leading-none">
        {prefix}{displayNumber}{suffix}
      </dt>
      <dd className="mt-1 font-serif italic text-xs md:text-sm text-[#6B6C68] tracking-tight">
        {label}
      </dd>
    </div>
  )
}
