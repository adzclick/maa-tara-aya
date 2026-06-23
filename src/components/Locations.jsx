import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Navigation,
  ShieldCheck,
} from "lucide-react";

const Locations = () => {
  const serviceAreas = [
    "Rajpur",
    "Sonarpur",
    "Narendrapur",
    "Garia",
    "Jadavpur",
    "Bansdroni",
    "Tollygunge",
    "South Kolkata",
  ];

  return (
    <section
      id="location"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50"
    >
      {/* Background Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3,
          }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium mb-6">
            <MapPin size={16} />
            Service Location
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900">
            Serving Families Across
            <span className="block text-emerald-600">
              Rajpur Sonarpur & South Kolkata
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Professional Aya, Nursing and Patient Care services
            delivered directly to your doorstep with compassion,
            reliability and care.
          </p>
        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
          }}
          whileHover={{
            y: -10,
          }}
          className="bg-white/90 backdrop-blur-lg rounded-[40px] shadow-2xl border border-emerald-100 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-10 lg:p-14">

              <div className="flex items-center gap-4 mb-8">

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="w-20 h-20 rounded-3xl bg-emerald-100 flex items-center justify-center"
                >
                  <Building2
                    size={34}
                    className="text-emerald-600"
                  />
                </motion.div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    Suvojit Aya & Nurse Centre
                  </h3>

                  <p className="text-emerald-600 font-medium">
                    Main Service Office
                  </p>
                </div>

              </div>

              <div className="space-y-5">

                <div className="flex items-start gap-3">

                  <MapPin
                    size={22}
                    className="text-emerald-600 mt-1"
                  />

                  <p className="text-slate-600 leading-8 text-lg">
                    Ishan Mitra Lane,
                    <br />
                    Near Shishu Sangha Club,
                    <br />
                    Rajpur,
                    Rajpur Sonarpur,
                    <br />
                    West Bengal – 700149
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    className="text-emerald-600"
                    size={20}
                  />

                  <span className="text-slate-700">
                    Verified & Professional Care Staff
                  </span>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="bg-gradient-to-br from-emerald-600 to-blue-600 p-10 lg:p-14 text-white flex flex-col justify-center">

              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.6,
                }}
              >
                <Navigation
                  size={50}
                  className="mb-6"
                />

                <h3 className="text-3xl font-bold mb-5">
                  Quick Service Reach
                </h3>

                <p className="text-lg text-white/90 leading-8">
                  Our caregivers and nurses can be deployed quickly
                  across Sonarpur and South Kolkata areas with
                  same-day assistance whenever available.
                </p>

              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Coverage Areas */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.2,
          }}
          className="mt-20"
        >
          <h3 className="text-center text-3xl font-bold text-slate-900 mb-10">
            Areas We Serve
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 text-center"
              >
                <MapPin
                  className="mx-auto text-emerald-600 mb-3"
                  size={24}
                />

                <h4 className="font-semibold text-slate-900">
                  {area}
                </h4>

              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Locations;