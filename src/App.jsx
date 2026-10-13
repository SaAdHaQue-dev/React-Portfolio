import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Services from './components/sections/Services.jsx'
import TrustedBy from './components/sections/TrustedBy.jsx'
import About from './components/sections/About.jsx'
import Portfolio from './components/sections/Portfolio.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#b9bab4] px-0 py-0 text-[#171715] sm:px-5 sm:py-6">
      <div className="mx-auto min-h-screen w-full max-w-[1320px] bg-[#deded9]" id="top">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <TrustedBy />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
