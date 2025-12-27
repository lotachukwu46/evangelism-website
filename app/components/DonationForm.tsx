"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle, CreditCard, Smartphone } from "lucide-react";
import { useState } from "react";

const paymentMethods = [
  {
    id: "mtn",
    name: "MTN MoMo",
    color: "bg-[#FFCC00]",
    icon: <Smartphone className="text-black" />,
    desc: "Direct to: +237 6XX XXX XXX",
  },
  {
    id: "orange",
    name: "Orange Money",
    color: "bg-[#FF6600]",
    icon: <Smartphone className="text-white" />,
    desc: "Direct to: +237 6XX XXX XXX",
  },
  {
    id: "card",
    name: "Debit/Credit Card",
    color: "bg-slate-900",
    icon: <CreditCard className="text-white" />,
    desc: "Secure Online Payment",
  },
];

export default function DonationForm() {
  const [selectedMethod, setSelectedMethod] = useState("mtn");
  const [amount, setAmount] = useState<number | string>(10000);
  const [isRecurring, setIsRecurring] = useState(false);
  const [step, setStep] = useState(1);

  const handleComplete = () => setStep(2);

  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Toggle: One-time vs Monthly */}
            <div className="flex p-1 bg-slate-100 rounded-full w-fit mx-auto">
              <button
                onClick={() => setIsRecurring(false)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  !isRecurring
                    ? "bg-white shadow-sm text-black"
                    : "text-slate-500"
                }`}
              >
                One-time
              </button>
              <button
                onClick={() => setIsRecurring(true)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  isRecurring
                    ? "bg-white shadow-sm text-black"
                    : "text-slate-500"
                }`}
              >
                Monthly Offering
              </button>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 block text-center">
                Select Amount (XAF)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[5000, 10000, 25000].map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`py-4 rounded-2xl font-bold transition-all ${
                      amount === val
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {val.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Custom Amount"
                className="w-full mt-4 p-4 bg-slate-50 border-none rounded-2xl text-center font-bold focus:ring-2 focus:ring-blue-600 outline-none"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            {/* Payment Methods */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 block text-center">
                Payment Method
              </label>
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                    selectedMethod === method.id
                      ? "border-blue-600 bg-blue-50/50"
                      : "border-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${method.color} flex items-center justify-center shadow-md`}
                    >
                      {method.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm text-slate-900">
                        {method.name}
                      </p>
                      <p className="text-[10px] text-slate-500">
                        {method.desc}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedMethod === method.id
                        ? "border-blue-600"
                        : "border-slate-200"
                    }`}
                  >
                    {selectedMethod === method.id && (
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleComplete}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2 group"
            >
              Confirm {amount.toLocaleString()} XAF{" "}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-bold mb-4">God bless you!</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Your donation of{" "}
              <span className="text-slate-900 font-bold">{amount} XAF</span> has
              been processed. A confirmation receipt has been sent to your
              email.
            </p>
            <button
              onClick={() => setStep(1)}
              className="px-8 py-3 bg-slate-100 rounded-full font-bold text-sm hover:bg-slate-200 transition-all"
            >
              Make another donation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
