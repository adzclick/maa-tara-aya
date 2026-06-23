import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock3,
  Users,
  Award,
  MapPin,
  HeartPulse,
  CheckCircle,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 pt-32"
    >
      {/* Background Blobs */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg border border-emerald-100 text-emerald-700 font-medium mb-6">
            <ShieldCheck size={16} />
            Trusted Aya & Nursing Services
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
            Compassionate
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Home Healthcare
            </span>
            For Your Loved Ones
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
            Suvojit Aya & Nurse Centre provides trained nurses,
            caregivers, patient attendants, elderly care and
            post-hospitalization support at home with professional
            and compassionate service.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 mt-5 text-slate-700">
            <MapPin size={18} className="text-emerald-600" />
            Rajpur Sonarpur, West Bengal
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="tel:+916291762641"
              className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold shadow-xl"
            >
              <Phone size={18} />
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
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 text-slate-800 px-8 py-4 rounded-full flex items-center gap-3 font-semibold shadow-lg"
            >
              <MessageCircle size={18} />
              WhatsApp
            </motion.a>

          </div>

          {/* Quick Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10">

            <div className="flex items-center gap-3">
              <CheckCircle className="text-emerald-500" size={18} />
              Verified Staff
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-emerald-500" size={18} />
              24/7 Availability
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-emerald-500" size={18} />
              Same Day Service
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-emerald-500" size={18} />
              Affordable Care Plans
            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">

            <div className="bg-white rounded-3xl p-5 shadow-lg border border-slate-100 text-center">
              <h3 className="text-3xl font-bold text-emerald-600">
                500+
              </h3>
              <p className="text-sm text-slate-500">
                Happy Families
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-lg border border-slate-100 text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                24/7
              </h3>
              <p className="text-sm text-slate-500">
                Support
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-lg border border-slate-100 text-center">
              <h3 className="text-3xl font-bold text-emerald-600">
                10+
              </h3>
              <p className="text-sm text-slate-500">
                Years Experience
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE - HIDDEN ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >

          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200"
              alt="Nursing Care"
              className="w-full h-[680px] object-cover"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute top-8 -left-10 bg-white rounded-3xl shadow-xl p-5"
          >
            <div className="flex items-center gap-3">
              <HeartPulse
                className="text-red-500"
                size={28}
              />
              <div>
                <h3 className="font-bold text-lg">
                  Emergency Support
                </h3>
                <p className="text-sm text-slate-500">
                  Quick Response Team
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-8 -right-6 bg-white rounded-3xl shadow-xl p-5"
          >
            <div className="flex items-center gap-3">
              <Users
                className="text-emerald-600"
                size={28}
              />
              <div>
                <h3 className="font-bold text-lg">
                  Trusted Care
                </h3>
                <p className="text-sm text-slate-500">
                  Professional Staff
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;