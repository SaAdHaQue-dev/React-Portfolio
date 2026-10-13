import { siteConfig } from '../../data/site'
import PillButton from '../ui/PillButton'
import Reveal from '../ui/Reveal'

export default function About() {
  return (
    <section
      aria-labelledby="about-teaser-title"
      className="mx-auto w-full max-w-[1240px] px-6 py-16 sm:px-8 md:py-24"
      id="about"
    >
      <Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14 items-start border-t border-[#BDBFB8] pt-12">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              About Saad
            </span>
            <h2
              className="mt-3 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(2.8rem,5.5vw,5rem)] uppercase leading-[0.92] tracking-tight text-[#1A1A1A]"
              id="about-teaser-title"
            >
              Crafting meaningful brands &amp; intuitive experiences
            </h2>
          </div>

          <div className="md:pt-6">
            <p className="font-serif text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.35] tracking-tight text-[#33332E]">
              {siteConfig.bio.lead}
            </p>
            <p className="mt-5 font-serif text-base leading-[1.6] text-[#6B6C68]">
              {siteConfig.bio.body}
            </p>

            <div className="mt-8">
              <PillButton to="/about">
                More About Me
              </PillButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
