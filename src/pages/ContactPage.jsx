import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../data/site'
import PillButton from '../components/ui/PillButton'
import PageTransition from '../components/layout/PageTransition'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    budget: '$15k – $30k',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const projectTypes = ['UI/UX Design', 'Brand Architecture', 'Web Development', 'Design System', 'Full Product']
  const budgetRanges = ['<$10k', '$10k – $20k', '$20k – $40k', '$40k+']

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) errs.message = 'Please provide brief details about your project.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    // Simulate sending inquiry (configured for Formspree/Web3Forms/Resend fallback)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1200)
  }

  return (
    <PageTransition>
      <main className="mx-auto w-full max-w-[1240px] px-6 py-12 sm:px-8 md:py-20">
        {/* Header */}
        <div className="border-b border-[#BDBFB8] pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68]">
              Initiate Collaboration
            </span>
            <div className="flex items-center gap-2 font-sans text-xs">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-[#1A1A1A]">{siteConfig.status}</span>
            </div>
          </div>

          <h1 className="mt-3 font-['Bebas_Neue',Impact,sans-serif] text-[clamp(4rem,9vw,8rem)] leading-none uppercase tracking-tight text-[#1A1A1A]">
            LET&apos;S TALK
          </h1>
          <p className="mt-4 max-w-[620px] font-serif text-xl sm:text-2xl leading-relaxed text-[#45453F]">
            Have an exciting idea, new venture, or need design leadership? Send a note and let’s schedule an initial discovery call.
          </p>
        </div>

        {/* Content Grid: Form Left, Direct Info Right */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="md:col-span-7 rounded-[28px] border border-[#BDBFB8] bg-[#DCDDD8]/60 p-8 sm:p-12 shadow-xs">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="mx-auto size-16 rounded-full bg-[#1A1A1A] text-[#F1F0E9] grid place-items-center text-2xl font-bold mb-6">
                  ✓
                </div>
                <h2 className="font-['Bebas_Neue',Impact,sans-serif] text-4xl uppercase tracking-tight text-[#1A1A1A]">
                  Message Received!
                </h2>
                <p className="mt-3 font-serif text-lg text-[#45453F] max-w-[420px] mx-auto">
                  Thank you for reaching out, {formData.name}. I review all client inquiries personally and will respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false)
                    setFormData({
                      name: '',
                      email: '',
                      projectType: 'UI/UX Design',
                      budget: '$15k – $30k',
                      message: '',
                    })
                  }}
                  className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#1A1A1A] underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68] mb-2">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#BDBFB8] bg-white/70 px-4 py-3 font-sans text-sm text-[#1A1A1A] placeholder:text-[#6B6C68]/50 focus:border-[#1A1A1A] focus:outline-hidden"
                    />
                    {errors.name && (
                      <p className="mt-1 font-sans text-xs text-rose-600 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68] mb-2">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-[#BDBFB8] bg-white/70 px-4 py-3 font-sans text-sm text-[#1A1A1A] placeholder:text-[#6B6C68]/50 focus:border-[#1A1A1A] focus:outline-hidden"
                    />
                    {errors.email && (
                      <p className="mt-1 font-sans text-xs text-rose-600 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Project Type Chips */}
                <div>
                  <label className="block font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68] mb-2">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`rounded-full px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                          formData.projectType === type
                            ? 'bg-[#1A1A1A] text-[#F1F0E9]'
                            : 'bg-white/60 text-[#1A1A1A] border border-[#BDBFB8] hover:bg-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range Chips */}
                <div>
                  <label className="block font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68] mb-2">
                    Estimated Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`rounded-full px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                          formData.budget === b
                            ? 'bg-[#1A1A1A] text-[#F1F0E9]'
                            : 'bg-white/60 text-[#1A1A1A] border border-[#BDBFB8] hover:bg-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68] mb-2">
                    Project Overview &amp; Goals *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Briefly describe your goals, expected timeline, and any links..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-[#BDBFB8] bg-white/70 px-4 py-3 font-sans text-sm text-[#1A1A1A] placeholder:text-[#6B6C68]/50 focus:border-[#1A1A1A] focus:outline-hidden"
                  />
                  {errors.message && (
                    <p className="mt-1 font-sans text-xs text-rose-600 font-medium">{errors.message}</p>
                  )}
                </div>

                <PillButton type="submit" disabled={isSubmitting} className="w-full justify-center">
                  {isSubmitting ? 'Sending Transmission...' : 'Transmit Message'}
                </PillButton>
              </form>
            )}
          </div>

          {/* Right Direct Details */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68] block mb-2">
                Direct Email
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-['Bebas_Neue',sans-serif] text-3xl tracking-tight text-[#1A1A1A] hover:text-[#E8622C] transition-colors"
              >
                {siteConfig.email}
              </a>
              <p className="font-serif italic text-sm text-[#6B6C68] mt-1">
                Typical response time: under 12 hours.
              </p>
            </div>

            <div>
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68] block mb-2">
                Studio Location &amp; Time
              </span>
              <p className="font-serif text-lg text-[#1A1A1A]">{siteConfig.location}</p>
              <p className="font-mono text-sm font-semibold text-[#6B6C68] mt-1">
                Current Time: {currentTime || 'Live'}
              </p>
            </div>

            <div>
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#6B6C68] block mb-3">
                Social Profiles
              </span>
              <div className="space-y-2">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between border-b border-[#BDBFB8] py-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] hover:text-[#E8622C] transition-colors"
                  >
                    <span>{social.label}</span>
                    <span className="text-[#6B6C68]">{social.username}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
