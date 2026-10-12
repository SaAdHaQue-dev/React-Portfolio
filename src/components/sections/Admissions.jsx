import Button from '../ui/Button'

export default function Admissions() {
  return (
    <section id="admissions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 overflow-hidden rounded-[32px] bg-[#f2eadc] p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a24c]">Admissions open</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0d1b3d] md:text-5xl">
            Enrol your child in a happy, confident junior school journey.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
            Admissions are now open for junior classes. Visit DPS Junior School and discover a warm, child-friendly environment where young learners thrive every day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">Apply for Admission</Button>
            <Button href="#portal" variant="outline">Schedule a Visit</Button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"
          alt="Young students learning together in junior school"
          className="h-[420px] w-full rounded-[26px] object-cover shadow-[0_20px_60px_rgba(13,27,61,0.1)]"
        />
      </div>
    </section>
  )
}
