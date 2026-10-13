import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import Reveal from '../ui/Reveal'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section aria-labelledby="testimonials-title" className="mx-auto w-full max-w-[1240px] px-6 py-16 sm:px-8 md:py-24">
      <Reveal>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-[#BDBFB8] pb-6">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              Reputation
            </span>
            <h2
              className="mt-1 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(2.8rem,5.5vw,5rem)] uppercase leading-none tracking-tight text-[#1A1A1A]"
              id="testimonials-title"
            >
              Client Words
            </h2>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              type="button"
              className="grid size-11 place-items-center rounded-full border border-[#1A1A1A] text-[#1A1A1A] transition-all hover:bg-[#1A1A1A] hover:text-[#F1F0E9] active:scale-95 cursor-pointer"
            >
              ←
            </button>
            <span className="font-mono text-xs font-semibold text-[#6B6C68]">
              0{currentIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              type="button"
              className="grid size-11 place-items-center rounded-full border border-[#1A1A1A] text-[#1A1A1A] transition-all hover:bg-[#1A1A1A] hover:text-[#F1F0E9] active:scale-95 cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        {/* Large Quote Display with AnimatePresence */}
        <div className="relative min-h-[300px] rounded-[24px] border border-[#BDBFB8] bg-[#DCDDD8]/60 p-8 sm:p-14 shadow-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between"
            >
              <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl leading-[1.3] text-[#1A1A1A]">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#BDBFB8] pt-6">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="size-12 rounded-full object-cover border border-[#1A1A1A]/20"
                />
                <div>
                  <h3 className="font-['Bebas_Neue',sans-serif] text-xl tracking-wide uppercase text-[#1A1A1A]">
                    {current.author}
                  </h3>
                  <p className="font-sans text-xs text-[#6B6C68]">
                    {current.role} — <span className="text-[#1A1A1A] font-semibold">{current.company}</span> ({current.location})
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  )
}
