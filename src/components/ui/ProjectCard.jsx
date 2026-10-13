import Tag from './Tag'

export default function ProjectCard({ title, description, year, category, image, featured = false }) {
  return (
    <article className={featured ? 'group md:col-span-2' : 'group'}>
      <a className="block overflow-hidden rounded-[20px]" href="#contact" aria-label={`Discuss a project like ${title}`}>
        <img
          alt={`${title} design project`}
          className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${featured ? 'aspect-[1.8] max-h-[480px]' : 'aspect-[1.5]'}`}
          loading="lazy"
          src={image}
        />
      </a>
      <div className="flex flex-wrap items-start justify-between gap-3 pt-3">
        <div>
          <h3 className="font-[Impact,'Arial_Narrow',sans-serif] text-lg uppercase leading-none text-[#171715]">{title}</h3>
          <p className="mt-1 font-[Georgia,serif] text-[10px] text-[#77776f]">{description}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-[Georgia,serif] text-[10px] text-[#77776f]">{year}</span>
          <Tag>{category}</Tag>
        </div>
      </div>
    </article>
  )
}
