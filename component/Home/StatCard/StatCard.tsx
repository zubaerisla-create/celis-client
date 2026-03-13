import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
  icon?: ReactNode; // Changed from 'string' to 'ReactNode'
}

export default function StatCard({ title, value, change, trend, icon }: StatCardProps) {
  const isUp = trend === 'up';

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-[#E54FA9]/50 transition-all group">
      <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
        <p className="text-xs sm:text-sm text-zinc-400 font-medium">{title}</p>
        {icon && (
          <span className="text-lg sm:text-xl md:text-2xl opacity-80 group-hover:scale-110 transition-transform">
            {icon}
          </span>
        )}
      </div>
      
      <p className="text-xl sm:text-2xl md:text-3xl font-black mb-1 sm:mb-1.5 md:mb-2">{value}</p>
      
      {change && (
        <p className={`text-xs sm:text-sm font-medium ${
          isUp 
            ? 'bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent' 
            : 'text-red-500'
        }`}>
          {change} {isUp ? '↑' : '↓'}
        </p>
      )}
    </div>
  );
}