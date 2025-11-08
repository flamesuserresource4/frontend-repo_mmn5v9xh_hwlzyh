export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s connect</h2>
            <p className="mt-4 text-gray-600">Open to freelance, collaborations, or just a friendly chat. Drop a message and I’ll get back soon.</p>
            <div className="mt-6 space-y-3">
              <a className="block" href="https://github.com/muhammadzili" target="_blank" rel="noreferrer"><span className="font-medium">GitHub:</span> github.com/muhammadzili</a>
              <a className="block" href="https://t.me/@mhmdszuli" target="_blank" rel="noreferrer"><span className="font-medium">Telegram:</span> t.me/@mhmdszuli</a>
              <a className="block" href="https://instagram.com/@mhmdzuli" target="_blank" rel="noreferrer"><span className="font-medium">Instagram:</span> instagram.com/@mhmdzuli</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 rounded-3xl blur opacity-20"></div>
            <form onSubmit={(e)=>e.preventDefault()} className="relative bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4">
                <input className="h-11 rounded-lg border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name"/>
                <input type="email" className="h-11 rounded-lg border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email address"/>
                <textarea className="min-h-[120px] rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Message"/>
                <button className="h-11 rounded-lg bg-gray-900 text-white hover:bg-black">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
