export default function SectionHeading({ eyebrow, title, align = 'left', center = false }) {
  const alignment = center ? 'text-center mx-auto' : `text-${align}`

  return (
    <div className={`mb-10 ${alignment}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#d2a24c]">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-[#0d1b3d] md:text-5xl">{title}</h2>
    </div>
  )
}
