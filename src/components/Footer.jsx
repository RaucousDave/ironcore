// Footer.tsx

import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 font-heading text-zinc-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-zinc-400 mb-4">IronCore</h2>
          <p className="text-zinc-400">
            Forging warriors, one rep at a time. Join the grind. Build the
            mindset. Live the strength.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-zinc-100">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-zinc-100">Contact</h3>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 " /> ironcoregym@email.com
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="400">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} IronCore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
