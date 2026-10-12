import { footerLinks } from '../../data/footerLinks'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0d1b3d] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d2a24c] text-sm font-bold text-[#0d1b3d]">
              D
            </div>
            <div>
              <div className="text-lg font-black uppercase tracking-[0.12em] text-white">DPS Junior School</div>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">
            Inspiring young minds through meaningful learning, character building, and a vibrant school community.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#d2a24c]">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.label}><a href={link.href} className="hover:text-white">{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#d2a24c]">Resources</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {footerLinks.resources.map((link) => (
              <li key={link.label}><a href={link.href} className="hover:text-white">{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#d2a24c]">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>M 49, Marris Rd, Gulzar Nagar, Hem Chand Compound, Aligarh, Uttar Pradesh 202001</li>
            <li>Admissions open for 2026-27</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 DPS Junior School</p>
          <p>Admissions open for 2026-27</p>
        </div>
      </div>
    </footer>
  )
}
