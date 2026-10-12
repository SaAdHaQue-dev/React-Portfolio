import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#f7f4ee_0%,_#f3efe7_38%,_#ece7dc_100%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0d1b3d]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d1b3d] shadow-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#d2a24c]" />
            DPS Junior School
          </div>

          <h1 className="max-w-xl font-serif text-5xl leading-[0.95] text-[#0d1b3d] md:text-6xl lg:text-7xl">
            Where little minds learn with joy and confidence.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-700">
            At DPS Junior School, children grow through curiosity, kindness, guided learning, and joyful school experiences designed especially for young learners.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#admissions" variant="primary">Book a School Visit</Button>
            <Button href="#programs" variant="outline">Explore Junior Programs</Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-8 h-32 w-32 rounded-full bg-[#d2a24c]/20 blur-3xl" />
          <div className="absolute -right-5 bottom-10 h-36 w-36 rounded-full bg-[#0d1b3d]/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_35px_90px_rgba(13,27,61,0.16)]">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"
              alt="Happy junior school students"
              className="h-[520px] w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
