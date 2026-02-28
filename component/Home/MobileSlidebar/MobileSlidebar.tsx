// src/components/dashboard/MobileSidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Home, 
  Compass, 
  Rss, 
  Briefcase, 
  Folder, 
  Store, 
  Headphones 
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/home', icon: Home },
  { name: 'Discover', href: '/home/discover', icon: Compass },
  { name: 'Feed', href: '/home/feed', icon: Rss },
  { name: 'Briefs', href: '/home/briefs', icon: Briefcase },
  { name: 'Projects', href: '/home/projects', icon: Folder },
  { name: 'Marketplace', href: '/home/marketplace', icon: Store },
  { name: 'Spartst Session', href: '/home/spartst-session', icon: Headphones },
];

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Hamburger Button - only mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zinc-900 rounded-lg text-white"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer - matching desktop sidebar structure */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-zinc-950 border-r border-zinc-800
          transform transition-transform duration-300 ease-in-out z-50
          flex flex-col
          lg:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6 flex-1">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center text-xl font-black">
                S
              </div>
              <span className="text-2xl font-black tracking-tight">PARTST</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-zinc-800 rounded-lg transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-800 text-white'
                      : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom upgrade section - matching desktop */}
        <div className="p-6 border-t border-zinc-800">
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
      </div>
    </>
  );
}