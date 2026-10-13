import { useState } from 'react'
import { journalPosts } from '../data/journal'
import Tag from '../components/ui/Tag'
import PageTransition from '../components/layout/PageTransition'
import Reveal from '../components/ui/Reveal'

export default function JournalPage() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <PageTransition>
      <main className="mx-auto w-full max-w-[1240px] px-6 py-12 sm:px-8 md:py-20">
        {/* Header */}
        <div className="border-b border-[#BDBFB8] pb-10">
          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
            Thoughts &amp; Perspectives
          </span>
          <h1 className="mt-2 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(3.5rem,8vw,7rem)] leading-none uppercase tracking-tight text-[#1A1A1A]">
            JOURNAL &amp; ESSAYS
          </h1>
          <p className="mt-4 max-w-[620px] font-serif text-xl sm:text-2xl leading-relaxed text-[#45453F]">
            Writings on interaction design, typography, design systems architecture, and modern product engineering.
          </p>
        </div>

        {/* Posts List */}
        <div className="mt-14 space-y-12">
          {journalPosts.map((post) => (
            <Reveal key={post.slug}>
              <article
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer rounded-[24px] border border-[#BDBFB8] bg-[#DCDDD8]/60 p-8 sm:p-12 shadow-xs transition-colors hover:bg-white/40"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#BDBFB8] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif italic text-xs text-[#6B6C68]">{post.date}</span>
                    <Tag>{post.category}</Tag>
                  </div>
                  <span className="font-mono text-xs text-[#6B6C68]">{post.readTime}</span>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8">
                    <h2 className="font-['Bebas_Neue',Impact,sans-serif] text-3xl sm:text-4xl uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#E8622C] transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 font-serif text-base sm:text-lg leading-relaxed text-[#45453F]">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#1A1A1A] group-hover:underline">
                      <span>Read Full Essay</span>
                      <span>→</span>
                    </div>
                  </div>

                  <div className="md:col-span-4 overflow-hidden rounded-xl aspect-[16/10] bg-[#BABCB5]">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Essay Reader Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="relative max-h-[90vh] w-full max-w-[800px] overflow-y-auto rounded-[24px] border border-[#BDBFB8] bg-[#DCDDD8] p-8 sm:p-12 shadow-2xl">
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="absolute right-6 top-6 grid size-10 place-items-center rounded-full bg-[#1A1A1A] text-white hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Close article"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif italic text-xs text-[#6B6C68]">{selectedPost.date}</span>
                <Tag>{selectedPost.category}</Tag>
                <span className="font-mono text-xs text-[#6B6C68]">{selectedPost.readTime}</span>
              </div>

              <h2 className="font-['Bebas_Neue',Impact,sans-serif] text-4xl sm:text-5xl uppercase leading-tight text-[#1A1A1A]">
                {selectedPost.title}
              </h2>

              <img
                src={selectedPost.cover}
                alt={selectedPost.title}
                className="mt-6 w-full rounded-2xl object-cover max-h-[380px]"
              />

              <div className="mt-8 font-serif text-lg leading-relaxed text-[#34342F] space-y-4 whitespace-pre-line">
                {selectedPost.content}
              </div>

              <div className="mt-12 border-t border-[#BDBFB8] pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="rounded-full bg-[#1A1A1A] px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-wider text-[#F1F0E9] hover:bg-black cursor-pointer"
                >
                  Close Essay
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </PageTransition>
  )
}
