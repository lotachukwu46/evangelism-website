"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import ContactForm from "../components/ConactForm";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const contactMethods = [
  {
    icon: <Phone className="text-blue-600" />,
    title: "Phone & Mobile Money",
    details: ["MTN: +237 6XX XXX XXX", "Orange: +237 6XX XXX XXX"],
    color: "bg-blue-50",
  },
  {
    icon: <Mail className="text-emerald-600" />,
    title: "Email Support",
    details: ["info@missionhope.org", "missions@missionhope.org"],
    color: "bg-emerald-50",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* SECTION 1: HERO IMAGE & OVERLAY */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-end bg-slate-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Contact Support"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <motion.div {...fadeInUp}>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">
              Reach Out
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900">
              Contact <span className="text-slate-500/50 italic">Us.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE INTERACTIVE GRID */}
      <section className="pb-24 px-6 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: INFO STACK */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="p-8 bg-[#f5f5f7] rounded-[2.5rem]"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-red-500" /> Our Office
              </h3>
              <p className="text-slate-600 leading-relaxed">
                123 Ministry Way, <br />
                Douala, Littoral Region, <br />
                Cameroon
              </p>
              <button className="mt-6 text-blue-600 text-sm font-bold flex items-center gap-1 group">
                Get Directions{" "}
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </motion.div>

            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-[2rem] border border-slate-100 bg-white shadow-sm"
                >
                  <div
                    className={`w-12 h-12 ${method.color} rounded-2xl flex items-center justify-center shrink-0`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {method.title}
                    </h4>
                    {method.details.map((line, idx) => (
                      <p key={idx} className="text-slate-500 text-xs">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SOCIALS - GLASS DESIGN */}
            <motion.div
              {...fadeInUp}
              className="p-8 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative group"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-6">Social Channels</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      icon: <MessageCircle size={18} />,
                      color: "bg-emerald-500",
                    },
                    { icon: <Facebook size={18} />, color: "bg-blue-600" },
                    { icon: <Instagram size={18} />, color: "bg-pink-600" },
                    { icon: <Youtube size={18} />, color: "bg-red-600" },
                  ].map((social, idx) => (
                    <button
                      key={idx}
                      className={`w-10 h-10 rounded-full ${social.color} flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <MessageCircle size={120} />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: THE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white p-6 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-100 border border-slate-50"
          >
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How can we help?
              </h2>
              <p className="text-slate-500 max-w-md">
                Send a message and our team will get back to you within 24
                hours.
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
