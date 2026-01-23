import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black text-white cookie-gradient min-h-screen">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center font-bold">C</div>
          <span className="text-xl font-bold tracking-tight">CookieApp</span>
        </div>
        <a href="#download" className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-500 transition">Download</a>
      </nav>

      <header className="max-w-6xl mx-auto px-6 pt-20 pb-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            The sweetest app <br /><span className="text-amber-500">you've ever used.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-lg">
            Manage your recipes, track your treats, and join a community of cookie lovers worldwide. Built with Flutter, designed for speed.
          </p>
          <div className="text-center md:text-left" id="download">
            <p className="text-amber-500 text-xl font-bold">Coming Soon</p>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden relative mx-auto mt-8">
            <Image
              src="/Screenshot.jpg"
              alt="App Screenshot"
              width={256}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-600/20 blur-[100px] -z-10"></div>
        </div>
      </header>

      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
            <p className="text-gray-500">Built with Flutter for smooth 60fps animations and instant loading.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🍪</div>
            <h3 className="text-xl font-bold mb-2">Cookie frenzy</h3>
            <p className="text-gray-500">Enjoy your cookie from anywhere.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-bold mb-2">Cloud Sync</h3>
            <p className="text-gray-500">Your favorite recipes are always backed up and ready to go.</p>
          </div>
        </div>
      </section>

      <footer className="p-12 text-center text-gray-600 border-t border-zinc-900">
        <div className="flex justify-center gap-4">
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
