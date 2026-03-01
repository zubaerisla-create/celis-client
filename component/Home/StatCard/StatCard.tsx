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
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all">
      <div className="flex items-center justify-between mb-4">
        <p className="text-zinc-400 text-sm font-medium">{title}</p>
        {icon && <span className="text-2xl opacity-80">{icon}</span>}
      </div>
      <p className="text-3xl font-black mb-1">{value}</p>
      {change && (
        <p className={`text-sm ${isUp ? 'text-green-500' : 'text-red-500'}`}>
          {change} {isUp ? '↑' : '↓'}
        </p>
      )}
    </div>
  );
}