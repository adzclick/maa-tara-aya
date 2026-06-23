import { motion } from "framer-motion";
import { Quote, Star, ExternalLink } from "lucide-react";

const Testimonials = () => {
  const reviewUrl =
    "https://www.google.com/search?sca_esv=6e1dc047ffbcf906&sxsrf=ANbL-n7TTefT-5LNt6tpSb0Wvza559eW3w:1781856832659&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdV20rs_C4zrRhqe4GxT16rNduoisMR-3e_WlCFf-kQ4__5gxSXeVugBD5-wfl30_6phh2AVOA59OXXnZuKiQfoWT8V_jb6dQmrMqB1qipradC906Q%3D%3D&q=Suvojit+Aya+%26+Nurse+Centre+Reviews&sa=X&ved=2ahUKEwiYhLT87ZKVAxXtzTgGHcjWJXoQ0bkNegQIJRAF";

  const testimonials = [
    {
      name: "Prasanta Goswami",
      review:
        "Suvojit Aya & Nurse centre, very professional about their services. Very impressive and genuine rate.",
    },
    {
      name: "Anisa Mondal",
    
      review:
        "Very nice job and best service and thanks for suvojit aya Centre",
    },
     {
      name: "Banya Banerjee",
    
      review:
        "Best nurses and Aya centre ... Gd job all the best",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-cyan-50 to-white"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-slate-900">
            What Families Say
            <span className="block text-cyan-600">
              About Our Service
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Hundreds of families trust Suvojit Aya & Nurse Centre
            for compassionate nursing, Aya and patient care services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 120,
                x: index === 0 ? -100 : index === 2 ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className={`relative overflow-hidden rounded-[32px] p-8 shadow-xl ${
                index === 1
                  ? "bg-cyan-600 text-white"
                  : "bg-white border border-slate-100"
              }`}
            >
              <Quote
                size={80}
                className={`absolute top-4 right-4 ${
                  index === 1
                    ? "text-cyan-400"
                    : "text-cyan-100"
                }`}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="currentColor"
                    size={18}
                  />
                ))}
              </div>

              <p
                className={`leading-relaxed text-lg ${
                  index === 1
                    ? "text-white"
                    : "text-slate-600"
                }`}
              >
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-xl">
                  {item.name}
                </h4>

                <p
                  className={
                    index === 1
                      ? "text-cyan-100"
                      : "text-slate-500"
                  }
                >
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Google Reviews Button */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl"
          >
            <Star size={20} fill="currentColor" />
            View Google Reviews
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;