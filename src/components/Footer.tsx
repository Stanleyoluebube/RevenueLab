import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUpRight, MessageCircle } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Curriculum', href: '#program' },
  { label: 'Founders', href: '#founders' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Community', href: '#community' },
  { label: 'Masterclass', href: '#purchase' },
]

export default function Footer(): React.JSX.Element {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      const targetElement = document.querySelector(href)
      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', href)
      }
    }
  }

  return (
    <footer
      id="contact"
      className="relative py-16 bg-black border-t border-white/10 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-white/10">
            {/* Left Column: Logo + Brand Name + Summary */}
            <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
              <div>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="inline-flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg mb-5"
                  aria-label="RevenueLab Academy Home"
                >
                  <img
                    src="/images/logo.jpg"
                    alt="RevenueLab Academy logo"
                    className="h-10 w-10 rounded-lg object-cover border border-white/10 group-hover:border-brand-orange/40 transition-colors duration-200"
                  />
                  <span className="font-serif text-2xl text-white tracking-tight leading-none group-hover:text-brand-orange-light transition-colors duration-200">
                    RevenueLab Academy
                  </span>
                </a>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md">
                  The premier revenue management and dynamic pricing academy for
                  short-term rental hosts, property managers, and hospitality
                  investors across USA, UK, Europe, Australia and beyond.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <span className="text-xs uppercase tracking-widest text-brand-orange font-medium block mb-2">
                  Instructors & Operations
                </span>
                <p className="text-white/50 text-xs sm:text-sm">
                  Led by Ebere & Abosede
                </p>
              </div>
            </div>

            {/* Middle Column: Quick Nav Links */}
            <div className="md:col-span-3 lg:col-span-3">
              <p className="text-xs uppercase tracking-widest text-brand-orange font-medium mb-5">
                Quick Links
              </p>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Contact Info & Social Links */}
            <div className="md:col-span-3 lg:col-span-4 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-orange font-medium mb-5">
                  Get in Touch
                </p>

                {/* Email Contact */}
                <div className="mb-6">
                  <span className="text-xs text-white/40 block mb-1.5">
                    Direct Inquiry & Support
                  </span>
                  <a
                    href="mailto:Revenuelabacademy@gmail.com"
                    className="inline-flex items-center gap-2.5 text-white/90 hover:text-brand-orange transition-colors duration-200 text-sm sm:text-base font-medium break-all group"
                  >
                    <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Revenuelabacademy@gmail.com</span>
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <span className="text-xs text-white/40 block mb-2.5">
                    Connect With Us
                  </span>
                  <div className="flex flex-col gap-2.5">
                    {/* TikTok Link */}
                    <a
                      href="https://www.tiktok.com/@revenuelabacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors group"
                      aria-label="RevenueLab Academy on TikTok"
                    >
                      <svg
                        className="w-4 h-4 fill-current text-white/70 group-hover:text-brand-orange transition-colors"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.86-4.49V8.52a8.27 8.27 0 0 0 4.84 1.57V6.69z" />
                      </svg>
                      <span>TikTok @revenuelabacademy</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                    </a>

                    {/* WhatsApp Community Link */}
                    <a
                      href="https://wa.me/2348138393638"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors group"
                      aria-label="Join WhatsApp Community"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-brand-orange transition-colors" />
                      <span>WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-8 flex items-center gap-2 text-xs text-white/40">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>Admission is Open</span>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© 2026 RevenueLab Academy. All rights reserved.</p>
            <p className="font-medium text-white/60">
              
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
