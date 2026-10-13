import { processSteps } from '../../data/process'
import Reveal from '../ui/Reveal'

export default function Process() {
  return (
    <section aria-labelledby="process-title" className="mx-auto w-full max-w-[1240px] px-6 py-16 sm:px-8 md:py-24">
      <Reveal>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-[#BDBFB8] pb-6">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              Methodology
            </span>
            <h2
              className="mt-1 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(2.8rem,5.5vw,5rem)] uppercase leading-none tracking-tight text-[#1A1A1A]"
              id="process-title"
            >
              The Design Process
            </h2>
          </div>
          <p className="max-w-[340px] font-serif italic text-base leading-relaxed text-[#6B6C68]">
            A structured, collaborative framework designed to eliminate ambiguity and guarantee excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-l border-t border-[#BDBFB8] bg-[#DCDDD8]/50">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="group flex flex-col justify-between border-b border-r border-[#BDBFB8] p-8 transition-colors duration-300 hover:bg-white/40"
            >
              <div>
                <span className="font-['Bebas_Neue',sans-serif] text-4xl text-[#6B6C68] transition-colors group-hover:text-[#E8622C]">
                  {step.step}
                </span>

                <h3 className="mt-4 font-['Bebas_Neue',Impact,sans-serif] text-2xl uppercase tracking-tight text-[#1A1A1A]">
                  {step.name}
                </h3>
                <p className="font-serif italic text-xs text-[#E8622C] mt-0.5">
                  {step.tagline}
                </p>

                <p className="mt-4 font-serif text-sm leading-relaxed text-[#45453F]">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 border-t border-[#BDBFB8]/50 pt-4">
                <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-[#6B6C68] mb-2">
                  Key Deliverables
                </span>
                <ul className="space-y-1 font-sans text-xs text-[#1A1A1A]">
                  {step.activities.map((act) => (
                    <li key={act} className="flex items-center gap-1.5">
                      <span className="size-1 rounded-full bg-[#1A1A1A]" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
