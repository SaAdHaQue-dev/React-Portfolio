export default function ArrowChip({ className = '', inverted = false }) {
  return (
    <span
      className={`grid size-9 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
        inverted ? 'bg-[#1A1A1A] text-[#F1F0E9]' : 'bg-[#F1F0E9] text-[#1A1A1A]'
      } ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" className="size-4" fill="none">
        <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
