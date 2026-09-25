import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface WorkSample {
  id: string;
  property: string;
  initialRevenue: string;
  optimizedRevenue: string;
  increase: string;
  strategy: string;
  imagePath: string;
}

const WORK_SAMPLES: WorkSample[] = [
  {
    id: 'sample-1',
    property: '',
    initialRevenue: '$2,810',
    optimizedRevenue: '$13,950',
    increase: '+396% Increase',
    strategy:
      'Comprehensive revenue optimization focusing on dynamic pricing and competitor re-alignment.',
    imagePath: '/Track Record/After 1.png',
  },
  {
    id: 'sample-2',
    property: '',
    initialRevenue: '$3,000',
    optimizedRevenue: '$11,210',
    increase: '+273% Increase',
    strategy:
      'Implementation of dynamic rate algorithms and seasonal demand layering.',
    imagePath: '/Track Record/After 2.png',
  },
  {
    id: 'sample-3',
    property: '',
    initialRevenue: '$1,200',
    optimizedRevenue: '$4,500',
    increase: '+275% Increase',
    strategy:
      'Strategic pricing overhaul and minimum stay optimization for peak events.',
    imagePath: '/Track Record/After 4.jpeg',
  },
  {
    id: 'sample-4',
    property: '',
    initialRevenue: '$2,100',
    optimizedRevenue: '$6,800',
    increase: '+223% Increase',
    strategy:
      'Dynamic pricing deployment and booking-pace monitoring to optimize ADR.',
    imagePath: '/Track Record/After 9.png',
  },
  {
    id: 'sample-5',
    property: '',
    initialRevenue: '$1,500',
    optimizedRevenue: '$5,200',
    increase: '+246% Increase',
    strategy:
      'Deep market analysis and competitive repositioning to capture higher demand.',
    imagePath: '/Track Record/After 5.jpeg',
  },
  {
    id: 'sample-6',
    property: '',
    initialRevenue: '$3,100',
    optimizedRevenue: '$9,400',
    increase: '+203% Increase',
    strategy:
      'Occupancy optimization through strategic gap-night pricing and lead-time rules.',
    imagePath: '/Track Record/After 21.png',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WorkSamples(): React.JSX.Element {
  return (
    <section id="work-samples" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-orange text-sm uppercase tracking-wider mb-4 font-medium">
            Proven Track Record
          </p>
          <h2 className="text-3xl md:text-5xl text-white font-serif mb-4">
            Revenue Generated &amp; Results
          </h2>
          <p className="text-white/60 max-w-xl text-base">
            Real performance metrics and evidence from short-term rental properties managed using RevenueLab Academy strategies.
          </p>
        </motion.div>

        {/* Grid of Showcase Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {WORK_SAMPLES.map((sample) => (
            <motion.article
              key={sample.id}
              variants={cardVariants}
              className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-6 hover:border-orange/30 transition-all duration-300 relative overflow-hidden group flex flex-col"
            >
              {/* Image Proof */}
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src={sample.imagePath}
                  alt={`Revenue proof for ${sample.property}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>

              <div className="flex-grow">
                {/* Metric Badge */}
                <span className="text-brand-orange bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1 text-xs font-semibold inline-block mb-3">
                  {sample.increase}
                </span>

                {/* Property Title - Removed properties as requested */}
                <div className="mb-2" />
              </div>

              {/* Strategy Description */}
              <p className="text-white/50 text-xs leading-relaxed border-t border-white/5 pt-4 mt-4">
                {sample.strategy}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
