"use client";
import { motion } from "framer-motion";
import { Globe, Heart, ShieldCheck } from "lucide-react";
import DonationForm from "../components/DonationForm";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* LEFT SIDE: THE IMPACT (Visible on Desktop) */}
      <section className="relative lg:w-1/2 w-full h-[40vh] lg:h-screen bg-slate-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
          alt="Impact"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r" />

        <div className="relative z-10 h-full flex flex-col justify-end lg:justify-center p-8 md:p-16 lg:p-24 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              Secure Donation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
              Your seed changes <br />
              <span className="text-blue-400 italic">everything.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-md mb-12 hidden md:block">
              100% of your donation goes directly to the field. We provide food,
              medical aid, and spiritual guidance to those who need it most.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-12 hidden md:grid">
              <div>
                <Heart className="text-blue-400 mb-2" size={24} />
                <p className="text-xs font-bold uppercase">Compassion</p>
              </div>
              <div>
                <Globe className="text-blue-400 mb-2" size={24} />
                <p className="text-xs font-bold uppercase">Reach</p>
              </div>
              <div>
                <ShieldCheck className="text-blue-400 mb-2" size={24} />
                <p className="text-xs font-bold uppercase">Secure</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RIGHT SIDE: THE FORM (The "Configuration" Panel) */}
      <section className="lg:w-1/2 w-full flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#f5f5f7]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-xl"
        >
          <DonationForm />
        </motion.div>
      </section>
    </main>
  );
}
