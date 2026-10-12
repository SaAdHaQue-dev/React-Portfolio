export default function FeatureItem({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#d2a24c] text-lg font-bold text-[#0d1b3d]">
        ✓
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-6 text-slate-200">{text}</p>
    </div>
  )
}
