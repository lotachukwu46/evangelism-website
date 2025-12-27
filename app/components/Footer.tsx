"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  MessageCircle,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const navColumns = {
  Organization: [
    { name: "Our Story", href: "/about" },
    { name: "Mission & Vision", href: "/about" },
    { name: "Leadership", href: "/about" },
  ],
  Impact: [
    { name: "Evangelism", href: "/evangelism" },
    { name: "Humanitarian", href: "/projects" },
    { name: "Testimonies", href: "/testimonies" },
  ],
  Support: [
    { name: "Donate Now", href: "/donate" },
    { name: "Volunteer", href: "/contact" },
    { name: "Prayer", href: "/contact" },
  ],
};

const socials = [
  { name: "Facebook", icon: Facebook, color: "#1877F2", href: "#" },
  { name: "WhatsApp", icon: MessageCircle, color: "#25D366", href: "#" },
  { name: "YouTube", icon: Youtube, color: "#FF0000", href: "#" },
  { name: "Instagram", icon: Instagram, color: "#E4405F", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/"
                className="flex items-center gap-2 mb-6 group w-fit"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:rotate-6">
                  M
                </div>
                <span className="font-bold text-xl tracking-tight">
                  MISSION<span className="text-blue-600">HOPE</span>
                </span>
              </Link>
              <p className="text-gray-500 text-sm md:text-base max-w-sm mb-8 leading-relaxed">
                "Go into all the world and preach the gospel to all creation."
                Dedicated to spiritual growth and humanitarian relief.
              </p>

              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                      delay: index * 0.1,
                    }}
                    className="group relative w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 transition-colors hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"
                  >
                    <social.icon
                      size={20}
                      className="text-gray-400 transition-colors group-hover:text-[var(--brand-color)]"
                      style={{ "--brand-color": social.color } as any}
                    />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Nav Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:col-span-2 lg:col-span-3">
            {Object.entries(navColumns).map(([title, links], idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex flex-col"
              >
                <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium flex items-center group w-fit"
                      >
                        {link.name}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 text-[11px] md:text-xs text-center md:text-left">
            © {currentYear} Mission Hope.
            <span className="mx-2 hidden md:inline">|</span>
            <br className="md:hidden" />
            Empowering communities with love and faith.
          </p>

          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Supported Payment Methods
            </span>
            <div className="flex gap-3 items-center">
              {/* MTN Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="w-12 h-7 bg-[#FFCC00] rounded-[4px] flex flex-col items-center justify-center shadow-sm cursor-help relative overflow-hidden"
                title="MTN Mobile Money"
              >
                <span className="text-[8px] font-black text-black leading-none">
                  MTN
                </span>
                <div className="absolute bottom-0 w-full h-1 bg-blue-700" />{" "}
                {/* MTN Blue Accent */}
              </motion.div>

              {/* Orange Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="w-12 h-7 bg-[#FF6600] rounded-[4px] flex items-center justify-center shadow-sm cursor-help"
                title="Orange Money"
              >
                <span className="text-[8px] font-black text-white leading-none tracking-tighter">
                  orange
                </span>
              </motion.div>

              {/* Visa Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="w-12 h-7 bg-[#1A1A1A] rounded-[4px] flex flex-col items-center justify-center shadow-sm cursor-help"
                title="Visa / Debit Card"
              >
                <span className="text-[8px] italic font-black text-white leading-none">
                  VISA
                </span>
                <div className="flex gap-0.5 mt-0.5">
                  <div className="w-1 h-1 rounded-full bg-orange-400" />
                  <div className="w-1 h-1 rounded-full bg-red-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
