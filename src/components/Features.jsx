import { ShieldCheck, Lock, Users, Globe2, LineChart, Crown, Key, Settings2 } from "lucide-react";

export default function Features() {
  return (
    <section className="relative border-t border-white/10">
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why play with us?</h2>
          <p className="mt-3 text-emerald-100/90">Everything you need to run fun, fair, and competitive prediction games.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* A. Custom Private Leagues */}
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-6">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold"><Crown className="h-5 w-5"/> Custom Private Leagues</div>
            <ul className="mt-4 space-y-2 text-emerald-100/90">
              <li className="flex gap-2 items-start"><Users className="h-5 w-5 mt-0.5 text-emerald-300"/>Users can become "League Hosts".</li>
              <li className="flex gap-2 items-start"><Settings2 className="h-5 w-5 mt-0.5 text-emerald-300"/>Create competitions with Custom Rules for points: Correct Winner vs Exact Score.</li>
              <li className="flex gap-2 items-start"><ShieldCheck className="h-5 w-5 mt-0.5 text-emerald-300"/>Restrict to specific teams or competitions (e.g., Man Utd only, or Premier League only).</li>
              <li className="flex gap-2 items-start"><Key className="h-5 w-5 mt-0.5 text-emerald-300"/>Invite-Only option with a unique access code.</li>
            </ul>
          </div>

          {/* B. Global Challenges */}
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-6">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold"><Globe2 className="h-5 w-5"/> Global Challenges</div>
            <ul className="mt-4 space-y-2 text-emerald-100/90">
              <li className="flex gap-2 items-start"><Crown className="h-5 w-5 mt-0.5 text-emerald-300"/>Join official public leagues managed by GoalGuess.</li>
              <li className="flex gap-2 items-start"><Globe2 className="h-5 w-5 mt-0.5 text-emerald-300"/>Covers major tournaments (World Cup, Champions League).</li>
              <li className="flex gap-2 items-start"><Users className="h-5 w-5 mt-0.5 text-emerald-300"/>Open to the entire user base.</li>
            </ul>
          </div>

          {/* C. Fair & Real-Time Competition */}
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-6">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold"><Lock className="h-5 w-5"/> Fair & Real-Time Competition</div>
            <ul className="mt-4 space-y-2 text-emerald-100/90">
              <li className="flex gap-2 items-start"><Settings2 className="h-5 w-5 mt-0.5 text-emerald-300"/>Predictions can be modified an unlimited number of times.</li>
              <li className="flex gap-2 items-start"><Lock className="h-5 w-5 mt-0.5 text-emerald-300"/>Predictions are locked the moment kickoff occurs — fairness guaranteed.</li>
              <li className="flex gap-2 items-start"><LineChart className="h-5 w-5 mt-0.5 text-emerald-300"/>Live Leaderboards show rankings in real-time.</li>
              <li className="flex gap-2 items-start"><Users className="h-5 w-5 mt-0.5 text-emerald-300"/>Instantly compare total points and rank with friends.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
