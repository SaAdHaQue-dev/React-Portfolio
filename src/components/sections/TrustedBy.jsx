import { clients } from '../../data/clients'
import LogoCell from '../ui/LogoCell'
import Reveal from '../ui/Reveal'

export default function TrustedBy() {
  return (
    <section aria-labelledby="trusted-title" className="mx-auto w-full max-w-[1240px] px-6 py-12 sm:px-8 md:py-16">
      <Reveal>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-[#BDBFB8] pb-4">
          <h2
            className="font-['Bebas_Neue',Impact,sans-serif] text-3xl uppercase tracking-tight text-[#1A1A1A] sm:text-4xl"
            id="trusted-title"
          >
            Selected Clients &amp; Collaborations
          </h2>
          <p className="font-serif italic text-sm text-[#6B6C68]">
            Partnering with founders building modern category leaders.
          </p>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-[#BDBFB8] sm:grid-cols-4 bg-[#DCDDD8]/60 shadow-xs">
          {clients.map((client, index) => (
            <LogoCell key={`${client.name}-${index}`} {...client} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
