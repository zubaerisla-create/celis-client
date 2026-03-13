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
    { id: "profile", label: "Profile", icon: <User size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    { id: "account", label: "Account", icon: <Lock size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    { id: "payments", label: "Payments", icon: <CreditCard size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    { id: "subscription", label: "Subscription", icon: <Crown size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    { id: "storage", label: "Storage", icon: <HardDrive size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    { id: "security", label: "Security", icon: <Shield size={16} className="sm:w-[18px] sm:h-[18px]" /> },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="mb-4 xs:mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Settings
            </span>
          </h1>
          <p className="text-xs xs:text-sm sm:text-base text-zinc-400 mt-0.5 xs:mt-1">Manage your account and preferences</p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-4 xs:mb-6 sm:mb-8 border-b border-zinc-800 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-0.5 xs:space-x-1 min-w-max pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 sm:px-5 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#E54FA9] text-[#E54FA9]"
                    : "text-zinc-400 hover:text-zinc-200 hover:border-[#E54FA9]/50"
                }`}
              >
                <span className="text-[#E54FA9]">{tab.icon}</span>
                <span className="hidden xs:inline">{tab.label}</span>
                <span className="xs:hidden">{tab.label.substring(0, 3)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-4 xs:space-y-6 sm:space-y-8 lg:space-y-10">
          {/* ────────────────────────────────────────
              PROFILE TAB
          ──────────────────────────────────────── */}
          {activeTab === "profile" && (
            <div className="space-y-4 xs:space-y-6 sm:space-y-8">
              {/* Banner / Cover */}
              <div className="bg-gradient-to-br from-[#E54FA9]/30 via-[#C53F89]/30 to-[#831CDF]/30 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_70%,#E54FA9_0%,transparent_50%)]" />
                <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 xs:mb-2 sm:mb-3">Cover Photo</h3>
                <p className="text-xs xs:text-sm text-zinc-300 mb-2 xs:mb-3 sm:mb-4">
                  Recommended size: 1280×360px
                </p>
                <div className="flex flex-wrap gap-2 xs:gap-3">
                  <button className="bg-zinc-900/70 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-lg text-xs xs:text-sm border border-zinc-700 flex items-center gap-1 xs:gap-1.5 sm:gap-2 transition-all group">
                    <Upload size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 group-hover:text-white" /> 
                    <span className="hidden xs:inline group-hover:text-white">Upload Photo</span>
                    <span className="xs:hidden group-hover:text-white">Upload</span>
                  </button>
                  <button className="text-xs xs:text-sm text-[#E54FA9] hover:text-[#D63F99] transition-colors">
                    Remove
                  </button>
                </div>
              </div>

              {/* Profile Picture + Basic Info */}
              <div className="space-y-4 xs:space-y-6 sm:space-y-8">
                {/* Profile Picture Section */}
                <div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2 xs:mb-3 sm:mb-4">Profile Picture</h3>
                  <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4 sm:gap-6">
                    <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF] border-2 border-zinc-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <span className="text-lg xs:text-2xl sm:text-3xl text-white">JD</span>
                    </div>
                    <div className="space-y-1 xs:space-y-2 w-full xs:w-auto">
                      <button className="w-full xs:w-auto bg-zinc-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-lg text-xs xs:text-sm border border-zinc-700 flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 transition-all group">
                        <Upload size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 group-hover:text-white" /> 
                        <span className="hidden xs:inline group-hover:text-white">Upload Photo</span>
                        <span className="xs:hidden group-hover:text-white">Upload</span>
                      </button>
                      <button className="block text-xs xs:text-sm text-[#E54FA9] hover:text-[#D63F99] transition-colors">
                        Remove
                      </button>
                      <p className="text-xs text-zinc-500 hidden xs:block">
                        Recommended size: 400×400px
                      </p>
                    </div>
                  </div>
                </div>

                {/* Basic Information Section */}
                <div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-2 xs:mb-3 sm:mb-4">Basic Information</h3>
                  <div className="space-y-3 xs:space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs xs:text-sm text-zinc-400 mb-0.5 xs:mb-1 sm:mb-1.5">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs xs:text-sm text-zinc-400 mb-0.5 xs:mb-1 sm:mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs xs:text-sm text-zinc-400 mb-0.5 xs:mb-1 sm:mb-1.5">
                        Display Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs xs:text-sm text-zinc-400 mb-0.5 xs:mb-1 sm:mb-1.5">Bio</label>
                      <textarea
                        rows={3}
                        defaultValue="Music producer | Vocalist | Songwriter"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all resize-y"
                      />
                    </div>

                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs xs:text-sm text-zinc-400 mb-0.5 xs:mb-1 sm:mb-1.5">
                          Location
                        </label>
                        <input
                          type="text"
                          defaultValue="Los Angeles, CA"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs xs:text-sm text-zinc-400 mb-0.5 xs:mb-1 sm:mb-1.5">
                          Website
                        </label>
                        <input
                          type="url"
                          defaultValue="https://johndoe.com"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                        />
                      </div>
                    </div>

                    <button className="w-full xs:w-auto bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-lg text-xs xs:text-sm sm:text-base font-medium shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] transition-all">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>

              {/* Roles & Genres */}
              <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                <h3 className="text-sm xs:text-base sm:text-lg font-semibold">Roles & Genres</h3>

                <div>
                  <label className="block text-xs xs:text-sm text-zinc-400 mb-1 xs:mb-1.5 sm:mb-2">Your Roles</label>
                  <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
                    {["Songwriter", "Producer"].map((role) => (
                      <div
                        key={role}
                        className="bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 border border-[#E54FA9]/30 text-[#E54FA9] px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 rounded-full text-xs xs:text-sm flex items-center gap-0.5 xs:gap-1 sm:gap-2"
                      >
                        {role}
                        <button className="text-[#E54FA9] hover:text-[#D63F99]">
                          <X size={10} className="xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" />
                        </button>
                      </div>
                    ))}
                    <button className="bg-zinc-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 rounded-full text-xs xs:text-sm border border-zinc-700 flex items-center gap-0.5 xs:gap-1 transition-all group">
                      <span className="group-hover:text-white">+ Add</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs xs:text-sm text-zinc-400 mb-1 xs:mb-1.5 sm:mb-2">Genres</label>
                  <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
                    {["R&B", "Soul", "Hip-Hop"].map((g) => (
                      <div
                        key={g}
                        className="bg-zinc-800 border border-zinc-700 px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 rounded-full text-xs xs:text-sm hover:bg-[#E54FA9]/20 hover:text-[#E54FA9] hover:border-[#E54FA9]/30 transition-all"
                      >
                        {g}
                      </div>
                    ))}
                    <button className="bg-zinc-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 rounded-full text-xs xs:text-sm border border-zinc-700 flex items-center gap-0.5 xs:gap-1 transition-all group">
                      <span className="group-hover:text-white">+ Add</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs xs:text-sm text-zinc-400 mb-1 xs:mb-1.5 sm:mb-2">Skills</label>
                  <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
                    {["Production", "Mixing", "Songwriting", "Vocals"].map((s) => (
                      <div
                        key={s}
                        className="bg-zinc-800 border border-zinc-700 px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 rounded-full text-xs xs:text-sm hover:bg-[#E54FA9]/20 hover:text-[#E54FA9] hover:border-[#E54FA9]/30 transition-all"
                      >
                        {s}
                      </div>
                    ))}
                    <button className="bg-zinc-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 rounded-full text-xs xs:text-sm border border-zinc-700 flex items-center gap-0.5 xs:gap-1 transition-all group">
                      <span className="group-hover:text-white">+ Add</span>
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
            <div className="space-y-4 xs:space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 sm:mb-6 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Account Details
                </h3>

                <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-xs xs:text-sm text-zinc-400 mb-0.5 xs:mb-1 sm:mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                    />
                  </div>

                  <div className="pt-2 xs:pt-3 sm:pt-4 border-t border-zinc-800">
                    <h4 className="text-xs xs:text-sm sm:text-base font-medium mb-2 xs:mb-3 sm:mb-4 text-[#E54FA9]">Change Password</h4>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                      />
                      <button className="w-full xs:w-auto bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-lg text-xs xs:text-sm sm:text-base font-medium shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] transition-all">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#E54FA9]/20 to-[#831CDF]/20 border border-[#E54FA9]/30 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-[#E54FA9] mb-1 xs:mb-2 sm:mb-3">
                  Danger Zone
                </h3>
                <p className="text-xs xs:text-sm text-[#E54FA9]/80 mb-2 xs:mb-3 sm:mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button className="w-full xs:w-auto bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-lg text-white text-xs xs:text-sm sm:text-base font-medium border border-[#E54FA9]/50 shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] transition-all">
                  Delete Account
                </button>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              PAYMENTS TAB
          ──────────────────────────────────────── */}
          {activeTab === "payments" && (
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all group">
                <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 mb-2 xs:mb-3 sm:mb-5">
                  <CreditCard className="text-[#E54FA9] w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  <h3 className="text-sm xs:text-base sm:text-xl font-semibold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Payment Methods</h3>
                </div>
                <p className="text-xs xs:text-sm text-zinc-400 mb-3 xs:mb-4 sm:mb-6">
                  Manage your credit cards and payment options
                </p>
                <Link href="/home/settings/manage-cards">
                  <button className="text-xs xs:text-sm sm:text-base text-[#E54FA9] hover:text-[#D63F99] font-medium transition-colors">
                    Manage cards →
                  </button>
                </Link>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all group">
                <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 mb-2 xs:mb-3 sm:mb-5">
                  <DollarSign className="text-[#E54FA9] w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  <h3 className="text-sm xs:text-base sm:text-xl font-semibold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Payouts</h3>
                </div>
                <p className="text-xs xs:text-sm text-zinc-400 mb-3 xs:mb-4 sm:mb-6">
                  Request payouts and track your earnings
                </p>
                <Link href="/home/settings/view-payouts">
                  <button className="text-xs xs:text-sm sm:text-base text-[#E54FA9] hover:text-[#D63F99] font-medium transition-colors">
                    View payouts →
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              SUBSCRIPTION TAB (Already updated with gradient)
          ──────────────────────────────────────── */}
          {activeTab === "subscription" && (
            <div className="space-y-3 xs:space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Current Plan - Ignite */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 xs:gap-0 mb-3 xs:mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Ignite Plan</h3>
                    <span className="text-xs xs:text-sm bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Current Plan</span>
                  </div>
                  <Crown className="text-amber-400 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
                </div>

                <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 text-xs xs:text-sm text-zinc-300 mb-3 xs:mb-4 sm:mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                    10 GB storage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                    Basic portfolio features
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                    Limited AI matching
                  </li>
                </ul>

                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-2 xs:p-3 sm:p-4 mb-3 xs:mb-4 sm:mb-6">
                  <div className="flex justify-between text-xs xs:text-sm mb-1 xs:mb-1.5 sm:mb-2">
                    <span className="text-zinc-400">Storage used</span>
                    <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent font-medium">4.5 GB / 10 GB</span>
                  </div>
                  <div className="h-1 xs:h-1.5 sm:h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: '45%',
                        background: 'linear-gradient(to right, #E54FA9, #831CDF)'
                      }}
                    />
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] py-2 xs:py-2.5 sm:py-3 rounded-lg text-xs xs:text-sm sm:text-base font-medium shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] transition-all">
                  Upgrade to Launch
                </button>
              </div>

              {/* Plan Comparison */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                {/* Launch Plan */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all group">
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Launch</h3>
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold mb-0.5 xs:mb-1">
                    $19
                    <span className="text-xs xs:text-sm font-normal text-zinc-400">/month</span>
                  </div>
                  <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 text-xs xs:text-sm mt-2 xs:mt-3 sm:mt-5">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                      50 GB storage
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                      Priority in discovery
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                      Unlimited AI matching
                    </li>
                  </ul>
                  <button className="w-full mt-3 xs:mt-4 sm:mt-6 bg-zinc-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] border border-zinc-700 hover:border-transparent py-2 xs:py-2.5 sm:py-3 rounded-lg text-xs xs:text-sm sm:text-base transition-all hover:text-white hover:shadow-lg hover:shadow-[#831CDF]/30 active:scale-[0.98]">
                    Select Plan
                  </button>
                </div>

                {/* Excel Plan - Most Popular */}
                <div className="bg-gradient-to-br from-[#E54FA9]/10 to-[#831CDF]/10 border border-[#E54FA9]/30 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 relative hover:border-[#E54FA9] transition-all group">
                  <div className="absolute -top-2 xs:-top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] text-white text-2xs xs:text-xs px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full font-medium whitespace-nowrap shadow-lg shadow-[#831CDF]/30">
                    Most Popular
                  </div>
                  
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Excel</h3>
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold mb-0.5 xs:mb-1">
                    $49
                    <span className="text-xs xs:text-sm font-normal text-zinc-400">/month</span>
                  </div>
                  <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 text-xs xs:text-sm mt-2 xs:mt-3 sm:mt-5">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                      200 GB storage
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                      Top priority placement
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                      Premium analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                      Verified badge
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#E54FA9] to-[#831CDF]" />
                      Dedicated support
                    </li>
                  </ul>
                  <button className="w-full mt-3 xs:mt-4 sm:mt-6 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] py-2 xs:py-2.5 sm:py-3 rounded-lg text-xs xs:text-sm sm:text-base font-medium shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] transition-all">
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
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all">
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 sm:mb-6 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                Storage Usage
              </h3>

              <div className="mb-3 xs:mb-4 sm:mb-6">
                <div className="flex justify-between text-xs xs:text-sm mb-1 xs:mb-1.5 sm:mb-2">
                  <span>4.5 GB of 10 GB used</span>
                  <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">45%</span>
                </div>
                <div className="h-1.5 xs:h-2 sm:h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all"
                    style={{ 
                      width: '45%',
                      background: 'linear-gradient(to right, #E54FA9, #831CDF)'
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2 xs:space-y-3 sm:space-y-4 mb-4 xs:mb-6 sm:mb-8">
                {[
                  { label: "Audio Files", value: "3.2 GB", color: "#E54FA9", width: "70%" },
                  { label: "Images", value: "0.8 GB", color: "#831CDF", width: "20%" },
                  { label: "Videos", value: "0.3 GB", color: "#E54FA9", width: "10%" },
                  { label: "Documents", value: "0.2 GB", color: "#831CDF", width: "5%" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-2 text-xs xs:text-sm">
                    <span className="text-zinc-300 hover:text-[#E54FA9] transition-colors">{item.label}</span>
                    <div className="flex items-center gap-2 xs:gap-3">
                      <div className="w-16 xs:w-24 sm:w-32 h-1 xs:h-1.5 sm:h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ 
                            width: item.width,
                            background: `linear-gradient(to right, ${item.color}, ${item.color === "#E54FA9" ? "#831CDF" : "#E54FA9"})`
                          }}
                        />
                      </div>
                      <span className="font-medium w-10 xs:w-12 sm:w-16 text-right text-[#E54FA9]">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 xs:p-4 sm:p-5 text-center">
                <p className="text-xs xs:text-sm text-zinc-400 mb-2 xs:mb-3">
                  Need more storage? Upgrade to Launch for 50 GB or Excel for 200 GB.
                </p>
                <button className="w-full xs:w-auto bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-lg text-xs xs:text-sm sm:text-base font-medium shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] transition-all">
                  Upgrade Storage
                </button>
              </div>
            </div>
          )}

          {/* ────────────────────────────────────────
              NOTIFICATIONS TAB
          ──────────────────────────────────────── */}
          {activeTab === "notifications" && (
            <div className="space-y-4 xs:space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 sm:mb-6 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Email Notifications
                </h3>
                <div className="space-y-3 xs:space-y-4 sm:space-y-5">
                  {[
                    { label: "Collaboration requests", defaultOn: true },
                    { label: "Brief updates", defaultOn: true },
                    { label: "New briefs", defaultOn: false },
                    { label: "Marketing emails", defaultOn: false },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-0.5 xs:py-1">
                      <span className="text-xs xs:text-sm text-zinc-300">{item.label}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={item.defaultOn}
                          className="sr-only peer"
                        />
                        <div className="w-8 h-4 xs:w-9 xs:h-5 sm:w-11 sm:h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 xs:after:h-4 xs:after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#E54FA9] peer-checked:to-[#831CDF]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 sm:mb-6 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Push Notifications
                </h3>
                <div className="space-y-3 xs:space-y-4 sm:space-y-5">
                  <div className="flex justify-between items-center py-0.5 xs:py-1">
                    <span className="text-xs xs:text-sm text-zinc-300">Enable push notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-8 h-4 xs:w-9 xs:h-5 sm:w-11 sm:h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 xs:after:h-4 xs:after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#E54FA9] peer-checked:to-[#831CDF]"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center py-0.5 xs:py-1">
                    <span className="text-xs xs:text-sm text-zinc-300">Messages</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-8 h-4 xs:w-9 xs:h-5 sm:w-11 sm:h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 xs:after:h-4 xs:after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#E54FA9] peer-checked:to-[#831CDF]"></div>
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
            <div className="space-y-3 xs:space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-1 xs:mb-2 sm:mb-4 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Two-Factor Authentication
                </h3>
                <p className="text-xs xs:text-sm text-zinc-400 mb-3 xs:mb-4 sm:mb-6">
                  Add an extra layer of security to your account
                </p>
                <button className="w-full xs:w-auto bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-lg text-xs xs:text-sm sm:text-base font-medium shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] transition-all">
                  Enable 2FA
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 sm:mb-5 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Active Sessions
                </h3>
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-2 py-1 xs:py-2 sm:py-3 border-b border-zinc-800">
                    <div>
                      <div className="text-xs xs:text-sm sm:text-base font-medium">MacBook Pro • Chrome</div>
                      <div className="text-2xs xs:text-xs sm:text-sm text-[#E54FA9]">
                        Los Angeles • Current session
                      </div>
                    </div>
                    <span className="self-start xs:self-center text-2xs xs:text-xs bg-gradient-to-r from-[#E54FA9] to-[#831CDF] text-white px-1.5 xs:px-2 sm:px-2.5 py-0.5 xs:py-1 rounded-full">
                      Current
                    </span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-0.5 xs:gap-1 py-1 xs:py-2 sm:py-3">
                    <div>
                      <div className="text-xs xs:text-sm sm:text-base font-medium">iPhone 13 • Safari</div>
                      <div className="text-2xs xs:text-xs sm:text-sm text-zinc-500">
                        Los Angeles • 2 hours ago
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-3 xs:mt-4 sm:mt-6 text-xs xs:text-sm sm:text-base text-[#E54FA9] hover:text-[#D63F99] font-medium transition-colors">
                  Log Out All Devices
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 hover:border-[#E54FA9]/50 transition-all">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 sm:mb-5 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Privacy Settings
                </h3>
                <div className="space-y-3 xs:space-y-4 sm:space-y-5">
                  {[
                    { label: "Profile visibility", desc: "Make your profile visible in search and discovery", checked: true },
                    { label: "Show activity status", desc: "Let others see when you're online", checked: true },
                    { label: "Allow connection requests", desc: "Let others send you connection requests", checked: true },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-1 xs:gap-2 py-1 xs:py-1.5 sm:py-2">
                      <div className="flex-1">
                        <div className="text-xs xs:text-sm sm:text-base font-medium hover:text-[#E54FA9] transition-colors">{item.label}</div>
                        <div className="text-2xs xs:text-xs sm:text-sm text-zinc-500">{item.desc}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer mt-0">
                        <input
                          type="checkbox"
                          defaultChecked={item.checked}
                          className="sr-only peer"
                        />
                        <div className="w-8 h-4 xs:w-9 xs:h-5 sm:w-11 sm:h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 xs:after:h-4 xs:after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#E54FA9] peer-checked:to-[#831CDF]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add custom styles for extra small devices and hide scrollbar */}
      <style jsx>{`
        @media (min-width: 375px) {
          .xs\\:inline { display: inline; }
          .xs\\:hidden { display: none; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .text-2xs {
          font-size: 0.65rem;
        }
      `}</style>
    </div>
  );
}