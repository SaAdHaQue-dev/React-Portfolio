import { footerLinks } from '../../data/footerLinks'

export default function Footer() {
  return (
    <footer className="border-t border-[#171715]/10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-[22px] py-6 font-sans text-[10px] uppercase tracking-[0.12em] text-[#77776f] sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Saad. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
          {footerLinks.map((link) => <a className="transition-colors hover:text-[#171715]" href={link.href} key={link.label}>{link.label}</a>)}
        </nav>
      </div>
    </footer>
  )
}
