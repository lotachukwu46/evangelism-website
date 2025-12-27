"use client";
import { motion } from "framer-motion";
import { BookOpen, Globe, Heart, Quote, Users } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const values = [
  {
    icon: <BookOpen className="text-blue-600" />,
    title: "Faith",
    desc: "Rooted in the unchanging Word of God.",
  },
  {
    icon: <Heart className="text-red-500" />,
    title: "Love",
    desc: "Reflecting Christ's unconditional love to all.",
  },
  {
    icon: <Users className="text-emerald-500" />,
    title: "Service",
    desc: "Dedicated to the physical and spiritual needs of man.",
  },
  {
    icon: <Globe className="text-sky-500" />,
    title: "Compassion",
    desc: "Reaching the unreached in the furthest corners.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* SECTION 1: SCRIPTURAL FOUNDATION HERO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Bible and Light"
        />
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.div {...fadeInUp}>
            <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
              The Foundation
            </span>
            <h1 className="text-3xl md:text-5xl font-serif italic text-white leading-tight">
              "Go into all the world and preach the gospel to all creation."
            </h1>
            <p className="mt-6 text-blue-200 font-medium">— Mark 16:15</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION (Typography Focus) */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div {...fadeInUp}>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
              Our Mission
            </h2>
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              To be the hands and feet of Jesus, providing{" "}
              <span className="text-slate-400">
                spiritual food and physical relief
              </span>{" "}
              to the broken.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
              Our Vision
            </h2>
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              A world where no community is left{" "}
              <span className="text-slate-400">without the Gospel</span> or the
              basic necessities of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: HISTORY (Image + Text) */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070"
              className="rounded-[2.5rem] shadow-2xl shadow-slate-200"
              alt="Ministry History"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Our Story
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded in 2010, Mission Hope began with a single mission trip
                to a remote village. What we saw there changed us forever—a
                hunger for both truth and bread.
              </p>
              <p>
                Over the last decade, we have grown into a global network of
                believers dedicated to sustainable impact, church planting, and
                humanitarian aid.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CORE VALUES (Bento Grid) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Core Values</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: LEADERSHIP MESSAGE */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-t-[3rem] mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Quote className="mx-auto text-blue-500 mb-8 w-12 h-12 opacity-50" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              "We don't just give resources; we give our lives. This ministry is
              built on the belief that love is an action."
            </h2>
            <div className="mt-12">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000"
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-500 object-cover"
                alt="Founder"
              />
              <p className="font-bold text-xl">Dr. Samuel Thompson</p>
              <p className="text-blue-400 font-medium uppercase tracking-widest text-xs">
                Founder & Lead Pastor
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
