// src/components/dashboard/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Compass, 
  Rss, 
  Briefcase, 
  Folder, 
  Store, 
  Headphones,
  User,
  Settings
} from 'lucide-react';
import Image from 'next/image';
import logo from "../../../public/logo.png"



const navItems = [
  { name: 'Home', href: '/home', icon: Home },
  { name: 'Discover', href: '/home/discover', icon: Compass },
  { name: 'Feed', href: '/home/feed', icon: Rss },
  { name: 'Briefs', href: '/home/briefs', icon: Briefcase },
  { name: 'Projects', href: '/home/projects', icon: Folder },
  { name: 'Marketplace', href: '/home/marketplace', icon: Store },
  { name: 'Spartst Session', href: '/home/spartst-session', icon: Headphones },
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
       <div className="flex items-center gap-2 pb-4">
            <div className="w-8 h-8  rounded-lg flex items-center justify-center">
              <Image height={40} width={40} src={logo} alt="Spartst Logo" />
            </div>
            <div>
              <h2 className="text-red-700 font-semibold text-lg">SPARTST</h2>
              <p className="text-gray-400 text-[10px] leading-tight">SPACE FOR ART</p>
            </div>
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
          <Link href="/home/subscription-plan">
            <button className="w-full py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition">
              Upgrade Now
            </button>
          </Link>
        </div>

        {/* Profile link styled like navigation items */}
        <Link
          href="/home/profile"
          className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-colors mt-4 ${
            pathname === '/home/profile'
              ? 'bg-zinc-800 text-white'
              : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
          }`}
        >
          <User className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">Profile</span>
        </Link>

        {/* Settings link styled like navigation items */}
        <Link
          href="/home/settings"
          className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-colors ${
            pathname === '/home/settings'
              ? 'bg-zinc-800 text-white'
              : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
          }`}
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">Settings</span>
        </Link>
      </div>
    </aside>
  );
}