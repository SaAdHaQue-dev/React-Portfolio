import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default') // 'default' | 'pointer' | 'view' | 'drag'
  const [isVisible, setIsVisible] = useState(false)
  const [isTouch] = useState(() => {
    if (typeof window === 'undefined') return true
    return (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  })

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Spring physics for smooth follower
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (isTouch) return

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, input, select, textarea')
      if (!target) {
        setCursorType('default')
        return
      }

      const customAttr = target.getAttribute('data-cursor')
      if (customAttr) {
        setCursorType(customAttr)
      } else if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button') {
        setCursorType('pointer')
      } else {
        setCursorType('default')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleOver)
    }
  }, [isTouch, isVisible, mouseX, mouseY])

  if (isTouch || !isVisible) return null

  const isTextBadge = cursorType === 'view' || cursorType === 'drag'

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Trailing follower circle / badge */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'pointer' ? 1.5 : isTextBadge ? 1 : 1,
          width: isTextBadge ? 72 : cursorType === 'pointer' ? 44 : 32,
          height: isTextBadge ? 72 : cursorType === 'pointer' ? 44 : 32,
          backgroundColor: isTextBadge ? '#1A1A1A' : cursorType === 'pointer' ? 'rgba(26, 26, 26, 0.08)' : 'transparent',
          borderColor: isTextBadge ? '#1A1A1A' : '#1A1A1A',
          borderWidth: isTextBadge ? 0 : 1.5,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed rounded-full flex items-center justify-center shadow-sm"
      >
        {isTextBadge && (
          <span className="font-['Bebas_Neue',sans-serif] text-xs uppercase tracking-widest text-[#F1F0E9]">
            {cursorType}
          </span>
        )}
      </motion.div>

      {/* Center dot (only visible when not in text badge mode) */}
      {!isTextBadge && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: cursorType === 'pointer' ? 0.4 : 1,
            opacity: 1,
          }}
          className="fixed size-2 rounded-full bg-[#1A1A1A]"
        />
      )}
    </div>
  )
}
