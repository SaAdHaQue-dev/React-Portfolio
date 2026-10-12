const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '280+', label: 'Projects Delivered' },
  { value: '*99%', label: 'Client Satisfaction' },
  { value: '50', label: 'Clients Worldwide' },
]

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-8 px-[22px] pb-16 pt-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.3fr)_minmax(110px,0.48fr)] md:gap-7 md:px-8 md:pb-20 md:pt-4"
    >
      <div className="order-1 max-w-[360px]">
        <p className="mb-2 font-[Georgia,serif] text-xl tracking-[-0.06em] text-[#34342f] md:text-[22px]">
          Hey, I&apos;m Dominic,
        </p>
        <h1
          className="font-[Impact,'Arial_Narrow',sans-serif] text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.83] tracking-[-0.035em] text-[#171715]"
          id="hero-title"
        >
          <span className="block">A UI/UX</span>
          <span className="block font-[Georgia,serif] text-[0.91em] font-normal italic tracking-[-0.075em]">
            &amp; Brand
          </span>
          <span className="block">Designer</span>
        </h1>
        <p className="mt-5 max-w-[310px] font-[Georgia,serif] text-[15px] leading-[1.35] text-[#45453f]">
          Transforming ideas into stunning visuals—UI/UX and brand design that
          captivates, engages, and delivers results.
        </p>
        <a
          className="mt-5 inline-flex min-h-11 items-center gap-4 rounded-full bg-[#171715] py-1 pl-4 pr-1 font-sans text-[10px] font-bold uppercase tracking-wide text-[#f1f0e9] no-underline transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171715]"
          href="mailto:hello@example.com"
        >
          <span>Contact me</span>
          <span className="grid size-9 place-items-center rounded-full bg-[#f1f0e9] text-[#171715]" aria-hidden="true">
            <svg viewBox="0 0 20 20" className="size-4" fill="none">
              <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
        </a>
      </div>

      <div className="relative order-2 mx-auto aspect-[0.78] w-full max-w-[450px] overflow-hidden rounded-t-[999px] rounded-b-[50%] bg-[#b9b9b2] md:aspect-[0.76] md:max-w-none">
        <img
          alt="Dominic sitting outdoors"
          className="h-full w-full object-cover object-[center_38%] grayscale"
          src="/images/profile.png"
        />
      </div>

      <dl className="order-3 grid grid-cols-2 gap-x-5 gap-y-5 text-right md:grid-cols-1 md:gap-y-7">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <dt className="font-[Impact,'Arial_Narrow',sans-serif] text-2xl leading-none tracking-[-0.02em] text-[#171715] md:text-[30px]">
              {value}
            </dt>
            <dd className="mt-1 font-[Georgia,serif] text-[11px] leading-tight text-[#77776f] md:text-xs">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
