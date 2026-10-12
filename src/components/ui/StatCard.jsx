export default function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
      <div className="text-3xl font-bold text-white md:text-4xl">{value}</div>
      <p className="mt-2 text-sm text-slate-200">{label}</p>
    </div>
  )
}
