import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageCircle,
  HeartPulse,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const NeedCareToday = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-cyan-100 border border-white/20">
              <HeartPulse size={16} />
              Trusted Home Healthcare Service
            </span>

            <h2 className="mt-8 text-4xl lg:text-6xl font-bold text-white leading-tight">
              Need Immediate
              <span className="block text-cyan-300">
                Aya or Nursing Care?
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-xl">
              Suvojit Aya & Nurse Centre provides professional Aya,
              Nursing and Patient Care services throughout Rajpur,
              Sonarpur and South Kolkata with trained caregivers
              available whenever you need support.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="tel:7003766790"
                className="bg-white text-cyan-800 px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl"
              >
                <PhoneCall size={20} />
                Call Now
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="https://wa.me/917003766790"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl"
              >
                <MessageCircle size={20} />
                WhatsApp
              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[35px] p-8 shadow-2xl"
            >

              <h3 className="text-3xl font-bold text-white mb-8">
                Why Families Choose Us
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                    <ShieldCheck className="text-cyan-300" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Verified Caregivers
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Experienced and trusted staff
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                    <Clock3 className="text-cyan-300" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      24/7 Availability
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Quick response anytime
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                    <HeartPulse className="text-cyan-300" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Personalized Care
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Home care tailored to patient needs
                    </p>
                  </div>
                </div>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">

                <div className="text-center bg-white/10 rounded-2xl p-4">
                  <h4 className="text-3xl font-bold text-white">
                    24/7
                  </h4>
                  <p className="text-cyan-100 text-sm">
                    Support
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-2xl p-4">
                  <h4 className="text-3xl font-bold text-white">
                    Fast
                  </h4>
                  <p className="text-cyan-100 text-sm">
                    Response
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-2xl p-4">
                  <h4 className="text-3xl font-bold text-white">
                    Care
                  </h4>
                  <p className="text-cyan-100 text-sm">
                    At Home
                  </p>
                </div>

              </div>

            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -top-5 -right-5 bg-white text-cyan-700 px-6 py-4 rounded-2xl shadow-2xl font-bold"
            >
              Available Today
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default NeedCareToday;