import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  HeartHandshake,
  Clock3,
  CheckCircle,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[40px] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200"
                alt="About Nursing Care"
                className="w-full h-[650px] object-cover"
              />

            </div>

            {/* Floating Experience Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-8 left-6 bg-white rounded-3xl shadow-xl px-8 py-5"
            >
              <h3 className="text-4xl font-bold text-emerald-600">
                10+
              </h3>

              <p className="text-slate-500">
                Years Experience
              </p>
            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
              About Us
            </span>

            <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Dedicated To Your
              <span className="block text-emerald-600">
                Health & Comfort
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Suvojit Aya & Nurse Centre is committed to providing
              professional nursing care, Aya services, elderly care,
              patient attendants and home healthcare support across
              Rajpur Sonarpur and nearby areas.
            </p>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Our trained caregivers ensure dignity, safety and
              compassionate support for every patient, helping
              families receive quality healthcare within the comfort
              of their homes.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle
                  className="text-emerald-500"
                  size={20}
                />

                <span className="text-slate-700 font-medium">
                  Trained & Verified Caregivers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle
                  className="text-emerald-500"
                  size={20}
                />

                <span className="text-slate-700 font-medium">
                  24/7 Home Nursing Support
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle
                  className="text-emerald-500"
                  size={20}
                />

                <span className="text-slate-700 font-medium">
                  Affordable & Reliable Services
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle
                  className="text-emerald-500"
                  size={20}
                />

                <span className="text-slate-700 font-medium">
                  Quick Deployment & Emergency Support
                </span>
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              <motion.div
                whileHover={{
                  y: -5,
                }}
                className="bg-emerald-50 rounded-3xl p-6"
              >
                <Users
                  className="text-emerald-600 mb-3"
                  size={30}
                />

                <h3 className="text-3xl font-bold text-slate-900">
                  500+
                </h3>

                <p className="text-slate-600">
                  Happy Families
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                }}
                className="bg-blue-50 rounded-3xl p-6"
              >
                <HeartHandshake
                  className="text-blue-600 mb-3"
                  size={30}
                />

                <h3 className="text-3xl font-bold text-slate-900">
                  50+
                </h3>

                <p className="text-slate-600">
                  Care Staff
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                }}
                className="bg-emerald-50 rounded-3xl p-6"
              >
                <ShieldCheck
                  className="text-emerald-600 mb-3"
                  size={30}
                />

                <h3 className="text-3xl font-bold text-slate-900">
                  100%
                </h3>

                <p className="text-slate-600">
                  Verified Staff
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                }}
                className="bg-blue-50 rounded-3xl p-6"
              >
                <Clock3
                  className="text-blue-600 mb-3"
                  size={30}
                />

                <h3 className="text-3xl font-bold text-slate-900">
                  24/7
                </h3>

                <p className="text-slate-600">
                  Availability
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;