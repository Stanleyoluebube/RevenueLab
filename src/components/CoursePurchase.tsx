import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Calendar, Check } from 'lucide-react';

interface PlatformPlan {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  ctaText: string;
  isRecommended?: boolean;
  features: string[];
}

const platforms: readonly PlatformPlan[] = [
  {
    id: 'urlkub',
    title: 'Direct Purchase',
    subtitle: 'Instant enrollment & course access',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdXGb08qmI2UgiY1ydB6VOT_OD-dISxq9uWQ9AB17QHBd8gzw/viewform',
    ctaText: 'Buy Directly →',
    isRecommended: true,
    features: [
      'Instant access to the learning portal',
      'Complete PriceLabs Masterclass modules',
      'Lifetime access to RevenueLab Inner Circle',
      '1-year access to the course',
      'Course updates & direct support',
    ],
  },
  {
    id: 'nestuge',
    title: 'Nestuge',
    subtitle: 'Learn via Nestuge community & platform',
    link: 'https://nestuge.com/revenuelabacademy',
    ctaText: 'Buy on Nestuge →',
    isRecommended: false,
    features: [
      'Instant access to the learning portal',
      'Complete PriceLabs Masterclass modules',
      'Lifetime access to RevenueLab Inner Circle',
      '1-year access to the course',
      'Course updates & direct support',
    ],
  },
  {
    id: 'selar',
    title: 'Selar',
    subtitle: 'Pay in local currency / multiple payment options',
    link: 'https://selar.com/revenuelabacademy',
    ctaText: 'Buy on Selar →',
    isRecommended: false,
    features: [
      'Instant access to the learning portal',
      'Complete PriceLabs Masterclass modules',
      'Lifetime access to RevenueLab Inner Circle',
      '1-year access to the course',
      'Course updates & direct support',
    ],
  },
] as const;

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
      ease: 'easeOut',
    },
  },
};

const CoursePurchase: React.FC = () => {
  return (
    <section id="purchase" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle ambient atmospheric glow */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(232,145,58,0.08)_0%,transparent_70%)] blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-orange text-sm uppercase tracking-wider mb-4 font-medium">
            Enroll Today
          </p>
          <h2 className="text-3xl md:text-5xl text-white font-serif mb-4 leading-tight">
            Get the PriceLabs Masterclass
          </h2>
          <p className="text-white/60 max-w-xl text-base leading-relaxed">
            Select your preferred platform below to purchase the course and get instant access.
          </p>
        </motion.div>

        {/* Promotional Banner Card / Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-brand-orange/30 bg-brand-orange/[0.04] p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden"
        >
          {/* Subtle warm glow background accent */}
          <div
            className="pointer-events-none absolute -right-6 -bottom-6 h-36 w-36 rounded-full bg-brand-orange/15 blur-2xl"
            aria-hidden="true"
          />

          {/* Early Bird Offer Badge & Highlight */}
          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <span className="inline-block bg-brand-orange text-black font-semibold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
              Early Bird Offer
            </span>
            <span className="text-white text-base sm:text-lg font-medium">
              30% OFF Early Bird Pricing Currently Available
            </span>
          </div>

          {/* Launch Date */}
          <div className="flex items-center gap-2.5 text-white/70 text-sm font-medium relative z-10 shrink-0">
            <Calendar className="w-4 h-4 text-brand-orange shrink-0" aria-hidden="true" />
            <span>
              Full Course Launches:{' '}
              <strong className="text-white font-semibold">September 30, 2026</strong>
            </span>
          </div>
        </motion.div>

        {/* 3 Platform Purchase Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {platforms.map((platform) => {
            const isRec = Boolean(platform.isRecommended);

            return (
              <motion.div
                key={platform.id}
                variants={cardVariants}
                className={
                  isRec
                    ? 'border-brand-orange/50 bg-brand-orange/[0.04] relative rounded-3xl p-8 flex flex-col justify-between hover:border-brand-orange/40 transition-all duration-300'
                    : 'bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 flex flex-col justify-between hover:border-brand-orange/40 transition-all duration-300'
                }
              >
                {/* Recommended / Popular Badge */}
                {isRec && (
                  <div className="absolute -top-3.5 right-8">
                    <span className="inline-block bg-brand-orange text-black text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md shadow-brand-orange/20">
                      Recommended
                    </span>
                  </div>
                )}

                <div>
                  {/* Platform Title */}
                  <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mb-2">
                    {platform.title}
                  </h3>

                  {/* Platform Subtitle */}
                  <p className="text-white/60 text-sm leading-relaxed min-h-[2.5rem]">
                    {platform.subtitle}
                  </p>

                  {/* Price display: Early Bird Discount Applied */}
                  <div className="my-7 py-5 border-y border-white/[0.08]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs uppercase tracking-wider font-semibold text-brand-orange">
                        Early Bird Discount Applied
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-serif text-white tracking-tight">
                        30% Off Launch Rate
                      </span>
                      <span className="text-xs text-white/50">Early Access</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8" aria-label={`${platform.title} inclusions`}>
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                        <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-brand-orange hover:bg-brand-orange-light text-white rounded-full py-3.5 text-sm font-medium transition block"
                  >
                    {platform.ctaText}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursePurchase;
