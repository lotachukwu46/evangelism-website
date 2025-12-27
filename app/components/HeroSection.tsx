import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="Outreach background"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        {/* Apple-style gradient: Darker at the bottom for text pop, subtle at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="inline-block animate-fade-in-up">
          <span className="bg-blue-600/20 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 inline-block">
            Impact Worldwide
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] animate-fade-in-up delay-100">
          Changing Lives Through <br />
          <span className="text-blue-400 font-extrabold italic">
            Faith & Compassion.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Join our mission to spread the Gospel and provide essential
          humanitarian aid to communities in need across the globe.
        </p>

        {/* 3. Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <Link
            href="/donate"
            className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all active:scale-95 shadow-2xl"
          >
            Support the Mission
          </Link>
          <Link
            href="/evangelism"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            See Our Work
          </Link>
        </div>
      </div>

      {/* 4. Scroll Indicator (The "Apple" detail) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
