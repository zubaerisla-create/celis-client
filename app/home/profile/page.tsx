// app/profile/[username]/page.tsx
"use client";

import { useState } from "react";
import {
  User,
  MapPin,
  Calendar,
  Link as LinkIcon,
  Share2,
  MessageCircle,
  Users,
  Briefcase,
  Music,
  FileText,
  Folder,
  Activity as ActivityIcon,
} from "lucide-react";
import Link from "next/link";

type Tab = "posts" | "briefs" | "projects" | "about" | "activity";

interface ProfileData {
  name: string;
  username: string;
  role: string;
  location: string;
  joined: string;
  website: string;
  stats: {
    posts: number;
    briefs: number;
    connections: number;
    views: number;
  };
  subscription: "Launch" | "Excel" | "Ignite";
  avatarGradient: string;
}

const mockProfile: ProfileData = {
  name: "Alex Chen",
  username: "alexchen",
  role: "Producer • R&B & Soul Specialist",
  location: "Los Angeles, CA",
  joined: "January 2025",
  website: "sarahchen.com",
  stats: {
    posts: 47,
    briefs: 5,
    connections: 892,
    views: 12400,
  },
  subscription: "Launch",
  avatarGradient: "from-rose-500 via-purple-500 to-indigo-500",
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("posts");

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "posts", label: "Posts", icon: <FileText size={18} /> },
    { id: "briefs", label: "Briefs", icon: <Briefcase size={18} /> },
    { id: "projects", label: "Projects", icon: <Folder size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "activity", label: "Activity", icon: <ActivityIcon size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-100">
      {/* Header / Banner - Completely redesigned for mobile */}
     <div className="relative h-64 md:h-80 bg-gradient-to-br from-purple-900 via-indigo-900 to-rose-900">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            {/* Avatar */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-zinc-900 overflow-hidden bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-bold text-white/90">AC</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl md:text-4xl font-bold">{mockProfile.name}</h1>
                <div className="flex items-center gap-2 bg-zinc-900/70 px-3 py-1 rounded-full border border-zinc-700 text-sm">
                  <span className="text-emerald-400 font-medium">
                    {mockProfile.subscription}
                  </span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                </div>
              </div>

              <p className="text-xl text-zinc-300 mt-1">{mockProfile.role}</p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} />
                  {mockProfile.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  Joined {mockProfile.joined}
                </div>
                <div className="flex items-center gap-1.5">
                  <LinkIcon size={16} />
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    {mockProfile.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end md:self-center">
              <button className="bg-zinc-800 hover:bg-zinc-700 px-5 py-2.5 rounded-lg border border-zinc-700 flex items-center gap-2 text-sm font-medium">
                <Share2 size={16} /> Share
              </button>
            
            </div>
          </div>
        </div>
      </div>


      {/* Spacer for mobile to push content below avatar */}
      <div className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-0"></div>

      {/* Stats + Tabs */}
      <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 mt-2 xs:mt-3 sm:mt-4 md:mt-6">
        <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-2xl">
          {/* Stats - 2x2 grid on mobile, 4 columns on larger */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-5 sm:mb-6">
            {Object.entries(mockProfile.stats).map(([key, value]) => (
              <div key={key} className="text-center p-1 xs:p-2 bg-zinc-800/30 rounded-lg xs:rounded-xl">
                <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                  {value.toLocaleString()}
                </div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-zinc-500 capitalize truncate">{key}</div>
              </div>
            ))}
          </div>

          {/* Tab Bar - Shows icons only on mobile, icons+text on larger screens */}
          <div className="flex border-b border-zinc-800 overflow-x-auto hide-scrollbar pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-1 sm:gap-2 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 text-xs xs:text-sm sm:text-base font-medium whitespace-nowrap transition-colors flex-shrink-0 min-w-[50px] xs:min-w-[60px] sm:min-w-[80px] md:min-w-[100px] ${
                  activeTab === tab.id
                    ? "border-b-2 border-rose-500 text-rose-400"
                    : "text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
                }`}
              >
                <span className="scale-90 xs:scale-100">{tab.icon}</span>
                {/* Show text on sm and up, hide on mobile */}
                <span className="hidden sm:inline">{tab.label}</span>
                {/* Show short label on mobile for better UX */}
                <span className="sm:hidden text-[10px] xs:text-xs">
                  {tab.id === "posts" ? "Posts" : 
                   tab.id === "briefs" ? "Briefs" : 
                   tab.id === "projects" ? "Proj" : 
                   tab.id === "about" ? "About" : "Activity"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - Responsive padding and grids */}
        <div className="mt-3 xs:mt-4 sm:mt-6 md:mt-8">
          {/* POSTS */}
          {activeTab === "posts" && (
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
              {[
                { title: "Midnight Reflections", type: "Lyrics", likes: 245, comments: 38 },
                { title: "Summer Vibes Beat", type: "Audio", likes: 892, comments: 124 },
                { title: "Abstract Visuals", type: "Video", likes: 1234, comments: 89 },
                { title: "Album Cover Design", type: "Photo", likes: 567, comments: 45 },
                { title: "Acoustic Demo", type: "Audio", likes: 423, comments: 67 },
                { title: "Urban Nights", type: "Lyrics", likes: 332, comments: 29 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl overflow-hidden hover:border-zinc-600 transition-colors group"
                >
                  <div className={`h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 xl:h-48 bg-gradient-to-br ${i % 2 === 0 ? "from-rose-900/40" : "from-indigo-900/40"} flex items-center justify-center`}>
                    <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-30">{item.type[0]}</div>
                  </div>
                  <div className="p-2 xs:p-3 sm:p-4 md:p-5">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <h3 className="text-xs xs:text-sm sm:text-base font-semibold truncate max-w-[100px] xs:max-w-[120px] sm:max-w-[150px] md:max-w-[180px]">
                        {item.title}
                      </h3>
                      <span className="text-[8px] xs:text-[10px] sm:text-xs bg-zinc-800 px-1 xs:px-1.5 sm:px-2.5 py-0.5 rounded-full whitespace-nowrap ml-1 xs:ml-2">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex gap-2 xs:gap-3 sm:gap-4 text-[10px] xs:text-xs sm:text-sm text-zinc-400">
                      <span>♥ {item.likes}</span>
                      <span>💬 {item.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* BRIEFS */}
          {activeTab === "briefs" && (
            <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5">
              {[
                {
                  title: "Looking for R&B Vocalist",
                  company: "Atlantic Records",
                  type: "Paid",
                  amount: "$2,000 - $5,000",
                  timeLeft: "5 days left",
                  submissions: 23,
                },
                {
                  title: "Summer Pop Track",
                  company: "Sony Music",
                  type: "Paid",
                  amount: "$5,000+",
                  timeLeft: "3 days left",
                  submissions: 45,
                },
                {
                  title: "Electronic Music Collaboration",
                  company: "Neon Pulse Records",
                  type: "Revenue Share",
                  amount: "30% revenue split",
                  timeLeft: "15 days left",
                  submissions: 12,
                },
              ].map((brief, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 hover:border-zinc-600 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 xs:gap-3 sm:gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold truncate">{brief.title}</h3>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-zinc-400 mt-0.5 truncate">with {brief.company}</p>
                    <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 mt-1 xs:mt-1.5 sm:mt-2 md:mt-3 text-[8px] xs:text-[10px] sm:text-xs md:text-sm">
                      <span className="bg-zinc-800 px-1.5 xs:px-2 sm:px-3 py-0.5 rounded-full whitespace-nowrap">
                        {brief.type}
                      </span>
                      <span className="text-rose-400 font-medium whitespace-nowrap">{brief.amount}</span>
                      <span className="text-zinc-500 whitespace-nowrap">{brief.timeLeft}</span>
                      <span className="text-zinc-500 whitespace-nowrap hidden xs:inline">{brief.submissions} submissions</span>
                    </div>
                  </div>
                
                  <Link href="/home/profile/profile-brief-details" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-lg border border-zinc-700 whitespace-nowrap text-[10px] xs:text-xs sm:text-sm">
                      View
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* PROJECTS */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
              {[
                { title: "Midnight Echoes Album", progress: 65, daysAgo: 2, collaborators: 3, files: 24, status: "In Progress" },
                { title: "Summer Vibes EP", progress: 40, daysAgo: 7, collaborators: 2, files: 18, status: "In Progress" },
                { title: "Urban Nights Single", progress: 100, daysAgo: 14, collaborators: 2, files: 12, status: "Completed" },
                { title: "Acoustic Sessions", progress: 25, daysAgo: 3, collaborators: 3, files: 8, status: "In Progress" },
              ].map((proj, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 hover:border-zinc-600 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2 xs:mb-3 sm:mb-4">
                    <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 min-w-0">
                      <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-600/30 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Music size={12} className="xs:size-3 sm:size-4 md:size-5 lg:size-[22px] text-indigo-400" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs xs:text-sm sm:text-base font-semibold truncate max-w-[120px] xs:max-w-[150px] sm:max-w-[180px]">
                          {proj.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1 mt-0.5">
                          <span
                            className={`text-[8px] xs:text-[10px] sm:text-xs px-1 xs:px-1.5 sm:px-2.5 py-0.5 rounded-full inline-block whitespace-nowrap ${
                              proj.status === "Completed"
                                ? "bg-emerald-950 text-emerald-400 border border-emerald-900/50"
                                : "bg-blue-950 text-blue-400 border border-blue-900/50"
                            }`}
                          >
                            {proj.status}
                          </span>
                          <span className="text-[8px] xs:text-[10px] sm:text-xs text-zinc-400">{proj.daysAgo}d ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2 xs:mb-3 sm:mb-4">
                    <div className="flex justify-between text-[8px] xs:text-[10px] sm:text-xs text-zinc-400 mb-1">
                      <span>Progress</span>
                      <span>{proj.progress}%</span>
                    </div>
                    <div className="h-1 xs:h-1.5 sm:h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          proj.progress === 100 ? "bg-emerald-500" : "bg-rose-600"
                        }`}
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-zinc-400 mb-2 xs:mb-3 sm:mb-4">
                    <div className="flex items-center gap-0.5 xs:gap-1">
                      <Users size={10} className="xs:size-3 sm:size-3 md:size-4" />
                      <span className="truncate hidden xs:inline">{proj.collaborators} Collab</span>
                      <span className="xs:hidden">{proj.collaborators}</span>
                    </div>
                    <div className="flex items-center gap-0.5 xs:gap-1">
                      <FileText size={10} className="xs:size-3 sm:size-3 md:size-4" />
                      <span className="truncate hidden xs:inline">{proj.files} files</span>
                      <span className="xs:hidden">{proj.files}</span>
                    </div>
                  </div>

                  <Link href="/home/projects/open-project">
                    <button className="w-full bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white font-medium py-1.5 xs:py-2 sm:py-2.5 rounded-lg border border-zinc-700 transition-colors text-[10px] xs:text-xs sm:text-sm">
                      Open
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* ABOUT */}
          {activeTab === "about" && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 max-w-4xl mx-auto">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6">About</h2>

              <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                <div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-1.5 xs:mb-2 sm:mb-3">Bio</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-zinc-300 leading-relaxed">
                    Award-winning R&B and Soul producer with over 8 years of experience crafting emotive soundscapes. Specializing in lush production, analog warmth, and contemporary R&B aesthetics.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-1.5 xs:mb-2 sm:mb-3">Genres & Skills</h3>
                  <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
                    {["R&B", "Soul", "Neo-Soul", "Alt R&B", "Vocal", "Analog", "Production", "Mixing", "Sound Design"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="bg-zinc-800 px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-[8px] xs:text-[10px] sm:text-xs md:text-sm border border-zinc-700"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-1.5 xs:mb-2 sm:mb-3">Equipment</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-zinc-300">
                    Logic Pro X, Ableton Live, Apollo, Neumann U87, Komplete, FabFilter
                  </p>
                </div>

                <div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-1.5 xs:mb-2 sm:mb-3">Looking For</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-zinc-300">
                    Vocalists and songwriters for R&B/Soul projects. Open to collaborations.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ACTIVITY */}
          {activeTab === "activity" && (
            <div className="space-y-2 xs:space-y-3 sm:space-y-4 max-w-3xl mx-auto">
              {[
                { action: "released a new track", title: "Midnight Dreams", time: "2d ago" },
                { action: "collaborated on", title: "Sunset Sessions", time: "1w ago" },
                { action: "joined the brief", title: "Atlantic Records - R&B", time: "2w ago" },
              ].map((act, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 hover:border-zinc-600 transition-colors"
                >
                  <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-zinc-300">
                    <span className="font-medium text-rose-400">{mockProfile.name}</span>{" "}
                    {act.action}{" "}
                    <span className="font-medium block xs:inline mt-0.5 xs:mt-0">{act.title}</span>
                  </p>
                  <p className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-zinc-500 mt-0.5 xs:mt-1 sm:mt-2">{act.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hide scrollbar for tab navigation */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}