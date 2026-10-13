import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../data/navLinks'
import { siteConfig } from '../../data/site'
import ArrowChip from '../ui/ArrowChip'

export default function MenuOverlay({ isOpen, onClose }) {
  const location = useLocation()

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Close on route change
  useEffect(() => {
    onClose()
  }, [location.pathname, onClose])

  const menuVariants = {
    closed: {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  }

  const linkContainerVariants = {
    open: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
  }

  const linkItemVariants = {
    closed: { y: 60, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const allNav = [
    { label: 'Home', href: '/', index: '00' },
    ...navLinks,
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-40 flex flex-col justify-between bg-[#151515] p-6 text-[#F1F0E9] sm:p-12 md:p-16"
          id="site-menu"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Link
              to="/"
              className="flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-sm font-extrabold uppercase tracking-widest text-[#F1F0E9]"
              onClick={onClose}
            >
              <span className="size-2.5 rounded-full bg-[#E8622C]" />
              <span>{siteConfig.name}</span>
            </Link>

            <button
              onClick={onClose}
              type="button"
              className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-white/10 px-5 text-[11px] font-bold uppercase tracking-wider text-[#F1F0E9] transition-all hover:bg-white/20 active:scale-95"
              aria-label="Close menu"
            >
              <span>Close</span>
              <span className="size-2 rounded-full bg-[#E8622C]" />
            </button>
          </div>

          {/* Large Nav Links */}
          <motion.nav
            variants={linkContainerVariants}
            className="my-auto grid gap-2 sm:gap-4 py-8"
            aria-label="Overlay Navigation"
          >
            {allNav.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <motion.div key={link.href} variants={linkItemVariants} className="overflow-hidden">
                  <Link
                    to={link.href}
                    className="group flex items-baseline justify-between py-1 transition-all"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-[#6B6C68] transition-colors group-hover:text-[#E8622C]">
                        ({link.index})
                      </span>
                      <span
                        className={`font-['Bebas_Neue',Impact,sans-serif] text-5xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tight uppercase transition-all duration-300 group-hover:translate-x-3 ${
                          isActive ? 'text-[#E8622C]' : 'text-[#F1F0E9] group-hover:text-white'
                        }`}
                      >
                        {link.label}
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <span className="font-serif italic text-sm text-[#BABCB5]">Explore</span>
                      <ArrowChip className="!size-8" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.nav>

          {/* Bottom Bar: Contact & Socials */}
          <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-2 md:grid-cols-3 font-sans text-xs">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#6B6C68]">Direct Inquiries</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm font-medium text-[#F1F0E9] hover:text-[#E8622C] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#6B6C68]">Social Networks</p>
              <div className="mt-1 flex flex-wrap gap-4 text-sm text-[#BABCB5]">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2 md:col-span-1 md:text-right">
              <p className="text-[10px] uppercase tracking-widest text-[#6B6C68]">Status</p>
              <p className="mt-1 text-sm text-[#BABCB5] flex items-center md:justify-end gap-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                {siteConfig.status}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
