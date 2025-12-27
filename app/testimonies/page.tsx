"use client";
import { cubicBezier, motion } from "framer-motion";
import { ArrowRight, MessageCircle, Quote, Star } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    duration: 0.8,
    ease: cubicBezier(0.16, 1, 0.3, 1),
  },
};

const stories = [
  {
    name: "Sister Mariam",
    role: "Beneficiary",
    story:
      "I had lost everything in the flood. The ministry didn't just bring rice; they brought a sense of family and a reason to pray again.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800",
    impact: "Restored Livelihood",
  },
  {
    name: "John & Sarah",
    role: "Village Outreach",
    story:
      "Our village had no clean water for years. When the well was dedicated, we realized the Gospel flows through actions first.",
    image:
      "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&q=80&w=800",
    impact: "Community Health",
  },
  {
    name: "Dr. Elena G.",
    role: "Medical Volunteer",
    story:
      "Serving here changed my practice. You see miracles in the operating room and in the prayer circles outside it.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    impact: "Medical Impact",
  },
];

export default function TestimoniesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* SECTION 1: HEADER - Enhanced Mobile Typography */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Stories of <span className="text-blue-600 italic">Grace.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-500 leading-relaxed px-4">
              Real lives, real change. These are the voices of those touched by
              your generosity and God's love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TRANSFORMATION SPOTLIGHT - Mobile Optimized Flex */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 p-8 md:p-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/3] md:aspect-square lg:aspect-auto">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                  className="rounded-[2rem] md:rounded-[3rem] w-full h-full object-cover shadow-2xl"
                  alt="Transformation Story"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl">
                  <Quote size={32} className="text-white opacity-80" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-left"
            >
              <span className="text-blue-400 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 block">
                Featured Transformation
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                "I was blind to hope, but now I see a future for my children."
              </h2>
              <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-8">
                Moussa was a charcoal burner struggling to feed five children.
                Today, through the Sustainability Project, he runs a community
                shop and leads a local prayer group.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 w-fit">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                  M
                </div>
                <div>
                  <p className="font-bold text-sm md:text-base">
                    Moussa Abraham
                  </p>
                  <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">
                    North Village Beneficiary
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
        </div>
      </section>

      {/* SECTION 3: TESTIMONY GRID - Responsive Fix */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 md:p-8 bg-[#f5f5f7] rounded-[2rem] md:rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={story.image}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover shadow-md"
                      alt={story.name}
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">
                        {story.name}
                      </h4>
                      <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                        {story.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed italic mb-6 text-sm md:text-base">
                    "{story.story}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">
                    {story.impact}
                  </span>
                  <div className="flex gap-0.5 text-blue-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION - Mobile Bento Style */}
      <section className="py-16 md:py-24 px-6">
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center bg-blue-50 rounded-[2.5rem] p-8 md:p-16 border border-blue-100"
        >
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-200">
            <MessageCircle size={24} />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-900">
            Be Part of the Next Story
          </h2>
          <p className="text-slate-500 mb-10 text-sm md:text-lg max-w-lg mx-auto">
            Your partnership is what makes these miracles possible. Every
            donation is a seed planted in fertile ground.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
              Submit Your Story <ArrowRight size={16} />
            </button>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
              Partner with Us
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
