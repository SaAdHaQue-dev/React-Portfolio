export default function ProgramCard({ title, grade, description, image }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(13,27,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(13,27,61,0.12)]">
      <div className="overflow-hidden">
        <img src={image} alt={title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <span className="inline-flex rounded-full bg-[#f4ebdc] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d1b3d]">
          {grade}
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-[#0d1b3d]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </article>
  )
}
