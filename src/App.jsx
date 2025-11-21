import Hero from './components/Hero'
import CoreMechanics from './components/CoreMechanics'
import Features from './components/Features'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-50">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-emerald-500 to-teal-400" />
            <span className="font-semibold tracking-tight">GoalGuess</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-emerald-100/80">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#login" className="rounded-lg border border-emerald-400/30 px-3 py-1.5 text-sm hover:bg-white/10">Log In</a>
            <a href="#signup" className="rounded-lg bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-slate-900 hover:bg-emerald-400">Sign Up</a>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <div id="features"><Features /></div>
        <div id="faq"><FAQ /></div>
        <div id="how"><CoreMechanics /></div>

        {/* Final CTA */}
        <section className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-emerald-500/5">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to compete?</h3>
            <p className="mt-3 text-emerald-100/90">Sign up to save your progress and start your own league today.</p>
            <div className="mt-6 flex justify-center gap-3">
              <a href="#signup" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition">Sign Up</a>
              <a href="#login" className="inline-flex items-center justify-center rounded-lg border border-emerald-400/30 bg-white/5 px-5 py-3 font-semibold text-emerald-100 hover:bg-white/10 transition">Log In</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-emerald-100/70">
          © {new Date().getFullYear()} GoalGuess — Built for friendly football rivalries.
        </div>
      </footer>
    </div>
  )
}

export default App
