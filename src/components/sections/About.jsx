import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
            alt="Junior school students learning together"
            className="h-[520px] w-full rounded-[30px] object-cover shadow-[0_28px_70px_rgba(13,27,61,0.12)]"
          />
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-[#0d1b3d] p-5 text-white shadow-xl">
            <div className="text-3xl font-bold">96%</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-300">student wellbeing</div>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="About us" title="A joyful junior school where every child feels at home." />
          <p className="text-lg leading-8 text-slate-700">
            DPS Junior School is a nurturing and inspiring learning space where young learners build confidence, curiosity, and strong foundational skills for a bright future. We believe every child deserves a school environment that is warm, encouraging, and full of possibilities.
          </p>
          <p className="mt-6 text-base leading-7 text-slate-600">
            Our approach combines academic excellence with emotional wellbeing, creativity, discipline, and values-based education. From early literacy and numeracy to communication, teamwork, and character building, we help children grow not just in knowledge, but in confidence, kindness, and independence.
          </p>
          <p className="mt-6 text-base leading-7 text-slate-600">
            With caring teachers, a child-friendly atmosphere, and a balanced curriculum, DPS Junior School creates a space where students feel safe, supported, and motivated to learn every day. We focus on helping each child discover their strengths, develop their potential, and prepare for a lifetime of learning.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-2xl font-bold text-[#0d1b3d]">20+</div>
              <div className="mt-2 text-sm text-slate-600">activities</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-2xl font-bold text-[#0d1b3d]">12:1</div>
              <div className="mt-2 text-sm text-slate-600">care & support</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-2xl font-bold text-[#0d1b3d]">100%</div>
              <div className="mt-2 text-sm text-slate-600">child-focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

