import { Link } from 'react-router-dom'
import PillButton from '../components/ui/PillButton'
import PageTransition from '../components/layout/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <main className="mx-auto flex min-h-[70vh] w-full max-w-[1240px] flex-col items-center justify-center px-6 py-20 text-center">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#E8622C]">
          Error 404
        </span>

        <h1 className="mt-4 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(6rem,18vw,14rem)] leading-none uppercase tracking-tight text-[#1A1A1A] select-none hover:tracking-wider transition-all duration-500">
          404
        </h1>

        <p className="font-serif italic text-xl sm:text-2xl text-[#6B6C68] max-w-[460px] -mt-4">
          The requested coordinate does not exist in this design universe.
        </p>

        <div className="mt-10">
          <PillButton to="/">
            Return to Civilization
          </PillButton>
        </div>
      </main>
    </PageTransition>
  )
}
