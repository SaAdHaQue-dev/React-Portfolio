import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Tag from '../components/ui/Tag'
import ArrowChip from '../components/ui/ArrowChip'
import PillButton from '../components/ui/PillButton'
import PageTransition from '../components/layout/PageTransition'
import Reveal from '../components/ui/Reveal'

export default function CaseStudy() {
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]

  if (!project) {
    return (
      <div className="mx-auto max-w-[600px] py-32 text-center">
        <h1 className="font-['Bebas_Neue',Impact,sans-serif] text-5xl">Project Not Found</h1>
        <p className="mt-4 font-serif text-[#6B6C68]">The requested case study does not exist.</p>
        <div className="mt-8">
          <PillButton to="/work">Back to Work</PillButton>
        </div>
      </div>
    )
  }

  // Next Project
  const nextIndex = (projectIndex + 1) % projects.length
  const nextProject = projects[nextIndex]

  return (
    <PageTransition>
      <article className="mx-auto w-full max-w-[1240px] px-6 py-12 sm:px-8 md:py-16">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#6B6C68] hover:text-[#1A1A1A] transition-colors"
          >
            <span>←</span>
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Hero Title & Tagline */}
        <div className="border-b border-[#BDBFB8] pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-serif italic text-sm text-[#6B6C68]">{project.year}</span>
            <Tag>{project.category}</Tag>
          </div>

          <h1 className="mt-4 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] uppercase tracking-tight text-[#1A1A1A]">
            {project.title}
          </h1>

          <p className="mt-4 max-w-[700px] font-serif text-xl sm:text-2xl leading-relaxed text-[#34342F]">
            {project.tagline}
          </p>
        </div>

        {/* Project Metadata Strip */}
        <div className="grid grid-cols-2 gap-8 border-b border-[#BDBFB8] py-8 sm:grid-cols-4 font-sans text-xs">
          <div>
            <span className="block font-bold uppercase tracking-widest text-[#6B6C68] mb-1">Client</span>
            <span className="font-medium text-sm text-[#1A1A1A]">{project.client}</span>
          </div>

          <div>
            <span className="block font-bold uppercase tracking-widest text-[#6B6C68] mb-1">Role</span>
            <span className="font-medium text-sm text-[#1A1A1A]">{project.role}</span>
          </div>

          <div>
            <span className="block font-bold uppercase tracking-widest text-[#6B6C68] mb-1">Duration</span>
            <span className="font-medium text-sm text-[#1A1A1A]">{project.duration}</span>
          </div>

          <div>
            <span className="block font-bold uppercase tracking-widest text-[#6B6C68] mb-1">Services</span>
            <span className="font-medium text-sm text-[#1A1A1A]">{project.services?.join(', ')}</span>
          </div>
        </div>

        {/* Cover Hero Image */}
        <div className="mt-12 overflow-hidden rounded-[24px] bg-[#BABCB5] shadow-sm">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full object-cover max-h-[640px]"
          />
        </div>

        {/* Editorial Narrative: Overview, Challenge, Solution */}
        <div className="my-20 space-y-16">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#BDBFB8] pt-10">
              <h2 className="font-['Bebas_Neue',Impact,sans-serif] text-3xl uppercase tracking-tight text-[#1A1A1A]">
                Overview
              </h2>
              <div className="md:col-span-2">
                <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#34342F]">
                  {project.overview}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#BDBFB8] pt-10">
              <h2 className="font-['Bebas_Neue',Impact,sans-serif] text-3xl uppercase tracking-tight text-[#1A1A1A]">
                The Challenge
              </h2>
              <div className="md:col-span-2">
                <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#34342F]">
                  {project.challenge}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#BDBFB8] pt-10">
              <h2 className="font-['Bebas_Neue',Impact,sans-serif] text-3xl uppercase tracking-tight text-[#1A1A1A]">
                The Solution
              </h2>
              <div className="md:col-span-2">
                <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#34342F]">
                  {project.solution}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="my-16 space-y-8">
            <div className="border-b border-[#BDBFB8] pb-4">
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
                Visual Artifacts &amp; Craft
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-[24px] bg-[#BABCB5] shadow-xs ${
                    img.span === 'full' ? 'md:col-span-2' : ''
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-700 hover:scale-102"
                  />
                  <p className="p-4 font-serif italic text-xs text-[#6B6C68] text-center">
                    {img.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results Strip */}
        {project.results && project.results.length > 0 && (
          <Reveal>
            <div className="my-20 rounded-[24px] border border-[#BDBFB8] bg-[#1A1A1A] p-8 sm:p-14 text-[#F1F0E9] shadow-md">
              <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#E8622C] mb-8">
                Measurable Impact &amp; Recognition
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8">
                {project.results.map((res) => (
                  <div key={res.label}>
                    <div className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-5xl text-white">
                      {res.value}
                    </div>
                    <div className="mt-2 font-serif italic text-sm text-[#BABCB5]">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Next Project Teaser */}
        <div className="mt-24 border-t border-[#BDBFB8] pt-14">
          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
            Next Project
          </span>
          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Link
              to={`/work/${nextProject.slug}`}
              className="group flex flex-col"
            >
              <span className="font-['Bebas_Neue',Impact,sans-serif] text-[clamp(3rem,7vw,6.5rem)] leading-none uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#E8622C] transition-colors">
                {nextProject.title}
              </span>
              <span className="font-serif italic text-base text-[#6B6C68]">
                {nextProject.tagline}
              </span>
            </Link>

            <Link
              to={`/work/${nextProject.slug}`}
              className="group inline-flex items-center gap-3 self-start md:self-end font-sans text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#E8622C] transition-colors"
            >
              <span>Explore Case Study</span>
              <ArrowChip className="!size-10" />
            </Link>
          </div>
        </div>
      </article>
    </PageTransition>
  )
}
