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
      {/* Header / Banner */}
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
              <button className="bg-rose-600 hover:bg-rose-700 px-6 py-2.5 rounded-lg font-medium flex items-center gap-2">
                <MessageCircle size={16} /> Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats + Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-xl p-5 md:p-6 shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {Object.entries(mockProfile.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-2xl md:text-3xl font-bold">
                  {value.toLocaleString()}
                </div>
                <div className="text-sm text-zinc-500 capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Tab Bar */}
          <div className="flex border-b border-zinc-800 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 md:px-8 py-4 text-sm md:text-base font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "border-b-2 border-rose-500 text-rose-400"
                    : "text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
              
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {/* POSTS */}
          {activeTab === "posts" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors group"
                >
                  <div className={`h-48 bg-gradient-to-br ${i % 2 === 0 ? "from-rose-900/40" : "from-indigo-900/40"} flex items-center justify-center`}>
                    <div className="text-6xl opacity-30">{item.type[0]}</div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm text-zinc-400">
                      <span>♥ {item.likes}</span>
                      <span>💬 {item.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* BRIEFS */}
  <Link href="/home/profile/brief-details" >
   
          {activeTab === "briefs" && (
            <div className="space-y-5">
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
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{brief.title}</h3>
                    <p className="text-sm text-zinc-400 mt-1">with {brief.company}</p>
                    <div className="flex flex-wrap gap-3 mt-3 text-sm">
                      <span className="bg-zinc-800 px-3 py-1 rounded-full">
                        {brief.type}
                      </span>
                      <span className="text-rose-400 font-medium">{brief.amount}</span>
                      <span className="text-zinc-500">{brief.timeLeft}</span>
                      <span className="text-zinc-500">{brief.submissions} submissions</span>
                    </div>
                  </div>
                
                  <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-2.5 rounded-lg border border-zinc-700 whitespace-nowrap">
                    View
                  </button>
             
                </div>
              ))}
            </div>
          )}
   </Link>

          {/* PROJECTS */}
          {activeTab === "projects" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Midnight Echoes Album", progress: 65, daysAgo: 2, collaborators: 3, files: 24, status: "In Progress" },
                { title: "Summer Vibes EP", progress: 40, daysAgo: 7, collaborators: 2, files: 18, status: "In Progress" },
                { title: "Urban Nights Single", progress: 100, daysAgo: 14, collaborators: 2, files: 12, status: "Completed" },
                { title: "Acoustic Sessions", progress: 25, daysAgo: 3, collaborators: 3, files: 8, status: "In Progress" },
              ].map((proj, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600/30 to-purple-600/20 rounded-lg flex items-center justify-center">
                        <Music size={22} className="text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{proj.title}</h3>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full mt-1 inline-block ${
                            proj.status === "Completed"
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-900/50"
                              : "bg-blue-950 text-blue-400 border border-blue-900/50"
                          }`}
                        >
                          {proj.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-zinc-400 mb-1">
                      <span>Progress</span>
                      <span>{proj.progress}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          proj.progress === 100 ? "bg-emerald-500" : "bg-rose-600"
                        }`}
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-zinc-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Users size={16} />
                      {proj.collaborators} Collaborators
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FileText size={16} />
                      {proj.files} files
                    </div>
                  </div>

                  <button className="w-full bg-zinc-800 hover:bg-zinc-700 py-2.5 rounded-lg border border-zinc-700 text-sm font-medium">
                    Open Project
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* ABOUT */}
          {activeTab === "about" && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">About</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Bio</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Award-winning R&B and Soul producer with over 8 years of experience crafting emotive soundscapes. Specializing in lush production, analog warmth, and contemporary R&B aesthetics. I've worked with emerging artists and established acts, bringing stories to life through sound.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Genres & Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["R&B", "Soul", "Neo-Soul", "Alternative R&B", "Vocal Production", "Analog Recording", "Production", "Mixing", "Sound Design"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="bg-zinc-800 px-3 py-1.5 rounded-full text-sm border border-zinc-700"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Equipment & Software</h3>
                  <p className="text-zinc-300">
                    Logic Pro X, Ableton Live, Universal Audio Apollo, Neumann U87, Native Instruments Komplete, FabFilter Suite, Waves Platinum
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Looking For</h3>
                  <p className="text-zinc-300">
                    Vocalists and songwriters for R&B and Soul projects. Open to collaborations with visual artists for music video projects.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ACTIVITY */}
          {activeTab === "activity" && (
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                { action: "released a new track", title: "Midnight Dreams", time: "2 days ago" },
                { action: "collaborated on", title: "Sunset Sessions with Marcus Williams", time: "1 week ago" },
                { action: "joined the brief", title: "Atlantic Records - R&B Vocalist", time: "2 weeks ago" },
              ].map((act, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors"
                >
                  <p className="text-zinc-300">
                    <span className="font-medium text-rose-400">{mockProfile.name}</span>{" "}
                    {act.action}{" "}
                    <span className="font-medium">{act.title}</span>
                  </p>
                  <p className="text-sm text-zinc-500 mt-1">{act.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}