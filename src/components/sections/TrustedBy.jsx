import { clients } from '../../data/clients'
import LogoCell from '../ui/LogoCell'

export default function TrustedBy() {
  return (
    <section aria-labelledby="trusted-title" className="mx-auto w-full max-w-[1200px] px-[22px] py-10 md:px-8 md:py-14">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-2xl uppercase tracking-[-0.02em] text-[#171715]" id="trusted-title">
          Trusted by
        </h2>
        <p className="font-[Georgia,serif] text-xs text-[#77776f]">
          Join 1,000 companies already building their websites with Frameblox.
        </p>
      </div>
      <div className="grid grid-cols-2 border-l border-t border-[#171715]/10 sm:grid-cols-4">
        {clients.map((client, index) => <LogoCell key={`${client.name}-${index}`} {...client} />)}
      </div>
    </section>
  )
}
