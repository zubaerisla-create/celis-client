// components/IndustryBriefs.tsx
"use client";

import { useState } from "react";
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
      {/* Sticky header */}
      <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Industry Briefs</h1>
              <p className="text-gray-400 text-sm mt-0.5">
                Exclusive opportunities from labels and industry professionals
              </p>
            </div>
          <Link href="/home/briefs/create-industry-brief" >
          
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition">
              Create Brief
            </button>
          </Link>
          </div>

          {/* Search + filters */}
          <div className="mt-5 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search briefs by title, genre, company..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-11 pr-4 py-3 text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {[
                { label: "All", value: "all" },
                { label: "Paid Only", value: "paid" },
                { label: "Revenue Share", value: "revenue" },
                { label: "Collaboration", value: "collaboration" },
                { label: "Urgent (7 days)", value: "urgent" },
              ].map(f => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value as any)}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
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

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
          <div>Showing {filtered.length} open briefs</div>
        <Link href="/home/briefs/my-submissions" >
        
          <div className="flex items-center text-red-700 gap-2">
            <span>View your submissions</span>
            <ChevronDown size={16} />
          </div>
        </Link>
        </div>

        <div className="space-y-5">
          {filtered.map(brief => (
            <div
              key={brief.id}
              className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-colors"
            >
              <div className="p-6">
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-xl font-bold">{brief.title}</h2>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${brief.tagColor}`}>
                        {brief.tag}
                      </span>
                    </div>
                    <p className="text-gray-400 mt-1 text-sm">{brief.company}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                      <Clock size={15} />
                      {brief.timeLeft}
                    </div>
                 {/* <Link href={`/home/briefs/${brief.id}`} >
                  */}
<Link href="/home/briefs/brief-details">                 
                    <button className="bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-lg text-sm font-medium transition">
                      View Details →
                    </button>
                 </Link>
                  </div>
                </div>

                <p className="text-gray-300 mb-5 leading-relaxed">{brief.description}</p>

                {/* Bottom meta */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 text-sm border-t border-gray-800 pt-5">
                  <div>
                    <div className="text-gray-500">Genre</div>
                    <div className="font-medium mt-0.5">{brief.genre}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Compensation</div>
                    <div className="font-medium text-emerald-400 mt-0.5">{brief.compensation}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Requirements</div>
                    <div className="font-medium mt-0.5">{brief.requirements}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Criteria</div>
                    <div className="font-medium mt-0.5">{brief.criteria} criteria</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}