// src/components/dashboard/UpgradeBanner.tsx
interface UpgradeBannerProps {
  gradientFrom?: string;
  gradientTo?: string;
}

export default function UpgradeBanner({ 
  gradientFrom = "#E54FA9", 
  gradientTo = "#831CDF" 
}: UpgradeBannerProps) {
  return (
    <div 
      className="bg-gradient-to-br from-[#E54FA9]/10 to-[#831CDF]/10 border border-[#E54FA9]/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg shadow-[#831CDF]/20 hover:border-[#E54FA9]/50 transition-all group"
    >
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
        Upgrade to Launch
      </h3>

      <ul className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-4 sm:mb-5 md:mb-6">
        <li className="flex items-center gap-1.5 sm:gap-2">
          <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent text-sm sm:text-base">✓</span>
          50GB storage
        </li>
        <li className="flex items-center gap-1.5 sm:gap-2">
          <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent text-sm sm:text-base">✓</span>
          Priority in discovery
        </li>
        <li className="flex items-center gap-1.5 sm:gap-2">
          <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent text-sm sm:text-base">✓</span>
          Advanced analytics
        </li>
        <li className="flex items-center gap-1.5 sm:gap-2">
          <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent text-sm sm:text-base">✓</span>
          Verified badge
        </li>
      </ul>

      <button 
        className="w-full py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] rounded-lg sm:rounded-xl font-semibold text-white text-xs sm:text-sm transition-all shadow-lg shadow-[#831CDF]/40 active:scale-[0.98]"
      >
        Upgrade Now
      </button>

      <p className="text-[10px] sm:text-xs text-zinc-500 mt-3 sm:mt-4 text-center">
        Unlock more features and grow faster
      </p>
    </div>
  );
}