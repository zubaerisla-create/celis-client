// components/NetworkFeed.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Play,
  Mic2,
  Image as ImageIcon,
  Video as VideoIcon,
  Music,
  FileText,
  Plus,
} from "lucide-react";
import Link from "next/link";

// ────────────────────────────────────────────────
// Mock data — in real app → fetch from API / Supabase / Firebase
// ────────────────────────────────────────────────
const feedPosts = [
  {
    id: 1,
    user: { name: "Sarah Chen", role: "Songwriter", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80" },
    time: "2 hours ago",
    type: "lyrics",
    title: "Midnight Reflections",
    content: "New song I've been working on. Looking for producer collaboration!\n\n[Verse 1]\nDancing in moonlight, shadows on the wall\nMemories of summer nights, I still recall\nYour voice echoes through my mind, like a sweet refrain\nNow I'm standing here alone, learning to feel again\n\n[Chorus]\nMidnight reflections in my soul\nTrying to find a way to let you go\nStars are fading, but I'm holding on\nTo these midnight reflections 'til the dawn",
    stats: { likes: 245, comments: 52, shares: 18 },
    commentsPreview: [
      { user: "Taylor Brooks", text: "This is fire 🔥 Would love to collaborate" },
      { user: "Jamie Foster", text: "Amazing work! The production quality is top-notch" },
    ],
  },
  {
    id: 2,
    user: { name: "Marcus Williams", role: "Producer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80" },
    time: "5 hours ago",
    type: "audio",
    title: "Summer Vibes Beat",
    description: "Tropical house beat available for collaboration. DM me!",
    audioDuration: "3:45",
    waveformPlaceholder: true,
    stats: { likes: 892, comments: 124, plays: 2670 },
  },
  {
    id: 3,
    user: { name: "Jordan Lee", role: "Visual Artist", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80" },
    time: "1 day ago",
    type: "video",
    title: "Abstract Visuals • Music Video Concept",
    description: "New visual concept for electronic music. Open for collaborations!",
    videoThumbnail: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400",
    stats: { likes: 1234, comments: 156, shares: 89 },
  },
  // You can add more posts with type: "photo", "lyrics", etc.
];

// ────────────────────────────────────────────────
export default function NetworkFeed() {
  const [activeTab, setActiveTab] = useState<"all" | "lyrics" | "audio" | "video" | "photos" | "saved">("all");

  const filteredPosts = activeTab === "all"
    ? feedPosts
    : feedPosts.filter(p => p.type === activeTab);

  const tabs = [
    { id: "all", label: "All Posts", icon: null },
    { id: "lyrics", label: "Lyrics", icon: FileText },
    { id: "audio", label: "Audio", icon: Music },
    { id: "video", label: "Video", icon: VideoIcon },
    { id: "photos", label: "Photos", icon: ImageIcon },
    { id: "saved", label: "Saved", icon: Bookmark },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 pb-20">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Latest work from your network</h1>
     <Link href="/home/create-post" >
     
          <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-medium flex items-center gap-2 transition">
            <Plus size={18} /> Create Post
          </button>
     </Link>
        </div>

        {/* Tabs */}
        <div className="max-w-3xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-900/50"
                  }`}
                >
                  {Icon && <Icon size={16} />}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No posts found in this category yet
          </div>
        ) : (
          filteredPosts.map(post => (
            <div
              key={post.id}
              className="bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors"
            >
              {/* Post header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={post.user.avatar}
                    alt={post.user.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">{post.user.name}</div>
                    <div className="text-sm text-gray-400">{post.user.role} • {post.time}</div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-200">
                  •••
                </button>
              </div>

              {/* Content */}
              <div className="px-4 pb-3">
                {post.title && (
                  <h3 className="font-bold text-lg mb-1">「 {post.title} 」</h3>
                )}
                <p className="text-gray-200 whitespace-pre-line leading-relaxed">
                  {post.content || post.description}
                </p>
              </div>

              {/* Media preview */}
              {post.type === "audio" && (
                <div className="px-4 pb-4">
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <button className="bg-red-600 p-3 rounded-full">
                        <Play size={20} fill="white" />
                      </button>
                      <div className="flex-1">
                        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-3/5 h-full bg-red-500 rounded-full" />
                        </div>
                      </div>
                      <span className="text-sm text-gray-400">{post.audioDuration}</span>
                    </div>
                  </div>
                </div>
              )}

              {post.type === "video" && post.videoThumbnail && (
                <div className="relative aspect-video bg-black">
                  <Image
                    src={post.videoThumbnail}
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center">
                    <Play size={64} className="text-white/80 drop-shadow-lg" fill="white" />
                  </button>
                </div>
              )}

              {/* Stats + actions */}
              <div className="px-4 py-3 border-t border-gray-800 flex items-center justify-between text-sm">
                <div className="flex gap-6">
                  <button className="flex items-center gap-1.5 hover:text-red-400">
                    <Heart size={18} /> {post.stats.likes}
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-blue-400">
                    <MessageCircle size={18} /> {post.stats.comments}
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-green-400">
                    <Share2 size={18} /> {post.stats.shares || 0}
                  </button>
                </div>
                <button className="text-gray-400 hover:text-yellow-400">
                  <Bookmark size={18} />
                </button>
              </div>

              {/* Comment input */}
              <div className="px-4 py-3 border-t border-gray-800 flex items-center gap-3 bg-black/40">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full text-sm font-medium">
                  Post
                </button>
              </div>

              {/* Comment preview */}
              {post.commentsPreview && post.commentsPreview.length > 0 && (
                <div className="px-4 py-3 border-t border-gray-800 space-y-3 text-sm">
                  {post.commentsPreview.map((c, i) => (
                    <div key={i}>
                      <span className="font-medium">{c.user}</span>
                      <span className="text-gray-300"> {c.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}