import { motion } from 'framer-motion'

export default function Founders() {
  return (
    <section id="founders" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-3">
            Leadership & Expertise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Meet the Founders
          </h2>
          <p className="text-white/60 text-base sm:text-lg mt-4 leading-relaxed font-sans">
            The revenue management experts behind RevenueLab Academy, empowering short-term rental hosts with data-backed pricing strategies.
          </p>
        </motion.div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Founder 1: Cynthia */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group bg-white/[0.02] border border-white/[0.08] hover:border-brand-orange/30 rounded-3xl overflow-hidden transition-all duration-500"
          >
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden relative bg-neutral-900">
              <img
                src="/images/cynthia.jpg"
                alt="Ebere Cynthia .O — Co-Founder & Lead Instructor"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-brand-orange/90 text-black text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                  Lead Instructor
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">
                  Ebere Cynthia .O
                </h3>
                <p className="text-brand-orange/90 text-sm font-medium">
                  Co-Founder 
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans">
                Ebere Cynthia is a Short-Term Rental Revenue Management specialist with extensive experience in pricing strategy, market analysis, and revenue optimization. She brings practical industry expertise into the classroom, helping hosts and property professionals master pricing technology, interpret market trends, and develop strategic approaches that drive stronger revenue performance.    </p>
            </div>
          </motion.div>

          {/* Founder 2: Abosede */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group bg-white/[0.02] border border-white/[0.08] hover:border-brand-orange/30 rounded-3xl overflow-hidden transition-all duration-500"
          >
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden relative bg-neutral-900">
              <img
                src="/images/abosede.jpg"
                alt="Abosede Christiana .O — Co-Founder"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-brand-orange/90 text-black text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                  Instructor
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">
                  Abosede Christiana .O
                </h3>
                <p className="text-brand-orange/90 text-sm font-medium">
                  Co-Founder 
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans">
                Abosede Christiana is a seasoned Short-Term Rental Revenue Management professional with extensive experience in pricing strategy, market analysis, and revenue optimization. She combines practical industry expertise with a passion for professional education, helping hosts and property professionals interpret market dynamics, make strategic pricing decisions, and strengthen the revenue performance of their properties.  </p>            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
