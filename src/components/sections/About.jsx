export default function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-[22px] py-20 md:grid-cols-2 md:gap-12 md:px-8 md:py-32"
      id="about"
    >
      <h2
        className="max-w-[540px] font-[Impact,'Arial_Narrow',sans-serif] text-[clamp(2.75rem,5.5vw,5rem)] uppercase leading-[0.91] tracking-[-0.025em] text-[#171715]"
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
          With a keen eye for aesthetics and a deep understanding of user
          behavior, I design brands and interfaces that not only look great but
          also resonate with audiences. Whether it&apos;s building a brand identity
          from the ground up or refining a digital product for seamless
          usability, I blend strategy, creativity, and functionality to bring
          ideas to life. Let&apos;s collaborate and make something extraordinary.
        </p>
      </div>
    </section>
  )
}
