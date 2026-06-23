import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Phone,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4">

        <motion.div
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-full shadow-xl h-20 px-6 flex items-center justify-between"
        >

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center shadow-lg">

              <ShieldCheck
                className="text-white"
                size={24}
              />

            </div>

            <div>
              <h1 className="font-bold text-slate-900 text-lg leading-tight">
                Suvojit Aya &
              </h1>

              <p className="text-sm text-emerald-600 font-medium">
                Nurse Centre
              </p>
            </div>

          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            <a
              href="#home"
              className="font-medium text-slate-700 hover:text-emerald-600 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="font-medium text-slate-700 hover:text-emerald-600 transition"
            >
              About
            </a>

            <a
              href="#services"
              className="font-medium text-slate-700 hover:text-emerald-600 transition"
            >
              Services
            </a>

            <a
              href="#contact"
              className="font-medium text-slate-700 hover:text-emerald-600 transition"
            >
              Contact
            </a>
          

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Desktop Call Button */}
            <a
              href="tel:+916291762641"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              <Phone size={18} />
              Call Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="lg:hidden w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center"
            >

              {mobileMenu ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}

            </button>

          </div>

        </motion.div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {mobileMenu && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="lg:hidden mx-4 mt-2 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
          >

            <div className="flex flex-col">

              <a
                href="#home"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="px-6 py-4 border-b hover:bg-slate-50"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="px-6 py-4 border-b hover:bg-slate-50"
              >
                About
              </a>

              <a
                href="#services"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="px-6 py-4 border-b hover:bg-slate-50"
              >
                Services
              </a>

              <a
                href="#contact"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="px-6 py-4 border-b hover:bg-slate-50"
              >
                Contact
              </a>

              <a
                href="tel:+917003766790"
                className="m-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white text-center py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
};

export default Navbar;