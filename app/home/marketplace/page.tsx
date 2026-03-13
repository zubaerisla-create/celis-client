// components/Marketplace.tsx
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
  X,
  Check,
  Clock,
  AlertCircle,
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
    popularity: 85,
    date: "2026-02-15",
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
    popularity: 92,
    date: "2026-02-10",
  },
  {
    id: 3,
    title: "Sunset Vibes",
    creator: "Elena Rodriguez",
    genre: "Electronic",
    bpm: 128,
    key: "A Minor",
    price: 1800,
    type: "Basic",
    sales: 56,
    plays: 890,
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400",
    popularity: 78,
    date: "2026-02-18",
  },
  {
    id: 4,
    title: "Street Dreams",
    creator: "DJ Kool",
    genre: "Hip-Hop",
    bpm: 95,
    key: "D Minor",
    price: 2200,
    type: "Exclusive",
    sales: 145,
    plays: 2100,
    image: "https://images.unsplash.com/photo-1557682250-33bd709cbe9b?w=400",
    popularity: 88,
    date: "2026-02-05",
  },
  // ... more items
];

const yourUploadedAssets = [
  {
    id: 1,
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
    status: "active",
  },
  {
    id: 2,
    title: "Summer Breeze",
    uploaded: "Feb 01, 2026",
    genre: "Pop",
    bpm: 110,
    key: "F Major",
    license: "Premium",
    price: 99,
    sales: 12,
    earnings: 1188,
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400",
    status: "active",
  },
  // ...
];

const purchasedLicenses = [
  {
    id: 1,
    title: "Urban Nights Beat",
    creator: "Marcus Williams",
    licenseType: "Exclusive",
    date: "Feb 20, 2026",
    amount: 199,
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Midnight Dreams",
    creator: "Sarah Chen",
    licenseType: "Basic",
    date: "Feb 15, 2026",
    amount: 49,
    downloadUrl: "#",
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
    { asset: "Urban Nights", type: "Basic", buyer: "Jane Smith", date: "Feb 18, 2026", amount: 49 },
    { asset: "Sunset Vibes", type: "Exclusive", buyer: "Mike Johnson", date: "Feb 15, 2026", amount: 199 },
    // ...
  ],
  payoutHistory: [
    { id: 1, amount: 500, date: "Feb 01, 2026", status: "completed" },
    { id: 2, amount: 350, date: "Jan 15, 2026", status: "completed" },
    { id: 3, amount: 200, date: "Jan 01, 2026", status: "completed" },
  ],
};

// Filter options
const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "sales", label: "Most Sales" },
  { value: "plays", label: "Most Plays" },
];

const genreOptions = [
  "All",
  "R&B",
  "Hip-Hop",
  "Pop",
  "Electronic",
  "Rock",
  "Jazz",
  "Country",
  "Alternative",
  "Soul",
  "Indie",
];

