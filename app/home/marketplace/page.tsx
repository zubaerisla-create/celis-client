// components/Marketplace.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Search,
  Filter,
  Upload,
  DollarSign,
  TrendingUp,
  ShoppingCart,
  Download,
  Music,
  ChevronDown,
  Edit,
  Eye,
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------
// Mock data
// -----------------------------------------------------------------------------
const browseAssets = [
  {
    id: 1,
    title: "Midnight Dreams - Instrumental",
    creator: "Sarah Chen",
    genre: "R&B",
    bpm: 85,
    key: "C Minor",
    price: 2500,
    type: "Exclusive",
    sales: 24,
    plays: 1542,
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400",
  },
  {
    id: 2,
    title: "Urban Nights Beat",
    creator: "Marcus Williams",
    genre: "Hip-Hop",
    bpm: 140,
    key: "G Minor",
    price: 3000,
    type: "Exclusive",
    sales: 234,
    plays: 3124,
    image: "https://images.unsplash.com/photo-1557682250-33bd709cbe9b?w=400",
  },
  // ... more items
];

const yourUploadedAssets = [
  {
    title: "Midnight Dreams - Instrumental",
    uploaded: "Jan 15, 2026",
    genre: "R&B",
    bpm: 85,
    key: "C Minor",
    license: "Basic",
    price: 49,
    sales: 24,
    earnings: 1176,
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400",
  },
  // ...
];

const purchasedLicenses = [
  {
    title: "Urban Nights Beat",
    creator: "Marcus Williams",
    licenseType: "Exclusive",
    date: "Feb 20, 2026",
    amount: 199,
  },
  // ...
];

