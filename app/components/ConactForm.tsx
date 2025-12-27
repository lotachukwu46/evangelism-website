"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API Call
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-500">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-blue-600 font-bold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
            Full Name
          </label>
          <input
            required
            type="text"
            placeholder="John Doe"
            className="w-full p-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
            Email Address
          </label>
          <input
            required
            type="email"
            placeholder="john@example.com"
            className="w-full p-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
          Subject
        </label>
        <select className="w-full p-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all appearance-none cursor-pointer">
          <option>General Inquiry</option>
          <option>Prayer Request</option>
          <option>Partnership/Volunteering</option>
          <option>Donation Support</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
          Your Message
        </label>
        <textarea
          required
          rows={5}
          placeholder="How can we help you today?"
          className="w-full p-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all resize-none"
        />
      </div>

      <button
        disabled={status === "loading"}
        className="w-full md:w-fit px-12 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send size={18} />
      </button>
    </form>
  );
}
