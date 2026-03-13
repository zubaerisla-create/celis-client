// src/components/dashboard/ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  artist: string;
  progress: number;
  updated: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function ProjectCard({ 
  title, 
  artist, 
  progress, 
  updated,
  gradientFrom = "#E54FA9",
  gradientTo = "#831CDF"
}: ProjectCardProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-[#E54FA9]/50 transition-all group">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent group-hover:from-[#D63F99] group-hover:to-[#730CCF] transition-all">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">{artist}</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] sm:text-xs text-zinc-500 mb-0.5 sm:mb-1">Updated</div>
          <div className="text-[10px] sm:text-xs font-medium text-zinc-400">{updated}</div>
        </div>
      </div>

      <div className="mb-3 sm:mb-4">
        <div className="flex justify-between text-[10px] sm:text-xs text-zinc-400 mb-1 sm:mb-1.5">
          <span>Progress</span>
          <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent font-medium">
            {progress}%
          </span>
        </div>
        <div className="h-1.5 sm:h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ 
              width: `${progress}%`,
              background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
            }}
          />
        </div>
      </div>

      <button className="
        w-full py-2 sm:py-2.5 md:py-3 px-3 sm:px-4
        bg-zinc-900 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF]
        border border-zinc-700 hover:border-transparent
        rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium 
        transition-all hover:text-white text-zinc-300
        hover:shadow-lg hover:shadow-[#831CDF]/30
        active:scale-[0.98]
        flex items-center justify-center gap-1.5
      ">
        <span>View Project</span>
        <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  );
}