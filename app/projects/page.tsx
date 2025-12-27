"use client";
import { cubicBezier, motion } from "framer-motion";
import { Heart, Home, Plus, Syringe, Users } from "lucide-react";
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

const projects = [
  {
    title: "Daily Bread Program",
    category: "Feeding",
    icon: <Heart size={18} />,
    description:
      "Providing nutrient-dense meals to 500+ children in the northern plains.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000",
    color: "bg-orange-500",
  },
  {
    title: "Maternal Health Initiative",
    category: "Medical",
    icon: <Syringe size={18} />,
    description:
      "Essential prenatal care and safe delivery kits for remote villages.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000",
    color: "bg-blue-500",
  },
  {
    title: "Widows' Hope Center",
    category: "Support",
    icon: <Users size={18} />,
    description:
      "Vocational training and spiritual community for women in transition.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000",
    color: "bg-emerald-500",
  },
  {
    title: "Frontier Church Planting",
    category: "Evangelism",
    icon: <Home size={18} />,
    description:
      "Establishing light-stations in regions with zero Gospel presence.",
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1000",
    color: "bg-purple-500",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* SECTION 1: HEADER */}
      <section className="pt-32 pb-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp}>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
              Ongoing Causes
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mt-4 mb-6">
              Invest in <span className="text-slate-400">Eternal Impact.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Every project is a direct response to a specific prayer. Choose a
              cause and help us bring the solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE PROJECT GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              {/* Image Layer */}
              <img
                src={project.image}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content Layer */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg ${project.color}`}>
                    {project.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-8 max-w-md line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/donate"
                    className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2"
                  >
                    Donate to Cause <Plus size={16} />
                  </Link>
                  <button className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium backdrop-blur-md hover:bg-white/10 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: NEED-BASED FOCUS (Bento Style) */}
      <section className="py-24 px-6 bg-slate-900 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              {...fadeInUp}
              className="lg:col-span-2 p-12 bg-blue-600 rounded-[3rem] text-white flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Urgent: Northern Drought Relief
                </h2>
                <p className="text-blue-100 text-lg max-w-md">
                  The dry season has hit harder than usual. We need to deploy 10
                  water tankers to the border regions immediately.
                </p>
              </div>
              <Link
                href="/donate"
                className="w-fit bg-white text-blue-600 px-8 py-4 rounded-full font-bold"
              >
                Deploy Aid Now
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="p-12 bg-slate-800 rounded-[3rem] text-white flex flex-col justify-between border border-slate-700"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-emerald-400">
                  Widows' Support
                </h3>
                <p className="text-slate-400">Current Goal: $5,000</p>
                <div className="w-full bg-slate-700 h-1.5 rounded-full mt-6">
                  <div className="bg-emerald-400 w-3/4 h-full rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                </div>
              </div>
              <p className="text-sm text-slate-500 italic">
                "Pure and undefiled religion before God..." — James 1:27
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
