
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  IndianRupee,
  Zap,
  MapPin,
  UserRoundCheck,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Care Staff",
      description:
        "Professionally trained nurses, Ayas and caregivers thoroughly verified for your family's safety.",
      color: "emerald",
    },
    {
      icon: HeartHandshake,
      title: "Trusted By Families",
      description:
        "Hundreds of families trust our compassionate healthcare services across Rajpur Sonarpur.",
      color: "blue",
    },
    {
      icon: IndianRupee,
      title: "Affordable Pricing",
      description:
        "Transparent pricing structure with no hidden charges or unexpected costs.",
      color: "orange",
    },
    {
      icon: Zap,
      title: "Quick Deployment",
      description:
        "Fast caregiver placement and same-day service availability whenever possible.",
      color: "purple",
    },
    {
      icon: MapPin,
      title: "Local Presence",
      description:
        "Conveniently located in Rajpur Sonarpur for faster response and reliable service.",
      color: "cyan",
    },
    {
      icon: UserRoundCheck,
      title: "Personalised Care",
      description:
        "Customized healthcare plans designed according to each patient's condition.",
      color: "rose",
    },
  ];

  const colorMap = {
    emerald: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    orange: "bg-orange-100 text-orange-600",
    purple: "bg-purple-100 text-purple-600",
    cyan: "bg-cyan-100 text-cyan-600",
    rose: "bg-rose-100 text-rose-600",
  };

  return (
    <section
      id="why-us"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

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
            duration: 1.2,
          }}
          className="text-center mb-24"
        >
          <span className="px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-slate-900">
            The Care Your Family
            <span className="block text-emerald-600">
              Truly Deserves
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Professional healthcare services delivered with compassion,
            reliability and commitment to patient well-being.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-1/2 top-0 hidden lg:block w-1 h-full bg-emerald-100 -translate-x-1/2"></div>

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -120 : 120,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  delay: index * 0.15,
                }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }`}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="w-full lg:w-[45%] bg-white/80 backdrop-blur-lg border border-white shadow-xl rounded-[35px] p-8"
                >
                  <div
                    className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 ${
                      colorMap[item.color]
                    }`}
                  >
                    <Icon size={38} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-8">
                    {item.description}
                  </p>
                </motion.div>

                {/* Center Dot */}

                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 border-4 border-white shadow-lg"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

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
          }}
          className="mt-24 rounded-[40px] bg-gradient-to-r from-emerald-600 to-blue-600 p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Professional Healthcare At Home
          </h3>

          <p className="max-w-3xl mx-auto text-lg text-white/90">
            Our mission is to provide dependable, compassionate and
            affordable nursing and caregiver services that improve
            quality of life for patients and their families.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

