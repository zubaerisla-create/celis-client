// src/components/dashboard/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Music, Briefcase, Folder, Store, Headphones } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/dashboard', icon: Music },
  { name: 'Feed', href: '/feed', icon: Music },
  { name: 'Briefs', href: '/briefs', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: Folder },
  { name: 'Marketplace', href: '/marketplace', icon: Store },
  { name: 'Spartst Session', href: '/sessions', icon: Headphones },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        fixed top-0 left-0 z-30
        hidden lg:flex lg:flex-col
        w-64 h-screen bg-zinc-950 border-r border-zinc-800
        overflow-y-auto
      "
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-8 sm:mb-10">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-red-600 rounded-lg flex items-center justify-center text-xl font-black">
            S
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tight">PARTST</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom upgrade section */}
      <div className="mt-auto p-5 sm:p-6 border-t border-zinc-800">
        <div className="mb-4">
          <div className="flex justify-between text-xs sm:text-sm text-zinc-400 mb-1.5">
            <span>Storage</span>
            <span>4.5/10 GB</span>
          </div>
          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-red-600 w-[45%]" />
          </div>
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl">
          <p className="text-sm font-medium mb-2">Ignite Plan</p>
          <button className="w-full py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}