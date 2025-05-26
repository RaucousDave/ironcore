// ContactSection.tsx

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-zinc-100 text-neutral-900 font-heading py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold  mb-6">Let's Connect</h2>
          <p className="mb-8 ">
            Got questions? Ready to start your transformation? Reach out — we're
            here to help you make the first move.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-neutral-900" />
              <span>ironcoregym@email.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-neutral-900s" />
              <span>+234 810 123 4567</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-neutral-900s" />
              <span>123 Forge Street, Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-zinc-200 p-8 rounded-xl space-y-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-zinc-400 text-white placeholder-neutral-900 focus:outline-none "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-zinc-400 text-white placeholder-neutral-900 focus:outline-none "
            />
          </div>

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded bg-zinc-400 text-white placeholder-neutral-900 focus:outline-none "
          ></textarea>

          <button
            type="submit"
            className="bg-neutral-900 transition px-6 py-3 rounded text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
