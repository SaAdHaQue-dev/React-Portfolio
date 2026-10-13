import { useState, useEffect } from 'react'
import { aboutData } from '../data/about'
import { siteConfig } from '../data/site'
import PillButton from '../components/ui/PillButton'
import PageTransition from '../components/layout/PageTransition'
import Reveal from '../components/ui/Reveal'

export default function AboutPage() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <PageTransition>
      <main className="mx-auto w-full max-w-[1240px] px-6 py-12 sm:px-8 md:py-20">
        {/* Header */}
        <div className="border-b border-[#BDBFB8] pb-10">
          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
            Biography &amp; Philosophy
          </span>
          <h1 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(3.5rem,8vw,7rem)] leading-none uppercase tracking-tight text-[#1A1A1A]">
            ABOUT SAAD
          </h1>
        </div>

        {/* Hero Section: Story & Arch Portrait */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-[0.8] w-full max-w-[400px] overflow-hidden mask-arch bg-[#BABCB5] shadow-md border-b-2 border-white/20">
              <img
                src="/images/profile.png"
                alt="Saad portrait"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <p className="font-serif text-2xl sm:text-3xl leading-snug text-[#1A1A1A]">
              &ldquo;I believe the best digital experiences are the ones where technology disappears, leaving only intuitive human connection.&rdquo;
            </p>
            <p className="font-serif text-base sm:text-lg leading-relaxed text-[#45453F]">
              With over 15 years dedicated to visual storytelling and product systems, I partner with forward-thinking teams to turn complex ideas into refined, memorable digital products. My background sits at the intersection of Swiss graphic tradition, modernist architecture, and modern web engineering.
            </p>
            <p className="font-serif text-base sm:text-lg leading-relaxed text-[#45453F]">
              Whether founding the brand foundations for an early-stage venture or revamping high-volume web applications, every project is treated as an exercise in clarity, restraint, and obsessive detail.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <PillButton href="mailto:hello@saadhaque.dev">
                Inquire for Work
              </PillButton>
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault()
                  alert('Resume PDF download initialized.')
                }}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#1A1A1A] px-6 font-sans text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F1F0E9] transition-all"
              >
                <span>Download Résumé (PDF)</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Design Philosophy */}
        <Reveal>
          <div className="mt-24 border-t border-[#BDBFB8] pt-14">
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              Principles
            </span>
            <h2 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-4xl uppercase tracking-tight text-[#1A1A1A]">
              Design Values
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {aboutData.philosophy.map((item, i) => (
                <div key={item.title} className="rounded-2xl border border-[#BDBFB8] bg-[#DCDDD8]/60 p-8 shadow-xs">
                  <span className="font-mono text-xs font-bold text-[#6B6C68]">0{i + 1}</span>
                  <h3 className="mt-3 font-['Bebas_Neue',Impact,sans-serif] text-2xl uppercase tracking-tight text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-[#45453F]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Experience Timeline */}
        <Reveal>
          <div className="mt-24 border-t border-[#BDBFB8] pt-14">
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              History
            </span>
            <h2 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-4xl uppercase tracking-tight text-[#1A1A1A]">
              Experience &amp; Leadership
            </h2>

            <div className="mt-8 divide-y divide-[#BDBFB8] border-b border-[#BDBFB8]">
              {aboutData.timeline.map((job) => (
                <div key={job.period} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 items-start">
                  <div className="md:col-span-3">
                    <span className="font-mono text-xs font-bold text-[#E8622C] tracking-wider">
                      {job.period}
                    </span>
                    <p className="font-sans text-xs text-[#6B6C68]">{job.location}</p>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-['Bebas_Neue',Impact,sans-serif] text-2xl uppercase tracking-tight text-[#1A1A1A]">
                      {job.role}
                    </h3>
                    <p className="font-serif italic text-sm text-[#1A1A1A]">
                      {job.company}
                    </p>
                  </div>

                  <div className="md:col-span-5">
                    <p className="font-serif text-sm leading-relaxed text-[#45453F]">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Skills & Tools Grid */}
        <Reveal>
          <div className="mt-24 border-t border-[#BDBFB8] pt-14">
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              Capabilities
            </span>
            <h2 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-4xl uppercase tracking-tight text-[#1A1A1A]">
              Skills &amp; Toolkit
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {aboutData.skills.map((group) => (
                <div key={group.category} className="rounded-2xl border border-[#BDBFB8] bg-[#DCDDD8]/60 p-8 shadow-xs">
                  <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[#6B6C68] mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/70 px-3 py-1 font-sans text-xs font-semibold text-[#1A1A1A] border border-[#BDBFB8]/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Awards & Recognition */}
        <Reveal>
          <div className="mt-24 border-t border-[#BDBFB8] pt-14">
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              Honors
            </span>
            <h2 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-4xl uppercase tracking-tight text-[#1A1A1A]">
              Selected Awards
            </h2>

            <div className="mt-8 divide-y divide-[#BDBFB8] border-b border-[#BDBFB8]">
              {aboutData.awards.map((award) => (
                <div key={award.title + award.year} className="flex flex-wrap items-center justify-between py-5 gap-4">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs font-bold text-[#6B6C68]">{award.year}</span>
                    <span className="font-['Bebas_Neue',sans-serif] text-2xl uppercase tracking-tight text-[#1A1A1A]">
                      {award.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-sans">
                    <span className="text-[#6B6C68]">{award.organization}</span>
                    <span className="font-serif italic text-[#1A1A1A]">— {award.project}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Fun Facts / Currently Widget */}
        <Reveal>
          <div className="mt-24 rounded-[24px] border border-[#BDBFB8] bg-[#1A1A1A] p-8 sm:p-14 text-[#F1F0E9] shadow-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#E8622C]">
                Currently &amp; Telemetry
              </span>
              <span className="font-mono text-xs text-[#BABCB5]">
                NYC Time: {currentTime || 'Live'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#6B6C68] block mb-1">On Rotation</span>
                <p className="font-serif italic text-base text-[#F1F0E9]">{aboutData.currently.listeningTo}</p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#6B6C68] block mb-1">On Nightstand</span>
                <p className="font-serif italic text-base text-[#F1F0E9]">{aboutData.currently.reading}</p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#6B6C68] block mb-1">Obsessing Over</span>
                <p className="font-serif italic text-base text-[#F1F0E9]">{aboutData.currently.obsessingOver}</p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#6B6C68] block mb-1">Studio Base</span>
                <p className="font-serif italic text-base text-[#F1F0E9]">{aboutData.currently.location}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </main>
    </PageTransition>
  )
}
