export default function ServiceItem({ title, description }) {
  return (
    <article className="border-[#171715]/10 md:border-l md:px-5 first:md:border-l-0 first:md:pl-0">
      <h3 className="font-[Impact,'Arial_Narrow',sans-serif] text-xs uppercase leading-tight text-[#171715]">{title}</h3>
      <p className="mt-2 max-w-[220px] font-[Georgia,serif] text-[10px] leading-[1.35] text-[#77776f]">{description}</p>
    </article>
  )
}
