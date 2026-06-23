import { motion } from "framer-motion";
import {
  HeartPulse,
  UserRound,
  Users,
  Bed,
  Stethoscope,
  ShieldPlus,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: HeartPulse,
      title: "Home Nursing Care",
      description:
        "Professional nursing services including medication, injections, wound dressing and health monitoring.",
      color: "emerald",
      number: "01",
    },
    {
      icon: UserRound,
      title: "Aya Service",
      description:
        "Experienced Ayas providing personal care, feeding assistance and daily support.",
      color: "blue",
      number: "02",
    },
    {
      icon: Users,
      title: "Elderly Care",
      description:
        "Dedicated senior citizen care ensuring comfort, safety and companionship.",
      color: "purple",
      number: "03",
    },
    {
      icon: Bed,
      title: "Patient Care",
      description:
        "Specialized assistance for bedridden patients with dignity and compassion.",
      color: "orange",
      number: "04",
    },
    {
      icon: Stethoscope,
      title: "Post Surgery Care",
      description:
        "Recovery support, wound care and rehabilitation after surgery.",
      color: "cyan",
      number: "05",
    },
    {
      icon: ShieldPlus,
      title: "24/7 Emergency Support",
      description:
        "Round-the-clock healthcare attendants available whenever needed.",
      color: "rose",
      number: "06",
    },
  ];

  const colorClasses = {
    emerald: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    cyan: "bg-cyan-100 text-cyan-600",
    rose: "bg-rose-100 text-rose-600",
  };

  return (
    <section
      id="services"
      className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-emerald-50 overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

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
            duration: 1.2,
          }}
          className="text-center mb-20"
        >
          <span className="px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-slate-900">
            Professional Healthcare
            <span className="block text-emerald-600">
              At Your Doorstep
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Trusted nursing, Aya and patient care services delivered
            with compassion, professionalism and dedication.
          </p>
        </motion.div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x:
                    index % 2 === 0
                      ? -100
                      : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.3,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                }}
                className="group relative bg-white/80 backdrop-blur-lg rounded-[35px] p-8 border border-white shadow-xl overflow-hidden"
              >
                {/* Number */}

                <div className="absolute top-6 right-6 text-5xl font-black text-slate-100 group-hover:text-emerald-100 transition-all">
                  {service.number}
                </div>

                {/* Icon */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 ${
                    colorClasses[service.color]
                  }`}
                >
                  <Icon size={38} />
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-8">
                  {service.description}
                </p>

                {/* Bottom Line */}

                <div className="mt-8 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    whileHover={{
                      width: "100%",
                    }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 w-20"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
          }}
          className="mt-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-[40px] p-10 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Care You Can Trust
          </h3>

          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            From elderly care to post-surgery assistance, our trained
            healthcare professionals are committed to providing
            exceptional care in the comfort of your home.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;