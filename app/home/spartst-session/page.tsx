// components/SpartstSessions.tsx
"use client";

import { useState } from "react";
import {
  Plus,
  Video,
  Calendar,
  Clock,
  Users,
  Mic,
  MessageSquare,
  Send,
  X,
  ChevronDown,
  Phone,
  Copy,
  Menu,
} from "lucide-react";

// Mock data
const sessions = {
  active: [
    {
      id: "1",
      name: "Beat Making Session",
      live: true,
      participants: 3,
      avatars: ["SC", "MW", "AR"],
      started: "2 min ago",
    },
    {
      id: "2",
      name: "Vocal Recording",
      live: true,
      participants: 2,
      avatars: ["JL", "TB"],
    },
  ],
  upcoming: [
    {
      id: "3",
      name: "Album Planning",
      time: "Today, 3:00 PM",
      participants: ["SCV", "AR", "+1"],
    },
    {
      id: "4",
      name: "Mix Review",
      time: "Tomorrow, 10:00 AM",
      participants: ["SC", "AR"],
    },
  ],
  past: [
    {
      id: "5",
      name: "Creative Brainstorm",
      date: "Feb 20, 2025",
      participants: ["SCW", "MW"],
    },
    {
      id: "6",
      name: "Production Workshop",
      date: "Feb 18, 2025",
      participants: ["AI", "JL", "TB"],
    },
  ],
};

