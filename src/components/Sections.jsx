import { motion } from 'framer-motion'

const Section = ({ id, title, children, description }) => (
  <section id={id} className="relative py-24">
    <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#EAF2EE]">{title}</h2>
        {description && <p className="mt-3 text-[#B9CDC5] max-w-2xl">{description}</p>}
      </div>
      {children}
    </div>
  </section>
)

export function WorkSection() {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: `Case Study ${i + 1}`,
    image: `https://picsum.photos/seed/tdh-${i}/1200/800`,
  }))

  return (
    <Section id="work" title="Selected Work" description="Case studies displayed in smooth auto-scroll cards with hover depth and motion.">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 min-w-max">
          {items.map((item) => (
            <motion.a
              key={item.id}
              href="#"
              whileHover={{ y: -6, scale: 1.02 }}
              className="group w-[320px] shrink-0"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_20px_80px_-30px_rgba(0,0,0,0.6)]">
                <img src={item.image} alt="Case" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-3 text-[#EAF2EE]">{item.title}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function ServicesSection() {
  const services = [
    { title: 'Presentation Design', desc: 'Investor decks, keynotes, and narratives that win.' },
    { title: 'Brand Systems', desc: 'Identity, guidelines, and scalable design ops.' },
    { title: 'Storytelling', desc: 'Messaging architecture that drives decisions.' },
  ]
  return (
    <Section id="services" title="Services" description="Interactive glassmorphic cards that open on scroll reveal.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: i * 0.05 }}
            className="rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl text-[#EAF2EE] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
          >
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-[#B9CDC5]">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function ProcessSection() {
  const steps = [
    'Discover & Align',
    'Design & Prototype',
    'Iterate & Validate',
    'Deliver & Scale',
  ]
  return (
    <Section id="process" title="Process" description="Animated four-step process with glowing numbered connectors.">
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 text-[#EAF2EE]">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#FA7711] to-[#0A704E] text-black font-bold">
                {i + 1}
              </span>
              <span className="font-medium">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute right-[-18px] top-1/2 -translate-y-1/2 w-9 h-[2px] bg-gradient-to-r from-[#FA7711] to-[#0A704E]" />
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export function TestimonialsSection() {
  const quotes = [
    'They elevated our story and closed our round.',
    'The most organized and creative design partner we’ve worked with.',
    'Deck went from okay to award-worthy in a week.',
  ]
  return (
    <Section id="testimonials" title="Testimonials" description="Minimal quote carousel with smooth auto-rotation and subtle glow.">
      <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-[#EAF2EE]">
        <motion.div
          key={0}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl"
        >
          “{quotes[0]}”
        </motion.div>
        <div className="mt-6 text-[#B9CDC5] text-sm">Auto-rotating placeholder</div>
      </div>
    </Section>
  )
}

export function ContactSection() {
  return (
    <Section id="contact" title="Contact" description="Glassmorphic CTA panel with form and soft neon glow.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-[#EAF2EE]">
          <div className="text-lg font-medium">Let’s Talk</div>
          <p className="mt-2 text-[#B9CDC5]">Tell us about your project and timeline.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-white/10 bg-white/5 p-6 grid gap-4">
          <input placeholder="Name" className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40" />
          <input placeholder="Email" className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40" />
          <textarea placeholder="Project details" rows={4} className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40" />
          <button className="justify-self-start px-5 py-3 rounded-xl bg-[#0A704E] text-white shadow-[0_0_40px_-15px_#0A704E] hover:bg-[#0b845c] transition-colors">Send</button>
        </form>
      </div>
    </Section>
  )
}
