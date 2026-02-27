// src/components/dashboard/UpgradeBanner.tsx
export default function UpgradeBanner() {
  return (
    <div className="bg-gradient-to-br from-red-950/80 to-zinc-950 border border-red-900/50 rounded-2xl p-6 shadow-lg shadow-red-950/20">
      <h3 className="text-xl font-bold mb-3 text-red-300">Upgrade to Launch</h3>

      <ul className="space-y-2.5 text-sm text-zinc-300 mb-6">
        <li className="flex items-center gap-2">
          <span className="text-green-500">✔</span> 50GB storage
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✔</span> Priority in discovery
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✔</span> Advanced analytics
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✔</span> Verified badge
        </li>
      </ul>

      <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold text-white transition-all shadow-red-900/40">
        Upgrade Now
      </button>

      <p className="text-xs text-zinc-500 mt-4 text-center">
        Unlock more features and grow faster
      </p>
    </div>
  );
}