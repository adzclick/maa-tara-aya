import { motion } from "framer-motion";
import {
  PhoneCall,
  ClipboardCheck,
  UserCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Call Us Anytime",
    description:
      "Contact our team 24/7 and tell us about your patient care requirements.",
    icon: PhoneCall,
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "02",
    title: "Free Consultation",
    description:
      "We assess the patient's condition and recommend the best caregiver or nurse.",
    icon: ClipboardCheck,
    color: "from-emerald-500 to-green-500",
  },
  {
    number: "03",
    title: "Care Begins",
    description:
      "Our verified caregiver reaches your home and starts professional support.",
    icon: UserCheck,
    color: "from-orange-500 to-pink-500",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-28 bg-gradient-to-b from-white via-cyan-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold">
            Simple Process
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900">
            Get Professional Care
            <span className="block text-cyan-600">
              In 3 Easy Steps
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Fast response, trusted caregivers and reliable nursing support
            delivered directly to your home.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200 -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-10 relative z-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index === 0 ? -120 : index === 2 ? 120 : 0,
                    y: index === 1 ? 120 : 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.3,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                  }}
                  className="relative bg-white rounded-[35px] shadow-2xl p-8 border border-slate-100"
                >

                  {/* Step Number */}
                  <div className="absolute -top-5 right-6">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center font-bold text-lg shadow-lg`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + index,
                    }}
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-xl`}
                  >
                    <Icon size={38} />
                  </motion.div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-8">
                    {step.description}
                  </p>

                  <motion.div
                    animate={{
                      x: [0, 8, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="mt-6 flex items-center gap-2 text-cyan-600 font-semibold"
                  >
                    Next Step
                    <ArrowRight size={18} />
                  </motion.div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-[35px] p-10 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold">
            Need Immediate Home Care Assistance?
          </h3>

          <p className="mt-4 text-cyan-100 max-w-2xl mx-auto">
            Our experienced nurses and caregivers are available 24/7 to
            support your loved ones with compassionate and professional care.
          </p>

          <a
            href="tel:7003766790"
            className="inline-flex items-center gap-3 mt-8 bg-white text-cyan-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            <PhoneCall size={20} />
            Call Now: 70037 66790
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;