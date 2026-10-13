import { Link } from 'react-router-dom'

export default function ServiceItem({ number, title, shortDescription, id }) {
  return (
    <Link
      to={`/services#${id || ''}`}
      className="group relative flex flex-col justify-between border-t border-[#BDBFB8] pt-6 pb-4 transition-all duration-300 md:border-t-0 md:border-l md:px-6 first:md:border-l-0 first:md:pl-0 hover:bg-black/[0.02]"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-sans text-[11px] font-bold text-[#6B6C68] tracking-widest">
            ({number})
          </span>
          <span className="text-[#E8622C] opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-xs">
            ↗
          </span>
        </div>
        <h3 className="font-['Bebas_Neue',Impact,sans-serif] text-xl sm:text-2xl uppercase leading-tight tracking-tight text-[#1A1A1A] group-hover:text-[#E8622C] transition-colors">
          {title}
        </h3>
        <p className="mt-2.5 font-serif italic text-sm leading-relaxed text-[#6B6C68]">
          {shortDescription}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-1 font-sans text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] group-hover:underline">
        <span>Explore Scope</span>
      </div>
    </Link>
  )
}
