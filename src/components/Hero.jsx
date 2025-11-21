import { Trophy, Users, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-200 text-xs mb-4">
              <Sparkles className="h-4 w-4" />
              Make every match matter
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              GoalGuess makes football more exciting
            </h1>
            <p className="mt-4 text-lg md:text-xl text-emerald-100/90">
              Set up fun prediction games with your own group and turn every kickoff into friendly competition.
            </p>

            <ul className="mt-6 space-y-2 text-emerald-100/90">
              <li className="flex items-start gap-2"><Trophy className="mt-0.5 h-5 w-5 text-emerald-300"/><span>Predict exact scores and compete in leagues for bragging rights.</span></li>
              <li className="flex items-start gap-2"><Users className="mt-0.5 h-5 w-5 text-emerald-300"/><span>Play with friends, classmates, or coworkers — you pick the stakes.</span></li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#signup" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition">Start Your League Now</a>
              <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-emerald-400/30 bg-white/5 px-5 py-3 font-semibold text-emerald-100 hover:bg-white/10 transition">How it works</a>
            </div>

            <p className="mt-3 text-sm text-emerald-200/70">Authentication is required to save progress.</p>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-tr from-emerald-600/30 to-teal-400/30 border border-emerald-400/30 p-1">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -left-6 rotate-[-6deg] rounded-xl bg-slate-900/80 border border-emerald-400/30 p-4 shadow-xl backdrop-blur">
              <div className="text-sm text-emerald-100">
                Home [2] - Away [1]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
