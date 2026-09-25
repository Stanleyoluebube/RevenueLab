import { motion } from "framer-motion";

interface CurriculumItem {
  number: string;
  title: string;
  description: string;
}

const curriculum: CurriculumItem[] = [
  {
    number: "01",
    title: "Market Analysis",
    description:
      "Learn to read and interpret your local short-term rental market data to make informed pricing decisions.",
  },
  {
    number: "02",
    title: "Dynamic Pricing Strategy",
    description:
      "Master PriceLabs and dynamic pricing tools to automatically optimize your nightly rates.",
  },
  {
    number: "03",
    title: "Revenue Optimization",
    description:
      "Discover proven techniques to increase your average daily rate and overall occupancy.",
  },
  {
    number: "04",
    title: "Competitive Positioning",
    description:
      "Understand how to position your listing against competitors for maximum visibility and bookings.",
  },
  {
    number: "05",
    title: "Data-Driven Decisions",
    description:
      "Learn to use analytics dashboards to track performance and identify growth opportunities.",
  },
  {
    number: "06",
    title: "Scaling Your Portfolio",
    description:
      "Strategies for applying revenue management principles across multiple properties.",
  },
];

export default function Program() {
  return (
    <section id="program" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-orange text-sm uppercase tracking-wider mb-4 font-medium">
            The Curriculum
          </p>
          <h2 className="text-3xl md:text-5xl text-white font-serif mb-4">
            What You Will Learn
          </h2>
          <p className="text-white/60 max-w-2xl text-base md:text-lg">
            A comprehensive Pricing Tools Masterclass designed to transform how you
            manage short-term rental revenue.
          </p>
        </motion.div>

        {/* Curriculum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {curriculum.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-brand-orange/20 transition-colors duration-300"
            >
              <div className="text-brand-orange/40 text-5xl font-serif mb-4 select-none">
                {item.number}
              </div>
              <h3 className="text-white text-lg font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
