// components/NotificationsPanel.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Bell, Check, Trash2, UserPlus, MessageSquare, ThumbsUp, Users } from "lucide-react";

// For demo — in real app you'd fetch this from API / Supabase / Prisma / etc.
const notifications = [
  {
    id: 1,
    type: "like",
    user: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    action: "liked your post",
    post: "Midnight Reflections",
    time: "5 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "comment",
    user: "Marcus Williams",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    action: "commented on your post",
    post: "This is fire 🔥",
    comment: "This is fire 🔥",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "follow",
    user: "Jordan Lee",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    action: "started following you",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 4,
    type: "submission",
    user: "Atlantic Records",
    avatar: "https://images.unsplash.com/photo-1557683316-973673baf926?w=100&h=100&fit=crop",
    action: "Your submission for 'Summer Vibes' has been shortlisted",
    time: "5 hours ago",
    unread: false,
  },
  {
    id: 5,
    type: "collaboration",
    user: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    action: "wants to collaborate with you on a new project",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 6,
    type: "welcome",
    action: "Welcome to SPARTST",
    message: "Complete your profile to get discovered by industry professionals",
    time: "3 days ago",
    unread: false,
  },
];

export default function NotificationsPanel() {
  const [activeTab, setActiveTab] = useState<"all" | "unread">("unread");
  const unreadCount = notifications.filter((n) => n.unread).length;

  const filteredNotifications =
    activeTab === "unread"
      ? notifications.filter((n) => n.unread)
      : notifications;

  return (
    <div className="w-full max-w-7xl bg-[#0F0F0F] text-white rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <h2 className="text-xl font-bold">Notifications</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            {unreadCount} unread notifications
          </span>
          <button className="text-blue-500 hover:text-blue-400 text-sm font-medium">
            Mark all as read
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setActiveTab("all")}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === "all"
              ? "text-white border-b-2 border-blue-500"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("unread")}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === "unread"
              ? "text-white border-b-2 border-blue-500"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          Unread ({unreadCount})
        </button>
      </div>

      {/* List */}
      <div className="max-h-[500px] overflow-y-auto">
        {filteredNotifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-4 border-b border-gray-800 hover:bg-gray-900/50 transition-colors group ${
              notif.unread ? "bg-blue-950/30" : ""
            }`}
          >
            <div className="flex gap-3">
              {/* Avatar / Icon */}
              <div className="relative flex-shrink-0">
                {notif.type === "like" && (
                  <ThumbsUp className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1 w-5 h-5" />
                )}
                {notif.type === "comment" && (
                  <MessageSquare className="absolute -bottom-1 -right-1 bg-green-600 rounded-full p-1 w-5 h-5" />
                )}
                {notif.type === "follow" && (
                  <UserPlus className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1 w-5 h-5" />
                )}

                {notif.avatar ? (
                  <Image
                    src={notif.avatar}
                    alt={notif.user || "User"}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <Bell className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-[15px]">
                  <span className="font-bold">{notif.user || "SPARTST"}</span>{" "}
                  {notif.action}{" "}
                  {notif.post && (
                    <span className="font-bold">"{notif.post}"</span>
                  )}
                </p>

                {notif.comment && (
                  <p className="text-gray-400 mt-0.5 text-[15px]">
                    {notif.comment}
                  </p>
                )}

                {notif.message && (
                  <p className="text-gray-300 mt-0.5 text-[15px]">
                    {notif.message}
                  </p>
                )}

                <p className="text-gray-500 text-xs mt-1">{notif.time}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {notif.unread && (
                  <button className="text-gray-400 hover:text-white">
                    <Check size={18} />
                  </button>
                )}
                <button className="text-gray-400 hover:text-red-400">
                  <Trash2 size={18} />
                </button>
              </div>

              {notif.unread && !notif.type.includes("welcome") && (
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}