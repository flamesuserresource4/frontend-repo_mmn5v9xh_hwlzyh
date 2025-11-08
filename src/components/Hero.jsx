import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold mb-4">Tech • Portfolio • Interactive</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500">
            Muhammad Zili
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Front‑end developer crafting playful, modern web experiences. I blend 3D interactions, crisp typography, and buttery‑smooth motion into clean, accessible products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 hover:border-gray-400 bg-white/70 backdrop-blur-md text-gray-800 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
