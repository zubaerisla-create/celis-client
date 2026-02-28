// app/profile/[username]/page.tsx    (or components/ProfilePage.tsx)
"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Link as LinkIcon, MapPin, Calendar, Share2, MessageCircle, UserPlus, FlagIcon } from "lucide-react";
import Link from "next/link";

// ────────────────────────────────────────────────
// Mock data — replace with real data fetching later
// ────────────────────────────────────────────────
const profile = {
  name: "Sarah Chen",
  username: "sarahchen",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  banner: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
  role: "Producer • R&B & Soul Specialist",
  location: "Los Angeles, CA",
  joined: "Joined January 2025",
  website: "sarahchen.com",
  stats: { posts: 47, briefs: 5, connections: 892, ProfileViews: "12.4K" },
  launch: true, // blue verified / launch badge
};

const posts = [
  {
    title: "Midnight Reflections",
    description: "I've been working on...",
    type: "lyrics",
    likes: 245,
    comments: 38,
    media: "audio",
    gradient: "from-amber-900 to-rose-950",
  },
  {
    title: "Summer Vibes Beat",
    description: "Tropical house beat available",
    type: "beat",
    likes: 892,
    comments: 124,
    media: "audio",
    waveform: true,
    gradient: "from-blue-950 to-indigo-950",
  },
  // ... more items
];

const briefs = [
  {
    title: "Looking for R&B Vocalist",
    with: "with Atlantic Records",
    paid: "$2,000 – $5,000",
    timeLeft: "5 days left",
    submissions: 23,
    gradient: "from-red-950/80",
  },
  {
    title: "Summer Pop Track",
    with: "with Sony Music",
    paid: "$5,000",
    timeLeft: "3 days left",
    submissions: 49,
  },
  // ...
];

const about = {
  bio: "Award-winning R&B and Soul producer with over 8 years of experience crafting emotive soundscapes. Specializing in lush production, analog warmth, and contemporary R&B aesthetics. I've worked with emerging artists and established acts, bringing stories to life through sound.",
  genres: ["R&B", "Soul", "Neo-Soul", "Alternative R&B", "Vocal Production", "Analog Recording"],
  skills: ["Production", "Mixing", "Sound Design", "Vocal Production", "Analog Recording"],
  equipment: [
    "Logic Pro X",
    "Ableton Live",
    "Universal Audio Apollo",
    "Neumann U87",
    "Native Instruments Komplete",
    "Waves Platinum",
    "FabFilter Suite",
  ],
  lookingFor: "Vocalists and songwriters for R&B and Soul projects. Open to collaborations with visual artists for music video projects.",
};

const activity = [
  { text: "released a new track Midnight Dreams", time: "2 days ago" },
  { text: "collaborated on Sunset Sessions with Marcus Williams", time: "1 week ago" },
  { text: "joined the brief Atlantic Records - R&B Vocalist", time: "2 weeks ago" },
];

// ────────────────────────────────────────────────
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"posts" | "briefs" | "about" | "activity">("posts");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src={profile.banner}
          alt="Banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Profile header card */}
        <div className="bg-gradient-to-b from-gray-900/90 to-black border border-gray-800 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              {/* Avatar */}
              <div className="relative -mt-16 md:-mt-24">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black overflow-hidden">
                  <Image src={profile.avatar} alt={profile.name} fill className="object-cover" />
                </div>
                {profile.launch && (
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full border-2 border-black">
                    Launch
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{profile.name}</h1>
                    <p className="text-gray-400 mt-1">{profile.role}</p>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <button className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition">
                      <UserPlus size={18} /> Connect
                    </button>
         <Link href="/home/message">
         
                    <button className="bg-gray-800 hover:bg-gray-700 px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition">
                      <MessageCircle size={18} /> Message
                    </button>
         </Link>
                    <button className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full transition">
                      <Share2 size={18} />
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full transition">
                      <FlagIcon size={18} />
                    </button>

                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} /> {profile.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} /> {profile.joined}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <LinkIcon size={16} />
                    <a href={`https://${profile.website}`} className="hover:text-blue-400">
                      {profile.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {Object.entries(profile.stats).map(([key, value]) => (
                <div key={key} className="bg-black/40 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="text-gray-500 text-sm capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-800">
            <div className="flex overflow-x-auto">
              {(["posts", "briefs", "about", "activity"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-[100px] py-4 px-6 text-center font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-red-600 text-white"
                      : "border-transparent text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-8">
          {activeTab === "posts" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <div
                  key={i}
                  className={`aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br ${post.gradient} relative group cursor-pointer hover:scale-[1.02] transition-transform`}
                >
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div className="flex justify-end">
                      {post.type === "lyrics" && <span className="bg-black/60 px-3 py-1 rounded-full text-xs">Lyrics</span>}
                      {post.type === "beat" && <span className="bg-black/60 px-3 py-1 rounded-full text-xs">Beat</span>}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{post.title}</h3>
                      <p className="text-sm text-gray-300 mt-1 line-clamp-2">{post.description}</p>
                      {post.waveform && (
                        <div className="mt-3 h-10 bg-black/30 rounded flex items-center justify-center text-xs">
                          Waveform placeholder
                        </div>
                      )}
                      <div className="mt-3 flex gap-4 text-sm">
                        <span>♥ {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "briefs" && (
            <div className="space-y-4">
              {briefs.map((brief, i) => (
                <div
                  key={i}
                  className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{brief.title}</h3>
                      <p className="text-gray-400 mt-1">{brief.with}</p>
                    </div>
                    <button className="bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-full text-sm font-medium">
                      View
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
                    {brief.paid && <span className="font-medium text-green-400">{brief.paid}</span>}
                    <span>{brief.timeLeft}</span>
                    <span>{brief.submissions} submissions</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "about" && (
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 md:p-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Bio</h3>
                <p className="text-gray-300 leading-relaxed">{about.bio}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Genres & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {about.genres.map((g) => (
                    <span key={g} className="bg-gray-800 px-3 py-1.5 rounded-full text-sm">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Equipment & Software</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300">
                  {about.equipment.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Looking For</h3>
                <p className="text-gray-300">{about.lookingFor}</p>
              </div>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="space-y-4">
              {activity.map((item, i) => (
                <div key={i} className="bg-gray-900/40 border border-gray-800 rounded-lg p-5">
                  <p className="font-medium">{item.text}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}