export default function SpartstSessions() {
  const [activeSession, setActiveSession] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const currentSession = sessions.active.find(s => s.id === activeSession);

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-gray-100 overflow-hidden relative">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-gray-800 p-2 rounded-lg"
        >
          <Menu size={24} />
        </button>
        
        <h1 className="text-xl font-bold text-right">Spartst Sessions</h1>
        
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1"
        >
          <Plus size={16} /> Create
        </button>
      </div>

      {/* Sidebar - Responsive */}
      <div className={`
        fixed lg:relative z-40 w-80 lg:flex flex-col bg-[#0a0a0a] border-r border-gray-800
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        h-full
      `}>
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <h1 className="text-xl font-bold hidden lg:block">Spartst Sessions</h1>
          <button
            onClick={() => {
              setShowCreateModal(true);
              setIsSidebarOpen(false);
            }}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium items-center gap-2 hidden lg:flex"
          >
            <Plus size={16} /> Create
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pt-16 lg:pt-0">
          {/* Active Sessions */}
          <div className="p-4">
            <h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
              Active Sessions
            </h2>
            {sessions.active.map(session => (
              <button
                key={session.id}
                onClick={() => {
                  setActiveSession(session.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full p-3 mb-2 rounded-lg text-left transition-colors ${
                  activeSession === session.id
                    ? "bg-gray-800 border-l-4 border-red-600"
                    : "hover:bg-gray-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium truncate pr-2">{session.name}</div>
                  {session.live && (
                    <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1 flex-shrink-0">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Live
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                  <Users size={14} /> {session.participants} participants
                </div>
              </button>
            ))}
          </div>

          {/* Upcoming */}
          <div className="p-4 border-t border-gray-800">
            <h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
              Upcoming
            </h2>
            {sessions.upcoming.map(s => (
              <div key={s.id} className="p-3 mb-2 bg-gray-900/50 rounded-lg">
                <div className="font-medium truncate">{s.name}</div>
                <div className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                  <Clock size={14} className="flex-shrink-0" /> 
                  <span className="truncate">{s.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Past */}
          <div className="p-4 border-t border-gray-800">
            <h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
              Past Sessions
            </h2>
            {sessions.past.map(s => (
              <div key={s.id} className="p-3 mb-2 bg-gray-900/30 rounded-lg">
                <div className="font-medium truncate">{s.name}</div>
                <div className="text-sm text-gray-500 mt-1">{s.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full lg:w-auto">
        {!activeSession ? (
          // Welcome / Empty state
          <div className="flex-1 flex items-center justify-center p-4 pt-20 lg:pt-4">
            <div className="text-center max-w-md px-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center">
                <Video size={32} className="text-red-500" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Welcome to Spartst Sessions
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mb-8">
                Create collaboration rooms, add friends, chat in real time, and collaborate creatively with video sessions.
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium inline-flex items-center gap-2 shadow-lg shadow-red-900/30"
              >
                Create Your First Session
              </button>
            </div>
          </div>
        ) : (
          // Active Session View
          <>
            <div className="p-3 sm:p-4 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-16 lg:mt-0">
              <div>
                <h2 className="text-lg sm:text-xl font-bold truncate max-w-[200px] sm:max-w-full">
                  {currentSession?.name}
                </h2>
                <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-2 mt-1">
                  <Users size={14} /> {currentSession?.participants} participants • Live
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button className="bg-gray-800 hover:bg-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-1 sm:gap-2 text-sm">
                  <Users size={16} /> 
                  <span className="hidden sm:inline">Invite</span>
                </button>
                <button className="bg-red-600/80 hover:bg-red-700 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg flex items-center gap-1 sm:gap-2 font-medium text-sm">
                  <Phone size={16} /> 
                  <span className="hidden sm:inline">End Session</span>
                </button>
                
                {/* Mobile chat toggle */}
                <button
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  className="lg:hidden bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg"
                >
                  <MessageSquare size={18} />
                </button>
              </div>
            </div>

            <div className="flex-1 flex relative">
              {/* Video Grid */}
              <div className={`
                flex-1 p-3 sm:p-6 grid grid-cols-1 gap-3 sm:gap-6 bg-black
                ${isChatOpen ? 'hidden lg:grid' : 'grid'}
                md:grid-cols-2
              `}>
                {["SC", "MW", "AR"].map((initial, i) => (
                  <div
                    key={i}
                    className="bg-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden aspect-video"
                  >
                    <div className="text-3xl sm:text-5xl font-bold text-gray-600">{initial}</div>
                    {i === 0 && (
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-red-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Mic size={12} /> You
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat - Responsive */}
              <div className={`
                absolute lg:relative right-0 top-0 h-full
                w-full sm:w-80 lg:w-80
                ${isChatOpen ? 'block' : 'hidden lg:block'}
                border-l border-gray-800 flex flex-col bg-gray-950 z-20
              `}>
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                  <span className="font-medium">Chat</span>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="lg:hidden text-gray-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-blue-400">MW</span>{" "}
                    <span className="text-gray-500 text-xs">2:34 PM</span>
                    <p className="mt-0.5 break-words">Hey everyone! Ready to start?</p>
                  </div>
                  <div>
                    <span className="font-medium text-purple-400">AR</span>{" "}
                    <span className="text-gray-500 text-xs">2:35 PM</span>
                    <p className="mt-0.5 break-words">Yes! Let's do this 🔥</p>
                  </div>
                  <div>
                    <span className="font-medium text-red-400">SC</span>{" "}
                    <span className="text-gray-500 text-xs">2:36 PM</span>
                    <p className="mt-0.5 break-words">I have some new ideas to share</p>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-800">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="w-full bg-gray-900 border border-gray-700 rounded-full pl-4 pr-12 py-2 sm:py-3 text-sm focus:outline-none focus:border-red-600"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Create Session Modal - Responsive */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-gray-800 flex items-center justify-between sticky top-0 bg-gray-900">
              <h2 className="text-lg sm:text-xl font-bold">Create Session</h2>
              <button onClick={() => setShowCreateModal(false)}>
                <X size={20} className="text-gray-400 hover:text-white" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">Session Name</label>
                <input
                  type="text"
                  placeholder="e.g., Beat Making Session"
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">Description</label>
                <textarea
                  rows={3}
                  placeholder="What's this session about?"
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-red-600 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">Privacy</label>
                <select className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm text-white focus:outline-none focus:border-red-600">
                  <option>Private</option>
                  <option>Public</option>
                  <option>Invite Only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">Invite Connected Friends (Optional)</label>
                <input
                  type="text"
                  placeholder="Search for friends..."
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-red-600"
                />
                <p className="text-xs text-gray-500 mt-1">
                  You can invite more people after creating the session
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 sm:mb-2">Schedule (Optional)</label>
                  <input
                    type="date"
                    className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm text-white focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 sm:mb-2 invisible sm:visible">Time</label>
                  <input
                    type="time"
                    className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm text-white focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">Session Link</label>
                <div className="flex items-center gap-2 bg-gray-950 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                  <input
                    type="text"
                    readOnly
                    value="spartst.com/qwyqgfgsidfgsiufqwh"
                    className="flex-1 bg-transparent outline-none text-gray-300 text-sm truncate"
                  />
                  <button className="text-gray-400 hover:text-white flex-shrink-0">
                    <Copy size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="w-full sm:flex-1 py-2.5 sm:py-3.5 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button className="w-full sm:flex-1 py-2.5 sm:py-3.5 bg-red-600 hover:bg-red-700 rounded-lg font-medium text-sm sm:text-base">
                  Create Session
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}