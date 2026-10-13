export default function StatItem({ value, label }) {
  return (
    <div>
      <dt className="font-[Impact,'Arial_Narrow',sans-serif] text-2xl leading-none tracking-[-0.02em] text-[#171715] md:text-[30px]">
        {value}
      </dt>
      <dd className="mt-1 font-[Georgia,serif] text-[11px] leading-tight text-[#77776f] md:text-xs">
        {label}
      </dd>
    </div>
  )
}
