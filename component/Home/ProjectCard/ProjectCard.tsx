// src/components/dashboard/ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  artist: string;
  progress: number;
  updated: string;
}

export default function ProjectCard({ title, artist, progress, updated }: ProjectCardProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-zinc-400">{artist}</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-zinc-500 mb-1">Updated {updated}</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl text-sm font-medium transition-colors">
        View Project →
      </button>
    </div>
  );
}