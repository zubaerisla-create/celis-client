// components/NetworkFeed.tsx
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
  Flag,
  EyeOff,
  ExternalLink,
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
    comments: [
      { id: 1, user: "Taylor Brooks", text: "This is fire 🔥 Would love to collaborate", time: "1 hour ago", likes: 12 },
      { id: 2, user: "Jamie Foster", text: "Amazing work! The production quality is top-notch", time: "45 min ago", likes: 8 },
      { id: 3, user: "Alex Rivera", text: "The lyrics really hit home. Can't wait to hear the full version!", time: "30 min ago", likes: 5 },
      { id: 4, user: "Maya Johnson", text: "I can totally hear this with a chill R&B beat", time: "20 min ago", likes: 3 },
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
    comments: [
      { id: 1, user: "Chris Martin", text: "Love this vibe! Can I use this for my next track?", time: "4 hours ago", likes: 15 },
      { id: 2, user: "Nina Kraviz", text: "The drop at 1:30 is insane 🔥", time: "3 hours ago", likes: 23 },
      { id: 3, user: "David Guetta", text: "Great production quality. Let's connect!", time: "2 hours ago", likes: 45 },
    ],
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
    comments: [
      { id: 1, user: "Peggy Gou", text: "The visuals are stunning! Would love to work together", time: "20 hours ago", likes: 34 },
      { id: 2, user: "Carl Cox", text: "Perfect for my next set! 🔥", time: "18 hours ago", likes: 28 },
      { id: 3, user: "Charlotte de Witte", text: "Dark and moody. Love it!", time: "15 hours ago", likes: 19 },
      { id: 4, user: "Amelie Lens", text: "The color grading is exceptional", time: "12 hours ago", likes: 12 },
    ],
  },
  // You can add more posts with type: "photo", "lyrics", etc.
];

// ────────────────────────────────────────────────
export default function NetworkFeed() {
  const [activeTab, setActiveTab] = useState<"all" | "lyrics" | "audio" | "video" | "photos" | "saved">("all");
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [expandedComments, setExpandedComments] = useState<number[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleComments = (postId: number) => {
    setExpandedComments(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

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

  const handleDropdownAction = (action: string, postId: number) => {
    console.log(`${action} post ${postId}`);
    setOpenDropdownId(null);
    // Add your logic here for report, hide, share
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Fixed Header Container */}
   {/* Fixed Header Container */}
      <div className="fixed left-0 top-0 right-0 ">
        {/* Top bar - Shows by default, hides on scroll with blur effect */}
        <div className={`bg-black/90 backdrop-blur-md pt-5 border-b border-gray-800 transition-all duration-300 ${
          isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}>
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-xl font-bold">Latest work from your network</h1>
          </div>
        </div>

        {/* Fixed Tabs - Always visible */}
        <div className={`bg-black/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}>
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex gap-1 py-2 items-center justify-between">
              <div className="flex gap-1 overflow-x-auto scrollbar-hide">
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
                      {Icon && <Icon size={1} />}
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <Link href="/home/create-post">
                <button className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap ml-2">
                  <Plus size={18} /> Create Post
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-3xl mx-auto px-4 pt-16 py-6">
        <div className="space-y-6">
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
                  
                  {/* Three dots dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setOpenDropdownId(openDropdownId === post.id ? null : post.id)}
                      className="text-gray-400 hover:text-gray-200 px-2"
                    >
                      •••
                    </button>

                    {/* Dropdown menu */}
                    {openDropdownId === post.id && (
                      <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg z-50 overflow-hidden">
                        <button
                          onClick={() => handleDropdownAction('report', post.id)}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
                        >
                          Report
                        </button>
                        <button
                          onClick={() => handleDropdownAction('hide', post.id)}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
                        >
                          Hide
                        </button>
                        <button
                          onClick={() => handleDropdownAction('share', post.id)}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
                        >
                          Share
                        </button>
                      </div>
                    )}
                  </div>
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
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                        <Play size={32} className="text-white ml-1" fill="white" />
                      </div>
                    </button>
                  </div>
                )}

                {/* Stats + actions */}
                <div className="px-4 py-3 border-t border-gray-800 flex items-center justify-between text-sm">
                  <div className="flex gap-6">
                    <button className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
                      <Heart size={18} /> {post.stats.likes}
                    </button>
                    <button 
                      onClick={() => toggleComments(post.id)}
                      className={`flex items-center gap-1.5 transition-colors ${
                        expandedComments.includes(post.id) ? 'text-blue-400' : 'hover:text-blue-400'
                      }`}
                    >
                      <MessageCircle size={18} /> {post.stats.comments}
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
                      <Share2 size={18} /> {post.stats.shares || 0}
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-yellow-400 transition-colors">
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
                  <button className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                    Post
                  </button>
                </div>

                {/* Comments section */}
                {post.comments && post.comments.length > 0 && (
                  <div className="border-t border-gray-800">
                    {/* Preview comments (first 2) - shown when not expanded */}
                    {!expandedComments.includes(post.id) && (
                      <div className="px-4 py-3 space-y-3 text-sm">
                        {post.comments.slice(0, 2).map((comment) => (
                          <div key={comment.id} className="flex justify-between items-start">
                            <div>
                              <span className="font-medium">{comment.user}</span>
                              <span className="text-gray-300"> {comment.text}</span>
                            </div>
                            <button className="text-gray-400 hover:text-red-400 text-xs flex items-center gap-1">
                              <Heart size={12} /> {comment.likes}
                            </button>
                          </div>
                        ))}
                        
                        {/* View all comments button - only if more than 2 comments */}
                        {post.comments.length > 2 && (
                          <button
                            onClick={() => toggleComments(post.id)}
                            className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-2"
                          >
                            View all {post.comments.length} comments
                          </button>
                        )}
                      </div>
                    )}

                    {/* All comments - shown when expanded */}
                    {expandedComments.includes(post.id) && (
                      <div className="px-4 py-3 space-y-4 text-sm">
                        {post.comments.map((comment) => (
                          <div key={comment.id} className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{comment.user}</span>
                                <span className="text-xs text-gray-500">{comment.time}</span>
                              </div>
                              <p className="text-gray-300 mt-0.5">{comment.text}</p>
                            </div>
                            <button className="text-gray-400 hover:text-red-400 text-xs flex items-center gap-1">
                              <Heart size={12} /> {comment.likes}
                            </button>
                          </div>
                        ))}
                        
                        {/* Hide comments button */}
                        <button
                          onClick={() => toggleComments(post.id)}
                          className="text-gray-400 hover:text-gray-300 text-sm font-medium mt-2"
                        >
                          Hide comments
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}