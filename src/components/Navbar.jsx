// Navbar.tsx

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between px-6 py-4"
      >
        {/* Logo */}
        <h1 className="text-xl font-bold font-heading tracking-wide text-white">
          IRONCORE
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-heading font-medium">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer transition"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-900/90 flex flex-col items-center gap-6 py-6 font-heading font-medium text-white"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className=" transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
