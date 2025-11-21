import { HelpCircle, UserPlus, Lock, Trophy } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Do I need an account?",
      a: "Yes, just sign up or log in so your scores and leagues can be saved.",
      icon: UserPlus,
    },
    {
      q: "Can I make my own league?",
      a: "Yes! You can create your own league, choose the matches, set the points, and invite your friends.",
      icon: Trophy,
    },
    {
      q: "Are predictions locked?",
      a: "To ensure fairness, predictions are strictly locked the moment kickoff occurs.",
      icon: Lock,
    },
  ];

  return (
    <section className="relative border-t border-white/10">
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">FAQs</h2>
          <p className="mt-3 text-emerald-100/90">Everything is designed to be easy and social. Here are quick answers.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {faqs.map(({ q, a, icon: Icon }) => (
            <div key={q} className="rounded-xl border border-emerald-400/20 bg-emerald-500/5 p-5">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <Icon className="h-5 w-5" />
                {q}
              </div>
              <p className="mt-2 text-emerald-100/90">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
