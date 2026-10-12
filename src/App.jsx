import TopBar from './components/layout/TopBar.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import FeatureStrip from './components/sections/FeatureStrip.jsx'
import About from './components/sections/About.jsx'
import Programs from './components/sections/Programs.jsx'
import StatsBar from './components/sections/StatsBar.jsx'
import Admissions from './components/sections/Admissions.jsx'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#f7f2ea] text-[#0d1b3d]">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <About />
        <Programs />
        <StatsBar />
        <Admissions />
      </main>
      <Footer />
    </div>
  )
}
