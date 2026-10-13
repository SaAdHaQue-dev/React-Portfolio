import { useState } from 'react'
import { navLinks } from '../../data/navLinks'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-10 mx-auto flex w-full max-w-[1200px] items-center justify-between px-[22px] py-5 min-[601px]:px-8 min-[601px]:py-6">
      <nav aria-label="Main navigation" className="contents">
        <a
          className="inline-flex items-center gap-2 font-[Arial,sans-serif] text-sm font-extrabold tracking-[-0.04em] text-[#171715] no-underline"
          href="#top"
          aria-label="Saad home"
        >
          <span className="size-[10px] rounded-full bg-current" aria-hidden="true" />
          <span>SAAD</span>
        </a>
        <button
          aria-controls="site-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex min-h-[42px] min-w-[102px] cursor-pointer items-center justify-center gap-[14px] rounded-full border-0 bg-[#171715] px-[14px] text-[9px] font-bold tracking-[0.02em] text-[#f1f0e9]"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
          <span className="flex w-[13px] flex-col gap-[3px]" aria-hidden="true">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
        </button>
      </nav>
      {menuOpen && (
        <div
          className="absolute right-[22px] top-[calc(100%-8px)] grid min-w-44 gap-1 rounded-2xl bg-[#171715] p-3 text-right shadow-xl min-[601px]:right-8"
          id="site-menu"
        >
          {navLinks.map((link) => (
            <a
              className="rounded-lg px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#f1f0e9] hover:bg-white/10"
              href={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
