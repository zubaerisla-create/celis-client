// src/components/dashboard/BriefCard.tsx

interface BriefCardProps {
  title: string;
  client: string;
  genre: string;
  urgent?: boolean;          // for "Urgent" badge
  paid?: boolean;            // for "Paid" label
  deadline?: string;         // e.g. "5 days left"
  actionLabel?: string;      // e.g. "Apply Now", "View Details"
  gradientFrom?: string;     // for gradient customization
  gradientTo?: string;       // for gradient customization
}

export default function BriefCard({
  title,
  client,
  genre,
  urgent = false,
  paid = false,
  deadline,
  actionLabel = "View Details →",
  gradientFrom = "#E54FA9",
  gradientTo = "#831CDF",
}: BriefCardProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-[#E54FA9]/50 transition-all group">
      {/* Top row: Title + Badges */}
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <h3 
          className="font-bold text-base sm:text-lg leading-tight bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent group-hover:from-[#D63F99] group-hover:to-[#730CCF] transition-all"
        >
          {title}
        </h3>

        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end ml-2">
          {paid && (
            <span className="text-[10px] sm:text-xs font-medium px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 text-transparent bg-clip-text border border-[#E54FA9]/30 rounded-full">
              <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Paid</span>
            </span>
          )}
          {urgent && (
            <span className="text-[10px] sm:text-xs font-medium px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 text-transparent bg-clip-text border border-[#E54FA9]/30 rounded-full animate-pulse">
              <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Urgent</span>
            </span>
          )}
        </div>
      </div>

      {/* Client & Genre */}
      <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 text-xs sm:text-sm mb-3 sm:mb-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-zinc-500">Client:</span>
          <span className="font-medium text-zinc-300">{client}</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-zinc-500">Genre:</span>
          <span className="font-medium text-zinc-300">{genre}</span>
        </div>
      </div>

      {/* Deadline / extra info */}
      {deadline && (
        <div className="text-xs sm:text-sm mb-4 sm:mb-5 flex items-center gap-1.5">
          <span className="text-zinc-500">Deadline:</span>
          <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent font-medium">
            {deadline}
          </span>
        </div>
      )}

      {/* Action button */}
      <button className="
        w-full py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5
        bg-zinc-900 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF]
        border border-zinc-700 hover:border-transparent
        rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium 
        transition-all hover:text-white text-zinc-300
        hover:shadow-lg hover:shadow-[#831CDF]/30
        active:scale-[0.98]
      ">
        {actionLabel}
      </button>
    </div>
  );
}