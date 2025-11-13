import Navbar from './Navbar'
import Hero from './components/Hero'
import { WorkSection, ServicesSection, ProcessSection, TestimonialsSection, ContactSection } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#000409]" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
      <Navbar />
      <main className="pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[#B9CDC5] text-xs uppercase tracking-widest">Creator — Imaginative, Transformative, Visionary</div>
        </div>
        <Hero />
        <WorkSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 mt-20">
        <div className="mx-auto max-w-7xl px-6 py-10 text-[#B9CDC5] text-sm flex items-center justify-between">
          <div>© {new Date().getFullYear()} The Design Hub — All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
