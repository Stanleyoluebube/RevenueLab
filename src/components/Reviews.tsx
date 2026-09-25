import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  review: string;
  rating: number;
}

const clientTestimonials: Testimonial[] = [
  {
    name: 'Sarah J.',
    role: 'STR Owner, UK',
    review:
      'Ebere has been the best contractor i hired. First she is very responsive and available to any of my questions. Second, she helped me with some marketing strategies for my Airbnb listing. Thanks to her, I have been getting 5 stars non stop and my business is thriving.',
    rating: 5,
  },
  {
    name: 'Mark T.',
    role: 'Property Manager, USA',
    review:
      'Abosede was extremely helpful in helping me optimizing my minimum stay and orphan nights. She did all the set up for me and solved all my issues on pricelab. I highly recommend her as she is very patient and very quick to respond.',
    rating: 5,
  },
  {
    name: 'Elena R.',
    role: 'Airbnb Host, Spain',
    review:
      'Cynthia’s expertise made a huge difference in my Airbnb business. Through her optimization strategies and valuable advice, she turned a struggling listing with no bookings into a success.',
    rating: 5,
  },
  {
    name: 'David W.',
    role: 'STR Investor, South Africa',
    review:
      'Ebere has been excellent to work with. As a busy person I do not manage to be online all the time but she is super patient and always does her work flawlessly.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    role: 'Short-Term Rental Host, Australia',
    review:
      'Abosede did amazing work. Highly recommended. The attention to detail in the market analysis was exactly what my property needed to stand out in a crowded market.',
    rating: 5,
  },
  {
    name: 'Kevin M.',
    role: 'Property Operator, Canada',
    review:
      'Christiana did an amazing and excellent job with every task asked of. Communication is great. Would highly recommend for anyone looking to professionalize their revenue management.',
    rating: 5,
  },
];

const studentTestimonials: Testimonial[] = [
  {
    name: 'Tunde Adewale',
    role: 'STR Host, 5 Properties',
    review:
      'Before RevenueLab Academy, I was guessing my prices every week. Cynthia’s PriceLabs masterclass completely changed the game. My monthly revenue jumped by 40% in just two months.',
    rating: 5,
  },
  {
    name: 'Chioma Okafor',
    role: 'Short-Term Rental Co-Host',
    review:
      'The depth of market analysis taught in this course is unmatched. Abosede and Cynthia don’t just give theory; they show real-world case studies and actionable pricing frameworks.',
    rating: 5,
  },
  {
    name: 'Chris Anthony',
    role: 'Boutique Apartment Manager',
    review:
      'Joining the WhatsApp community alone was worth the investment. Being able to ask questions and get instant feedback on revenue strategy is incredible.',
    rating: 5,
  },
];

function InfiniteCarousel({ testimonials, title, subtitle }: { testimonials: Testimonial[], title: string, subtitle: string }) {
  // Duplicate testimonials to create the seamless loop effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="mb-24 last:mb-0 overflow-hidden">
      <div className="mb-12">
        <p className="text-brand-orange text-sm uppercase tracking-wider mb-4 font-medium">
          {subtitle}
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
          {title}
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: [0, -((testimonials.length * 350) + (testimonials.length * 32))], // Adjust based on card width + gap
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: testimonials.length * 8, // Adjust speed based on number of cards
              ease: 'linear',
            },
          }}
        >
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="w-[320px] flex-shrink-0 bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 hover:border-brand-orange/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <Quote className="w-6 h-6 text-brand-orange/40" aria-hidden="true" />
                  <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed my-6 italic whitespace-normal">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-white font-medium">{item.name}</div>
                <div className="text-white/40 text-xs mt-0.5">{item.role}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />
      </div>
    </div>
  );
}

function TestimonialGrid({ title, subtitle, testimonials }: { title: string; subtitle: string; testimonials: Testimonial[] }) {
  return (
    <div className="mb-24 last:mb-0">
      <div className="mb-12">
        <p className="text-brand-orange text-sm uppercase tracking-wider mb-4 font-medium">
          {subtitle}
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 hover:border-brand-orange/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <Quote className="w-6 h-6 text-brand-orange/40" aria-hidden="true" />
                <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed my-6 italic">
                &ldquo;{item.review}&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06]">
              <div className="text-white font-medium">{item.name}</div>
              <div className="text-white/40 text-xs mt-0.5">{item.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Reviews(): React.JSX.Element {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <InfiniteCarousel
          title="What Our Clients Say"
          subtitle="Client Success"
          testimonials={clientTestimonials}
        />
        <div className="mt-32 pt-24 border-t border-white/5">
          <TestimonialGrid
            title="What Our Students Say"
            subtitle="Student Success"
            testimonials={studentTestimonials}
          />
        </div>
      </div>
    </section>
  );
}
