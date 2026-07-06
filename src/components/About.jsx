import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  HeartHandshake,
  Clock3,
  CheckCircle2,
  Quote,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-28 bg-[#FBF7F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT (image moved right for rhythm against the Hero) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#1B4B43]/12 text-[#1B4B43] text-sm font-semibold">
              About Us
            </span>

            <h2
              className="mt-6 text-4xl lg:text-5xl leading-[1.1] text-[#1F2A28] font-medium"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              A neighbourhood centre,
              <span className="block text-[#1B4B43]">not a call centre.</span>
            </h2>

            <p className="mt-6 text-lg text-[#1F2A28]/70 leading-relaxed">
              Maa Tara Aya And Nurses Centre is based right in Rania, Rajpur
              Sonarpur — we're not routing your call through a distant office.
              We place trained nurses, aya attendants, and elderly caregivers
              in homes across the neighbourhood, so help is close by when you
              need it.
            </p>

            <p className="mt-5 text-lg text-[#1F2A28]/70 leading-relaxed">
              Every attendant we send is personally known to us before they're
              known to you — vetted, briefed on your family's needs, and
              accountable to a centre you can actually walk into.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-3.5">
              {[
                "Personally vetted, trained attendants",
                "24×7 home nursing support",
                "Transparent, upfront pricing",
                "Fast placement — often the same day",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#1B4B43]" size={19} />
                  <span className="text-[#1F2A28]/85 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats — qualitative, not invented headcounts */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <motion.div whileHover={{ y: -4 }} className="bg-white rounded-2xl p-5 border border-[#1B4B43]/10">
                <Users className="text-[#1B4B43] mb-3" size={26} />
                <h3 className="text-lg font-semibold text-[#1F2A28]">Locally Based</h3>
                <p className="text-[#1F2A28]/55 text-sm mt-0.5">Rania, Rajpur Sonarpur</p>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="bg-white rounded-2xl p-5 border border-[#1B4B43]/10">
                <HeartHandshake className="text-[#E0862E] mb-3" size={26} />
                <h3 className="text-lg font-semibold text-[#1F2A28]">Personal Match</h3>
                <p className="text-[#1F2A28]/55 text-sm mt-0.5">Right attendant for your case</p>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="bg-white rounded-2xl p-5 border border-[#1B4B43]/10">
                <ShieldCheck className="text-[#1B4B43] mb-3" size={26} />
                <h3 className="text-lg font-semibold text-[#1F2A28]">100% Verified</h3>
                <p className="text-[#1F2A28]/55 text-sm mt-0.5">Every attendant background-checked</p>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="bg-white rounded-2xl p-5 border border-[#1B4B43]/10">
                <Clock3 className="text-[#E0862E] mb-3" size={26} />
                <h3 className="text-lg font-semibold text-[#1F2A28]">24×7 On-Call</h3>
                <p className="text-[#1F2A28]/55 text-sm mt-0.5">Day, night, or emergency</p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200"
                alt="Caregiver holding the hand of an elderly patient"
                className="w-full h-[560px] object-cover"
              />
            </div>

            {/* Floating quote card — replaces the invented "10+ years" stat */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
              className="absolute -bottom-8 left-6 right-6 bg-[#1B4B43] rounded-2xl shadow-xl px-7 py-6 text-[#F4EBDD]"
            >
              <Quote className="text-[#E0862E] mb-2" size={22} />
              <p className="text-[15px] leading-relaxed">
                "We treat every patient the way we'd want our own family
                looked after."
              </p>
              <p className="text-xs text-[#F4EBDD]/60 mt-3 uppercase tracking-wide">
                — Maa Tara Aya And Nurses Centre
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;