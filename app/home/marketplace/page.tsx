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
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h1 className="text-2xl font-bold">Marketplace</h1>
              <p className="text-gray-400 text-sm mt-0.5">
                Buy and sell music, beats, and creative assets
              </p>
            </div>
<Link href="/home/marketplace/upload-assets" >

            <button className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition whitespace-nowrap">
              <Upload size={18} /> Upload Asset
            </button>
</Link>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-gray-800 pb-1">
            {[
              { id: "browse", label: "Browse" },
              { id: "your-licenses", label: "Your Licenses" },
              { id: "purchased", label: "Purchased" },
              { id: "earnings", label: "Earnings" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-red-600 text-white"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search + Filter (only shown in Browse) */}
          {activeTab === "browse" && (
            <div className="mt-5 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Search beats, instrumentals, samples, loop packs..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-11 pr-4 py-3 text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none"
                />
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-5 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800">
                  <Filter size={18} /> Filter
                </button>
                <button className="flex items-center gap-2 px-5 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800">
                  Most Popular <ChevronDown size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Browse Tab */}
        {activeTab === "browse" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  />
                  <div className="absolute top-3 right-3 bg-black/70 px-3 py-1 rounded-full text-sm font-medium">
                    ${asset.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold mb-1 line-clamp-1">{asset.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">by {asset.creator}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
                    <span>{asset.genre}</span>
                    <span>• {asset.bpm} BPM</span>
                    <span>• {asset.key}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-gray-400">
                      <Music size={14} className="inline mr-1" />
                      {asset.sales} sales
                    </span>
                    <span className="text-gray-400">
                      ▶ {asset.plays} plays
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-400">{asset.type}</span>
                    <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-sm font-medium transition">
                      Purchase License
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Your Licenses (Uploaded Assets) */}
        {activeTab === "your-licenses" && (
          <div>
            <p className="text-gray-400 mb-6">Assets you've uploaded to the marketplace</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {yourUploadedAssets.map((asset, i) => (
                <div
                  key={i}
                  className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <div className="relative aspect-video">
                    <Image src={asset.image} alt="" fill className="object-cover" />
                    <div className="absolute top-3 right-3 bg-green-900/80 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      ${asset.earnings}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold mb-1">{asset.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">Uploaded {asset.uploaded}</p>
                    <div className="text-sm text-gray-400 mb-4 space-y-1">
                      <div>{asset.genre} • {asset.bpm} BPM • {asset.key}</div>
                      <div>{asset.license} License • ${asset.price}</div>
                      <div>{asset.sales} sales • ${asset.earnings} earned</div>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2.5 rounded-lg flex items-center justify-center gap-2">
                        <Eye size={16} /> View
                      </button>
                      <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2.5 rounded-lg flex items-center justify-center gap-2">
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
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <h2 className="text-xl font-bold">Purchased Licenses</h2>
              <button className="bg-gray-800 hover:bg-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2">
                <Download size={16} /> Download All
              </button>
            </div>
            <div className="divide-y divide-gray-800">
              {purchasedLicenses.map((item, i) => (
                <div key={i} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-400">by {item.creator}</p>
                  </div>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div>
                      <span className="text-gray-500">License Type:</span>{" "}
                      <span className="font-medium text-purple-400">{item.licenseType}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Date:</span> {item.date}
                    </div>
                    <div>
                      <span className="text-gray-500">Amount:</span>{" "}
                      <span className="text-green-400 font-medium">${item.amount}</span>
                    </div>
                  </div>
                  <button className="text-red-400 hover:text-red-300 flex items-center gap-1.5">
                    <Download size={16} /> Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Earnings */}
        {activeTab === "earnings" && (
          <div className="space-y-8">
            {/* Stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: DollarSign, label: "Total Earnings", value: earningsData.totalEarnings },
                { icon: TrendingUp, label: "This Month", value: earningsData.thisMonth },
                { icon: DollarSign, label: "Pending Payout", value: earningsData.pendingPayout },
                { icon: ShoppingCart, label: "Active Licenses", value: earningsData.activeLicenses },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <stat.icon size={20} className="text-red-500" />
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                  <div className="text-2xl font-bold">
                    {typeof stat.value === "number" ? `$${stat.value.toLocaleString()}` : stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Transactions */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                <h2 className="text-xl font-bold">Recent Transactions</h2>
                <button className="bg-gray-800 hover:bg-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium">
                  Request Payout
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-950">
                    <tr>
                      <th className="p-4 text-left">Asset</th>
                      <th className="p-4 text-left">License Type</th>
                      <th className="p-4 text-left">Buyer</th>
                      <th className="p-4 text-left">Date</th>
                      <th className="p-4 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {earningsData.recentTransactions.map((tx, i) => (
                      <tr key={i}>
                        <td className="p-4">{tx.asset}</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs">
                            {tx.type}
                          </span>
                        </td>
                        <td className="p-4">{tx.buyer}</td>
                        <td className="p-4">{tx.date}</td>
                        <td className="p-4 text-right text-green-400 font-medium">${tx.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}