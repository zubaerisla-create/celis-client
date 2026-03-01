// app/(dashboard)/discover/page.tsx
'use client';

import { useEffect,useRef, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { ChevronDown, Check } from "lucide-react";
import { div } from 'framer-motion/client';
import Link from 'next/link';

// Mock data — পরে API থেকে আনবে
const creators = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Producer",
    genres: ["R&B", "Soul"],
    location: "Los Angeles, CA",
    match: 92,
    plan: "Launch",
    status: null,
    bg: "from-red-600 via-pink-600 to-purple-600",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Songwriter",
    genres: ["R&B", "Pop"],
    location: "New York, NY",
    match: 87,
    plan: "Excel",
    status: null,
    bg: "from-orange-500 via-amber-500 to-yellow-500",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    id: 3,
    name: "Jordan Lee",
    role: "Visual Artist",
    genres: ["Hip-Hop", "Pop"],
    location: "Atlanta, GA",
    match: 85,
    plan: "Excel",
    status: null,
    bg: "from-blue-600 via-indigo-600 to-purple-600",
    avatar: "https://i.pravatar.cc/150?u=jordan",
  },
  {
    id: 4,
    name: "Maya Patel",
    role: "Songwriter",
    genres: ["Pop", "Alternative"],
    location: "Nashville, TN",
    match: 79,
    plan: "Launch",
    status: "requested",
    bg: "from-pink-500 via-purple-500 to-indigo-500",
    avatar: "https://i.pravatar.cc/150?u=maya",
  },
  {
    id: 5,
    name: "Zubaer",
    role: "Songwriter",
    genres: ["Pop", "Alternative"],
    location: "Nashville, TN",
    match: 79,
    plan: "Launch",
    status: "connected",
    bg: "from-pink-500 via-purple-500 to-indigo-500",
    avatar: "https://i.pravatar.cc/150?u=zubaer",
  },
    {
    id: 6,
    name: "Abdul Rahman",
    role: "Visual Artist",
    genres: ["Hip-Hop", "Pop"],
    location: "Atlanta, GA",
    match: 85,
    plan: "Excel",
    status:"connected",
    bg: "from-blue-600 via-indigo-600 to-purple-600",
    avatar: "https://i.pravatar.cc/150?u=jordan",
  },
];

// -----------------------------------------------------

