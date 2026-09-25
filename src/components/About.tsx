import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    value: '100+',
    label: 'Community Members',
  },
  {
    value: '30%+',
    label: 'Avg Revenue Increase',
  },
  {
    value: '100+',
    label: 'Properties Managed',
  },
];

const SERVICES = [
  'Revenue audits',
  'Property appraisal and market analysis',
  'Pricing strategy',
  'Dynamic pricing management',
  'Pricing tools setup and optimization',
  'Market and competitor analysis',
  'Seasonal and event pricing',
  'Booking-pace monitoring',
  'Ongoing revenue monitoring',
  'Portfolio revenue management',
  'Revenue performance analysis',
  'Revenue reporting',
];

const statsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-12 md:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Services Section - "Work with Us" */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <p className="text-brand-orange text-sm uppercase tracking-wider mb-4 font-medium">
                Work with Us
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6">
                Revenue Management Services
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                RevenueLab also provides professional Revenue Management services for property owners, operators, and property management companies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white/80 text-sm leading-snug">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm mt-8 italic border-l-2 border-brand-orange/30 pl-4">
Whether you need a one-time setup or ongoing revenue management, we tailor our services to your property’s needs.              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative flex items-center justify-center group">
                <img
                  src="/images/logo.jpg"
                  alt="RevenueLab Logo"
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Accent line for the next section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-16 h-0.5 bg-brand-orange mb-12"
        />

        {/* Two-column layout - "More than a course" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
              More Than a Course — A Revenue Revolution
            </h2>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="font-sans text-white/70 text-base md:text-lg leading-relaxed space-y-6">
              <p>
                RevenueLab Academy is dedicated to educating short-term rental
                owners, hosts, and aspiring professionals on how to understand
                and analyze their market, optimize pricing, and increase
                revenue.
              </p>
              <p>
                Beyond education, we provide professional revenue management
                services to help hosts maximize the performance of their
                properties — turning data into dollars.
              </p>
            </div>

            {/* Row of 3 stat cards with staggered animation */}
            <motion.div
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-3 gap-6 mt-10"
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statCardVariants}
                  className="border border-white/10 bg-white/[0.02] p-4 sm:p-5 flex flex-col justify-between"
                >
                  <div className="text-brand-orange font-serif text-3xl md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm mt-1 leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
