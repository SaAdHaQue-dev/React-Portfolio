import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

export default function Portfolio() {
  return (
    <section aria-labelledby="portfolio-title" className="mx-auto w-full max-w-[1200px] px-[22px] py-16 md:px-8 md:py-24" id="portfolio">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-none tracking-[-0.03em] text-[#171715]" id="portfolio-title">
          Portfolio
        </h2>
        <p className="max-w-[300px] font-[Georgia,serif] text-xs leading-relaxed text-[#77776f]">
          Explore my recent web design creations and discover how we can transform your vision into reality.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} featured={index === 0} />
        ))}
      </div>
    </section>
  )
}
