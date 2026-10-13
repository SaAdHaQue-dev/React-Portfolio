import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../../data/site'

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    // Check if seen this session
    const hasSeen = sessionStorage.getItem('portfolio_preloader_seen')
    if (hasSeen) {
      setIsFinished(true)
      onComplete?.()
      return
    }

    const duration = 1400 // ms
    const startTime = performance.now()

    function step(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(progress * 100)
      setPercent(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setPercent(100)
        setTimeout(() => {
          sessionStorage.setItem('portfolio_preloader_seen', 'true')
          setIsFinished(true)
          onComplete?.()
        }, 300)
      }
    }

    requestAnimationFrame(step)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#1A1A1A] p-6 text-[#F1F0E9] sm:p-12"
        >
          {/* Top row */}
          <div className="flex items-center justify-between font-sans text-xs uppercase tracking-widest text-[#BDBFB8]">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#E8622C] animate-pulse" />
              <span>{siteConfig.name}</span>
            </div>
            <span>Portfolio 2025</span>
          </div>

          {/* Center Title with staggered letters */}
          <div className="text-center">
            <h1 className="overflow-hidden font-['Bebas_Neue',Impact,sans-serif] text-[clamp(3.5rem,10vw,8rem)] leading-none tracking-tight">
              {siteConfig.role.toUpperCase()}
            </h1>
            <p className="mt-2 font-serif italic text-lg sm:text-2xl text-[#BABCB5]">
              Handcrafted Digital Experiences
            </p>
          </div>

          {/* Bottom Counter */}
          <div className="flex items-end justify-between font-sans text-xs uppercase tracking-widest text-[#BDBFB8]">
            <span>Initialising Environment</span>
            <div className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-6xl text-[#F1F0E9]">
              {percent}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
