export default function SectionHeading({ eyebrow, title, align = 'left', center = false }) {
  const alignment = center ? 'mx-auto text-center' : align === 'right' ? 'text-right' : 'text-left'

  return (
    <div className={`mb-10 ${alignment}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#77776f]">{eyebrow}</p>
      <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl uppercase leading-tight text-[#171715] md:text-5xl">{title}</h2>
    </div>
  )
}
