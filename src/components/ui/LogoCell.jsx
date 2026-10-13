export default function LogoCell({ name, symbol, domain }) {
  return (
    <div className="group relative flex flex-col items-center justify-center border-b border-r border-[#BDBFB8] p-6 text-center transition-all duration-300 hover:bg-black/[0.03]">
      <span className="text-2xl text-[#6B6C68] transition-transform duration-300 group-hover:scale-125 group-hover:text-[#E8622C]">
        {symbol}
      </span>
      <span className="mt-2 font-['Bebas_Neue',sans-serif] text-base tracking-wider uppercase text-[#1A1A1A] group-hover:text-[#E8622C] transition-colors">
        {name}
      </span>
      {domain && (
        <span className="font-serif italic text-[11px] text-[#6B6C68]">
          {domain}
        </span>
      )}
    </div>
  )
}
