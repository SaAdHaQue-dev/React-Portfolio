import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { siteConfig } from '../../data/site'
import StatCounter from '../ui/StatCounter'
import PillButton from '../ui/PillButton'

export default function Hero() {
  const cardRef = useRef(null)

  // Mouse Parallax for Portrait
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 120, damping: 20 })
  const mouseY = useSpring(y, { stiffness: 120, damping: 20 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top
    const xPct = mouseXPos / width - 0.5
    const yPct = mouseYPos / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-8 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(120px,0.55fr)] md:gap-8 md:pb-20 md:pt-8"
    >
      {/* Left Column: Headline and CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="order-1 max-w-[390px]"
      >
        <p className="mb-2 font-serif text-xl sm:text-2xl tracking-tight text-[#34342F]">
          {siteConfig.headline.greeting}
        </p>

        <h1
          className="font-['Bebas_Neue',Impact,sans-serif] text-[clamp(3.8rem,7.5vw,7rem)] uppercase leading-[0.88] tracking-tight text-[#1A1A1A]"
          id="hero-title"
        >
          <span className="block">{siteConfig.headline.line1}</span>
          <span className="block font-serif text-[0.9em] font-normal italic tracking-tight text-[#1A1A1A]">
            {siteConfig.headline.accent}
          </span>
          <span className="block">{siteConfig.headline.line2}</span>
        </h1>

        <p className="mt-5 max-w-[320px] font-serif text-base sm:text-[17px] leading-relaxed text-[#45453F]">
          {siteConfig.tagline}
        </p>

        <div className="mt-7">
          <PillButton to="/contact">
            Contact Me
          </PillButton>
        </div>
      </motion.div>

      {/* Middle Column: Arch-masked Portrait with Interactive Mouse Parallax */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="perspective-1000 order-2 mx-auto aspect-[0.82] w-full max-w-[430px] md:aspect-[0.78] md:max-w-none"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full overflow-hidden mask-arch bg-[#BABCB5] shadow-md border-b-2 border-white/20"
        >
          <img
            alt={`${siteConfig.name}, a UI/UX and brand designer`}
            className="h-full w-full object-cover object-[center_30%] transition-transform duration-700 hover:scale-105"
            src="/images/profile.png"
            loading="eager"
          />

          {/* Subtle gradient vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Right Column: Animated Stats Counters */}
      <motion.dl
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="order-3 grid grid-cols-2 gap-x-6 gap-y-6 text-left sm:text-right md:grid-cols-1 md:gap-y-8"
      >
        {siteConfig.stats.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </motion.dl>
    </section>
  )
}
