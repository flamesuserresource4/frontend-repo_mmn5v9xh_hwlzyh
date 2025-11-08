import { useEffect, useState } from 'react'
import { Github, Send, Instagram } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Muhammad Zili</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" data-scroll-to className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" data-scroll-to className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" data-scroll-to className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="Github" href="https://github.com/muhammadzili" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="Telegram" href="https://t.me/@mhmdszuli" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5">
              <Send className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href="https://instagram.com/@mhmdzuli" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
