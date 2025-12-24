import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SponsorshipPage() {
  const sponsors = [
    { name: "LIC", image: "/nsponsor/LIC.png" },
    { name: "Aria", image: "/nsponsor/aria.jpg" },
    { name: "Herody App", image: "/nsponsor/herody.png" },
    { name: "GDX", image: "/sponsors/GDX.png" },
    { name: "StudCops", image: "/sponsors/StudCops.png" },
    { name: "ReduceIT", image: "/nsponsor/reduceit.jpg" },
    { name: "BCH", image: "/sponsors/bch.png" },
    { name: "Nescafe", image: "/sponsors/nescafe.jpg" },
    { name: "StartupNews.fyi", image: "/nsponsor/startupnews.png" },
    { name: "Meta", image: "/nsponsor/LIC.png" },
    { name: "Google", image: "/nsponsor/aria.jpg" },
    { name: "Microsoft", image: "/nsponsor/herody.png" },
  ];

  const marqueeSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

  return (
    <main className="relative min-h-screen w-full text-white font-sans selection:bg-[#B52D2D] selection:text-white overflow-x-hidden">

      {/* GLOBAL BACKGROUND - FIXED */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full opacity-60"
          style={{
            // Slightly increased blue intensity (approx 7% more)
            background: "linear-gradient(135deg, #000000 0%, #050525 45%, #000000 65%, #B52D2D 100%)",
            backgroundSize: "400% 400%",
            animation: "gradientMove 15s ease infinite alternate"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* 
        HERO SECTION 
      */}
      <section className="relative h-screen flex flex-col z-10">

        {/* Header */}
        <header className="flex justify-between items-center px-8 py-6 md:px-16 md:py-8 z-50">
          <div className="text-3xl font-black tracking-tighter text-[#E62B1E]">
            TED
          </div>

          <button className="group flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-sm font-medium tracking-wide backdrop-blur-sm">
            TICKETS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </header>

        {/* Hero Content - Reverted to Centered/Left Layout without Spline */}
        <div className="flex-grow flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto w-full pb-32">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center mb-8"
          >
            <h2 className="text-lg md:text-xl font-medium tracking-[0.2em] text-white/80 uppercase">
              MEET OUR SPONSORS
            </h2>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-[1.2]"
            >
              Bigger <span className="text-[#B52D2D]">Goals</span>,<br />
              Better Together.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-white/60 text-sm md:text-base max-w-md leading-relaxed"
            >
              Empowering individuals and teams at the world's leading organizations. We build the future, one partnership at a time.
            </motion.p>
          </div>
        </div>

        {/* Bottom Ribbon (Marquee) */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-black/30 backdrop-blur-sm border-t border-white/5 flex items-center overflow-hidden z-20">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex overflow-hidden w-full">
            <motion.div
              className="flex items-center gap-16 px-8 whitespace-nowrap"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
              {marqueeSponsors.map((sponsor, idx) => (
                <div key={idx} className="flex items-center gap-4 group opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <div className="relative w-8 h-8 shrink-0">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <span className="text-lg font-bold text-white tracking-wide">{sponsor.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        SPONSOR GRID SECTION 
      */}
      <section className="relative px-8 py-32 md:px-16 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <p className="text-white/40 text-lg mb-4">Trusted by the best</p>
            <h3 className="text-3xl md:text-5xl font-bold">Our Esteemed Partners</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer aspect-[4/3]"
              >
                <div className="relative w-full h-full p-4">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-white/50">
                  {sponsor.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
