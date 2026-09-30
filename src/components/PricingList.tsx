import { motion } from "framer-motion";

interface MainService {
  service: string;
  price: string;
  period: string;
  type: string;
  included: string[];
}

const mainServices: MainService[] = [
  {
    service: "New Listing Pricing Setup",
    price: "$400",
    period: "/ listing",
    type: "One-time",
    included: [
      "Market & comp-set analysis",
      "Demand & seasonality analysis",
      "ADR & occupancy benchmarking",
      "Base & minimum price",
      "Weekday / weekend & seasonal pricing",
      "Minimum stays",
      "Gap / orphan-night strategy",
      "Discounts & promotions setup",
      "Pricing tool configuration",
      "Comprehensive pricing strategy report",
    ],
  },
  {
    service: "Full Pricing Audit & Revenue Strategy",
    price: "$200",
    period: "/ property",
    type: "One-time",
    included: [
      "Pricing setup audit",
      "Comp-set analysis",
      "Market positioning review",
      "Demand & seasonality analysis",
      "ADR & occupancy review",
      "Booking window analysis",
      "Minimum stays review",
      "Gap / orphan-night strategy",
      "Discounts & pricing tool settings",
      "Detailed action plan & recommendations",
    ],
  },
  {
    service: "Pricing Health Check",
    price: "$150",
    period: "/ property",
    type: "One-time",
    included: [
      "Current pricing setup review",
      "Base & minimum price review",
      "Weekday / weekend pricing",
      "Seasonality & demand review",
      "Minimum stays review",
      "Key pricing settings review",
      "High-level recommendations",
    ],
  },
  {
    service: "Pricing Implementation",
    price: "$100",
    period: "/ property",
    type: "One-time",
    included: [
      "Implement approved pricing strategy",
      "Set base & minimum prices",
      "Configure seasonal adjustments",
      "Configure minimum stays",
      "Configure gap / orphan-night settings",
      "Apply discounts & promotions",
      "Configure pricing tool settings",
      "Final quality check & confirmation",
    ],
  },
  {
    service: "Ongoing Revenue Management",
    price: "$250",
    period: "/ property / month",
    type: "Monthly",
    included: [
      "Complete revenue management with weekly reviews and monthly reporting",
      "Weekly listing reviews & price optimization",
      "Market & comp-set monitoring",
      "Demand monitoring & event updates",
      "Occupancy & ADR tracking",
      "Minimum-stay optimization",
      "Full audit on each listing monthly",
      "Monthly performance report with what happened & recommendations",
      "Ongoing strategy adjustments",
    ],
  },
];

const volumeDiscounts = [
  { range: "1 - 9 listings", discount: "0%" },
  { range: "10 - 19 listings", discount: "10% OFF" },
  { range: "20 - 49 listings", discount: "20% OFF" },
  { range: "50+ listings", discount: "25% OFF" },
];

const addOns = [
  "Pricing Tool Account Creation — $50",
  "PMS / Channel Manager Integration",
  "Additional Pricing Platform Setup",
  "Revenue Performance Report (One-time)",
  "Market Research & Market Report",
  "Revenue Strategy Consultation",
  "Additional Pricing Analysis",
  "Urgent / Same-Day Implementation",
];

export default function PricingList() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-black border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-white font-serif mb-6"
          >
            Revenue Management Services & Rate Card
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-base md:text-lg"
          >
            Data-driven pricing, market intelligence & revenue optimization for short-term rentals.
          </motion.p>
        </div>

        {/* Main Services Table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.1] text-brand-orange uppercase text-xs tracking-widest">
                <th className="py-4 px-4 font-medium">Service</th>
                <th className="py-4 px-4 font-medium">Price</th>
                <th className="py-4 px-4 font-medium hidden md:table-cell">What's Included</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {mainServices.map((item, idx) => (
                <tr key={idx} className="border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors">
                  <td className="py-6 px-4">
                    <div className="font-medium text-lg">{item.service}</div>
                    <div className="text-white/40 text-xs uppercase mt-1">{item.type}</div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="font-serif text-xl text-brand-orange">{item.price}</div>
                    <div className="text-white/40 text-xs">{item.period}</div>
                  </td>
                  <td className="py-6 px-4 hidden md:table-cell">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-1">
                      {item.included.map((point, pIdx) => (
                        <li key={pIdx} className="text-white/60 text-sm flex items-start gap-2">
                          <span className="text-brand-orange">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Discounts and Add-ons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Volume Discounts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8"
          >
            <h3 className="text-white text-xl font-serif mb-6 flex items-center gap-2">
              <span className="text-brand-orange">◈</span> Volume Discounts
            </h3>
            <div className="space-y-4">
              {volumeDiscounts.map((d, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-white/[0.03] last:border-0">
                  <span className="text-white/60 text-sm">{d.range}</span>
                  <span className="text-white font-medium">{d.discount}</span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-6 italic">
              The discount is applied to the total price of each service.
            </p>
          </motion.div>

          {/* Add-Ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8"
          >
            <h3 className="text-white text-xl font-serif mb-6 flex items-center gap-2">
              <span className="text-brand-orange">◈</span> Add-On Services
            </h3>
            <ul className="space-y-3">
              {addOns.map((addon, idx) => (
                <li key={idx} className="text-white/60 text-sm flex items-start gap-2">
                  <span className="text-brand-orange">•</span>
                  {addon}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Terms & Conditions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8"
          >
            <h3 className="text-white text-xl font-serif mb-6 flex items-center gap-2">
              <span className="text-brand-orange">◈</span> Terms & Conditions
            </h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>• All prices are in USD.</li>
              <li>• Prices are per property / listing unless otherwise stated.</li>
              <li>• Pricing bot / PMS subscription fees are not included.</li>
              <li>• New Listing Pricing Setup is a one-time service.</li>
              <li>• Pricing Implementation is a one-time service.</li>
              <li>• Ongoing Revenue Management is billed monthly.</li>
              <li>• A full audit is done on each listing monthly as part of the ongoing management.</li>
              <li>• Discounts apply to all services.</li>
              <li>• Additional services outside the agreed scope will be quoted separately.</li>
              <li>• Audit recommendations do not include implementation unless the implementation service is purchased.</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm italic">
            Let's work together to maximize your revenue and grow your STR business.
          </p>
        </div>
      </div>
    </section>
  );
}