export default function DiscoverCreatorsPage() {
  const [activeTab, setActiveTab] = useState<'discover' | 'connected' | 'requested'>('discover');
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState('');

  const filteredCreators = creators.filter(creator => {
    const term = search.toLowerCase();
    return (
      creator.name.toLowerCase().includes(term) ||
      creator.role.toLowerCase().includes(term) ||
      creator.genres.some(g => g.toLowerCase().includes(term))
    );
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Relevance");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Relevance",
    "Most Popular",
    "Newest",
    "Best Match",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const displayedCreators = filteredCreators.filter(c => {
    if (activeTab === 'discover') return !c.status;
    if (activeTab === 'connected') return c.status === 'connected';
    if (activeTab === 'requested') return c.status === 'requested';
    return true;
  });

  // Tab items with proper typing
  const tabItems = [
    { id: 'discover' as const, label: 'Discover Creators' },
    { id: 'connected' as const, label: `Connected (${creators.filter(c => c.status === 'connected').length})` },
    { id: 'requested' as const, label: `Requested (${creators.filter(c => c.status === 'requested').length})` }
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-12">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-10">

        {/* Title + Description */}
        <div className="mb-6 lg:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Discover Creators
          </h1>
          <p className="mt-2 text-zinc-400 text-lg">
            Find your next collaborator
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-zinc-800 mb-6">
          <div className="flex overflow-x-auto scrollbar-hide -mb-px">
            {tabItems.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium whitespace-nowrap transition-colors
                    ${isActive 
                      ? 'text-white border-b-2 border-red-600' 
                      : 'text-zinc-400 hover:text-zinc-200 border-b-2 border-transparent'}
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search + Filter Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, skills, or genre..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="
                w-full bg-zinc-900 border border-zinc-800 rounded-xl
                pl-12 pr-5 py-3.5 text-white placeholder-zinc-500
                focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none
              "
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="
              flex items-center justify-center gap-2 px-5 py-3.5
              bg-zinc-900 border border-zinc-700 rounded-xl
              hover:bg-zinc-800 hover:border-zinc-600 transition-colors
              sm:min-w-[140px]
            "
          >
            <SlidersHorizontal className="w-5 h-5" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

     <div className="relative inline-block" ref={dropdownRef}>
      
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center justify-center gap-2 px-5 py-3.5
          bg-zinc-900 border border-zinc-700 rounded-xl
          hover:bg-zinc-800 hover:border-zinc-600 transition-colors
          sm:min-w-[160px]
        "
      >
        {selected}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg z-50">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              {option}
              {selected === option && (
                <Check className="w-4 h-4 text-green-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>

        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Filters Sidebar (desktop) */}
          <div className={`
            hidden lg:block lg:w-80 xl:w-96 shrink-0
            ${showFilters ? 'lg:block' : 'lg:hidden'}
          `}>
            <FiltersPanel />
          </div>

          {/* Mobile Filters Modal */}
          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden bg-black/70 flex items-end sm:items-center justify-center p-4">
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Filters</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <FiltersPanel mobile />
                </div>
              </div>
            </div>
          )}

          {/* Creators Grid */}
          <div className="flex-1">
            <p className="text-zinc-500 mb-6">
              Showing {displayedCreators.length} creators
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {displayedCreators.map(creator => (
                <CreatorCard key={creator.id} creator={creator} activeTab={activeTab} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------
// Creator Card Component (inline for simplicity)
// --------------------------------------------------
function CreatorCard({ creator, activeTab }: { creator: any; activeTab: string }) {
  return (
  <div>

    <Link href="/home/friends-profile" >
    
      <div className="
      bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden
      hover:border-zinc-600 transition-all group
    ">
      {/* Banner */}
      <div className="h-40 sm:h-44 relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${creator.bg} opacity-90`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute top-3 right-3">
          <span className={`
            text-xs font-medium px-3 py-1 rounded-full
            ${creator.plan === 'Excel' ? 'bg-purple-600/80' :
              creator.plan === 'Launch' ? 'bg-red-600/80' : 'bg-zinc-700/80'}
          `}>
            {creator.plan}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 -mt-12 relative">
        <div className="flex gap-4 items-start">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-4 border-black shadow-lg"
          />
          <div className="flex-1">
            <h3 className="font-bold text-lg sm:text-xl">{creator.name}</h3>
            <p className="text-sm sm:text-base text-zinc-400">{creator.role}</p>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">{creator.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {creator.genres.map((g: string) => (
            <span key={g} className="text-xs bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
              {g}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="text-green-500 text-sm sm:text-base font-medium flex items-center gap-1">
            <span>★</span> {creator.match}% match
          </div>

          {activeTab === 'discover' && (
            <button className="
              bg-red-600 hover:bg-red-700 px-5 sm:px-6 py-2 rounded-xl
              text-sm font-medium transition
            ">
              Connect
            </button>
          )}

          {activeTab === 'requested' && (
            <div className="flex gap-2">
              <button className="
                bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl
                text-sm font-medium transition
              ">
                Reject
              </button>
              <button className="
                bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl
                text-sm font-medium transition
              ">
                Accept
              </button>
            </div>
          )}

          {activeTab === 'connected' && (
            <button className="
              bg-zinc-700 hover:bg-zinc-600 px-5 py-2 rounded-xl
              text-sm font-medium transition
            ">
              Message
            </button>
          )}
        </div>
      </div>
    </div>
    </Link>
  </div>
  );
}

// --------------------------------------------------
// Filters Panel (shared between desktop sidebar & mobile modal)
// --------------------------------------------------
function FiltersPanel({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? 'space-y-6' : 'space-y-8'}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg sm:text-xl font-bold">Filters</h3>
        <button className="text-red-500 hover:text-red-400 text-sm">Reset</button>
      </div>

      {/* Role */}
      <div>
        <h4 className="text-sm font-semibold mb-3">Role</h4>
        <div className="space-y-2.5">
          {['Songwriter', 'Producer', 'Visual Artist', 'Choreographer', 'A&R', 'Label'].map(r => (
            <label key={r} className="flex items-center gap-2.5 text-sm">
              <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-red-600" />
              {r}
            </label>
          ))}
        </div>
      </div>

      {/* Genre */}
      <div>
        <h4 className="text-sm font-semibold mb-3">Genre</h4>
        <div className="flex flex-wrap gap-2">
          {['Pop', 'Hip-Hop', 'R&B', 'Rock', 'Electronic', 'Jazz', 'Country', 'Alternative'].map(g => (
            <button
              key={g}
              className="px-3 py-1.5 text-xs rounded-full bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition"
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Tier */}
      <div>
        <h4 className="text-sm font-semibold mb-3">Tier</h4>
        <div className="space-y-2.5">
          {['Ignite', 'Launch', 'Excel'].map(t => (
            <label key={t} className="flex items-center gap-2.5 text-sm">
              <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-red-600" />
              {t}
            </label>
          ))}
        </div>
      </div>

      {/* Apply Button (mobile) */}
      {mobile && (
        <div className="pt-4 flex gap-3">
          <button className="flex-1 py-3 bg-zinc-800 rounded-xl text-sm font-medium">
            Cancel
          </button>
          <button className="flex-1 py-3 bg-red-600 rounded-xl text-sm font-medium">
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
}