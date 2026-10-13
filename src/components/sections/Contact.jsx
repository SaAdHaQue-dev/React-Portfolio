export default function Contact() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-[22px] py-14 md:flex-row md:items-center md:justify-between md:px-8" id="contact">
      <div>
        <p className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#77776f]">Have a project in mind?</p>
        <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl uppercase leading-none tracking-[-0.02em]">Let&apos;s make it meaningful.</h2>
      </div>
      <a className="inline-flex w-fit items-center gap-3 rounded-full bg-[#171715] py-1 pl-5 pr-1 font-sans text-[10px] font-bold uppercase tracking-wide text-[#f1f0e9] transition-transform hover:scale-[1.03]" href="mailto:hello@example.com">
        Get in touch
        <span className="grid size-9 place-items-center rounded-full bg-[#f1f0e9] text-[#171715]" aria-hidden="true">↗</span>
      </a>
    </section>
  )
}
