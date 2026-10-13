import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './lib/lenis'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Preloader from './components/layout/Preloader'
import CustomCursor from './components/ui/CustomCursor'
import ScrollToTop from './components/layout/ScrollToTop'

import Home from './pages/Home'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import JournalPage from './pages/JournalPage'
import NotFound from './pages/NotFound'

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis()
  const location = useLocation()

  return (
    <>
      {/* Session Preloader */}
      <Preloader />

      {/* Trailing Custom Cursor */}
      <CustomCursor />

      {/* Scroll Reset */}
      <ScrollToTop />

      {/* Outer sage backdrop */}
      <div className="min-h-screen bg-[#BABCB5] px-0 py-0 text-[#1A1A1A] sm:px-4 sm:py-5 lg:px-6 lg:py-7">
        {/* Inner surface card */}
        <div
          id="top"
          className="mx-auto min-h-screen w-full max-w-[1360px] rounded-none sm:rounded-[32px] bg-[#DCDDD8] shadow-xl overflow-hidden border border-[#BDBFB8]/60 flex flex-col justify-between"
        >
          <Navbar />

          <div className="grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:slug" element={<CaseStudy />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/journal" element={<JournalPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}
