// app/profile/[username]/page.tsx    (or components/ProfilePage.tsx)
"use client";

import Image from "next/image";
import { Mail, Link as LinkIcon, MapPin, Calendar, Share2, MessageCircle, UserPlus, FlagIcon, Flag } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

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
    gradient: "from-[#E54FA9]/40 to-[#831CDF]/40",
  },
  {
    title: "Summer Vibes Beat",
    description: "Tropical house beat available",
    type: "beat",
    likes: 892,
    comments: 124,
    media: "audio",
    waveform: true,
    gradient: "from-[#831CDF]/40 to-[#E54FA9]/40",
  },
  // ... more items
];

const briefs = [
  {
    title: "Looking for R&B Vocalist",
    with: "with Atlantic Records",
    paid: "$2,000 – $5,000",
    timeLeft: "5 days left",
    paidStatus: "Paid",
    submissions: 23,
    gradient: "from-[#E54FA9]/20",
  },
  {
    title: "Summer Pop Track",
    with: "with Sony Music",
    paid: "$5,000",
    timeLeft: "3 days left",
    paidStatus:"Revenue Share",
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
  
  // Moved hooks inside the component
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Flag");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
   "Block",
   "Report"
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="flex flex-col md:flex-row md:items-end gap-6">
          {/* Avatar */}
          <div className="relative -mt-20">
            <div className="w-36 h-36 rounded-full border-4 border-[#E54FA9] overflow-hidden relative shadow-lg shadow-[#831CDF]/30">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                    {profile.name}
                  </span>
                </h1>
                <p className="text-gray-400 mt-1">{profile.role}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 items-center">
                <button className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] px-5 py-2.5 rounded-full flex items-center gap-2 transition shadow-lg shadow-[#831CDF]/30 active:scale-[0.98]">
                  <UserPlus size={18} />
                  Connect
                </button>

                <Link href="/home/message">
                  <button className="bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-5 py-2.5 rounded-full flex items-center gap-2 transition group">
                    <MessageCircle size={18} className="group-hover:text-white" />
                    <span className="group-hover:text-white">Message</span>
                  </button>
                </Link>

                <button className="bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] p-2.5 rounded-full transition group">
                  <Share2 size={18} className="group-hover:text-white" />
                </button>

                {/* Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] p-2.5 rounded-full transition flex items-center gap-1 group"
                  >
                    <Flag size={18} className="group-hover:text-white" />
                    <ChevronDown
                      className={`w-4 h-4 transition-transform group-hover:text-white ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg z-50 overflow-hidden">
                      {options.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                          }}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-zinc-300 hover:bg-gradient-to-r hover:from-[#E54FA9]/10 hover:to-[#831CDF]/10 transition-colors group"
                        >
                          <span className="group-hover:text-[#E54FA9]">{option}</span>
                          {selected === option && (
                            <Check className="w-4 h-4 text-[#E54FA9] shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Info Row */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-[#E54FA9]" />
                {profile.location}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={16} className="text-[#E54FA9]" />
                {profile.joined}
              </div>
              <div className="flex items-center gap-1.5">
                <LinkIcon size={16} className="text-[#E54FA9]" />
                <a
                  href={`https://${profile.website}`}
                  className="hover:text-[#E54FA9] transition-colors"
                >
                  {profile.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {Object.entries(profile.stats).map(([key, value]) => (
            <div
              key={key}
              className="bg-black/40 border border-gray-800 rounded-lg p-4 text-center hover:border-[#E54FA9]/50 transition-all group"
            >
              <div className="text-2xl font-bold text-[#E54FA9]">{value}</div>
              <div className="text-gray-500 text-sm capitalize group-hover:text-[#E54FA9] transition-colors">{key}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-800 mt-8">
          <div className="flex overflow-x-auto">
            {(["posts", "briefs", "about", "activity"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] py-4 px-6 text-center font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-[#E54FA9] text-[#E54FA9]"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-[#E54FA9]/50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
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
                      {post.type === "lyrics" && <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] px-3 py-1 rounded-full text-xs text-white">Lyrics</span>}
                      {post.type === "beat" && <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] px-3 py-1 rounded-full text-xs text-white">Beat</span>}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-[#E54FA9] transition-colors">{post.title}</h3>
                      <p className="text-sm text-gray-300 mt-1 line-clamp-2 group-hover:text-white transition-colors">{post.description}</p>
                      {post.waveform && (
                        <div className="mt-3 h-10 bg-gradient-to-r from-[#E54FA9]/30 to-[#831CDF]/30 rounded flex items-center justify-center text-xs">
                          Waveform placeholder
                        </div>
                      )}
                      <div className="mt-3 flex gap-4 text-sm">
                        <span className="group-hover:text-[#E54FA9] transition-colors">♥ {post.likes}</span>
                        <span className="group-hover:text-[#E54FA9] transition-colors">💬 {post.comments}</span>
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
                  className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 hover:border-[#E54FA9]/50 transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-[#E54FA9] transition-colors">{brief.title}</h3>
                      <p className="text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">{brief.with}</p>
                    </div>
                    <button className="bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-5 py-2 rounded-full text-sm font-medium transition-all group/btn">
                      <span className="group-hover/btn:text-white">View</span>
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] p-1 pl-4 pr-4 rounded-full text-white" >{brief.paidStatus}</span>
                    {brief.paid && <span className="font-medium text-[#E54FA9]">{brief.paid}</span>}
                    <span className="group-hover:text-[#E54FA9] transition-colors">{brief.timeLeft}</span>
                    <span className="group-hover:text-[#E54FA9] transition-colors">{brief.submissions} submissions</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "about" && (
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 md:p-8 space-y-8 hover:border-[#E54FA9]/50 transition-all">
              <div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Bio</h3>
                <p className="text-gray-300 leading-relaxed">{about.bio}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Genres & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {about.genres.map((g) => (
                    <span key={g} className="bg-gray-800 px-3 py-1.5 rounded-full text-sm hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] hover:text-white transition-all">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Equipment & Software</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300">
                  {about.equipment.map((item) => (
                    <li key={item} className="hover:text-[#E54FA9] transition-colors">• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Looking For</h3>
                <p className="text-gray-300 hover:text-[#E54FA9] transition-colors">{about.lookingFor}</p>
              </div>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="space-y-4">
              {activity.map((item, i) => (
                <div key={i} className="bg-gray-900/40 border border-gray-800 rounded-lg p-5 hover:border-[#E54FA9]/50 transition-all group">
                  <p className="font-medium group-hover:text-[#E54FA9] transition-colors">{item.text}</p>
                  <p className="text-gray-500 text-sm mt-1 group-hover:text-[#E54FA9] transition-colors">{item.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}