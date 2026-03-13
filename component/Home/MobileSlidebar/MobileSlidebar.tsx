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
  Headphones,
  User,
  Settings,
  Sparkles,
  TrendingUp,
  Zap,
  ChevronRight
} from 'lucide-react';

import logo from "../../../public/logo.png"
import Image from 'next/image';
import LogoContainer from '@/component/ReUsableComponent/LogoContainer/LogoContainer';

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

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Hamburger Button - with gradient */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] text-white rounded-xl shadow-lg hover:shadow-[#831CDF]/30 transition-all duration-300 hover:scale-105"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black
          border-r border-zinc-800/50 transform transition-transform duration-300 ease-out
          flex flex-col z-50 overflow-y-auto
          lg:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo Area */}
        <div className="relative pt-6 pb-4 px-4 border-b border-zinc-800/50">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#E54FA9]/10 to-transparent pointer-events-none" />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
            

             <LogoContainer/>
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-6 px-3">
          <div className="px-4 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Main Menu
          </div>
          
          <nav className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group relative flex items-center gap-3 px-4 py-3 rounded-xl
                    transition-all duration-200 overflow-hidden
                  `}
                >
                  {/* Active Background */}
                  {active && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] opacity-20" />
                  )}
                  
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon */}
                  <Icon className={`
                    relative z-10 w-5 h-5 transition-colors
                    ${active ? 'text-[#E54FA9]' : 'text-zinc-500'}
                  `} />
                  
                  {/* Label */}
                  <span className={`
                    relative z-10 text-sm font-medium
                    ${active ? 'text-white' : 'text-zinc-400'}
                  `}>
                    {item.name}
                  </span>

                  {/* Active Dot */}
                  {active && (
                    <div className="relative z-10 ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Stats */}
          <div className="mt-6 px-4">
            <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-zinc-400">Quick Stats</span>
                <TrendingUp size={14} className="text-[#E54FA9]" />
              </div>
              
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-400">Profile Views</span>
                    <span className="text-white font-medium">1,247</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-full" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Collaborations</span>
                  <span className="text-white font-medium">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800/50 bg-gradient-to-t from-black to-transparent">
          {/* Storage & Plan */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <Zap size={14} className="text-[#E54FA9]" />
                <span className="text-xs font-medium text-zinc-300">Ignite Plan</span>
              </div>
              <span className="text-xs text-zinc-500">4.5/10 GB</span>
            </div>
            
            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-4">
              <div className="h-full w-[45%] bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-full" />
            </div>

            <Link href="/home/subscription-plan" onClick={() => setIsOpen(false)}>
              <button className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#E54FA9] to-[#831CDF] p-[1px]">
                <div className="relative bg-zinc-950 rounded-xl p-3 group-hover:bg-transparent transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">Upgrade Plan</span>
                    <ChevronRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            </Link>
          </div>

          {/* Profile & Settings */}
          <div className="p-2 space-y-1">
            <Link
              href="/home/profile"
              onClick={() => setIsOpen(false)}
              className={`
                flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200
                ${isActive('/home/profile')
                  ? 'bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 text-white'
                  : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                }
              `}
            >
              <User className={`w-5 h-5 ${isActive('/home/profile') ? 'text-[#E54FA9]' : 'text-zinc-500'}`} />
              <span className="text-sm font-medium">Profile</span>
            </Link>

            <Link
              href="/home/settings"
              onClick={() => setIsOpen(false)}
              className={`
                flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200
                ${isActive('/home/settings')
                  ? 'bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 text-white'
                  : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                }
              `}
            >
              <Settings className={`w-5 h-5 ${isActive('/home/settings') ? 'text-[#E54FA9]' : 'text-zinc-500'}`} />
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </div>

          <div className="px-4 py-3">
            <p className="text-[10px] text-zinc-700 text-center">
              © 2024 SPARTST
            </p>
          </div>
        </div>
      </div>
    </>
  );
}