const earningsData = {
  totalEarnings: 4234,
  thisMonth: 892,
  pendingPayout: 156,
  activeLicenses: 12,
  recentTransactions: [
    { asset: "Midnight Dreams", type: "Exclusive", buyer: "John Doe", date: "Feb 20, 2026", amount: 149 },
    // ...
  ],
};

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState<"browse" | "your-licenses" | "purchased" | "earnings">("browse");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 pb-12">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          {/* Mobile: Stacked layout, Desktop: Row layout */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold truncate">Marketplace</h1>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5 line-clamp-1 sm:line-clamp-none">
                Buy and sell music, beats, and creative assets
              </p>
            </div>
            <Link href="/home/marketplace/purchase-license" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-4 sm:px-5 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition whitespace-nowrap text-sm sm:text-base">
                <Upload size={18} /> 
                <span className="sm:inline">Upload Asset</span>
              </button>
            </Link>
          </div>

          {/* Tabs - Horizontal scroll on mobile */}
          <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-800 pb-1 -mx-3 sm:mx-0 px-3 sm:px-0">
            <div className="flex sm:flex-nowrap space-x-1 sm:space-x-2">
              {[
                { id: "browse", label: "Browse" },
                { id: "your-licenses", label: "Your Licenses" },
                { id: "purchased", label: "Purchased" },
                { id: "earnings", label: "Earnings" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 font-medium whitespace-nowrap transition-colors border-b-2 text-sm sm:text-base ${
                    activeTab === tab.id
                      ? "border-red-600 text-white"
                      : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search + Filter (only shown in Browse) */}
          {activeTab === "browse" && (
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Search beats, instrumentals..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-xs sm:text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none"
                />
              </div>
              <div className="flex gap-2 sm:gap-3">
                <button className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 text-sm">
                  <Filter size={18} /> 
                  <span className="sm:inline">Filter</span>
                </button>
                <button className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 text-sm">
                  <span className="hidden sm:inline">Most Popular</span>
                  <span className="sm:hidden">Popular</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Browse Tab */}
        {activeTab === "browse" && (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {browseAssets.map((asset) => (
              <div
                key={asset.id}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-colors group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={asset.image}
                    alt={asset.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/70 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    ${asset.price}
                  </div>
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="font-bold text-sm sm:text-base mb-1 line-clamp-1">{asset.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 line-clamp-1">by {asset.creator}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs text-gray-400 mb-3 sm:mb-4">
                    <span className="bg-gray-800 px-2 py-0.5 rounded">{asset.genre}</span>
                    <span className="bg-gray-800 px-2 py-0.5 rounded">{asset.bpm} BPM</span>
                    <span className="bg-gray-800 px-2 py-0.5 rounded">{asset.key}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm mb-3 sm:mb-4">
                    <span className="text-gray-400 flex items-center gap-1">
                      <Music size={14} />
                      {asset.sales} sales
                    </span>
                    <span className="text-gray-400 flex items-center gap-1">
                      ▶ {asset.plays} plays
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-medium text-green-400">{asset.type}</span>
                    <Link href="/home/marketplace/purchase-license" className="flex-1 sm:flex-initial">
                      <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition whitespace-nowrap">
                        Purchase
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Your Licenses (Uploaded Assets) */}
        {activeTab === "your-licenses" && (
          <div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">Assets you've uploaded to the marketplace</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {yourUploadedAssets.map((asset, i) => (
                <div
                  key={i}
                  className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <div className="relative aspect-video">
                    <Image 
                      src={asset.image} 
                      alt="" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-green-900/80 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      ${asset.earnings}
                    </div>
                  </div>
                  <div className="p-3 sm:p-5">
                    <h3 className="font-bold text-sm sm:text-base mb-1 line-clamp-1">{asset.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Uploaded {asset.uploaded}</p>
                    <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 space-y-1">
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-gray-800 px-2 py-0.5 rounded">{asset.genre}</span>
                        <span className="bg-gray-800 px-2 py-0.5 rounded">{asset.bpm} BPM</span>
                        <span className="bg-gray-800 px-2 py-0.5 rounded">{asset.key}</span>
                      </div>
                      <div>{asset.license} License • ${asset.price}</div>
                      <div>{asset.sales} sales • ${asset.earnings} earned</div>
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 sm:py-2.5 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <Eye size={16} /> View
                      </button>
                      <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 sm:py-2.5 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <Edit size={16} /> Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Purchased Licenses */}
        {activeTab === "purchased" && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h2 className="text-lg sm:text-xl font-bold">Purchased Licenses</h2>
              <button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                <Download size={16} /> Download All
              </button>
            </div>
            <div className="divide-y divide-gray-800">
              {purchasedLicenses.map((item, i) => (
                <div key={i} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-sm sm:text-base truncate">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">by {item.creator}</p>
                  </div>
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-500 block sm:inline">Type:</span>{" "}
                      <span className="font-medium text-purple-400">{item.licenseType}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block sm:inline">Date:</span>{" "}
                      <span className="whitespace-nowrap">{item.date}</span>
                    </div>
                    <div className="col-span-2 sm:col-auto">
                      <span className="text-gray-500 block sm:inline">Amount:</span>{" "}
                      <span className="text-green-400 font-medium">${item.amount}</span>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto text-red-400 hover:text-red-300 flex items-center justify-center gap-1.5 text-sm sm:text-base py-2 sm:py-0 border-t sm:border-t-0 border-gray-800 pt-3 sm:pt-0">
                    <Download size={16} /> Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Earnings */}
        {activeTab === "earnings" && (
          <div className="space-y-6 sm:space-y-8">
            {/* Stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {[
                { icon: DollarSign, label: "Total Earnings", value: earningsData.totalEarnings },
                { icon: TrendingUp, label: "This Month", value: earningsData.thisMonth },
                { icon: DollarSign, label: "Pending Payout", value: earningsData.pendingPayout },
                { icon: ShoppingCart, label: "Active Licenses", value: earningsData.activeLicenses },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <stat.icon size={16} className="sm:w-5 sm:h-5 text-red-500" />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 line-clamp-2">{stat.label}</div>
                  </div>
                  <div className="text-lg sm:text-2xl font-bold">
                    {typeof stat.value === "number" ? `$${stat.value.toLocaleString()}` : stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Transactions */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h2 className="text-lg sm:text-xl font-bold">Recent Transactions</h2>
                <button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-medium">
                  Request Payout
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead className="bg-gray-950">
                    <tr>
                      <th className="p-2 sm:p-4 text-left">Asset</th>
                      <th className="p-2 sm:p-4 text-left hidden sm:table-cell">License Type</th>
                      <th className="p-2 sm:p-4 text-left hidden md:table-cell">Buyer</th>
                      <th className="p-2 sm:p-4 text-left">Date</th>
                      <th className="p-2 sm:p-4 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {earningsData.recentTransactions.map((tx, i) => (
                      <tr key={i}>
                        <td className="p-2 sm:p-4 font-medium">{tx.asset}</td>
                        <td className="p-2 sm:p-4 hidden sm:table-cell">
                          <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs">
                            {tx.type}
                          </span>
                        </td>
                        <td className="p-2 sm:p-4 hidden md:table-cell">{tx.buyer}</td>
                        <td className="p-2 sm:p-4 whitespace-nowrap">{tx.date}</td>
                        <td className="p-2 sm:p-4 text-right text-green-400 font-medium">${tx.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Mobile card view for transactions (optional) */}
              <div className="sm:hidden divide-y divide-gray-800">
                {earningsData.recentTransactions.map((tx, i) => (
                  <div key={i} className="p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{tx.asset}</span>
                      <span className="text-green-400 font-medium">${tx.amount}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>{tx.type} • {tx.buyer}</span>
                      <span>{tx.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}