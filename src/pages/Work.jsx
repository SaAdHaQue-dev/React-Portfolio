import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/ui/ProjectCard'
import Tag from '../components/ui/Tag'
import PageTransition from '../components/layout/PageTransition'

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'list'
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const categories = ['All', 'UI/UX', 'Branding', 'Web', 'Mobile']

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <PageTransition>
      <main className="mx-auto w-full max-w-[1240px] px-6 py-12 sm:px-8 md:py-20" onMouseMove={handleMouseMove}>
        {/* Page Header */}
        <div className="border-b border-[#BDBFB8] pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
                Index of Selected Works
              </span>
              <h1 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(3.5rem,8vw,7rem)] leading-none uppercase tracking-tight text-[#1A1A1A]">
                WORK ({projects.length})
              </h1>
            </div>

            {/* View Mode Toggle: Grid vs List */}
            <div className="flex items-center gap-2 self-start md:self-end">
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#6B6C68] mr-2">
                Layout:
              </span>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`rounded-full px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#1A1A1A] text-[#F1F0E9]'
                    : 'bg-white/50 text-[#1A1A1A] hover:bg-white'
                }`}
              >
                Grid
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`rounded-full px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[#1A1A1A] text-[#F1F0E9]'
                    : 'bg-white/50 text-[#1A1A1A] hover:bg-white'
                }`}
              >
                List
              </button>
            </div>
          </div>

          {/* Filter Chips with Framer Motion layout */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative rounded-full px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] text-[#F1F0E9]'
                    : 'bg-black/5 text-[#6B6C68] hover:bg-black/10 hover:text-[#1A1A1A]'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-full bg-[#1A1A1A]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects View */}
        <div className="mt-12">
          {viewMode === 'grid' ? (
            <motion.div layout className="grid gap-12 md:grid-cols-2">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.slug}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProjectCard {...project} featured={index === 0 && selectedCategory === 'All'} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* List View with Floating Preview on Hover */
            <div className="divide-y divide-[#BDBFB8] border-b border-[#BDBFB8]">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  to={`/work/${project.slug}`}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 transition-colors duration-200 hover:bg-black/[0.02] px-4"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs font-bold text-[#6B6C68] tracking-widest">
                      0{index + 1}
                    </span>
                    <div>
                      <h2 className="font-['Bebas_Neue',Impact,sans-serif] text-3xl sm:text-4xl uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#E8622C] transition-colors">
                        {project.title}
                      </h2>
                      <p className="font-serif italic text-sm text-[#6B6C68]">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-0 flex items-center gap-4">
                    <span className="font-serif italic text-xs text-[#6B6C68]">{project.year}</span>
                    <Tag>{project.category}</Tag>
                    <span className="text-xl text-[#1A1A1A] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#E8622C]">
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Floating preview for list view */}
        {viewMode === 'list' && hoveredProject && (
          <div
            className="pointer-events-none fixed z-50 hidden md:block rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 w-[300px] aspect-[4/3] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
            }}
          >
            <img
              src={hoveredProject.cover}
              alt={hoveredProject.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </main>
    </PageTransition>
  )
}
