import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute -inset-40 bg-[radial-gradient(80%_60%_at_20%_30%,rgba(10,112,78,0.35),transparent),radial-gradient(60%_50%_at_90%_60%,rgba(250,119,17,0.35),transparent)] blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(100%_100%_at_0%_0%, rgba(10,112,78,0.25), transparent)',
              'radial-gradient(100%_100%_at_100%_0%, rgba(250,119,17,0.25), transparent)',
              'radial-gradient(100%_100%_at_0%_100%, rgba(10,112,78,0.25), transparent)'
            ]
          }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#6F9D80] tracking-widest text-xs uppercase mb-4">Turning Ideas Into Results</p>
          <h1 className="text-[#EAF2EE] text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight">
            The Design Hub
          </h1>
          <p className="mt-6 text-[#B9CDC5] max-w-xl">
            We fuse consulting-grade clarity with artistic craftsmanship to build brands, presentations, and visuals that move people and metrics.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-xl bg-[#0A704E] text-white shadow-[0_0_40px_-15px_#0A704E] hover:bg-[#0b845c] transition-colors">See Our Work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors">Get In Touch</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_0_100px_-30px_rgba(243,69,8,0.5)]">
            <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop" alt="Futuristic placeholder" className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-tr from-[#FA7711] to-[#0A704E] blur-2xl opacity-40" />
        </div>
      </div>
    </section>
  )
}
