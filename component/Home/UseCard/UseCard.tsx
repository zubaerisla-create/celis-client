// src/components/dashboard/UserCard.tsx
interface UserCardProps {
  name: string;
  role: string;
  match: string;
  genre: string;
  plan: 'Ignite' | 'Launch' | 'Excel';
  imageBg: string; // e.g. "from-[#E54FA9] to-[#831CDF]"
}

export default function UserCard({
  name,
  role,
  match,
  genre,
  plan,
  imageBg,
}: UserCardProps) {
  // Function to get plan badge styling based on plan type
  const getPlanBadgeStyle = () => {
    switch(plan) {
      case 'Excel':
        return 'bg-gradient-to-r from-[#831CDF]/20 to-[#E54FA9]/20 text-transparent bg-clip-text border border-[#831CDF]/30';
      case 'Launch':
        return 'bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 text-transparent bg-clip-text border border-[#E54FA9]/30';
      default: // Ignite
        return 'bg-zinc-800 text-zinc-400 border border-zinc-700';
    }
  };

  // Get gradient text for plan display
  const getPlanGradient = () => {
    if (plan === 'Excel') {
      return 'bg-gradient-to-r from-[#831CDF] to-[#E54FA9] bg-clip-text text-transparent';
    } else if (plan === 'Launch') {
      return 'bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent';
    }
    return '';
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-[#E54FA9]/50 transition-all group">
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Avatar with gradient background */}
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${imageBg} flex items-center justify-center shadow-lg shadow-black/40 flex-shrink-0`}
        >
          <span className="text-base sm:text-xl font-bold text-white">{name[0]}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
            <h3 className="font-bold text-base sm:text-lg truncate">{name}</h3>
            <span
              className={`text-[10px] sm:text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${getPlanBadgeStyle()}`}
            >
              <span className={getPlanGradient()}>{plan}</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">{role}</p>

          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm flex-wrap">
            <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent font-medium">
              {match} match
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300 truncate">{genre}</span>
          </div>
        </div>
      </div>

      <button 
        className="mt-3 sm:mt-4 md:mt-5 w-full py-2 sm:py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all group-hover:border-[#E54FA9]/50 hover:border-[#E54FA9] hover:text-[#E54FA9]"
      >
        Connect
      </button>
    </div>
  );
}