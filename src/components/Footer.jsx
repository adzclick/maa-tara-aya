import { motion } from "framer-motion";
import {
  HeartPulse,
  Phone,
  MessageCircle,
  MapPin,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* Top Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">

              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="w-14 h-14 rounded-2xl bg-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30"
              >
                <HeartPulse size={28} />
              </motion.div>

              <div>
                <h3 className="text-2xl font-bold">
                  Suvojit Aya &
                </h3>

                <h3 className="text-2xl font-bold text-cyan-400">
                  Nurse Centre
                </h3>
              </div>
            </div>

            <p className="text-slate-400 leading-8">
              Professional Aya, Nursing and Home Care services
              available across Rajpur, Sonarpur, Garia and
              South Kolkata with compassionate support.
            </p>

            <div className="flex items-center gap-2 mt-5 text-cyan-400">
              <Clock3 size={18} />
              <span>Available 24 Hours</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "About",
                "Services",
                "Why Choose Us",
                "Contact",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Branch Address */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">
              Our Address
            </h3>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5"
            >
              <div className="flex gap-3">

                <MapPin
                  className="text-cyan-400 mt-1"
                  size={20}
                />

                <p className="text-slate-400 leading-7">
                  Ishan Mitra Lane,
                  <br />
                  Near Shishu Sangha Club,
                  <br />
                  Rajpur,
                  Rajpur Sonarpur,
                  <br />
                  West Bengal - 700149
                </p>

              </div>
            </motion.div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <motion.a
                whileHover={{
                  scale: 1.04,
                  x: 5,
                }}
                href="tel:6291762641"
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
              >
                <Phone size={20} />
                +91 6291762641
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.04,
                  x: 5,
                }}
                href="https://wa.me/916291762641"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-green-400 transition"
              >
                <MessageCircle size={20} />
                WhatsApp Chat
              </motion.a>

              <div className="flex flex-col gap-4 mt-6">

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="tel:6291762641"
                  className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-full font-semibold text-center shadow-lg shadow-cyan-500/20"
                >
                  Call Now
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="https://wa.me/916291762641"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold text-center shadow-lg shadow-green-500/20"
                >
                  WhatsApp Now
                </motion.a>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-500 text-sm text-center">
            © 2026 Suvojit Aya & Nurse Centre.
            All Rights Reserved.
          </p>

          <motion.p
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-cyan-400 text-sm"
          >
            Caring Hands • Trusted Service • 24/7 Support
          </motion.p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;