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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-zinc-400 mt-1">Manage your account and preferences</p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8 border-b border-zinc-800 overflow-x-auto">
          <div className="flex space-x-1 min-w-max pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
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
        <div className="space-y-10">
          {/* ────────────────────────────────────────
              PROFILE TAB
          ──────────────────────────────────────── */}
          {activeTab === "profile" && (
            <div className="space-y-8">
              {/* Banner / Cover */}
              <div className="bg-gradient-to-br from-purple-950 via-indigo-950 to-rose-950 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_70%,#a855f7_0%,transparent_50%)]" />
                <h3 className="text-lg font-semibold mb-3">Cover Photo</h3>
                <p className="text-sm text-zinc-300 mb-4">
                  Recommended size: 1280×360px
                </p>
                <div className="flex gap-3">
                  <button className="bg-zinc-900/70 hover:bg-zinc-800 px-4 py-2 rounded-lg text-sm border border-zinc-700 flex items-center gap-2">
                    <Upload size={16} /> Upload Photo
                  </button>
                  <button className="text-sm text-rose-400 hover:text-rose-300">
                    Remove
                  </button>
                </div>
              </div>

              {/* Profile Picture + Basic Info */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Profile Picture</h3>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center overflow-hidden">
                      <div className="text-3xl">JD</div>
                    </div>
                    <div className="space-y-2">
                      <button className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm border border-zinc-700 flex items-center gap-2">
                        <Upload size={16} /> Upload Photo
                      </button>
                      <button className="text-sm text-rose-400 hover:text-rose-300">
                        Remove
                      </button>
                      <p className="text-xs text-zinc-500">
                        Recommended size: 400×400px
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-zinc-400 mb-1.5">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-zinc-400 mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-zinc-400 mb-1.5">
                        Display Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-zinc-400 mb-1.5">Bio</label>
                      <textarea
                        rows={3}
                        defaultValue="Music producer | Vocalist | Songwriter"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600 resize-y"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-zinc-400 mb-1.5">
                          Location
                        </label>
                        <input
                          type="text"
                          defaultValue="Los Angeles, CA"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-zinc-400 mb-1.5">
                          Website
                        </label>
                        <input
                          type="url"
                          defaultValue="https://johndoe.com"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                        />
                      </div>
                    </div>

                    <button className="bg-rose-600 hover:bg-rose-700 px-6 py-2.5 rounded-lg font-medium">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>

              {/* Roles & Genres */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Roles & Genres</h3>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Your Roles</label>
                  <div className="flex flex-wrap gap-2">
                    {["Songwriter", "Producer"].map((role) => (
                      <div
                        key={role}
                        className="bg-rose-950/40 border border-rose-900/50 text-rose-300 px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
                      >
                        {role}
                        <button className="text-rose-400 hover:text-rose-200">
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                    <button className="bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-full text-sm border border-zinc-700 flex items-center gap-1">
                      + Add Role
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Genres</label>
                  <div className="flex flex-wrap gap-2">
                    {["R&B", "Soul", "Hip-Hop"].map((g) => (
                      <div
                        key={g}
                        className="bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded-full text-sm"
                      >
                        {g}
                      </div>
                    ))}
                    <button className="bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-full text-sm border border-zinc-700 flex items-center gap-1">
                      + Add Genre
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {["Production", "Mixing", "Songwriting", "Vocals"].map((s) => (
                      <div
                        key={s}
                        className="bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded-full text-sm"
                      >
                        {s}
                      </div>
                    ))}
                    <button className="bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-full text-sm border border-zinc-700 flex items-center gap-1">
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
            <div className="space-y-10">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Account Details</h3>

                <div className="space-y-6 max-w-md">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                    />
                  </div>

                  <div className="pt-4 border-t border-zinc-800">
                    <h4 className="font-medium mb-4">Change Password</h4>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                      />
                      <button className="bg-rose-600 hover:bg-rose-700 px-6 py-2.5 rounded-lg font-medium">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-rose-950/30 border border-rose-900/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-rose-300 mb-3">
                  Danger Zone
                </h3>
                <p className="text-sm text-rose-200/80 mb-4">
                  Once you delete your account, there is no going back. Please be
                  certain.
                </p>
                <button className="bg-rose-700 hover:bg-rose-800 px-6 py-2.5 rounded-lg text-white font-medium border border-rose-800/50">
                  Delete Account
                </button>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              PAYMENTS TAB (simplified)
          ──────────────────────────────────────── */}
          {activeTab === "payments" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <CreditCard className="text-zinc-400" />
                  <h3 className="text-xl font-semibold">Payment Methods</h3>
                </div>
                <p className="text-zinc-400 mb-6">
                  Manage your credit cards and payment options
                </p>
                <button className="text-rose-400 hover:text-rose-300 font-medium">
                  Manage cards →
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <DollarSign className="text-emerald-400" />
                  <h3 className="text-xl font-semibold">Payouts</h3>
                </div>
                <p className="text-zinc-400 mb-6">
                  Request payouts and track your earnings
                </p>
                <button className="text-rose-400 hover:text-rose-300 font-medium">
                  View payouts →
                </button>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              SUBSCRIPTION TAB
          ──────────────────────────────────────── */}
          {activeTab === "subscription" && (
            <div className="space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">Ignite Plan</h3>
                    <span className="text-sm text-emerald-400">Current Plan</span>
                  </div>
                  <Crown className="text-amber-400" size={28} />
                </div>

                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• 10 GB storage</li>
                  <li>• Basic portfolio features</li>
                  <li>• Limited AI matching</li>
                </ul>

                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Storage used</span>
                    <span>4.5 GB / 10 GB</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-full w-[45%] bg-rose-600 rounded-full" />
                  </div>
                </div>

                <button className="w-full bg-rose-600 hover:bg-rose-700 py-3 rounded-lg font-medium">
                  Upgrade to Launch
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Launch</h3>
                  <div className="text-2xl font-bold mb-1">$19<span className="text-sm font-normal text-zinc-400">/month</span></div>
                  <ul className="space-y-2 text-sm mt-5">
                    <li>• 50 GB storage</li>
                    <li>• Priority in discovery</li>
                    <li>• Advanced analytics</li>
                    <li>• Unlimited AI matching</li>
                  </ul>
                  <button className="w-full mt-6 bg-zinc-800 hover:bg-zinc-700 py-3 rounded-lg border border-zinc-700">
                    Select Plan
                  </button>
                </div>

                <div className="bg-gradient-to-br from-rose-950/40 to-purple-950/30 border border-rose-900/50 rounded-xl p-6 relative">
                  <div className="absolute top-4 right-4 bg-rose-600 text-xs px-3 py-1 rounded-full font-medium">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Excel</h3>
                  <div className="text-2xl font-bold mb-1">$49<span className="text-sm font-normal text-zinc-400">/month</span></div>
                  <ul className="space-y-2 text-sm mt-5">
                    <li>• 200 GB storage</li>
                    <li>• Top priority placement</li>
                    <li>• Premium analytics</li>
                    <li>• Verified badge</li>
                    <li>• Dedicated support</li>
                  </ul>
                  <button className="w-full mt-6 bg-rose-600 hover:bg-rose-700 py-3 rounded-lg font-medium">
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
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Storage Usage</h3>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>4.5 GB of 10 GB used</span>
                  <span className="text-rose-400">45%</span>
                </div>
                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-rose-600 rounded-full" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { label: "Audio Files", value: "3.2 GB", color: "rose" },
                  { label: "Images", value: "0.8 GB", color: "blue" },
                  { label: "Videos", value: "0.3 GB", color: "purple" },
                  { label: "Documents", value: "0.2 GB", color: "amber" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-zinc-300">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-${item.color}-600`}
                          style={{ width: item.value === "3.2 GB" ? "70%" : "20%" }}
                        />
                      </div>
                      <span className="font-medium w-16 text-right">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-5 text-center">
                <p className="text-zinc-400 mb-3">
                  Need more storage? Upgrade to Launch for 50 GB or Excel for 200 GB.
                </p>
                <button className="bg-rose-600 hover:bg-rose-700 px-6 py-2.5 rounded-lg font-medium">
                  Upgrade Storage
                </button>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              NOTIFICATIONS TAB
          ──────────────────────────────────────── */}
          {activeTab === "notifications" && (
            <div className="space-y-10">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Email Notifications</h3>
                <div className="space-y-5">
                  {[
                    { label: "Collaboration requests", defaultOn: true },
                    { label: "Brief updates", defaultOn: true },
                    { label: "New briefs", defaultOn: false },
                    { label: "Marketing emails", defaultOn: false },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-1">
                      <span className="text-zinc-300">{item.label}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={item.defaultOn}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Push Notifications</h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-zinc-300">Enable push notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-zinc-300">Messages</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
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
            <div className="space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Two-Factor Authentication</h3>
                <p className="text-zinc-400 mb-6">
                  Add an extra layer of security to your account
                </p>
                <button className="bg-rose-600 hover:bg-rose-700 px-6 py-2.5 rounded-lg font-medium">
                  Enable 2FA
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-5">Active Sessions</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                    <div>
                      <div className="font-medium">MacBook Pro • Chrome</div>
                      <div className="text-sm text-emerald-400">
                        Los Angeles • Current session
                      </div>
                    </div>
                    <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full">
                      Current
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <div className="font-medium">iPhone 13 • Safari</div>
                      <div className="text-sm text-zinc-500">
                        Los Angeles • 2 hours ago
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-6 text-rose-400 hover:text-rose-300 font-medium">
                  Log Out All Devices
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-5">Privacy Settings</h3>
                <div className="space-y-5">
                  {[
                    { label: "Profile visibility", desc: "Make your profile visible in search and discovery", checked: true },
                    { label: "Show activity status", desc: "Let others see when you're online", checked: true },
                    { label: "Allow connection requests", desc: "Let others send you connection requests", checked: true },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-start py-2">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-zinc-500">{item.desc}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer mt-1">
                        <input
                          type="checkbox"
                          defaultChecked={item.checked}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
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