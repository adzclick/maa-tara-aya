import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock3,
  Building2,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-cyan-50"
    >
      {/* Floating Background */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-300/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-slate-900">
            Get In Touch
            <span className="block text-cyan-600">
              Anytime
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Professional Aya, Nursing and Patient Care services
            available 24 hours a day across Rajpur Sonarpur and
            South Kolkata.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -180 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-[35px] shadow-2xl border border-cyan-100">

              {/* Address */}
              <div className="mb-8">

                <div className="flex items-center gap-4 mb-6">

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                    className="w-16 h-16 rounded-3xl bg-cyan-100 flex items-center justify-center"
                  >
                    <MapPin
                      size={28}
                      className="text-cyan-600"
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Our Location
                    </h3>

                    <p className="text-cyan-600 font-medium">
                      Suvojit Aya & Nurse Centre
                    </p>
                  </div>

                </div>

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="bg-gradient-to-r from-cyan-50 to-white border border-cyan-100 rounded-3xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-3">

                    <Building2
                      size={20}
                      className="text-cyan-600"
                    />

                    <h4 className="font-bold text-xl">
                      Main Service Centre
                    </h4>

                  </div>

                  <p className="text-slate-600 leading-8">
                    Ishan Mitra Ln,
                    <br />
                    Near Shishu Sangha Club,
                    <br />
                    Rajpur,
                    Rajpur Sonarpur,
                    <br />
                    West Bengal - 700149
                  </p>
                </motion.div>

              </div>

              {/* Phone */}
              <motion.div
                whileHover={{
                  x: 10,
                  scale: 1.02,
                }}
                className="flex gap-4 mb-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center">
                  <Phone className="text-cyan-600" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Phone Number
                  </h3>

                  <a
                    href="tel:+916291762641"
                    className="text-slate-600 hover:text-cyan-600"
                  >
                    +916291762641
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                whileHover={{
                  x: 10,
                  scale: 1.02,
                }}
                className="flex gap-4 mb-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <MessageCircle className="text-green-600" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    WhatsApp Support
                  </h3>

                  <p className="text-slate-600">
                    Chat instantly with our team
                  </p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                whileHover={{
                  x: 10,
                  scale: 1.02,
                }}
                className="flex gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center">
                  <Clock3 className="text-cyan-600" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Availability
                  </h3>

                  <p className="text-slate-600">
                    24 Hours • 7 Days A Week
                  </p>
                </div>
              </motion.div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">

                <motion.a
                  href="tel:+916291762641"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl"
                >
                  <Phone size={18} />
                  Call Now
                </motion.a>

                <motion.a
                  href="https://wa.me/916291762641"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </motion.a>

              </div>

            </div>
          </motion.div>

          {/* Right Map */}
          <motion.div
            initial={{ opacity: 0, x: 180 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="overflow-hidden rounded-[35px] shadow-2xl border border-cyan-100"
            >
              <iframe
                title="Location Map"
                src="https://maps.google.com/maps?q=Ishan%20Mitra%20Lane%20Rajpur%20Sonarpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="600"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;