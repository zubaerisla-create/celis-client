// components/CreatePost.tsx
"use client";

import { useState } from "react";
import { ArrowLeft, FileText, Music, Video, Image as ImageIcon, Upload, ChevronDown } from "lucide-react";

type PostType = "lyrics" | "audio" | "video" | "photo" | null;

const GENRES = [
  "Pop", "Hip-Hop", "R&B", "Rock", "Electronic", "Jazz",
  "Country", "Alternative", "Soul", "Indie"
];

export default function CreatePost() {
  const [step, setStep] = useState<"select" | "form">("select");
  const [postType, setPostType] = useState<PostType>(null);

  const selectType = (type: PostType) => {
    setPostType(type);
    setStep("form");
  };

  const changeType = () => {
    setPostType(null);
    setStep("select");
  };

  const getTypeIcon = () => {
    switch (postType) {
      case "lyrics": return <FileText className="w-5 h-5 text-[#E54FA9]" />;
      case "audio":  return <Music className="w-5 h-5 text-[#E54FA9]" />;
      case "video":  return <Video className="w-5 h-5 text-[#E54FA9]" />;
      case "photo":  return <ImageIcon className="w-5 h-5 text-[#E54FA9]" />;
      default: return null;
    }
  };

  const getTypeLabel = () => {
    if (!postType) return "";
    return postType.charAt(0).toUpperCase() + postType.slice(1) + " Post";
  };

  const getUploadLabel = () => {
    switch (postType) {
      case "audio": return "Upload Audio *";
      case "video": return "Upload Video *";
      case "photo": return "Upload Photo *";
      default: return "Upload";
    }
  };

  const getFileFormats = () => {
    switch (postType) {
      case "audio": return "MP3, WAV, FLAC (max 100MB)";
      case "video": return "MP4, MOV, AVI (max 500MB)";
      case "photo": return "PNG, JPG, JPEG (max 10MB)";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 pb-10">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <button 
            onClick={() => step === "form" ? changeType() : window.history.back()}
            className="text-gray-300 hover:text-[#E54FA9] transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">
            <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Create
            </span>{' '}
            Post
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-6">
        {step === "select" ? (
          <>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Create Post</h2>
              <p className="text-gray-400">
                Share your work with the SPARTST community
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { type: "lyrics", icon: FileText, label: "Lyrics", desc: "Share song lyrics and written content" },
                { type: "audio",  icon: Music,    label: "Audio",  desc: "Upload audio tracks and beats" },
                { type: "video",  icon: Video,    label: "Video",  desc: "Share music videos and visual content" },
                { type: "photo",  icon: ImageIcon,label: "Photo",  desc: "Upload images and album artwork" },
              ].map(item => (
                <button
                  key={item.type}
                  onClick={() => selectType(item.type as PostType)}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-[#E54FA9]/50 transition-all group text-left"
                >
                  <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-[#E54FA9]/20 group-hover:to-[#831CDF]/20 transition-colors">
                    <item.icon size={28} className="text-[#E54FA9] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-[#E54FA9] transition-colors">{item.label}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.desc}</p>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Form Header */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6 flex items-center justify-between hover:border-[#E54FA9]/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 rounded-lg flex items-center justify-center">
                  {getTypeIcon()}
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  {getTypeLabel()}
                </h2>
              </div>
              <button
                onClick={changeType}
                className="text-sm text-[#E54FA9] hover:text-[#D63F99] flex items-center gap-1 transition-colors"
              >
                Change Type <ChevronDown size={16} />
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Title <span className="text-[#E54FA9]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Give your post a title..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  rows={3}
                  placeholder="Add a description or context for your post..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all resize-none"
                />
              </div>

              {/* Type-specific field */}
              {postType === "lyrics" ? (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Lyrics <span className="text-[#E54FA9]">*</span>
                  </label>
                  <textarea
                    rows={12}
                    placeholder="Paste your lyrics here...
[Verse 1]
...

[Chorus]
..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all resize-y"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {getUploadLabel()}
                  </label>
                  <div className="border-2 border-dashed border-gray-700 rounded-xl p-10 text-center hover:border-[#E54FA9] transition-colors cursor-pointer bg-gray-950/50 group">
                    <Upload className="mx-auto mb-4 text-gray-500 group-hover:text-[#E54FA9] transition-colors" size={40} />
                    <p className="text-gray-300 mb-1 group-hover:text-[#E54FA9] transition-colors">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{getFileFormats()}</p>
                  </div>
                </div>
              )}

              {/* Genres */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Genres (Select up to 3)
                </label>
                <div className="flex flex-wrap gap-2">
                  {GENRES.map(genre => (
                    <button
                      key={genre}
                      className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] hover:text-white transition-all"
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              {/* Post Options */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-[#E54FA9]/50 transition-all">
                <h3 className="font-medium mb-4 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Post Options
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 group">
                    <input type="checkbox" className="w-5 h-5 accent-[#E54FA9]" />
                    <span className="group-hover:text-[#E54FA9] transition-colors">Allow downloads</span>
                  </label>
                  <label className="flex items-center gap-3 group">
                    <input type="checkbox" className="w-5 h-5 accent-[#E54FA9]" defaultChecked />
                    <span className="group-hover:text-[#E54FA9] transition-colors">Allow comments</span>
                  </label>
                  <label className="flex items-center gap-3 group">
                    <input type="checkbox" className="w-5 h-5 accent-[#E54FA9]" defaultChecked />
                    <span className="group-hover:text-[#E54FA9] transition-colors">Mark as available for collaboration</span>
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button className="flex-1 py-3.5 bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] rounded-lg font-medium transition-all group">
                  <span className="group-hover:text-white">Cancel</span>
                </button>
                <button className="flex-1 py-3.5 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] rounded-lg font-medium text-white shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] transition-all">
                  Publish Post
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}