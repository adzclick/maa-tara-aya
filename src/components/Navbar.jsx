import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Clock } from "lucide-react";



const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const PHONE_DISPLAY = "+91 84209 03843"; // TODO: replace with the centre's real number
const PHONE_TEL = "+918420903843";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-[Work Sans, sans-serif]">

      {/* ── Announcement strip ── */}
      <div className="bg-[#1B4B43] text-[#F4EBDD]">
        <div className="max-w-7xl mx-auto px-5 h-9 flex items-center justify-between text-xs">
          <span className="hidden sm:flex items-center gap-1.5">
            <Clock size={13} className="text-[#E0862E]" />
            Rania, Rajpur Sonarpur, Kolkata &middot; Available round the clock
          </span>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-1.5 mx-auto sm:mx-0 font-medium tracking-wide"
          >
            <Phone size={13} className="text-[#E0862E]" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* ── Main bar ── */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#FBF7F0]/95 backdrop-blur-md border-b border-[#1B4B43]/10"
      >
        <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between gap-6">

          {/* Wordmark */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-full border-2 border-[#1B4B43] flex items-center justify-center">
              <span className="font-serif text-[#1B4B43] text-lg leading-none" style={{ fontFamily: "'Fraunces', serif" }}>
                MT
              </span>
            </div>
            <div className="leading-tight">
              <h1
                className="text-[#1B4B43] text-xl font-semibold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Maa Tara
              </h1>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#6B8F87] font-medium">
                Aya &amp; Nurses Centre
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1F2A28]/80 hover:text-[#1B4B43] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">

            {/* Signature: 24x7 availability chip */}
            <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#1B4B43]/15 bg-white px-3 py-1.5 text-xs font-medium text-[#1B4B43]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0862E] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E0862E]"></span>
              </span>
              Available 24×7
            </span>

            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden md:inline-flex items-center gap-2 bg-[#E0862E] hover:bg-[#c8721f] text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-10 h-10 rounded-md border border-[#1B4B43]/15 flex items-center justify-center text-[#1B4B43]"
              aria-label="Toggle menu"
            >
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FBF7F0] border-b border-[#1B4B43]/10 overflow-hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="px-5 py-3.5 border-t border-[#1B4B43]/8 text-[#1F2A28] text-sm font-medium hover:bg-[#1B4B43]/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="p-4 border-t border-[#1B4B43]/8 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0862E] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E0862E]"></span>
                </span>
                <span className="text-xs text-[#1B4B43] font-medium">Available 24×7</span>
              </div>
              <a
                href={`tel:${PHONE_TEL}`}
                className="m-4 mt-0 bg-[#E0862E] text-white text-center py-3 rounded-md font-semibold flex items-center justify-center gap-2"
              >
                <Phone size={16} />
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