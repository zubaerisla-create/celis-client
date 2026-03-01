// app/submissions/page.tsx
"use client";

import { useState } from "react";
import { FileText, CheckCircle2, XCircle, Calendar, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type SubmissionStatus = "Under Review" | "Shortlisted" | "Selected" | "Not Selected";

interface Submission {
  id: string;
  title: string;
  company: string;
  status: SubmissionStatus | "Selected" | "Not Selected";
  submitted: string;
  deadline: string;
  message?: string;
  isActive: boolean;
}

const mockSubmissions: Submission[] = [
  {
    id: "1",
    title: "Summer Campaign Vocals",
    company: "Universal Music",
    status: "Selected",
    submitted: "February 10, 2026",
    deadline: "February 22, 2026",
    message: "You've been selected! Check your email for next steps and contract details.",
    isActive: true,
  },
  {
    id: "2",
    title: "Jazz Fusion Project",
    company: "Blue Note Records",
    status: "Not Selected",
    submitted: "February 5, 2026",
    deadline: "February 15, 2026",
    isActive: false,
  },
  // You can add 3 more dummy entries to match "Active (3)"
  {
    id: "3",
    title: "R&B Feature Vocal",
    company: "Atlantic Records",
    status: "Under Review",
    submitted: "February 18, 2026",
    deadline: "March 5, 2026",
    isActive: true,
  },
  {
    id: "4",
    title: "Pop Hook Writer Needed",
    company: "Sony Music",
    status: "Shortlisted",
    submitted: "February 12, 2026",
    deadline: "February 28, 2026",
    isActive: true,
  },
  {
    id: "5",
    title: "Indie Soul EP Vocals",
    company: "Independent",
    status: "Under Review",
    submitted: "January 29, 2026",
    deadline: "February 20, 2026",
    isActive: false,
  },
];

export default function YourSubmissionsPage() {
  const [activeTab, setActiveTab] = useState<"Active" | "Completed">("Active");

  const filteredSubmissions = mockSubmissions.filter((sub) =>
    activeTab === "Active" ? sub.isActive : !sub.isActive
  );

  const stats = {
    total: 5,
    underReview: 3,
    shortlisted: 1,
    selected: 1,
  };

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
             <button className="text-zinc-400 hover:text-white">
              
                <ArrowLeft onClick={()=>router.back()} size={20} />
              </button>
          <h1 className="text-3xl font-bold">Your Submissions</h1>
          <p className="text-zinc-400 mt-1">
            Track your brief applications and their status
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold">{stats.total}</div>
            <div className="text-sm text-zinc-400 mt-1">Total Submissions</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold">{stats.underReview}</div>
            <div className="text-sm text-zinc-400 mt-1">Under Review</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold">{stats.shortlisted}</div>
            <div className="text-sm text-zinc-400 mt-1">Shortlisted</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold">{stats.selected}</div>
            <div className="text-sm text-zinc-400 mt-1">Selected</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-800 mb-6">
          <button
            onClick={() => setActiveTab("Active")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "Active"
                ? "border-b-2 border-rose-500 text-rose-400"
                : "text-zinc-400 hover:text-zinc-300"
            }`}
          >
            Active ({mockSubmissions.filter((s) => s.isActive).length})
          </button>
          <button
            onClick={() => setActiveTab("Completed")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "Completed"
                ? "border-b-2 border-rose-500 text-rose-400"
                : "text-zinc-400 hover:text-zinc-300"
            }`}
          >
            Completed ({mockSubmissions.filter((s) => !s.isActive).length})
          </button>
        </div>

        {/* Submissions List */}
        <div className="space-y-5">
          {filteredSubmissions.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10 text-center text-zinc-500">
              No {activeTab.toLowerCase()} submissions yet.
            </div>
          ) : (
            filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
              >
                {/* Header row */}
                <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <FileText className="text-rose-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{submission.title}</h3>
                      <p className="text-sm text-zinc-400">{submission.company}</p>
                    </div>
                  </div>
                
                <Link href="/home/briefs/brief-details" >
                
                  <button className="text-sm bg-zinc-800 hover:bg-zinc-700 px-4 py-1.5 rounded-lg border border-zinc-700 transition-colors">
                    View Brief
                  </button>
                </Link>

                </div>

                {/* Status badge */}
                <div className="px-5 pt-4 pb-2">
                  {submission.status === "Selected" ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 rounded-full text-sm font-medium">
                      <CheckCircle2 size={16} />
                      Selected
                    </span>
                  ) : submission.status === "Not Selected" ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-950/40 text-rose-400 border border-rose-900/50 rounded-full text-sm font-medium">
                      <XCircle size={16} />
                      Not Selected
                    </span>
                  ) : (
                    <span className="text-sm text-zinc-400">{submission.status}</span>
                  )}
                </div>

                {/* Dates */}
                <div className="px-5 py-3 flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-400">
                  <div>
                    <span className="block text-xs text-zinc-500">Submitted</span>
                    {submission.submitted}
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500">Deadline</span>
                    {submission.deadline}
                  </div>
                </div>

                {/* Message banner (only for selected) */}
                {submission.message && (
                  <div className="mx-5 mb-5 mt-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg p-4 text-sm text-emerald-300 flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0" size={18} />
                    <div>{submission.message}</div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}