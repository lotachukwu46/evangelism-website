"use client";
import { cubicBezier, motion } from "framer-motion";
import { ArrowRight, Globe2, HeartHandshake, PlayCircle } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: cubicBezier(0.16, 1, 0.3, 1),
  },
};

const programs = [
  {
    title: "Global Evangelism",
    subtitle: "Spreading the Word",
    desc: "From rural village crusades to urban church planting, we are committed to reaching the unreached.",
    icon: <Globe2 className="text-blue-600" />,
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070",
  },
  {
    title: "Mercy Missions",
    subtitle: "Humanitarian Aid",
    desc: "Providing clean water, medical supplies, and food to regions struck by poverty and disaster.",
    icon: <HeartHandshake className="text-red-500" />,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
  },
];

export default function OutreachPage() {
  return (
    <main className="bg-[#f5f5f7] min-h-screen">
      {/* SECTION 1: EDITORIAL HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
              Love in <span className="text-blue-600">Action.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We don't just speak the Gospel; we live it. Our outreach programs
              are designed to restore both the spirit and the body.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PROGRAMS (Alternating Layout) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {programs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-24`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-600/10 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                <img
                  src={item.img}
                  alt={item.title}
                  className="relative rounded-[2.5rem] shadow-2xl z-10"
                />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-4 rounded-full text-white border border-white/30 hover:scale-110 transition-transform">
                  <PlayCircle
                    size={40}
                    fill="currentColor"
                    className="text-white"
                  />
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <span className="font-bold tracking-widest uppercase text-xs text-slate-400">
                    {item.subtitle}
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900">
                  {item.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {item.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-bold text-blue-600 group"
                >
                  Join a mission trip{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: STORIES OF IMPACT (Horizontal Scroll Vibe) */}
      <section className="py-24 bg-white rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Impact Stories
            </h2>
            <p className="text-slate-500 mt-4">
              Real people. Real transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 md:p-12 bg-[#f5f5f7] rounded-[3rem] flex flex-col justify-between h-[500px] relative overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
                alt="Story background"
              />
              <div className="relative z-10">
                <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                  Village Outreach
                </span>
                <h3 className="text-3xl font-bold mt-6 mb-4">
                  New Hope for the Northern Tribes
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  "I had lost my livelihood until the ministry team arrived not
                  just with food, but with a new perspective on faith..."
                </p>
              </div>
              <p className="relative z-10 font-bold text-slate-900">
                — Brother Moussa, Outreach Recipient
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 md:p-12 bg-slate-900 text-white rounded-[3rem] flex flex-col justify-between h-[500px]"
            >
              <div>
                <span className="bg-blue-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                  Medical Aid
                </span>
                <h3 className="text-3xl font-bold mt-6 mb-4 text-white">
                  Healing Beyond Medicine
                </h3>
                <p className="text-blue-100/70 leading-relaxed">
                  Last month, we treated over 500 children. But the real miracle
                  was the 12 families who dedicated their homes to prayer.
                </p>
              </div>
              <p className="font-bold text-blue-400">
                — Dr. Sarah L., Mission Volunteer
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION (Subtle) */}
      <section className="py-24 px-6 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8 italic text-slate-400">
            "The harvest is plentiful, but the workers are few."
          </h2>
          <Link
            href="/contact"
            className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-2xl"
          >
            Partner With Our Missions
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
