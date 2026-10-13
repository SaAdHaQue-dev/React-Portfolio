import { Link } from 'react-router-dom'
import Tag from './Tag'
import ArrowChip from './ArrowChip'

export default function ProjectCard({
  slug,
  title,
  tagline,
  year,
  category,
  cover,
  featured = false,
}) {
  return (
    <article className={`group flex flex-col ${featured ? 'md:col-span-2' : ''}`}>
      <Link
        to={`/work/${slug}`}
        data-cursor="view"
        aria-label={`View ${title} case study`}
        className="relative block overflow-hidden rounded-[24px] bg-[#BABCB5] shadow-xs"
      >
        <img
          alt={`${title} design case study`}
          className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            featured ? 'aspect-[16/9] max-h-[540px]' : 'aspect-[4/3] max-h-[440px]'
          }`}
          loading="lazy"
          src={cover}
        />

        {/* Hover overlay with Arrow */}
        <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-end p-6">
          <ArrowChip className="!size-11 !bg-[#1A1A1A] !text-[#F1F0E9]" />
        </div>
      </Link>

      {/* Info Row */}
      <div className="flex flex-wrap items-baseline justify-between gap-3 pt-4">
        <div>
          <Link
            to={`/work/${slug}`}
            className="font-['Bebas_Neue',Impact,sans-serif] text-2xl uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#E8622C] transition-colors"
          >
            {title}
          </Link>
          <p className="mt-0.5 font-serif italic text-sm text-[#6B6C68] max-w-[420px]">
            {tagline}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-serif italic text-xs text-[#6B6C68]">{year}</span>
          <Tag>{category}</Tag>
        </div>
      </div>
    </article>
  )
}
