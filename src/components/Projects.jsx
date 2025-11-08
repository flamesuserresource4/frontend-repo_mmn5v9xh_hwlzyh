export default function Projects() {
  const items = [
    {
      title: 'Interactive 3D Landing',
      desc: 'Hero sections powered by Spline and smooth scrolling.',
      url: 'https://github.com/muhammadzili'
    },
    {
      title: 'Motion UI System',
      desc: 'Framer Motion powered components with accessibility baked-in.',
      url: 'https://github.com/muhammadzili'
    },
    {
      title: 'Playful Micro‑interactions',
      desc: 'Small, joyful moments that enrich everyday apps.',
      url: 'https://github.com/muhammadzili'
    }
  ]

  return (
    <section id="projects" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
          <a href="https://github.com/muhammadzili" target="_blank" rel="noreferrer" className="text-sm text-indigo-600 hover:text-indigo-700">View all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <a key={p.title} href={p.url} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-fuchsia-500/0 to-cyan-500/0 group-hover:from-indigo-500/10 group-hover:via-fuchsia-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-colors"></div>
              <div className="relative">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.desc}</p>
                <span className="mt-4 inline-block text-indigo-600 group-hover:translate-x-1 transition-transform">Explore →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
