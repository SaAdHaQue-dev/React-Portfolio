import { stats } from '../../data/stats'

export default function StatsBar() {
  return (
    <section className="bg-[#0d1b3d] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-3xl font-bold text-[#d2a24c] md:text-4xl">{stat.value}</div>
              <p className="mt-2 text-sm text-slate-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
