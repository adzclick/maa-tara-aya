import { motion } from "framer-motion";
import { Quote, Star, ExternalLink } from "lucide-react";

// TODO: Replace these three placeholder testimonials with real reviews as
// they come in (copy them verbatim from Google/Justdial, with the
// reviewer's actual name). Do not invent quotes or names.
const testimonials = [
  {
    name: "Local Family",
    area: "Rania, Rajpur Sonarpur",
    review:
      "Add a real review here once you have one — short, specific feedback works best.",
  },
  {
    name: "Local Family",
    area: "Rajpur Sonarpur",
    review:
      "Add a real review here once you have one — short, specific feedback works best.",
  },
  {
    name: "Local Family",
    area: "South Kolkata",
    review:
      "Add a real review here once you have one — short, specific feedback works best.",
  },
];

const reviewUrl =
  "https://www.google.com/search?q=Maa+Tara+Aya+And+Nurses+Centre+Rajpur+Sonarpur+Reviews";

const Locations = () => {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-[#FBF7F0]">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1B4B43 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-white border border-[#1B4B43]/12 text-[#1B4B43] text-sm font-semibold">
            Testimonials
          </span>

          <h2
            className="mt-6 text-4xl lg:text-5xl text-[#1F2A28] font-medium"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            What families say
            <span className="block text-[#1B4B43]">about our care.</span>
          </h2>

          <p className="mt-5 text-lg text-[#1F2A28]/65 max-w-2xl mx-auto">
            We're a small, local team — every review comes from a real
            family we've worked with in Rajpur Sonarpur and nearby.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-7">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative overflow-hidden rounded-2xl p-7 border ${
                index === 1
                  ? "bg-[#1B4B43] text-[#F4EBDD] border-[#1B4B43]"
                  : "bg-white border-[#1B4B43]/10"
              }`}
            >
              <Quote
                size={56}
                className={`absolute top-4 right-4 ${
                  index === 1 ? "text-[#F4EBDD]/10" : "text-[#1B4B43]/6"
                }`}
              />

              <div className="flex gap-1 mb-4 text-[#E0862E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={15} />
                ))}
              </div>

              <p
                className={`leading-relaxed text-[15px] relative z-10 ${
                  index === 1 ? "text-[#F4EBDD]/90" : "text-[#1F2A28]/70"
                }`}
              >
                "{item.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-base">{item.name}</h4>
                <p className={`text-sm ${index === 1 ? "text-[#F4EBDD]/55" : "text-[#1F2A28]/50"}`}>
                  {item.area}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews link */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#1B4B43] hover:bg-[#153a34] text-white px-7 py-3.5 rounded-md font-semibold transition-colors"
          >
            <Star size={17} fill="currentColor" className="text-[#E0862E]" />
            View Google Reviews
            <ExternalLink size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;