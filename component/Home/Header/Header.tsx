// src/components/dashboard/Header.tsx
'use client';

import { Search, Plus } from 'lucide-react';

export default function Header({ userName }: { userName: string }) {
  return (
    <header className="sticky top-0 z-20 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        {/* Search - mobile-এ ছোট */}
        <div className="flex-1 max-w-xs sm:max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search creators, projects..."
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:border-red-600 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 sm:px-5 py-2 rounded-xl text-sm font-medium">
            <Plus className="w-4 h-4" />
            Create
          </button>

          {/* Mobile Create button */}
          <button className="sm:hidden p-2 bg-red-600 rounded-lg">
            <Plus className="w-5 h-5" />
          </button>

          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-purple-600 to-red-500" />
        </div>
      </div>
    </header>
  );
}