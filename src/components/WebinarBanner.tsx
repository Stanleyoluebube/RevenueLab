import { motion } from "framer-motion";

export default function WebinarBanner() {
  return (
    <section
      id="webinar"
      className="py-20 md:py-28 bg-gradient-to-b from-brand-dark to-black"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-brand-orange/20 bg-brand-dark/40 p-8 md:p-14"
        >
          {/* Subtle Orange Glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-orange blur-3xl opacity-10"
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Free Event Badge */}
            <span className="inline-block rounded-full bg-brand-orange/10 border border-brand-orange/30 px-4 py-1.5 text-brand-orange text-xs font-medium mb-6">
              Free Event
            </span>

            {/* Heading */}
            <h2 className="font-serif text-2xl md:text-4xl text-white mb-4 leading-tight">
              Not sure if the PriceLabs Masterclass is for you?
            </h2>

            {/* Subheading */}
            <p className="text-white/70 text-lg mb-8">
              Come and experience it before you decide.
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-white text-sm bg-white/5 rounded-xl p-4 flex items-center gap-2.5">
                <span className="select-none">📅</span>
                <span>Sunday, 27 September</span>
              </div>
              <div className="text-white text-sm bg-white/5 rounded-xl p-4 flex items-center gap-2.5">
                <span className="select-none">⏰</span>
                <span>8:00 PM WAT</span>
              </div>
              <div className="text-white text-sm bg-white/5 rounded-xl p-4 flex items-center gap-2.5">
                <span className="select-none">📍</span>
                <span>TikTok LIVE</span>
              </div>
            </div>

            {/* Body Text */}
            <p className="text-white/60 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
              Join us for a FREE Short-Term Rental Revenue Management + PriceLabs
              webinar where we&apos;ll introduce you to some of the concepts
              covered in the RevenueLab Academy PriceLabs Masterclass.
            </p>

            {/* CTA Button and Social Link */}
            <div>
              <a
                href="https://tinyurl.com/ym8d6767"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-light text-white rounded-full px-8 py-3.5 text-sm font-medium transition duration-200"
              >
                Reserve Your Spot &rarr;
              </a>
              <p className="text-white/40 text-xs mt-3">
                Or follow{" "}
                <a
                  href="https://www.tiktok.com/@revenuelabacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white underline transition-colors duration-200"
                >
                  @revenuelabacademy
                </a>{" "}
                on TikTok to get notified
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
