import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock3, Building2 } from "lucide-react";

const PHONE_DISPLAY = "+91 84209 03843";
const PHONE_TEL = "+918420903843";

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-white">
      {/* Quiet background texture — no orbiting blobs */}
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-[#FBF7F0] border border-[#1B4B43]/12 text-[#1B4B43] text-sm font-semibold">
            Contact Us
          </span>

          <h2
            className="mt-6 text-4xl lg:text-5xl text-[#1F2A28] font-medium"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            We're a short call away,
            <span className="block text-[#1B4B43]">day or night.</span>
          </h2>

          <p className="mt-5 text-lg text-[#1F2A28]/65 max-w-2xl mx-auto">
            Aya, nursing and patient care support across Rania, Rajpur
            Sonarpur and the surrounding South Kolkata neighbourhoods —
            available around the clock.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Left: Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#FBF7F0] p-8 rounded-2xl border border-[#1B4B43]/10"
          >
            {/* Address */}
            <div className="mb-7">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[52px] h-[52px] rounded-xl bg-[#1B4B43]/8 flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-[#1B4B43]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2A28]">Our Location</h3>
                  <p className="text-[#1B4B43] font-medium text-sm">Maa Tara Aya And Nurses Centre</p>
                </div>
              </div>

              <div className="bg-white border border-[#1B4B43]/10 rounded-xl p-5">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Building2 size={17} className="text-[#E0862E]" />
                  <h4 className="font-semibold text-[#1F2A28]">Main Service Centre</h4>
                </div>
                <p className="text-[#1F2A28]/65 leading-7 text-sm">
                  Jhil Par, 30 Feet Main Rd,
                  <br />
                  near Chat Puja Sarbojanik Committee, Udayan Pally,
                  <br />
                  Rania, Rajpur Sonarpur, Kolkata – 700154
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-6">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#1B4B43]/8 flex items-center justify-center shrink-0">
                <Phone className="text-[#1B4B43]" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-[#1F2A28]">Phone Number</h3>
                <a href={`tel:${PHONE_TEL}`} className="text-[#1F2A28]/65 hover:text-[#1B4B43] text-sm">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4 mb-6">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                <MessageCircle className="text-[#25D366]" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-[#1F2A28]">WhatsApp Support</h3>
                <p className="text-[#1F2A28]/65 text-sm">Message us anytime, we reply fast</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-[52px] h-[52px] rounded-xl bg-[#1B4B43]/8 flex items-center justify-center shrink-0">
                <Clock3 className="text-[#1B4B43]" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-[#1F2A28]">Availability</h3>
                <p className="text-[#1F2A28]/65 text-sm">24 Hours · 7 Days a Week</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3.5 mt-9">
              <motion.a
                href={`tel:${PHONE_TEL}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#E0862E] hover:bg-[#c8721f] text-white px-7 py-3.5 rounded-md font-semibold flex items-center gap-2.5 transition-colors"
              >
                <Phone size={17} />
                Call Now
              </motion.a>

              <motion.a
                href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white border border-[#1B4B43]/20 text-[#1B4B43] px-7 py-3.5 rounded-md font-semibold flex items-center gap-2.5 hover:border-[#1B4B43]/40 transition-colors"
              >
                <MessageCircle size={17} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-[#1B4B43]/10 min-h-[420px] lg:min-h-0"
          >
            <iframe
              title="Maa Tara Aya And Nurses Centre location"
              src="https://maps.google.com/maps?q=Jhil%20Par%2030%20Feet%20Main%20Rd%20Udayan%20Pally%20Rania%20Rajpur%20Sonarpur%20Kolkata%20700154&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              allowFullScreen=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;