// src/components/dashboard/UserCard.tsx
interface UserCardProps {
  name: string;
  role: string;
  match: string;
  genre: string;
  plan: 'Ignite' | 'Launch' | 'Excel';
  imageBg: string; // e.g. "from-red-500 to-pink-600"
}

export default function UserCard({
  name,
  role,
  match,
  genre,
  plan,
  imageBg,
}: UserCardProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all group">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className={`w-14 h-14 rounded-full bg-gradient-to-br ${imageBg} flex items-center justify-center shadow-lg shadow-black/40`}
        >
          <span className="text-xl font-bold text-white">{name[0]}</span>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-lg">{name}</h3>
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                plan === 'Excel'
                  ? 'bg-purple-950 text-purple-300 border border-purple-800/40'
                  : plan === 'Launch'
                  ? 'bg-red-950 text-red-300 border border-red-800/40'
                  : 'bg-zinc-800 text-zinc-400'
              }`}
            >
              {plan}
            </span>
          </div>

          <p className="text-sm text-zinc-400 mb-2">{role}</p>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-green-500 font-medium">{match} match</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300">{genre}</span>
          </div>
        </div>
      </div>

      <button className="mt-5 w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl text-sm font-medium transition-colors group-hover:border-red-700/50">
        Connect
      </button>
    </div>
  );
}