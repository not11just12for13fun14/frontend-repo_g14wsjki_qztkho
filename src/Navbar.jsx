import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: "Let's Talk" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_60px_-20px_rgba(10,112,78,0.5)]">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#top" className="text-[13px] tracking-widest font-semibold text-[#EAF2EE] uppercase">
              The Design Hub
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-[#B9CDC5] hover:text-white transition-colors text-sm">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="text-sm px-4 py-2 rounded-lg bg-[#0A704E] text-white hover:bg-[#0b845c] transition-colors shadow-[0_0_30px_-10px_#0A704E]">
                Get In Touch
              </a>
            </nav>
            <button className="md:hidden text-white" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#000409]/60 backdrop-blur-xl flex">
          <div className="m-4 flex-1 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <span className="text-white/90">Menu</span>
              <button className="text-white" onClick={() => setOpen(false)} aria-label="Close menu">
                <X />
              </button>
            </div>
            <div className="mt-6 grid gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-4 bg-white/5 border border-white/10 text-white/90">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
