import { useState } from 'react'
import { services, engagementModels, serviceFaqs } from '../data/services'
import PillButton from '../components/ui/PillButton'
import PageTransition from '../components/layout/PageTransition'
import Reveal from '../components/ui/Reveal'

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <PageTransition>
      <main className="mx-auto w-full max-w-[1240px] px-6 py-12 sm:px-8 md:py-20">
        {/* Header */}
        <div className="border-b border-[#BDBFB8] pb-10">
          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
            Capabilities &amp; Engagement
          </span>
          <h1 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(3.5rem,8vw,7rem)] leading-none uppercase tracking-tight text-[#1A1A1A]">
            SERVICES &amp; SOLUTIONS
          </h1>
          <p className="mt-4 max-w-[650px] font-serif text-xl sm:text-2xl leading-relaxed text-[#45453F]">
            From initial problem discovery to production-ready design systems, I help companies build category-defining brand identities and digital interfaces.
          </p>
        </div>

        {/* 4 Detailed Service Blocks */}
        <div className="mt-16 space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 rounded-[24px] border border-[#BDBFB8] bg-[#DCDDD8]/60 p-8 sm:p-12 shadow-xs transition-colors hover:bg-white/40"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-[#BDBFB8] pb-6">
                <div>
                  <span className="font-mono text-xs font-bold text-[#E8622C] tracking-wider">
                    ({service.number})
                  </span>
                  <h2 className="mt-1 font-['Bebas_Neue',Impact,sans-serif] text-3xl sm:text-4xl uppercase tracking-tight text-[#1A1A1A]">
                    {service.title}
                  </h2>
                </div>

                <div className="flex items-center gap-6 font-sans text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#6B6C68] block">Timeline</span>
                    <span className="font-bold text-[#1A1A1A]">{service.timeline}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#6B6C68] block">Toolkit</span>
                    <span className="font-bold text-[#1A1A1A]">{service.tools.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  <p className="font-serif text-lg leading-relaxed text-[#34342F]">
                    {service.description}
                  </p>
                </div>

                <div className="md:col-span-7">
                  <h3 className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68] mb-4">
                    Core Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 font-sans text-xs font-medium text-[#1A1A1A]">
                        <span className="size-1.5 rounded-full bg-[#1A1A1A]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Models */}
        <Reveal>
          <div className="mt-24 border-t border-[#BDBFB8] pt-14">
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              Partnership Options
            </span>
            <h2 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-4xl uppercase tracking-tight text-[#1A1A1A]">
              Engagement Models
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagementModels.map((model) => (
                <div
                  key={model.name}
                  className="rounded-[24px] border border-[#BDBFB8] bg-[#DCDDD8]/60 p-8 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full bg-[#1A1A1A] px-3 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-[#F1F0E9]">
                        {model.tag}
                      </span>
                      <span className="font-mono text-xs text-[#6B6C68]">{model.duration}</span>
                    </div>

                    <h3 className="font-['Bebas_Neue',Impact,sans-serif] text-2xl uppercase tracking-tight text-[#1A1A1A]">
                      {model.name}
                    </h3>
                    <p className="font-serif italic text-xs text-[#E8622C] mt-0.5">
                      {model.subtitle}
                    </p>

                    <p className="mt-4 font-serif text-sm leading-relaxed text-[#45453F]">
                      {model.description}
                    </p>

                    <div className="mt-6 border-t border-[#BDBFB8]/50 pt-4">
                      <ul className="space-y-2 font-sans text-xs text-[#1A1A1A]">
                        {model.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="text-[#1A1A1A]">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <PillButton to="/contact" className="w-full justify-center">
                      Inquire Option
                    </PillButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* FAQ Accordion */}
        <Reveal>
          <div className="mt-24 border-t border-[#BDBFB8] pt-14">
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              Transparency
            </span>
            <h2 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-4xl uppercase tracking-tight text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 divide-y divide-[#BDBFB8] border-b border-[#BDBFB8]">
              {serviceFaqs.map((faq, index) => (
                <div key={faq.question} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between text-left cursor-pointer group"
                  >
                    <span className="font-['Bebas_Neue',Impact,sans-serif] text-2xl uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#E8622C] transition-colors">
                      {faq.question}
                    </span>
                    <span className="grid size-8 place-items-center rounded-full border border-[#1A1A1A] text-sm font-bold text-[#1A1A1A]">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>

                  {openFaq === index && (
                    <p className="mt-4 max-w-[800px] font-serif text-base leading-relaxed text-[#45453F]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA to Contact */}
        <div className="mt-20 text-center">
          <p className="font-serif italic text-lg text-[#6B6C68] mb-4">
            Need something tailored to your team’s custom specs?
          </p>
          <PillButton to="/contact">
            Let&apos;s Build Together
          </PillButton>
        </div>
      </main>
    </PageTransition>
  )
}
