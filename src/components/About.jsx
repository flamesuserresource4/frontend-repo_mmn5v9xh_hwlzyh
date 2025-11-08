export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m Muhammad Zili, a developer focused on crafting immersive user interfaces with React and modern tooling. I enjoy merging delightful motion, polished visuals, and performance into cohesive experiences. When I’m not coding, I explore new visual languages and experiment with 3D interfaces.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Framer Motion', 'Spline', 'Locomotive Scroll'].map((chip) => (
                <span key={chip} className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">{chip}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <p className="text-gray-600">
                Currently available for freelance projects and collaborations. I love working on tech, portfolio, interactive, playful, and modern themes that push the web forward.
              </p>
              <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-black">Let’s build together</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
