// app/settings/page.tsx
"use client";

import { useState } from "react";
import {
  User,
  Lock,
  CreditCard,
  Crown,
  HardDrive,
  Bell,
  Shield,
  Upload,
  Trash2,
  Pencil,
  Check,
  X,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

type Tab =
  | "profile"
  | "account"
  | "payments"
  | "subscription"
  | "storage"
  | "notifications"
  | "security";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "profile", label: "Profile", icon: <User size={18} /> },
    { id: "account", label: "Account", icon: <Lock size={18} /> },
    { id: "payments", label: "Payments", icon: <CreditCard size={18} /> },
    { id: "subscription", label: "Subscription", icon: <Crown size={18} /> },
    { id: "storage", label: "Storage", icon: <HardDrive size={18} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    { id: "security", label: "Security", icon: <Shield size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold">Settings</h1>
          <p className="text-sm sm:text-base text-zinc-400 mt-1">Manage your account and preferences</p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-6 sm:mb-8 border-b border-zinc-800 overflow-x-auto">
          <div className="flex space-x-1 min-w-max pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-b-2 border-rose-500 text-rose-400"
                    : "text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* ────────────────────────────────────────
              PROFILE TAB
          ──────────────────────────────────────── */}
          {activeTab === "profile" && (
            <div className="space-y-6 sm:space-y-8">
              {/* Banner / Cover */}
              <div className="bg-gradient-to-br from-purple-950 via-indigo-950 to-rose-950 rounded-xl p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_70%,#a855f7_0%,transparent_50%)]" />
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Cover Photo</h3>
                <p className="text-xs sm:text-sm text-zinc-300 mb-3 sm:mb-4">
                  Recommended size: 1280×360px
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button className="bg-zinc-900/70 hover:bg-zinc-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm border border-zinc-700 flex items-center gap-1.5 sm:gap-2">
                    <Upload size={14} className="sm:w-4 sm:h-4" /> Upload Photo
                  </button>
                  <button className="text-xs sm:text-sm text-rose-400 hover:text-rose-300">
                    Remove
                  </button>
                </div>
              </div>

              {/* Profile Picture + Basic Info - Stacked on all devices */}
              <div className="space-y-6 sm:space-y-8">
                {/* Profile Picture Section */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Profile Picture</h3>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <div className="text-2xl sm:text-3xl">JD</div>
                    </div>
                    <div className="space-y-2 w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm border border-zinc-700 flex items-center justify-center gap-1.5 sm:gap-2">
                        <Upload size={14} className="sm:w-4 sm:h-4" /> Upload Photo
                      </button>
                      <button className="block text-xs sm:text-sm text-rose-400 hover:text-rose-300">
                        Remove
                      </button>
                      <p className="text-xs text-zinc-500">
                        Recommended size: 400×400px
                      </p>
                    </div>
                  </div>
                </div>

                {/* Basic Information Section */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Basic Information</h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
                        Display Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">Bio</label>
                      <textarea
                        rows={3}
                        defaultValue="Music producer | Vocalist | Songwriter"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-600 resize-y"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
                          Location
                        </label>
                        <input
                          type="text"
                          defaultValue="Los Angeles, CA"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
                          Website
                        </label>
                        <input
                          type="url"
                          defaultValue="https://johndoe.com"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-600"
                        />
                      </div>
                    </div>

                    <button className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>

              {/* Roles & Genres */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-lg font-semibold">Roles & Genres</h3>

                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Your Roles</label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["Songwriter", "Producer"].map((role) => (
                      <div
                        key={role}
                        className="bg-rose-950/40 border border-rose-900/50 text-rose-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                      >
                        {role}
                        <button className="text-rose-400 hover:text-rose-200">
                          <X size={12} className="sm:w-3.5 sm:h-3.5" />
                        </button>
                      </div>
                    ))}
                    <button className="bg-zinc-800 hover:bg-zinc-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm border border-zinc-700 flex items-center gap-0.5 sm:gap-1">
                      + Add Role
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Genres</label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["R&B", "Soul", "Hip-Hop"].map((g) => (
                      <div
                        key={g}
                        className="bg-zinc-800 border border-zinc-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm"
                      >
                        {g}
                      </div>
                    ))}
                    <button className="bg-zinc-800 hover:bg-zinc-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm border border-zinc-700 flex items-center gap-0.5 sm:gap-1">
                      + Add Genre
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Skills</label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["Production", "Mixing", "Songwriting", "Vocals"].map((s) => (
                      <div
                        key={s}
                        className="bg-zinc-800 border border-zinc-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm"
                      >
                        {s}
                      </div>
                    ))}
                    <button className="bg-zinc-800 hover:bg-zinc-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm border border-zinc-700 flex items-center gap-0.5 sm:gap-1">
                      + Add Skill
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              ACCOUNT TAB
          ──────────────────────────────────────── */}
          {activeTab === "account" && (
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Account Details</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-600"
                    />
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-zinc-800">
                    <h4 className="text-sm sm:text-base font-medium mb-3 sm:mb-4">Change Password</h4>
                    <div className="space-y-3 sm:space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-600"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-600"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-zinc-600"
                      />
                      <button className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-rose-950/30 border border-rose-900/50 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-rose-300 mb-2 sm:mb-3">
                  Danger Zone
                </h3>
                <p className="text-xs sm:text-sm text-rose-200/80 mb-3 sm:mb-4">
                  Once you delete your account, there is no going back. Please be
                  certain.
                </p>
                <button className="w-full sm:w-auto bg-rose-700 hover:bg-rose-800 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-white text-sm sm:text-base font-medium border border-rose-800/50">
                  Delete Account
                </button>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              PAYMENTS TAB (simplified)
          ──────────────────────────────────────── */}
          {activeTab === "payments" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                  <CreditCard className="text-zinc-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <h3 className="text-base sm:text-xl font-semibold">Payment Methods</h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-6">
                  Manage your credit cards and payment options
                </p>
               <Link href="/home/settings/manage-cards">
                <button className="text-sm sm:text-base text-rose-400 hover:text-rose-300 font-medium">
                  Manage cards →
                </button>
               </Link>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                  <DollarSign className="text-emerald-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <h3 className="text-base sm:text-xl font-semibold">Payouts</h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-6">
                  Request payouts and track your earnings
                </p>
               <Link href="/home/settings/view-payouts" >
                <button className="text-sm sm:text-base text-rose-400 hover:text-rose-300 font-medium">
                  View payouts →
                </button>
               </Link>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              SUBSCRIPTION TAB
          ──────────────────────────────────────── */}
          {activeTab === "subscription" && (
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Ignite Plan</h3>
                    <span className="text-xs sm:text-sm text-emerald-400">Current Plan</span>
                  </div>
                  <Crown className="text-amber-400 w-6 h-6 sm:w-7 sm:h-7" size={24} />
                </div>

                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-zinc-300 mb-4 sm:mb-6">
                  <li>• 10 GB storage</li>
                  <li>• Basic portfolio features</li>
                  <li>• Limited AI matching</li>
                </ul>

                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex justify-between text-xs sm:text-sm mb-1.5 sm:mb-2">
                    <span>Storage used</span>
                    <span>4.5 GB / 10 GB</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-zinc-800 rounded-full">
                    <div className="h-full w-[45%] bg-rose-600 rounded-full" />
                  </div>
                </div>

                <button className="w-full bg-rose-600 hover:bg-rose-700 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium">
                  Upgrade to Launch
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Launch</h3>
                  <div className="text-xl sm:text-2xl font-bold mb-1">$19<span className="text-xs sm:text-sm font-normal text-zinc-400">/month</span></div>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm mt-3 sm:mt-5">
                    <li>• 50 GB storage</li>
                    <li>• Priority in discovery</li>
                    <li>• Advanced analytics</li>
                    <li>• Unlimited AI matching</li>
                  </ul>
                  <button className="w-full mt-4 sm:mt-6 bg-zinc-800 hover:bg-zinc-700 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base border border-zinc-700">
                    Select Plan
                  </button>
                </div>

                <div className="bg-gradient-to-br from-rose-950/40 to-purple-950/30 border border-rose-900/50 rounded-xl p-4 sm:p-6 relative">
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-rose-600 text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
                    Most Popular
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Excel</h3>
                  <div className="text-xl sm:text-2xl font-bold mb-1">$49<span className="text-xs sm:text-sm font-normal text-zinc-400">/month</span></div>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm mt-3 sm:mt-5">
                    <li>• 200 GB storage</li>
                    <li>• Top priority placement</li>
                    <li>• Premium analytics</li>
                    <li>• Verified badge</li>
                    <li>• Dedicated support</li>
                  </ul>
                  <button className="w-full mt-4 sm:mt-6 bg-rose-600 hover:bg-rose-700 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium">
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              STORAGE TAB
          ──────────────────────────────────────── */}
          {activeTab === "storage" && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Storage Usage</h3>

              <div className="mb-4 sm:mb-6">
                <div className="flex justify-between text-xs sm:text-sm mb-1.5 sm:mb-2">
                  <span>4.5 GB of 10 GB used</span>
                  <span className="text-rose-400">45%</span>
                </div>
                <div className="h-2 sm:h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-rose-600 rounded-full" />
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  { label: "Audio Files", value: "3.2 GB", color: "rose" },
                  { label: "Images", value: "0.8 GB", color: "blue" },
                  { label: "Videos", value: "0.3 GB", color: "purple" },
                  { label: "Documents", value: "0.2 GB", color: "amber" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 text-xs sm:text-sm">
                    <span className="text-zinc-300">{item.label}</span>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-${item.color}-600`}
                          style={{ width: item.value === "3.2 GB" ? "70%" : "20%" }}
                        />
                      </div>
                      <span className="font-medium w-12 sm:w-16 text-right">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 sm:p-5 text-center">
                <p className="text-xs sm:text-sm text-zinc-400 mb-3">
                  Need more storage? Upgrade to Launch for 50 GB or Excel for 200 GB.
                </p>
                <button className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium">
                  Upgrade Storage
                </button>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              NOTIFICATIONS TAB
          ──────────────────────────────────────── */}
          {activeTab === "notifications" && (
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Email Notifications</h3>
                <div className="space-y-4 sm:space-y-5">
                  {[
                    { label: "Collaboration requests", defaultOn: true },
                    { label: "Brief updates", defaultOn: true },
                    { label: "New briefs", defaultOn: false },
                    { label: "Marketing emails", defaultOn: false },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-1">
                      <span className="text-xs sm:text-sm text-zinc-300">{item.label}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={item.defaultOn}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 sm:w-11 sm:h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Push Notifications</h3>
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-xs sm:text-sm text-zinc-300">Enable push notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 sm:w-11 sm:h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-xs sm:text-sm text-zinc-300">Messages</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 sm:w-11 sm:h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              SECURITY TAB
          ──────────────────────────────────────── */}
          {activeTab === "security" && (
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Two-Factor Authentication</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-6">
                  Add an extra layer of security to your account
                </p>
                <button className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium">
                  Enable 2FA
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">Active Sessions</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 py-2 sm:py-3 border-b border-zinc-800">
                    <div>
                      <div className="text-sm sm:text-base font-medium">MacBook Pro • Chrome</div>
                      <div className="text-xs sm:text-sm text-emerald-400">
                        Los Angeles • Current session
                      </div>
                    </div>
                    <span className="self-start sm:self-center text-xs bg-emerald-950 text-emerald-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                      Current
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 py-2 sm:py-3">
                    <div>
                      <div className="text-sm sm:text-base font-medium">iPhone 13 • Safari</div>
                      <div className="text-xs sm:text-sm text-zinc-500">
                        Los Angeles • 2 hours ago
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-4 sm:mt-6 text-sm sm:text-base text-rose-400 hover:text-rose-300 font-medium">
                  Log Out All Devices
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">Privacy Settings</h3>
                <div className="space-y-4 sm:space-y-5">
                  {[
                    { label: "Profile visibility", desc: "Make your profile visible in search and discovery", checked: true },
                    { label: "Show activity status", desc: "Let others see when you're online", checked: true },
                    { label: "Allow connection requests", desc: "Let others send you connection requests", checked: true },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 py-1.5 sm:py-2">
                      <div className="flex-1">
                        <div className="text-sm sm:text-base font-medium">{item.label}</div>
                        <div className="text-xs sm:text-sm text-zinc-500">{item.desc}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer mt-0 sm:mt-1">
                        <input
                          type="checkbox"
                          defaultChecked={item.checked}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 sm:w-11 sm:h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}