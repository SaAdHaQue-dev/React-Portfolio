import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import PillButton from '../ui/PillButton'
import Reveal from '../ui/Reveal'

export default function Portfolio() {
  // Show first 3 projects on homepage
  const featuredProjects = projects.slice(0, 3)

  return (
    <section
      aria-labelledby="portfolio-title"
      className="mx-auto w-full max-w-[1240px] px-6 py-16 sm:px-8 md:py-24"
      id="portfolio"
    >
      <Reveal>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-[#BDBFB8] pb-6">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              Curated Archive
            </span>
            <h2
              className="mt-1 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(2.8rem,5.5vw,5rem)] uppercase leading-none tracking-tight text-[#1A1A1A]"
              id="portfolio-title"
            >
              Selected Work
            </h2>
          </div>
          <p className="max-w-[340px] font-serif italic text-base leading-relaxed text-[#6B6C68]">
            A showcase of recent digital product interfaces, brand identities, and design engineering.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              {...project}
              featured={index === 0}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <PillButton to="/work">
            View All Work ({projects.length})
          </PillButton>
        </div>
      </Reveal>
    </section>
  )
}
