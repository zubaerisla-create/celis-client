// src/components/dashboard/Header.tsx
'use client';

import { Search, Newspaper, Settings, HelpCircle, LogOut, Plus, ChevronDown, Bell, MessageCircle, User, PenSquare, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header({ userName }: { userName: string }) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsProfileMenuOpen(false);
  };

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
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Ignite Badge - updated with new gradient */}
          <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] px-4 py-1.5 rounded-full shadow-lg shadow-[#831CDF]/30">
            <span className="text-sm font-bold text-white">Ignite</span>
          </div>

          {/* Create Button with Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setIsCreateMenuOpen(!isCreateMenuOpen);
                setIsNotificationsOpen(false);
                setIsProfileMenuOpen(false);
              }}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] px-4 sm:px-5 py-2 rounded-xl text-sm font-medium transition-all shadow-lg shadow-[#831CDF]/30 active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" />
              Create
            </button>

            {/* Mobile Create button */}
            <button 
              onClick={() => {
                setIsCreateMenuOpen(!isCreateMenuOpen);
                setIsNotificationsOpen(false);
                setIsProfileMenuOpen(false);
              }}
              className="sm:hidden p-2 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-lg shadow-lg shadow-[#831CDF]/30"
            >
              <Plus className="w-5 h-5" />
            </button>

            {/* Create Dropdown Menu */}
            {isCreateMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsCreateMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl z-40 overflow-hidden">
                  <div className="py-2">
                    <Link href="/home/create-post" onClick={() => setIsCreateMenuOpen(false)}>
                      <button 
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:bg-gradient-to-r hover:from-[#E54FA9]/10 hover:to-[#831CDF]/10 transition-colors group"
                      >
                        <PenSquare className="w-4 h-4 group-hover:text-[#E54FA9] transition-colors" />
                        <span className="group-hover:bg-gradient-to-r group-hover:from-[#E54FA9] group-hover:to-[#831CDF] group-hover:bg-clip-text group-hover:text-transparent">New Post</span>
                      </button>
                    </Link>
                    
                    <Link href="/home/briefs/create-industry-brief" onClick={() => setIsCreateMenuOpen(false)}>
                      <button 
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:bg-gradient-to-r hover:from-[#E54FA9]/10 hover:to-[#831CDF]/10 transition-colors group"
                      >
                        <FileText className="w-4 h-4 group-hover:text-[#E54FA9] transition-colors" />
                        <span className="group-hover:bg-gradient-to-r group-hover:from-[#E54FA9] group-hover:to-[#831CDF] group-hover:bg-clip-text group-hover:text-transparent">Create Brief</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Notification Icon with Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                setIsCreateMenuOpen(false);
                setIsProfileMenuOpen(false);
              }}
              className="relative p-2 text-zinc-400 hover:text-[#E54FA9] transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-full animate-pulse"></span>
            </button>

            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsNotificationsOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl z-40 overflow-hidden">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-zinc-800">
                    <h3 className="text-sm font-semibold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Notifications</h3>
                  </div>
                  
                  {/* Notifications List */}
                  <div className="max-h-96 overflow-y-auto">
                    {/* Notification 1 */}
                    <div className="px-4 py-3 hover:bg-gradient-to-r hover:from-[#E54FA9]/5 hover:to-[#831CDF]/5 transition-colors cursor-pointer border-b border-zinc-800/50 group">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E54FA9] to-[#831CDF] flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white group-hover:text-[#E54FA9] transition-colors">New collaboration request</p>
                          <p className="text-xs text-zinc-400 mt-0.5">Alex Rivera wants to work with you</p>
                          <p className="text-xs text-zinc-500 mt-1">5 min ago</p>
                        </div>
                      </div>
                    </div>

                    {/* Notification 2 */}
                    <div className="px-4 py-3 hover:bg-gradient-to-r hover:from-[#E54FA9]/5 hover:to-[#831CDF]/5 transition-colors cursor-pointer border-b border-zinc-800/50 group">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#831CDF] to-[#E54FA9] flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white group-hover:text-[#E54FA9] transition-colors">Brief submission accepted</p>
                          <p className="text-xs text-zinc-400 mt-0.5">Your submission for 'Summer Vibes' was shortlisted</p>
                          <p className="text-xs text-zinc-500 mt-1">1 hour ago</p>
                        </div>
                      </div>
                    </div>

                    {/* Notification 3 */}
                    <div className="px-4 py-3 hover:bg-gradient-to-r hover:from-[#E54FA9]/5 hover:to-[#831CDF]/5 transition-colors cursor-pointer border-b border-zinc-800/50 group">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E54FA9] to-[#831CDF] flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white group-hover:text-[#E54FA9] transition-colors">Project comment</p>
                          <p className="text-xs text-zinc-400 mt-0.5">Jordan added a comment to 'Midnight Sessions'</p>
                          <p className="text-xs text-zinc-500 mt-1">3 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View All Link */}
                  <div className="px-4 py-3 border-t border-zinc-800">
                    <Link href="/home/notification" onClick={() => setIsNotificationsOpen(false)}>
                      <button className="text-sm bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF] font-medium">
                        View all notifications
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Message Icon */}
          <Link href="/home/message"> 
            <button className="relative p-2 text-zinc-400 hover:text-[#E54FA9] transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-full"></span>
            </button>
          </Link>

          {/* Profile Section with Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setIsProfileMenuOpen(!isProfileMenuOpen);
                setIsCreateMenuOpen(false);
                setIsNotificationsOpen(false);
              }}
              className="flex items-center gap-2 pl-2 border-l border-zinc-800 hover:bg-gradient-to-r hover:from-[#E54FA9]/5 hover:to-[#831CDF]/5 rounded-lg transition-colors group"
            >
              <div className="relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#E54FA9] to-[#831CDF] overflow-hidden border-2 border-zinc-700 group-hover:border-[#E54FA9] transition-colors">
                  {/* Profile Image - you can replace with actual user image */}
                  <div className="w-full h-full bg-gradient-to-br from-[#E54FA9] to-[#831CDF] flex items-center justify-center text-white font-bold">
                    {userName?.charAt(0) || 'U'}
                  </div>
                </div>
                {/* Online Status Indicator */}
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-full border-2 border-black"></div>
              </div>
              
              {/* User Info - hidden on mobile, visible on larger screens */}
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-white group-hover:text-[#E54FA9] transition-colors">{userName || 'User Name'}</p>
              </div>
              
              {/* Chevron Down - as per screenshot */}
              <ChevronDown className={`w-4 h-4 text-zinc-400 hidden lg:block transition-all duration-200 ${isProfileMenuOpen ? 'rotate-180 text-[#E54FA9]' : ''} group-hover:text-[#E54FA9]`} />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsProfileMenuOpen(false)}
                />
                
                {/* Dropdown content */}
                <div className="absolute right-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl z-40 overflow-hidden">
                  {/* User info header */}
                  <div className="px-4 py-3 border-b border-zinc-800">
                    <p className="text-sm font-medium bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">{userName || 'User Name'}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">user@example.com</p>
                  </div>
                  
                  {/* Menu items */}
                  <div className="py-2">
                    {/* View Profile */}
                    <button
                      onClick={() => handleNavigate("/home/profile")}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-gradient-to-r hover:from-[#E54FA9]/10 hover:to-[#831CDF]/10 transition-colors group"
                    >
                      <User className="w-4 h-4 group-hover:text-[#E54FA9] transition-colors" />
                      <span className="group-hover:bg-gradient-to-r group-hover:from-[#E54FA9] group-hover:to-[#831CDF] group-hover:bg-clip-text group-hover:text-transparent">View Profile</span>
                    </button>

                    {/* View Feed */}
                    <button
                      onClick={() => handleNavigate("/home/feed")}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-gradient-to-r hover:from-[#E54FA9]/10 hover:to-[#831CDF]/10 transition-colors group"
                    >
                      <Newspaper className="w-4 h-4 group-hover:text-[#E54FA9] transition-colors" />
                      <span className="group-hover:bg-gradient-to-r group-hover:from-[#E54FA9] group-hover:to-[#831CDF] group-hover:bg-clip-text group-hover:text-transparent">View Feed</span>
                    </button>

                    {/* My Submissions */}
                    <button
                      onClick={() => handleNavigate("/home/briefs/my-submissions")}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-gradient-to-r hover:from-[#E54FA9]/10 hover:to-[#831CDF]/10 transition-colors group"
                    >
                      <FileText className="w-4 h-4 group-hover:text-[#E54FA9] transition-colors" />
                      <span className="group-hover:bg-gradient-to-r group-hover:from-[#E54FA9] group-hover:to-[#831CDF] group-hover:bg-clip-text group-hover:text-transparent">My Submissions</span>
                    </button>

                    {/* Divider */}
                    <div className="my-2 border-t border-zinc-700"></div>

                    {/* Settings */}
                    <button
                      onClick={() => handleNavigate("/home/settings")}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-gradient-to-r hover:from-[#E54FA9]/10 hover:to-[#831CDF]/10 transition-colors group"
                    >
                      <Settings className="w-4 h-4 group-hover:text-[#E54FA9] transition-colors" />
                      <span className="group-hover:bg-gradient-to-r group-hover:from-[#E54FA9] group-hover:to-[#831CDF] group-hover:bg-clip-text group-hover:text-transparent">Settings</span>
                    </button>

                    {/* Help & Support */}
                    <button
                      onClick={() => handleNavigate("/home/help-support")}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-gradient-to-r hover:from-[#E54FA9]/10 hover:to-[#831CDF]/10 transition-colors group"
                    >
                      <HelpCircle className="w-4 h-4 group-hover:text-[#E54FA9] transition-colors" />
                      <span className="group-hover:bg-gradient-to-r group-hover:from-[#E54FA9] group-hover:to-[#831CDF] group-hover:bg-clip-text group-hover:text-transparent">Help & Support</span>
                    </button>

                    {/* Logout */}
                    <button
                      onClick={() => handleNavigate("/auth/sign-in")}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-gradient-to-r hover:from-[#E54FA9]/10 hover:to-[#831CDF]/10 transition-colors group"
                    >
                      <LogOut className="w-4 h-4 group-hover:text-[#E54FA9] transition-colors" />
                      <span className="group-hover:bg-gradient-to-r group-hover:from-[#E54FA9] group-hover:to-[#831CDF] group-hover:bg-clip-text group-hover:text-transparent">Log out</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}