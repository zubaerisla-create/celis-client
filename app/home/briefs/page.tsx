// components/IndustryBriefs.tsx
"use client";

import { useState, useEffect } from "react";
import { Search, Clock, ChevronDown, Filter } from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------
// Mock data (replace with real API / database fetch in production)
// -----------------------------------------------------------------------------
const briefs = [
  {
    id: 1,
    title: "Looking for R&B Vocalist",
    company: "Atlantic Records • Major Label",
    paid: true,
    timeLeft: "5 days left",
    description:
      "Seeking experienced R&B vocalist for upcoming album project. Must have professional recording setup.",
    genre: "R&B",
    requirements: "Professional recording quality • R&B experience • +1 more",
    compensation: "$2,000 – $5,000",
    criteria: 3,
    tag: "Paid",
    tagColor: "bg-green-900/70 text-green-400",
  },
  {
    id: 2,
    title: "Hip-Hop Beat Production Lead",
    company: "Indie-Hop Group • Independent Label",
    revenueShare: true,
    timeLeft: "12 days left",
    description:
      "Looking for trap and drill beats for upcoming artist release. Open to emerging producers.",
    genre: "Hip-Hop",
    requirements: "Trap/Drill production • High-quality mixing • +1 more",
    compensation: "40% revenue split",
    criteria: 3,
    tag: "Revenue Share",
    tagColor: "bg-purple-900/70 text-purple-400",
  },
  {
    id: 3,
    title: "Summer Pop Track",
    company: "Sony Music • Major Label",
    paid: true,
    urgent: true,
    timeLeft: "3 days left",
    description:
      "Need sunny summer pop track for established artist. Fast turnaround required.",
    genre: "Pop",
    requirements: "Pop production experience • Quick turnaround • + more",
    compensation: "$5,000+",
    criteria: 3,
    tag: "Paid",
    tagColor: "bg-green-900/70 text-green-400",
  },
  {
    id: 4,
    title: "Music Video Creative Director",
    company: "Creative House Studios • Production Company",
    paid: true,
    timeLeft: "8 days left",
    description:
      "Seeking visual artist/director for alternative music video concept and execution.",
    genre: "Alternative",
    requirements: "Portfolio of music videos • Concept development • +1 more",
    compensation: "$5,000 – $7,000",
    criteria: 3,
    tag: "Paid",
    tagColor: "bg-green-900/70 text-green-400",
  },
  {
    id: 5,
    title: "Electronic Music Collaboration",
    company: "Neon Pulse Records • Independent Label",
    collaboration: true,
    timeLeft: "15 days left",
    description:
      "Looking for electronic music producers for compilation album. Multiple slots available.",
    genre: "Electronic",
    requirements: "Electronic production • Original material • +1 more",
    compensation: "N/A",
    criteria: 3,
    tag: "Collaboration",
    tagColor: "bg-indigo-900/70 text-indigo-400",
  },
];

