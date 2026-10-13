import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../../data/site'
import MenuOverlay from './MenuOverlay'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !menuOpen) {
          setIsVisible(false) // scrolling down
        } else {
          setIsVisible(true) // scrolling up
        }
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, menuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-30 w-full transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } backdrop-blur-md bg-[#DCDDD8]/85 border-b border-[#BDBFB8]/40`}
      >
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 sm:px-8 sm:py-5">
          {/* Logo */}
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 font-['Plus_Jakarta_Sans',sans-serif] text-sm font-extrabold tracking-tight text-[#1A1A1A] no-underline"
            aria-label={`${siteConfig.name} Home`}
          >
            <span className="size-2.5 rounded-full bg-[#1A1A1A] transition-transform duration-300 group-hover:scale-150 group-hover:bg-[#E8622C]" />
            <span className="tracking-widest uppercase">{siteConfig.name}</span>
            <span className="hidden sm:inline-block text-[11px] font-medium text-[#6B6C68] tracking-normal font-serif italic">
              / {siteConfig.role}
            </span>
          </Link>

          {/* Right items: Quick navigation links + MENU button */}
          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-6 font-sans text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
              <Link
                to="/work"
                className={`transition-colors hover:text-[#E8622C] ${
                  location.pathname.startsWith('/work') ? 'text-[#E8622C] font-bold' : ''
                }`}
              >
                Work
              </Link>
              <Link
                to="/about"
                className={`transition-colors hover:text-[#E8622C] ${
                  location.pathname === '/about' ? 'text-[#E8622C] font-bold' : ''
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`transition-colors hover:text-[#E8622C] ${
                  location.pathname === '/services' ? 'text-[#E8622C] font-bold' : ''
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`transition-colors hover:text-[#E8622C] ${
                  location.pathname === '/contact' ? 'text-[#E8622C] font-bold' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            <button
              aria-controls="site-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-3 rounded-full border-0 bg-[#1A1A1A] px-4 sm:px-5 text-[10px] font-bold uppercase tracking-widest text-[#F1F0E9] shadow-sm transition-all hover:bg-black hover:scale-105 active:scale-95"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <span>MENU</span>
              <span className="flex w-3 flex-col gap-1" aria-hidden="true">
                <span className="h-0.5 w-full bg-current rounded-full" />
                <span className="h-0.5 w-full bg-current rounded-full" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
