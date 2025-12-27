"use client";
import { cubicBezier, motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import ProjectCard from "./components/ProjectCard";

// Subtle animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: {
    duration: 0.8,
    ease: cubicBezier(0.16, 1, 0.3, 1),
  },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true },
};

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <HeroSection />

      {/* SECTION 2: THE MISSION PILLARS */}
      <section className="py-24 md:py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-blue-600 font-bold tracking-widest mb-4 uppercase text-xs md:text-sm">
              Our Calling
            </h2>
            <p className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Restoring hope through faith, <br />
              <span className="text-slate-400">one soul at a time.</span>
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
          >
            {[
              {
                icon: "†",
                title: "Evangelism",
                desc: "Sharing the message of Christ through missions, church planting, and community engagement.",
              },
              {
                icon: "♥",
                title: "Compassion",
                desc: "Supporting widows, orphans, and the suffering with essential resources and medical care.",
              },
              {
                icon: "⚓",
                title: "Sustainability",
                desc: "Empowering communities through education and long-term development initiatives.",
              },
            ].map((pillar, i) => (
              <motion.div key={i} variants={fadeInUp} className="group">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <span className="text-blue-600 group-hover:text-white transition-colors text-xl font-bold">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS */}
      <section className="py-20 md:py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="mb-12 md:mb-16 text-center md:text-left"
          >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              Active Missions
            </h3>
            <p className="text-gray-500 text-base md:text-lg mt-2">
              Direct humanitarian aid and spiritual outreach.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <motion.div variants={fadeInUp}>
              <ProjectCard
                title="Village Outreach"
                category="Evangelism"
                description="Bringing the Gospel and clean resources to remote northern regions."
                image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ProjectCard
                title="Medical Support"
                category="Humanitarian"
                description="Providing essential healthcare and supplies to the underprivileged."
                image="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ProjectCard
                title="Education for All"
                category="Youth"
                description="Empowering the next generation with ministry materials."
                image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto bg-black rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-24 text-center text-white overflow-hidden relative"
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Be the change they need.
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12 max-w-lg mx-auto leading-relaxed">
              Your support provides food, medicine, and spiritual guidance to
              thousands.
            </p>
            <Link
              href="/donate"
              className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-xl"
            >
              Donate with Mobile Money
            </Link>
          </div>
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[120%] h-[200%] bg-blue-600/15 blur-[100px] pointer-events-none" />
        </motion.div>
      </section>
    </div>
  );
}
