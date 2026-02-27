// src/components/dashboard/BriefCard.tsx

interface BriefCardProps {
  title: string;
  client: string;
  genre: string;
  urgent?: boolean;          // for red "Urgent" badge
  paid?: boolean;            // for "Paid" label
  deadline?: string;         // e.g. "5 days left"
  actionLabel?: string;      // e.g. "Apply Now", "View Details"
}

export default function BriefCard({
  title,
  client,
  genre,
  urgent = false,
  paid = false,
  deadline,
  actionLabel = "View Details →",
}: BriefCardProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all group">
      {/* Top row: Title + Badges */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-lg leading-tight group-hover:text-red-400 transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          {paid && (
            <span className="text-xs font-medium px-2.5 py-1 bg-green-950 text-green-400 border border-green-800/40 rounded-full">
              Paid
            </span>
          )}
          {urgent && (
            <span className="text-xs font-medium px-2.5 py-1 bg-red-950 text-red-400 border border-red-800/40 rounded-full animate-pulse">
              Urgent
            </span>
          )}
        </div>
      </div>

      {/* Client & Genre */}
      <div className="flex items-center gap-4 text-sm mb-4">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Client:</span>
          <span className="font-medium text-zinc-300">{client}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Genre:</span>
          <span className="font-medium text-zinc-300">{genre}</span>
        </div>
      </div>

      {/* Deadline / extra info */}
      {deadline && (
        <div className="text-sm text-red-400 mb-5 flex items-center gap-1.5">
          <span>Deadline:</span>
          <span className="font-medium">{deadline}</span>
        </div>
      )}

      {/* Action button */}
      <button className="
        w-full py-3 px-5
        bg-zinc-900 hover:bg-zinc-800 
        border border-zinc-700 group-hover:border-red-700/50
        rounded-xl text-sm font-medium transition-all
      ">
        {actionLabel}
      </button>
    </div>
  );
}