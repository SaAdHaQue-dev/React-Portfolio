export default function Button({ children, variant = 'primary', className = '', href, type = 'button' }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d1b3d]'
  const variants = {
    primary: 'bg-[#0d1b3d] text-white hover:bg-[#142d5a]',
    accent: 'bg-[#d2a24c] text-[#0d1b3d] hover:bg-[#e3b966]',
    outline: 'border border-[#0d1b3d] bg-transparent text-[#0d1b3d] hover:bg-[#0d1b3d] hover:text-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  )
}

