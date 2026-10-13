export default function LogoCell({ name, symbol }) {
  return (
    <div className="flex min-h-[54px] items-center justify-center gap-2 border-b border-r border-[#171715]/10 px-3 py-4 font-sans text-xs font-bold text-[#999a94] sm:text-sm">
      <span aria-hidden="true" className="text-base">{symbol}</span>
      {name}
    </div>
  )
}
