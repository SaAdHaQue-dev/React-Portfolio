export default function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-[22px] py-20 md:grid-cols-2 md:gap-12 md:px-8 md:py-32"
      id="about"
    >
      <h2
        className="max-w-[540px] font-[Impact,'Arial_Narrow',sans-serif] text-[clamp(2.75rem,5.5vw,5rem)] leading-[0.91] tracking-[-0.025em] text-[#171715]"
        id="about-title"
      >
        Crafting meaningful brands &amp; intuitive experiences
      </h2>

      <div className="max-w-[520px] md:justify-self-end">
        <p className="font-[Georgia,serif] text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.3] tracking-[-0.035em] text-[#33332e]">
          Hey, I&apos;m Saad, a UI/UX and brand designer passionate about
          creating visually compelling and user-friendly digital experiences.
        </p>
        <p className="mt-6 font-[Georgia,serif] text-[15px] leading-[1.55] text-[#77776f]">
          With a keen eye for aesthetics and a focus on the people behind every
          project, I bring strategy, creativity, and thoughtful design together.
          From shaping a memorable brand identity to refining a digital product,
          my goal is to make every experience feel clear, considered, and
          effortless to use.
        </p>
      </div>
    </section>
  )
}
