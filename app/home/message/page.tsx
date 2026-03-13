// components/MessagesLayout.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Search, Phone, Video, MoreHorizontal, Paperclip, Smile, Send, User, BellOff, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Demo data — in real app: fetch from your backend (Supabase, Firebase, Prisma + WebSockets, etc.)
const conversations = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    role: "Producer",
    lastMessage: "That beat sounds amazing! Let's c",
    time: "2m ago",
    unread: 1,
    active: true,
    online: true,
    messages: [
      { id: 1, text: "Hey! I listened to your latest track", sender: "them", time: "10:30 AM" },
      { id: 2, text: "Thanks! What did you think?", sender: "me", time: "10:30 AM" },
      { id: 3, text: "That beat sounds amazing! Let's collab ♥", sender: "them", time: "10:30 AM" },
      { id: 4, text: "Appreciate it! I've been working on that sound for a while", sender: "me", time: "10:32 AM" },
    ],
  },
  {
    id: 2,
    name: "Marcus Williams",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    role: "Songwriter",
    lastMessage: "When can we schedule a session?",
    time: "1h ago",
    unread: 0,
    active: false,
    online: true,
    messages: [
      { id: 1, text: "The production is really clean. Love the R&B vibes", sender: "them", time: "10:33 AM" },
      { id: 2, text: "Appreciate it! I've been working on that sound for a while", sender: "me", time: "10:33 AM" },
    ],
  },
  {
    id: 3,
    name: "Jordan Lee",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    role: "Visual Artist",
    lastMessage: "Thanks for the feedback!",
    time: "3h ago",
    unread: 0,
    active: false,
    online: false,
    messages: [
      { id: 1, text: "That beat sounds amazing! Let's collaborate", sender: "them", time: "10:35 AM" },
      { id: 2, text: "Thanks for the feedback!", sender: "them", time: "10:38 AM" },
    ],
  },
  {
    id: 4,
    name: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
    role: "Producer",
    lastMessage: "Check out these new samples",
    time: "1d ago",
    unread: 0,
    active: false,
    online: true,
    messages: [],
  },
];

