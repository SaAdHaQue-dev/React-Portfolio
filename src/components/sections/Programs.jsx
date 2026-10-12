import { programs } from '../../data/programs'
import ProgramCard from '../ui/ProgramCard'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function Programs() {
  return (
    <section id="programs" className="bg-[#f5f1ea] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our programs" title="Discover a learning journey built for every stage." />
          <Button href="#admissions" variant="accent">View all</Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  )
}
