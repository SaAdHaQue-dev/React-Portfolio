import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../../data/footerLinks'
import { siteConfig } from '../../data/site'
import ArrowChip from '../ui/ArrowChip'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#BDBFB8] bg-[#DCDDD8] text-[#1A1A1A] pt-16 pb-12">
      <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8">
        {/* Giant headline / interactive brand */}
        <div className="border-b border-[#BDBFB8] pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-serif italic text-lg sm:text-xl text-[#6B6C68]">Have an ambitious vision?</p>
              <h2 className="font-['Bebas_Neue',Impact,sans-serif] text-[clamp(3.5rem,8vw,7.5rem)] leading-none uppercase tracking-tight text-[#1A1A1A]">
                LET&apos;S WORK TOGETHER
              </h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 rounded-full bg-[#1A1A1A] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#F1F0E9] hover:bg-black transition-all hover:scale-105 active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowChip className="!size-8" />
            </Link>
          </div>
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 md:grid-cols-4 font-sans text-xs">
          {/* Col 1: Sitemap */}
          <div>
            <h3 className="font-bold uppercase tracking-widest text-[#6B6C68] mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm font-medium hover:text-[#E8622C] transition-colors">
                  Home
                </Link>
              </li>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm font-medium hover:text-[#E8622C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Socials */}
          <div>
            <h3 className="font-bold uppercase tracking-widest text-[#6B6C68] mb-4">Connect</h3>
            <ul className="space-y-2.5">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:text-[#E8622C] transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct contact */}
          <div>
            <h3 className="font-bold uppercase tracking-widest text-[#6B6C68] mb-4">Say Hello</h3>
            <p className="font-serif italic text-sm text-[#6B6C68] mb-1">Inquiries & Partnerships</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-bold text-[#1A1A1A] hover:text-[#E8622C] transition-colors"
            >
              {siteConfig.email}
            </a>

            <div className="mt-6 flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-[#6B6C68]">{siteConfig.status}</span>
            </div>
          </div>

          {/* Col 4: Local Time & Back to Top */}
          <div className="md:text-right flex flex-col justify-between">
            <div>
              <h3 className="font-bold uppercase tracking-widest text-[#6B6C68] mb-1">Local Time (NYC)</h3>
              <p className="font-mono text-sm font-semibold tracking-wider text-[#1A1A1A]">
                {currentTime || '12:00:00 PM'}
              </p>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="mt-6 inline-flex items-center gap-2 md:justify-end text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-[#E8622C] transition-colors group cursor-pointer"
            >
              <span>Back to Top</span>
              <span className="grid size-6 place-items-center rounded-full bg-[#1A1A1A] text-white text-[10px] group-hover:-translate-y-1 transition-transform">
                ↑
              </span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-[#BDBFB8]/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-[#6B6C68]">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Handcrafted with precision &amp; care.</p>
          <p className="font-serif italic text-xs">Design &amp; Code by {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  )
}
