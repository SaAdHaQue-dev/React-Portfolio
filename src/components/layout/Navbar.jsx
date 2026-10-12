import { navLinks } from '../../data/navLinks'
import Button from '../ui/Button'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d1b3d] text-sm font-bold text-[#d2a24c]">
            D
          </div>
          <div>
            <div className="text-lg font-black uppercase tracking-[0.12em] text-[#0d1b3d]">DPS Junior School</div>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-[#0d1b3d]">
              {link.label}
            </a>
          ))}
        </div>

        <Button href="#admissions" variant="primary" className="hidden md:inline-flex">
          Apply Now
        </Button>
      </nav>
    </header>
  )
}
