export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#1A1A1A]/15 bg-white/40 px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#1A1A1A] backdrop-blur-xs transition-colors hover:border-[#1A1A1A]/30 ${className}`}
    >
      {children}
    </span>
  )
}
