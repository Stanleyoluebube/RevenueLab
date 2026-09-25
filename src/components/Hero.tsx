import React from 'react'
import { motion, type Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[60vh] md:min-h-screen w-full bg-black flex items-start md:items-end overflow-hidden"
    >
      {/* Subtle animated gradient orb in top-right */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 sm:-top-32 sm:-right-20 md:-top-40 md:-right-24 w-[28rem] h-[28rem] sm:w-[38rem] sm:h-[38rem] md:w-[50rem] md:h-[50rem] rounded-full bg-[radial-gradient(circle,rgba(232,145,58,0.18)_0%,rgba(232,145,58,0.05)_45%,transparent_70%)] blur-[90px] md:blur-[140px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.65, 0.9, 0.65],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content aligned to the bottom */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-24 md:pt-40"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-sm font-medium tracking-wider uppercase text-brand-orange mb-6"
        >
          Built for results-driven hosts
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.92] tracking-tight max-w-4xl text-white"
        >
          Master the Art of Short-Term Rental Revenue Management
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-white/60 text-base md:text-lg max-w-xl mt-6 leading-relaxed"
        >
          RevenueLab Academy equips short-term rental owners, hosts, and aspiring
          professionals with the tools to understand their market, optimize
          pricing, and maximize revenue.
        </motion.p>

        {/* CTA Buttons & Note */}
        <motion.div variants={itemVariants} className="mt-8">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#purchase"
              className="bg-brand-orange hover:bg-brand-orange-light text-white rounded-full px-8 py-3.5 text-sm font-medium transition cursor-pointer"
            >
              Enroll Now
            </a>
            <a
              href="#webinar"
              className="border border-white/15 bg-white/5 hover:bg-white/10 text-white rounded-full px-8 py-3.5 text-sm font-medium transition cursor-pointer"
            >
              Free Webinar &rarr;
            </a>
          </div>

          {/* Launch Date */}
          <p className="text-white/40 text-xs mt-4">
            Course launches September 30, 2026
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
