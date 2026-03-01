// src/components/dashboard/Header.tsx
'use client';

import { Search,  Newspaper, 
 
  Settings, 
  HelpCircle, 
  LogOut , Plus, ChevronDown, Bell, MessageCircle, User, BellOff, Trash2, FileText, PenSquare, Briefcase } from 'lucide-react';
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
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:border-red-600 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Ignite Badge - as per screenshot */}
          <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 px-4 py-1.5 rounded-full">
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
              className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 sm:px-5 py-2 rounded-xl text-sm font-medium transition-colors"
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
              className="sm:hidden p-2 bg-red-600 rounded-lg"
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
                   <Link href="/home/create-post" onClick={() => setIsCreateMenuOpen(false)} >
                   
                    <button 
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
                      onClick={() => {
                        console.log('New Post');
                        setIsCreateMenuOpen(false);
                      }}
                    >
                      <PenSquare className="w-4 h-4" />
                      <span>New Post</span>
                    </button>
                   </Link>
                    
          <Link href="/home/briefs/create-industry-brief" onClick={() => setIsCreateMenuOpen(false)} >
          
                    <button 
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
                      onClick={() => {
                        console.log('Create Brief');
                        setIsCreateMenuOpen(false);
                      }}
                    >
                      <FileText className="w-4 h-4" />
                      <span>Create Brief</span>
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
              className="relative p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
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
                    <h3 className="text-sm font-semibold text-white">Notifications</h3>
                  </div>
                  
                  {/* Notifications List */}
                  <div className="max-h-96 overflow-y-auto">
                    {/* Notification 1 */}
                    <div className="px-4 py-3 hover:bg-zinc-800/50 transition-colors cursor-pointer border-b border-zinc-800/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">New collaboration request</p>
                          <p className="text-xs text-zinc-400 mt-0.5">Alex Rivera wants to work with you</p>
                          <p className="text-xs text-zinc-500 mt-1">5 min ago</p>
                        </div>
                      </div>
                    </div>

                    {/* Notification 2 */}
                    <div className="px-4 py-3 hover:bg-zinc-800/50 transition-colors cursor-pointer border-b border-zinc-800/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">Brief submission accepted</p>
                          <p className="text-xs text-zinc-400 mt-0.5">Your submission for 'Summer Vibes' was shortlisted</p>
                          <p className="text-xs text-zinc-500 mt-1">1 hour ago</p>
                        </div>
                      </div>
                    </div>

                    {/* Notification 3 */}
                    <div className="px-4 py-3 hover:bg-zinc-800/50 transition-colors cursor-pointer border-b border-zinc-800/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">Project comment</p>
                          <p className="text-xs text-zinc-400 mt-0.5">Jordan added a comment to 'Midnight Sessions'</p>
                          <p className="text-xs text-zinc-500 mt-1">3 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View All Link */}
                  <div className="px-4 py-3 border-t border-zinc-800">
                   <Link href="/home/notification" onClick={() => setIsNotificationsOpen(false)}>
                   
                    <button className="text-sm text-red-500 hover:text-red-400 font-medium">
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
      
          <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
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
              className="flex items-center gap-2 pl-2 border-l border-zinc-800 hover:bg-zinc-900/50 rounded-lg transition-colors"
            >
              <div className="relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-purple-600 to-red-500 overflow-hidden border-2 border-zinc-700">
                  {/* Profile Image - you can replace with actual user image */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                    {userName?.charAt(0) || 'U'}
                  </div>
                </div>
                {/* Online Status Indicator */}
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black"></div>
              </div>
              
              {/* User Info - hidden on mobile, visible on larger screens */}
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-white">{userName || 'User Name'}</p>
              </div>
              
              {/* Chevron Down - as per screenshot */}
              <ChevronDown className={`w-4 h-4 text-zinc-400 hidden lg:block transition-transform duration-200 ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
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
                    <p className="text-sm font-medium text-white">{userName || 'User Name'}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">user@example.com</p>
                  </div>
                  
                  {/* Menu items */}
           <div className="py-2">

      {/* View Profile */}
      <button
        onClick={() => handleNavigate("/home/profile")}
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
      >
        <User className="w-4 h-4" />
        <span>View Profile</span>
      </button>

      {/* View Feed */}
      <button
        onClick={() => handleNavigate("/home/feed")}
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
      >
        <Newspaper className="w-4 h-4" />
        <span>View Feed</span>
      </button>

      {/* My Submissions */}
      <button
        onClick={() => handleNavigate("/home/briefs/my-submissions")}
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
      >
        <FileText className="w-4 h-4" />
        <span>My Submissions</span>
      </button>

      {/* Divider */}
      <div className="my-2 border-t border-zinc-700"></div>

      {/* Settings */}
      <button
        onClick={() => handleNavigate("/home/settings")}
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
      >
        <Settings className="w-4 h-4" />
        <span>Settings</span>
      </button>

      {/* Help & Support */}
      <button
        onClick={() => handleNavigate("/home/help-support")}
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
      >
        <HelpCircle className="w-4 h-4" />
        <span>Help & Support</span>
      </button>

      {/* Logout */}
      <button
        onClick={() => {
          handleNavigate("/auth/sign-in")
        }}
        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-zinc-800 transition-colors"
      >
        <LogOut className="w-4 h-4" />
        <span>Log out</span>
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