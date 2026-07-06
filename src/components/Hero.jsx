import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  HeartHandshake,
  Clock3,
  ShieldCheck,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const PHONE_DISPLAY = "+91 84209 03843"; // TODO: replace with the centre's real number
const PHONE_TEL = "+918420903843";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-[#FBF7F0] pt-40 pb-20"
    >
      {/* Subtle background texture instead of gradient blobs */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1B4B43 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#E0862E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1B4B43]/12 text-[#1B4B43] text-sm font-medium mb-7">
            <Sparkles size={14} className="text-[#E0862E]" />
            5.0★ Rated Care in Rajpur Sonarpur
          </div>

          {/* Heading */}
          <h1
            className="text-5xl lg:text-6xl leading-[1.08] text-[#1F2A28] font-medium"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Care that feels like
            <span className="block text-[#1B4B43]">family, at your door.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-[#1F2A28]/70 max-w-xl leading-relaxed">
            Maa Tara Aya And Nurses Centre sends trained nurses, aya
            attendants and elderly caregivers straight to your home in
            Rajpur Sonarpur — for new mothers, recovering patients and
            ageing parents who need a steady, gentle hand.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 mt-5 text-[#1F2A28]/70 text-sm">
            <MapPin size={16} className="text-[#E0862E]" />
            Jhil Par, 30 Feet Main Rd, Udayan Pally, Rania, Rajpur Sonarpur, Kolkata – 700154
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-9">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${PHONE_TEL}`}
              className="bg-[#E0862E] hover:bg-[#c8721f] text-white px-7 py-3.5 rounded-md flex items-center gap-2.5 font-semibold shadow-md shadow-[#E0862E]/20 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#1B4B43]/20 text-[#1B4B43] px-7 py-3.5 rounded-md flex items-center gap-2.5 font-semibold hover:border-[#1B4B43]/40 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </motion.a>
          </div>

          {/* Quick Benefits */}
          <div className="grid sm:grid-cols-2 gap-3.5 mt-10">
            {[
              "Personally vetted staff",
              "Available 24×7",
              "Same-day placement",
              "Honest, upfront pricing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[#1F2A28]/80 text-sm">
                <CheckCircle2 className="text-[#1B4B43]" size={17} />
                {item}
              </div>
            ))}
          </div>

          {/* Stats — honest, not inflated */}
          <div className="grid grid-cols-3 gap-3 mt-12">
            <div className="bg-white rounded-xl p-4 border border-[#1B4B43]/10 text-center">
              <h3 className="text-2xl font-semibold text-[#1B4B43]" style={{ fontFamily: "'Fraunces', serif" }}>
                5.0★
              </h3>
              <p className="text-xs text-[#1F2A28]/55 mt-0.5">Google Rating</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#1B4B43]/10 text-center">
              <h3 className="text-2xl font-semibold text-[#1B4B43]" style={{ fontFamily: "'Fraunces', serif" }}>
                24×7
              </h3>
              <p className="text-xs text-[#1F2A28]/55 mt-0.5">On-Call Support</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#1B4B43]/10 text-center">
              <h3 className="text-2xl font-semibold text-[#1B4B43]" style={{ fontFamily: "'Fraunces', serif" }}>
                100%
              </h3>
              <p className="text-xs text-[#1F2A28]/55 mt-0.5">Verified Attendants</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200"
              alt="Caregiver attending to an elderly patient at home"
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Single floating card — grounded in the service's real promise */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-lg p-5 border border-[#1B4B43]/8 max-w-[240px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#1B4B43]/8 flex items-center justify-center shrink-0">
                <HeartHandshake className="text-[#1B4B43]" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#1F2A28]">Local, not a call centre</h3>
                <p className="text-xs text-[#1F2A28]/55 mt-0.5">Based right in Rajpur Sonarpur</p>
              </div>
            </div>
          </motion.div>

          {/* Corner badge */}
          <div className="absolute top-5 right-5 bg-white/95 backdrop-blur rounded-full px-4 py-2 shadow-md flex items-center gap-2">
            <Clock3 size={15} className="text-[#E0862E]" />
            <span className="text-xs font-semibold text-[#1B4B43]">All Day Open</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;