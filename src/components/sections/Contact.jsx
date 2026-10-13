import PillButton from '../ui/PillButton'
import Reveal from '../ui/Reveal'

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 py-16 sm:px-8 md:py-24" id="contact">
      <Reveal>
        <div className="rounded-[28px] border border-[#BDBFB8] bg-[#1A1A1A] p-8 sm:p-16 text-[#F1F0E9] shadow-md flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#E8622C]">
              Have a visionary project in mind?
            </p>
            <h2 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(2.5rem,6vw,5.5rem)] leading-none uppercase tracking-tight text-white">
              Let&apos;s make it unforgettable.
            </h2>
            <p className="mt-4 font-serif italic text-base sm:text-lg text-[#BDBFB8] max-w-[500px]">
              Available for full design sprints, brand architecture, and embedded product partnerships.
            </p>
          </div>

          <div className="shrink-0">
            <PillButton to="/contact" variant="light" className="!px-7 !py-2 !text-xs">
              Start Conversation
            </PillButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