const licenseOptions = ["All", "Basic", "Premium", "Exclusive"];

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState<"browse" | "your-licenses" | "purchased" | "earnings">("browse");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedLicense, setSelectedLicense] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [payoutAmount, setPayoutAmount] = useState("");
  const [payoutMethod, setPayoutMethod] = useState("bank");
  const [payoutRequests, setPayoutRequests] = useState([
    { id: 1, amount: 500, date: "Feb 25, 2026", status: "pending" },
  ]);
  const [filteredAssets, setFilteredAssets] = useState(browseAssets);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter and sort assets
  useEffect(() => {
    let filtered = [...browseAssets];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (asset) =>
          asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          asset.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
          asset.genre.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Genre filter
    if (selectedGenre !== "All") {
      filtered = filtered.filter((asset) => asset.genre === selectedGenre);
    }

    // License filter
    if (selectedLicense !== "All") {
      filtered = filtered.filter((asset) => asset.type === selectedLicense);
    }

    // Sort
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "sales":
        filtered.sort((a, b) => b.sales - a.sales);
        break;
      case "plays":
        filtered.sort((a, b) => b.plays - a.plays);
        break;
      default:
        break;
    }

    setFilteredAssets(filtered);
  }, [searchQuery, selectedGenre, selectedLicense, sortBy]);

  const handleViewAsset = (asset: any) => {
    setSelectedAsset(asset);
    setShowViewModal(true);
  };

  const handleEditAsset = (asset: any) => {
    setSelectedAsset(asset);
    setShowEditModal(true);
  };

  const handleRequestPayout = () => {
    if (!payoutAmount || parseFloat(payoutAmount) <= 0) return;
    
    // Add to pending requests
    const newRequest = {
      id: payoutRequests.length + 1,
      amount: parseFloat(payoutAmount),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: "pending",
    };
    
    setPayoutRequests([...payoutRequests, newRequest]);
    setShowPayoutModal(false);
    setPayoutAmount("");
    
    // Show success message (you can add a toast notification here)
    alert("Payout request submitted successfully! It will be reviewed by admin.");
  };

  const handleDownloadAll = () => {
    // Simulate downloading all purchased licenses
    alert("Downloading all purchased licenses...");
  };

  const handleDownloadLicense = (license: any) => {
    // Simulate downloading a specific license
    alert(`Downloading ${license.title}...`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 pb-12">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          {/* Mobile: Stacked layout, Desktop: Row layout */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold truncate">
                <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Marketplace
                </span>
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5 line-clamp-1 sm:line-clamp-none">
                Buy and sell music, beats, and creative assets
              </p>
            </div>
            <Link href="/home/marketplace/purchase-license" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] px-4 sm:px-5 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] whitespace-nowrap text-sm sm:text-base">
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
                      ? "border-[#E54FA9] text-white"
                      : "border-transparent text-gray-400 hover:text-gray-300 hover:border-[#E54FA9]/50"
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 text-xs sm:text-sm placeholder-gray-500 focus:border-[#E54FA9] focus:outline-none focus:ring-1 focus:ring-[#E54FA9] transition-all"
                />
              </div>
              <div className="flex gap-2 sm:gap-3 relative" ref={dropdownRef}>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] hover:border-transparent transition-all text-sm group"
                >
                  <Filter size={18} className="group-hover:text-white" /> 
                  <span className="sm:inline group-hover:text-white">Filter</span>
                  {(selectedGenre !== "All" || selectedLicense !== "All") && (
                    <span className="ml-1 px-1.5 py-0.5 bg-[#E54FA9] text-white text-xs rounded-full">
                      {selectedGenre !== "All" && selectedLicense !== "All" ? 2 : 1}
                    </span>
                  )}
                </button>
                
                {/* Filter Dropdown */}
                {showFilters && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl z-50 p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-[#E54FA9]">Filters</h3>
                      <button 
                        onClick={() => {
                          setSelectedGenre("All");
                          setSelectedLicense("All");
                        }}
                        className="text-xs text-gray-400 hover:text-[#E54FA9]"
                      >
                        Reset
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Genre</label>
                        <select 
                          value={selectedGenre}
                          onChange={(e) => setSelectedGenre(e.target.value)}
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#E54FA9]"
                        >
                          {genreOptions.map((genre) => (
                            <option key={genre} value={genre}>{genre}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">License Type</label>
                        <select 
                          value={selectedLicense}
                          onChange={(e) => setSelectedLicense(e.target.value)}
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#E54FA9]"
                        >
                          {licenseOptions.map((license) => (
                            <option key={license} value={license}>{license}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-zinc-700">
                      <button
                        onClick={() => setShowFilters(false)}
                        className="w-full py-2 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-lg text-sm font-medium"
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                )}
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 sm:py-3 bg-gray-900 border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-[#E54FA9] appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.25rem',
                  }}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Browse Tab */}
        {activeTab === "browse" && (
          <div>
            {filteredAssets.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400">No assets found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedGenre("All");
                    setSelectedLicense("All");
                    setSortBy("popular");
                  }}
                  className="mt-4 text-[#E54FA9] hover:text-[#D63F99]"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-[#E54FA9]/50 transition-all group"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={asset.image}
                        alt={asset.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white shadow-lg shadow-[#831CDF]/30">
                        ${asset.price}
                      </div>
                      {asset.popularity > 90 && (
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-yellow-500/90 text-black px-2 py-1 rounded-full text-xs font-medium">
                          🔥 Hot
                        </div>
                      )}
                    </div>
                    <div className="p-3 sm:p-5">
                      <h3 className="font-bold text-sm sm:text-base mb-1 line-clamp-1 group-hover:text-[#E54FA9] transition-colors">{asset.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 line-clamp-1">by {asset.creator}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs text-gray-400 mb-3 sm:mb-4">
                        <span className="bg-gray-800 px-2 py-0.5 rounded group-hover:bg-[#E54FA9]/20 group-hover:text-[#E54FA9] transition-colors">{asset.genre}</span>
                        <span className="bg-gray-800 px-2 py-0.5 rounded group-hover:bg-[#E54FA9]/20 group-hover:text-[#E54FA9] transition-colors">{asset.bpm} BPM</span>
                        <span className="bg-gray-800 px-2 py-0.5 rounded group-hover:bg-[#E54FA9]/20 group-hover:text-[#E54FA9] transition-colors">{asset.key}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-3 sm:mb-4">
                        <span className="text-gray-400 flex items-center gap-1">
                          <Music size={14} className="group-hover:text-[#E54FA9] transition-colors" />
                          <span className="group-hover:text-[#E54FA9] transition-colors">{asset.sales} sales</span>
                        </span>
                        <span className="text-gray-400 flex items-center gap-1">
                          <span className="group-hover:text-[#E54FA9] transition-colors">▶</span>
                          <span className="group-hover:text-[#E54FA9] transition-colors">{asset.plays} plays</span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-medium text-[#E54FA9]">{asset.type}</span>
                        <Link href="/home/marketplace/purchase-license" className="flex-1 sm:flex-initial">
                          <button className="w-full sm:w-auto bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all shadow-lg shadow-[#831CDF]/30 active:scale-[0.98] whitespace-nowrap">
                            Purchase
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Your Licenses (Uploaded Assets) */}
        {activeTab === "your-licenses" && (
          <div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">Assets you've uploaded to the marketplace</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {yourUploadedAssets.map((asset, i) => (
                <div
                  key={asset.id}
                  className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-[#E54FA9]/50 transition-all group"
                >
                  <div className="relative aspect-video">
                    <Image 
                      src={asset.image} 
                      alt="" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg shadow-[#831CDF]/30">
                      ${asset.earnings}
                    </div>
                    {asset.status === "active" && (
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Active
                      </div>
                    )}
                  </div>
                  <div className="p-3 sm:p-5">
                    <h3 className="font-bold text-sm sm:text-base mb-1 line-clamp-1 group-hover:text-[#E54FA9] transition-colors">{asset.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Uploaded {asset.uploaded}</p>
                    <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 space-y-1">
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-gray-800 px-2 py-0.5 rounded group-hover:bg-[#E54FA9]/20 group-hover:text-[#E54FA9] transition-colors">{asset.genre}</span>
                        <span className="bg-gray-800 px-2 py-0.5 rounded group-hover:bg-[#E54FA9]/20 group-hover:text-[#E54FA9] transition-colors">{asset.bpm} BPM</span>
                        <span className="bg-gray-800 px-2 py-0.5 rounded group-hover:bg-[#E54FA9]/20 group-hover:text-[#E54FA9] transition-colors">{asset.key}</span>
                      </div>
                      <div className="group-hover:text-[#E54FA9] transition-colors">{asset.license} License • ${asset.price}</div>
                      <div className="group-hover:text-[#E54FA9] transition-colors">{asset.sales} sales • ${asset.earnings} earned</div>
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      <button 
                        onClick={() => handleViewAsset(asset)}
                        className="flex-1 bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] py-2 sm:py-2.5 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm transition-all group/btn"
                      >
                        <Eye size={16} className="group-hover/btn:text-white" />
                        <span className="group-hover/btn:text-white">View</span>
                      </button>
                      <button 
                        onClick={() => handleEditAsset(asset)}
                        className="flex-1 bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] py-2 sm:py-2.5 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm transition-all group/btn"
                      >
                        <Edit size={16} className="group-hover/btn:text-white" />
                        <span className="group-hover/btn:text-white">Edit</span>
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
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-[#E54FA9]/50 transition-all">
            <div className="p-4 sm:p-6 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                Purchased Licenses
              </h2>
              <button 
                onClick={handleDownloadAll}
                className="w-full sm:w-auto bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all group"
              >
                <Download size={16} className="group-hover:text-white" />
                <span className="group-hover:text-white">Download All</span>
              </button>
            </div>
            <div className="divide-y divide-gray-800">
              {purchasedLicenses.map((item, i) => (
                <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#E54FA9]/5 transition-colors">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-sm sm:text-base truncate hover:text-[#E54FA9] transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">by {item.creator}</p>
                  </div>
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-500 block sm:inline">Type:</span>{" "}
                      <span className="font-medium text-[#E54FA9]">{item.licenseType}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block sm:inline">Date:</span>{" "}
                      <span className="whitespace-nowrap hover:text-[#E54FA9] transition-colors">{item.date}</span>
                    </div>
                    <div className="col-span-2 sm:col-auto">
                      <span className="text-gray-500 block sm:inline">Amount:</span>{" "}
                      <span className="text-[#E54FA9] font-medium">${item.amount}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDownloadLicense(item)}
                    className="w-full sm:w-auto text-[#E54FA9] hover:text-[#D63F99] flex items-center justify-center gap-1.5 text-sm sm:text-base py-2 sm:py-0 border-t sm:border-t-0 border-gray-800 pt-3 sm:pt-0 transition-colors group"
                  >
                    <Download size={16} className="group-hover:scale-110 transition-transform" /> Download
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
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-6 hover:border-[#E54FA9]/50 transition-all group">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#E54FA9]/20 group-hover:to-[#831CDF]/20 transition-colors">
                      <stat.icon size={16} className="sm:w-5 sm:h-5 text-[#E54FA9]" />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 line-clamp-2 group-hover:text-[#E54FA9] transition-colors">{stat.label}</div>
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-white">
                    {typeof stat.value === "number" ? `$${stat.value.toLocaleString()}` : stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Payout Requests Status */}
            {payoutRequests.length > 0 && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-[#E54FA9]" />
                  Pending Payout Requests
                </h3>
                <div className="space-y-3">
                  {payoutRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <span className="font-medium">${request.amount}</span>
                        <span className="text-xs text-gray-400 ml-2">Requested on {request.date}</span>
                      </div>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                        Pending Approval
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Transactions */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-[#E54FA9]/50 transition-all">
              <div className="p-4 sm:p-6 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Recent Transactions
                </h2>
                <button 
                  onClick={() => setShowPayoutModal(true)}
                  className="w-full sm:w-auto bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-medium transition-all group"
                >
                  <span className="group-hover:text-white">Request Payout</span>
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
                      <tr key={i} className="hover:bg-[#E54FA9]/5 transition-colors">
                        <td className="p-2 sm:p-4 font-medium hover:text-[#E54FA9] transition-colors">{tx.asset}</td>
                        <td className="p-2 sm:p-4 hidden sm:table-cell">
                          <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-[#E54FA9]/20 text-[#E54FA9] rounded-full text-xs">
                            {tx.type}
                          </span>
                        </td>
                        <td className="p-2 sm:p-4 hidden md:table-cell hover:text-[#E54FA9] transition-colors">{tx.buyer}</td>
                        <td className="p-2 sm:p-4 whitespace-nowrap hover:text-[#E54FA9] transition-colors">{tx.date}</td>
                        <td className="p-2 sm:p-4 text-right text-[#E54FA9] font-medium">${tx.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Mobile card view for transactions */}
              <div className="sm:hidden divide-y divide-gray-800">
                {earningsData.recentTransactions.map((tx, i) => (
                  <div key={i} className="p-4 space-y-2 hover:bg-[#E54FA9]/5 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="font-medium hover:text-[#E54FA9] transition-colors">{tx.asset}</span>
                      <span className="text-[#E54FA9] font-medium">${tx.amount}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>
                        <span className="text-[#E54FA9]">{tx.type}</span> • {tx.buyer}
                      </span>
                      <span>{tx.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* View Asset Modal */}
      {showViewModal && selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Asset Details
                </h2>
                <button onClick={() => setShowViewModal(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={selectedAsset.image}
                    alt={selectedAsset.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold">{selectedAsset.title}</h3>
                  <p className="text-gray-400">Uploaded on {selectedAsset.uploaded}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <div>
                    <div className="text-xs text-gray-400">Genre</div>
                    <div className="font-medium">{selectedAsset.genre}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">BPM</div>
                    <div className="font-medium">{selectedAsset.bpm}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Key</div>
                    <div className="font-medium">{selectedAsset.key}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">License</div>
                    <div className="font-medium text-[#E54FA9]">{selectedAsset.license}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Statistics</h4>
                  <div className="flex justify-between text-sm">
                    <span>Price: <span className="text-[#E54FA9]">${selectedAsset.price}</span></span>
                    <span>Sales: <span className="text-[#E54FA9]">{selectedAsset.sales}</span></span>
                    <span>Earnings: <span className="text-[#E54FA9]">${selectedAsset.earnings}</span></span>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowViewModal(false)}
                    className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setShowViewModal(false);
                      handleEditAsset(selectedAsset);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-lg text-sm font-medium"
                  >
                    Edit Asset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Asset Modal */}
      {showEditModal && selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Edit Asset
                </h2>
                <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Title</label>
                  <input
                    type="text"
                    defaultValue={selectedAsset.title}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E54FA9]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Genre</label>
                  <select
                    defaultValue={selectedAsset.genre}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E54FA9]"
                  >
                    {genreOptions.filter(g => g !== "All").map((genre) => (
                      <option key={genre} value={genre}>{genre}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">BPM</label>
                    <input
                      type="number"
                      defaultValue={selectedAsset.bpm}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E54FA9]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Key</label>
                    <input
                      type="text"
                      defaultValue={selectedAsset.key}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E54FA9]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Price ($)</label>
                  <input
                    type="number"
                    defaultValue={selectedAsset.price}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E54FA9]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">License Type</label>
                  <select
                    defaultValue={selectedAsset.license}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E54FA9]"
                  >
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    <option value="Exclusive">Exclusive</option>
                  </select>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Asset updated successfully!");
                      setShowEditModal(false);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-lg text-sm font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Payout Request Modal */}
      {showPayoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Request Payout
                </h2>
                <button onClick={() => setShowPayoutModal(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-start gap-3">
                  <AlertCircle className="text-yellow-500 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-yellow-500">
                    Your request will be reviewed by admin. Once approved, the amount will be transferred to your selected payment method within 3-5 business days.
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Amount ($)</label>
                  <input
                    type="number"
                    value={payoutAmount}
                    onChange={(e) => setPayoutAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="10"
                    step="0.01"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#E54FA9]"
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum payout: $10</p>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Payout Method</label>
                  <select
                    value={payoutMethod}
                    onChange={(e) => setPayoutMethod(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#E54FA9]"
                  >
                    <option value="bank">Bank Transfer (3-5 days)</option>
                    <option value="paypal">PayPal (2-3 days)</option>
                    <option value="wise">Wise (1-2 days)</option>
                  </select>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Available Balance:</span>
                    <span className="font-bold text-[#E54FA9]">${earningsData.totalEarnings}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Pending Payouts:</span>
                    <span className="font-bold text-yellow-500">${earningsData.pendingPayout}</span>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowPayoutModal(false)}
                    className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleRequestPayout}
                    disabled={!payoutAmount || parseFloat(payoutAmount) <= 0 || parseFloat(payoutAmount) > earningsData.totalEarnings}
                    className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                      !payoutAmount || parseFloat(payoutAmount) <= 0 || parseFloat(payoutAmount) > earningsData.totalEarnings
                        ? "bg-gray-600 cursor-not-allowed opacity-50"
                        : "bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF]"
                    }`}
                  >
                    Submit Request
                  </button>
                </div>
                
                <p className="text-xs text-center text-gray-500">
                  By submitting, you agree to our payout terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom scrollbar hiding for tabs */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}