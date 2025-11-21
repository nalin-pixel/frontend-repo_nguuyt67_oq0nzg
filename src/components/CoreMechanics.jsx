import { CheckCircle2, HandCoins, Ban, ListOrdered } from "lucide-react";

export default function CoreMechanics() {
  const items = [
    { icon: ListOrdered, text: "We provide the perfect playground for social competition." },
    { icon: CheckCircle2, text: "Focuses exclusively on match score predictions (Home [X] - Away [Y])." },
    { icon: Ban, text: "No squad management or transfer market." },
    { icon: HandCoins, text: "The stakes (coffee, pizza, money leagues) are completely up to the players." },
  ];

  return (
    <section id="how" className="relative border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What is GoalGuess?</h2>
          <p className="mt-3 text-emerald-100/90">A dedicated space for friendly football predictions — simple, social, and built for bragging rights.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-500/5 p-4">
              <Icon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
              <p className="text-emerald-100/90">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
