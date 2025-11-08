import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function App() {
  useEffect(() => {
    let scrollInstance
    const init = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      scrollInstance = new LocomotiveScroll({
        el: document.querySelector('#smooth-wrapper'),
        smooth: true,
        multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true }
      })
    }
    init()
    return () => {
      if (scrollInstance) scrollInstance.destroy()
    }
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll('[data-scroll-to]')
    const handler = (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute('href')
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    links.forEach((l) => l.addEventListener('click', handler))
    return () => links.forEach((l) => l.removeEventListener('click', handler))
  }, [])

  return (
    <div id="smooth-wrapper" data-scroll-container>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Muhammad Zili</footer>
      </main>
    </div>
  )
}
