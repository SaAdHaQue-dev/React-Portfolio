import { Link } from 'react-router-dom'
import ArrowChip from './ArrowChip'

export default function PillButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'dark', // 'dark' | 'light' | 'outline'
  showArrow = true,
  className = '',
  disabled = false,
  ...props
}) {
  const baseClasses = `group inline-flex min-h-11 items-center gap-4 rounded-full py-1 pl-5 pr-1 font-sans text-[11px] font-bold uppercase tracking-wider no-underline transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none ${className}`

  const variantClasses = {
    dark: 'bg-[#1A1A1A] text-[#F1F0E9] hover:bg-[#000000] focus-visible:outline-[#1A1A1A]',
    light: 'bg-[#F1F0E9] text-[#1A1A1A] hover:bg-[#FFFFFF] focus-visible:outline-[#F1F0E9]',
    outline: 'border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F1F0E9] focus-visible:outline-[#1A1A1A]',
  }[variant]

  const content = (
    <>
      <span className="leading-none">{children}</span>
      {showArrow && <ArrowChip inverted={variant === 'light'} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${variantClasses}`} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses}`} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseClasses} ${variantClasses}`} {...props}>
      {content}
    </button>
  )
}
