import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'

export default function App() {
  return (
    <main className="min-h-screen bg-[#e4e4df] text-[#171715]" id="top">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}