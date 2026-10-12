export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-[22px] py-5 min-[601px]:px-8 min-[601px]:py-6">
      <a
        className="inline-flex items-center gap-2 font-[Arial,sans-serif] text-sm font-extrabold tracking-[-0.04em] text-[#171715] no-underline"
        href="#top"
        aria-label="Saad home"
      >
        <span className="size-[10px] rounded-full bg-current" aria-hidden="true" />
        <span>SAAD</span>
      </a>

      <button
        className="inline-flex min-h-[42px] min-w-[102px] cursor-pointer items-center justify-center gap-[14px] rounded-full border-0 bg-[#171715] px-[14px] text-[9px] font-bold tracking-[0.02em] text-[#f1f0e9]"
        type="button"
        aria-label="Open menu"
      >
        <span>MENU</span>
        <span className="flex w-[13px] flex-col gap-[3px]" aria-hidden="true">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
      </button>
    </header>
  )
}