export default function IndustryBriefsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "paid" | "revenue" | "collaboration" | "urgent">("all");
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = briefs.filter(item => {
    const q = search.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.company.toLowerCase().includes(q) ||
      item.genre.toLowerCase().includes(q);

    if (filter === "paid")        return item.paid && matchesSearch;
    if (filter === "revenue")     return item.revenueShare && matchesSearch;
    if (filter === "collaboration") return item.collaboration && matchesSearch;
    if (filter === "urgent")      return item.urgent && matchesSearch;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Fixed Header Container */}
      <div className="fixed lg:ml-24  left-0 top-0 right-0">
        {/* Top bar - Shows by default, hides on scroll with blur effect */}
        <div className={`bg-black/90 backdrop-blur-md pt-5 border-b border-gray-800 transition-all duration-300 ${
          isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <div>
              <h1 className="text-lg sm:text-xl font-bold">Industry Briefs</h1>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5 hidden xs:block">
                Exclusive opportunities from labels and industry professionals
              </p>
            </div>
          </div>
        </div>

        {/* Fixed Search & Filters - Always visible */}
        <div className={`bg-black/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search - Full width on mobile */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="text"
                    placeholder="Search briefs..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 sm:py-3 text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none"
                  />
                </div>
              </div>
              
              {/* Create Brief Button - Full width on mobile */}
              <Link href="/home/briefs/create-industry-brief" className="sm:w-auto">
                <button className="w-full bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition text-sm sm:text-base">
                  Create Brief
                </button>
              </Link>
            </div>

            {/* Filter tabs - Horizontal scroll on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-1 mt-3 sm:mt-4 scrollbar-hide">
              {[
                { label: "All", value: "all" },
                { label: "Paid Only", value: "paid" },
                { label: "Revenue Share", value: "revenue" },
                { label: "Collaboration", value: "collaboration" },
                { label: "Urgent", value: "urgent" },
              ].map(f => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value as any)}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition flex-shrink-0 ${
                    filter === f.value
                      ? "bg-red-600 text-white"
                      : "bg-gray-900 border border-gray-700 hover:bg-gray-800"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content - Responsive padding */}
      <div className="max-w-6xl  mx-auto px-4 sm:px-6 pt-42 lg:pt-36 sm:pt-40 pb-6 sm:pb-8">
        {/* Header with count and submissions link */}
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400">
          <div>Showing {filtered.length} open briefs</div>
          <Link href="/home/briefs/my-submissions" className="w-full xs:w-auto">
            <div className="flex items-center justify-between xs:justify-start text-red-700 gap-2">
              <span>View your submissions</span>
         
            </div>
          </Link>
        </div>

        {/* Briefs List */}
        <div className="space-y-4 sm:space-y-5">
          {filtered.map(brief => (
            <div
              key={brief.id}
              className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-colors"
            >
              <div className="p-4 sm:p-6">
                {/* Top row - Stack on mobile */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-base sm:text-lg md:text-xl font-bold break-words pr-2">
                        {brief.title}
                      </h2>
                      <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium whitespace-nowrap ${brief.tagColor}`}>
                        {brief.tag}
                      </span>
                    </div>
                    <p className="text-gray-400 mt-1 text-xs sm:text-sm break-words">{brief.company}</p>
                  </div>

                  {/* Time and button - Stack on smallest screens */}
                  <div className="flex flex-row items-center justify-between sm:flex-col sm:items-end gap-3 sm:gap-2">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
                      <Clock size={4} className="sm:size-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">{brief.timeLeft}</span>
                    </div>
                    <Link href="/home/briefs/brief-details" className="sm:mt-2">                 
                      <button className="bg-gray-800 hover:bg-gray-700 px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition whitespace-nowrap">
                        View Details →
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed break-words">
                  {brief.description}
                </p>

                {/* Bottom meta - Responsive grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm border-t border-gray-800 pt-4 sm:pt-5">
                  <div className="min-w-0">
                    <div className="text-gray-500 text-xs sm:text-sm">Genre</div>
                    <div className="font-medium mt-0.5 truncate">{brief.genre}</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-gray-500 text-xs sm:text-sm">Compensation</div>
                    <div className="font-medium text-emerald-400 mt-0.5 truncate">{brief.compensation}</div>
                  </div>
                  <div className="min-w-0 col-span-2 sm:col-span-1">
                    <div className="text-gray-500 text-xs sm:text-sm">Requirements</div>
                    <div className="font-medium mt-0.5 truncate">{brief.requirements}</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-gray-500 text-xs sm:text-sm">Criteria</div>
                    <div className="font-medium mt-0.5 truncate">{brief.criteria} criteria</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-gray-400 text-sm sm:text-base">No briefs found matching your criteria.</p>
            <button 
              onClick={() => {setSearch(""); setFilter("all");}}
              className="mt-4 text-red-600 hover:text-red-700 text-sm sm:text-base"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Add custom scrollbar hiding for filter tabs */}
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