export default function MessagesLayout() {
  const [selectedConv, setSelectedConv] = useState(conversations[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileList, setShowMobileList] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSelectConversation = (conv: typeof conversations[0]) => {
    setSelectedConv(conv);
    if (isMobile) {
      setShowMobileList(false);
    }
    setShowDropdown(false);
  };

  const handleBackToList = () => {
    setShowMobileList(true);
    setShowDropdown(false);
  };

  const handleViewProfile = () => {
    console.log("View profile clicked");
    setShowDropdown(false);
  };

  const handleMuteConversation = () => {
    console.log("Mute conversation clicked");
    setShowDropdown(false);
  };

  const handleDeleteConversation = () => {
    console.log("Delete conversation clicked");
    setShowDropdown(false);
  };

  return (
    <div className="h-screen flex bg-[#0F0F0F] text-white overflow-hidden">
      {/* Sidebar – Conversation List */}
      <div className={`
        ${isMobile 
          ? showMobileList 
            ? 'w-full' 
            : 'hidden' 
          : 'w-full sm:w-80 md:w-80'
        } 
        border-r border-gray-800 flex flex-col bg-[#0F0F0F] z-10
      `}>
        {/* Header */}
        <div className="p-3 sm:p-4 border-b border-gray-800">
          <h1 className="text-lg sm:text-xl font-bold">
            <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Messages
            </span>
          </h1>
        </div>

        {/* Search */}
        <div className="p-2 sm:p-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-gray-900 text-white placeholder-gray-500 pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm border border-gray-700 focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => handleSelectConversation(conv)}
              className={`w-full p-2 sm:p-3 flex gap-2 sm:gap-3 hover:bg-gradient-to-r hover:from-[#E54FA9]/10 hover:to-[#831CDF]/10 transition-all group ${
                selectedConv.id === conv.id && !isMobile ? "bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 border-l-4 border-[#E54FA9]" : ""
              } ${selectedConv.id === conv.id && isMobile && !showMobileList ? "bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20" : ""}`}
            >
              <div className="relative flex-shrink-0">
                <Image
                  src={conv.avatar}
                  alt={conv.name}
                  width={48}
                  height={48}
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-transparent group-hover:border-[#E54FA9] transition-all"
                />
                {conv.online && (
                  <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-full border-2 border-[#0F0F0F]" />
                )}
              </div>

              <div className="flex-1 min-w-0 text-left">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-sm sm:text-base truncate group-hover:text-[#E54FA9] transition-colors">{conv.name}</h3>
                  <span className="text-2xs sm:text-xs text-gray-500 ml-1 group-hover:text-[#E54FA9] transition-colors">{conv.time}</span>
                </div>
                <p className="text-2xs sm:text-xs md:text-sm text-gray-400 truncate group-hover:text-gray-300 transition-colors">{conv.role}</p>
                <p className="text-xs sm:text-sm text-gray-300 mt-0.5 truncate hidden xs:block group-hover:text-white transition-colors">
                  {conv.lastMessage}
                </p>
              </div>

              {conv.unread > 0 && (
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-full text-2xs sm:text-xs font-bold flex items-center justify-center self-center flex-shrink-0 text-white">
                  {conv.unread}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      {selectedConv ? (
        <div className={`
          flex-1 flex flex-col bg-[#0F0F0F]
          ${isMobile 
            ? showMobileList 
              ? 'hidden' 
              : 'w-full' 
            : 'w-full'
          }
        `}>
          {/* Chat Header */}
          <div className="p-3 sm:p-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Back button for mobile */}
              {isMobile && (
                <button 
                  onClick={handleBackToList}
                  className="p-1 hover:bg-[#E54FA9]/20 rounded-full mr-1 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-[#E54FA9]" />
                </button>
              )}
              
              <div className="relative">
                <Image
                  src={selectedConv.avatar}
                  alt={selectedConv.name}
                  width={40}
                  height={40}
                  className="rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-transparent hover:border-[#E54FA9] transition-all"
                />
                {selectedConv.online && (
                  <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-full border-2 border-[#0F0F0F]" />
                )}
              </div>
              <div>
                <h2 className="font-bold text-sm sm:text-base md:text-lg hover:text-[#E54FA9] transition-colors">{selectedConv.name}</h2>
                <p className="text-2xs sm:text-xs md:text-sm text-gray-400">
                  {selectedConv.role} • {selectedConv.online ? 'Active now' : 'Offline'}
                </p>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-4 text-gray-400 relative">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 hover:text-[#E54FA9] cursor-pointer transition-colors" />
              <Video className="w-4 h-4 sm:w-5 sm:h-5 hover:text-[#E54FA9] cursor-pointer transition-colors" />
              <div className="relative">
                <MoreHorizontal 
                  className="w-4 h-4 sm:w-5 sm:h-5 hover:text-[#E54FA9] cursor-pointer transition-colors" 
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                
                {/* Dropdown Menu */}
                {showDropdown && (
                  <>
                    {/* Overlay for mobile */}
                    {isMobile && (
                      <div 
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setShowDropdown(false)}
                      />
                    )}
                    <div className={`
                      absolute right-0 mt-2 w-48 sm:w-56 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-1 z-50
                      ${isMobile ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
                    `}>
                      <Link href="/home/friends-profile">
                        <button
                          onClick={handleViewProfile}
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] flex items-center gap-2 transition-all group"
                        >
                          <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-white" />
                          <span className="group-hover:text-white">View Profile</span>
                        </button>
                      </Link>
                      <button
                        onClick={handleMuteConversation}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] flex items-center gap-2 transition-all group"
                      >
                        <BellOff className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-white" />
                        <span className="group-hover:text-white">Mute Conversation</span>
                      </button>
                      <button
                        onClick={handleDeleteConversation}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-red-400 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] flex items-center gap-2 transition-all group"
                      >
                        <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-white" />
                        <span className="group-hover:text-white">Delete Conversation</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-[#0A0A0A]">
            {selectedConv.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender !== "me" && (
                  <Image
                    src={selectedConv.avatar}
                    alt=""
                    width={28}
                    height={28}
                    className="rounded-full mr-1.5 sm:mr-2 self-end w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-transparent hover:border-[#E54FA9] transition-all"
                  />
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] md:max-w-[70%] px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-2xl ${
                    msg.sender === "me"
                      ? "bg-gradient-to-r from-[#E54FA9] to-[#831CDF] text-white rounded-br-none"
                      : "bg-gray-800 text-white rounded-bl-none hover:bg-gray-700 transition-colors"
                  }`}
                >
                  <p className="text-xs sm:text-sm md:text-[15px]">{msg.text}</p>
                  <p className="text-2xs sm:text-xs opacity-70 mt-0.5 sm:mt-1 text-right">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-2 sm:p-3 md:p-4 border-t border-gray-800">
            <div className="flex items-center gap-1 sm:gap-2 bg-gray-900 rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 focus-within:ring-1 focus-within:ring-[#E54FA9] transition-all">
              <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 cursor-pointer hover:text-[#E54FA9] transition-colors flex-shrink-0" />
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-xs sm:text-sm min-w-0"
              />
              <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 cursor-pointer hover:text-[#E54FA9] transition-colors flex-shrink-0" />
              <button className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] text-white rounded-full p-1.5 sm:p-2 flex-shrink-0 shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] transition-all">
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500 text-xs sm:text-sm md:text-base">
          Select a conversation to start messaging
        </div>
      )}

      {/* Add custom styles for extra small devices */}
      <style jsx>{`
        @media (min-width: 375px) {
          .xs\\:block { display: block; }
        }
        .text-2xs {
          font-size: 0.65rem;
        }
        @media (max-width: 640px) {
          .text-2xs {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}