import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, ArrowUpRight, Clock3 } from "lucide-react";

const PHONE_DISPLAY = "+91 84209 03843";
const PHONE_TEL = "+918420903843";

const quickLinks = ["Home", "About Us", "Contact"];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#12332D] text-[#F4EBDD]">
      {/* Quiet texture, no orbiting blobs */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F4EBDD 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-full border-2 border-[#E0862E] flex items-center justify-center shrink-0">
                <span className="text-[#F4EBDD] text-base" style={{ fontFamily: "'Fraunces', serif" }}>
                  MT
                </span>
              </div>
              <div className="leading-tight">
                <h3 className="text-xl font-medium" style={{ fontFamily: "'Fraunces', serif" }}>
                  Maa Tara
                </h3>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#E0862E]">
                  Aya &amp; Nurses Centre
                </p>
              </div>
            </div>

            <p className="text-[#F4EBDD]/60 leading-7 text-sm">
              Trained nurses, aya attendants and elderly caregivers for
              homes across Rania, Rajpur Sonarpur and South Kolkata —
              with a real, local team behind the phone.
            </p>

            <div className="flex items-center gap-2 mt-5 text-[#E0862E] text-sm">
              <Clock3 size={16} />
              Available 24 Hours
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="group flex items-center gap-2 text-[#F4EBDD]/60 hover:text-[#E0862E] transition-colors text-sm"
                  >
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-semibold mb-5">Our Address</h3>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex gap-3">
                <MapPin className="text-[#E0862E] mt-0.5 shrink-0" size={18} />
                <p className="text-[#F4EBDD]/60 leading-6 text-sm">
                  Jhil Par, 30 Feet Main Rd,
                  <br />
                  near Chat Puja Sarbojanik Committee,
                  <br />
                  Udayan Pally, Rania, Rajpur Sonarpur,
                  <br />
                  Kolkata – 700154
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-semibold mb-5">Contact Us</h3>

            <div className="space-y-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2.5 text-[#F4EBDD]/75 hover:text-[#E0862E] transition-colors text-sm"
              >
                <Phone size={17} />
                {PHONE_DISPLAY}
              </a>

              <a
                href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[#F4EBDD]/75 hover:text-[#25D366] transition-colors text-sm"
              >
                <MessageCircle size={17} />
                WhatsApp Chat
              </a>

              <div className="flex flex-col gap-3 mt-5">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="bg-[#E0862E] hover:bg-[#c8721f] px-5 py-2.5 rounded-md font-semibold text-center text-sm transition-colors"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 hover:border-[#25D366]/60 px-5 py-2.5 rounded-md font-semibold text-center text-sm transition-colors"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-14 pt-7 flex flex-col md:flex-row justify-between items-center gap-3"
        >
          <p className="text-[#F4EBDD]/45 text-xs text-center">
            © 2026 Maa Tara Aya And Nurses Centre. All rights reserved.
            <span className="block md:inline md:ml-2 text-[#F4EBDD]/35">
              Powered by Adz Click Media
            </span>
          </p>
          <p className="text-[#E0862E]/90 text-xs">
            Verified Staff · Local Team · Available 24×7
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;