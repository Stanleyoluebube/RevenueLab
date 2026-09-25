import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Lock, Users } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

interface CommunityTier {
  title: string
  subtitle: string
  description: string
  features: string[]
  ctaText: string
  ctaLink: string
  isPaid: boolean
  icon: React.ComponentType<{ className?: string }>
}

const TIERS: CommunityTier[] = [
  {
    title: 'Free Community',
    subtitle: 'RevenueLab Academy | Free Community',
    description:
      'The entry point for anyone interested in short-term rental revenue management. Get free value, webinars, and introductory tips.',
    features: [
      'Short-Term Rental Revenue Management basics',
      'Introduction to pricing strategies',
      'PriceLabs and pricing tool insights',
      'Updates about upcoming programs',
      'Free webinars, tips and resources',
    ],
    ctaText: 'Join Free Community',
    ctaLink: 'https://chat.whatsapp.com/JK49tyEZkD79VumjBhC0Yn?mode=gi_t',
    isPaid: false,
    icon: Users,
  },
  {
    title: 'Revenue Managers Community',
    subtitle: 'RevenueLab Academy | Revenue Managers Community',
    description:
      'The professional hub for paid members and students. Deep-dive discussions, direct access to founders, and advanced networking.',
    features: [
      'Direct access to the RevenueLab Academy team',
      'Advanced Revenue Management discussions',
      'Pricing tools support and practical guidance',
      'Industry insights and opportunities',
      'Peer networking with other Revenue Managers',
      'Exclusive member resources',
    ],
    ctaText: 'Join Paid Community',
    ctaLink: 'https://flutterwave.com/pay/kqrvcjgocuxg',
    isPaid: true,
    icon: Lock,
  },
]

export default function Community(): React.JSX.Element {
  return (
    <section
      id="community"
      className="relative py-24 md:py-28 bg-brand-dark border-t border-white/10 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(232,145,58,0.08)_0%,transparent_70%)]"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-3xl mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-brand-orange font-medium">
                Active on WhatsApp
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]"
            >
              Our Revenue Management Ecosystem
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-white/70 text-base md:text-lg leading-relaxed mt-6"
            >
              We structure our community to guide you from curiosity to professional mastery.
              Join our free hub to start learning, then elevate your career in our professional paid community.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TIERS.map((tier, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                  tier.isPaid
                    ? 'bg-white/[0.05] border-brand-orange/30 ring-1 ring-brand-orange/20'
                    : 'bg-black/40 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    tier.isPaid ? 'bg-brand-orange text-white' : 'bg-white/10 text-brand-orange'
                  }`}>
                    <tier.icon className="w-6 h-6" />
                  </div>
                  {tier.isPaid && (
                    <span className="text-xs uppercase tracking-widest text-brand-orange font-bold bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                      Professional
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-serif text-white mb-2">{tier.title}</h3>
                <p className="text-brand-orange/80 text-sm font-medium mb-4">{tier.subtitle}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {tier.features.map((feature) => (
                    <li className="flex items-start gap-3 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98] whitespace-nowrap ${
                    tier.isPaid
                      ? 'bg-brand-orange hover:bg-brand-orange-light text-white shadow-[0_0_20px_rgba(232,145,58,0.3)]'
                      : 'bg-[#25D366] hover:bg-[#22bf5b] text-neutral-950 shadow-[0_0_20px_rgba(37,211,102,0.2)]'
                  }`}
                >
                  {tier.ctaText}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
