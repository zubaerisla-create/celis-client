// app/briefs/[id]/page.tsx
"use client";

import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  DollarSign,
  Filter,
  MoreHorizontal,
  X,
  Download,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";

type Tab = "details" | "submissions";

type SubmissionStatus = "Under Review" | "Shortlisted" | "Selected" | "Not Selected";

interface Submission {
  id: string;
  name: string;
  avatar?: string;
  submitted: string;
  status: SubmissionStatus;
  coverLetterPreview: string;
  coverLetterFull?: string;
  files?: { name: string; type: string; size?: string }[];
  portfolioLinks?: string[];
  audioLink?: string;
}

const mockSubmissions: Submission[] = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "/avatars/sarah.jpg",
    submitted: "Feb 20, 2026",
    status: "Under Review",
    coverLetterPreview:
      "I'm an experienced R&B vocalist with over 5 years in the industry...",
    coverLetterFull:
      "I'm an experienced R&B vocalist with over 5 years in the industry. I've worked with various independent artists and have a deep understanding of soulful delivery and emotional phrasing. I have a professional home studio setup with treated acoustics and high-end microphones. Looking forward to potentially collaborating on this exciting Atlantic Records project.",
    files: [
      { name: "Sarah_Chen_Vocal_Demo_1.mp3", type: "mp3", size: "4.8 MB" },
      { name: "Sarah_Chen_Vocal_Demo_2.wav", type: "wav", size: "18.2 MB" },
    ],
    portfolioLinks: [
      "soundcloud.com/sarahchen",
      "spotify.com/artist/sarahchen",
    ],
  },
  {
    id: "2",
    name: "Marcus Williams",
    avatar: "/avatars/marcus.jpg",
    submitted: "Feb 19, 2026",
    status: "Shortlisted",
    coverLetterPreview:
      "Atlantic Records has been my dream label to work with...",
    coverLetterFull:
      "Atlantic Records has been my dream label to work with. I specialize in contemporary R&B and have delivered vocals for multiple charting singles in the last two years. My vocal range and control allow me to adapt to various production styles. Happy to discuss further.",
    files: [
      { name: "Marcus_Williams_RnB_Sample.mp3", type: "mp3", size: "6.1 MB" },
    ],
  },
  {
    id: "3",
    name: "Jordan Lee",
    avatar: "/avatars/jordan.jpg",
    submitted: "Feb 18, 2026",
    status: "Selected",
    coverLetterPreview:
      "I have been a professional session vocalist for major labels including...",
    coverLetterFull:
      "I have been a professional session vocalist for major labels including Universal and Warner. My credits include placements in film, TV, and commercial work. I can deliver quickly and professionally with multiple comped takes. Excited about this opportunity.",
    portfolioLinks: ["jordanleevocals.com", "soundbetter.com/jordanlee"],
  },
  {
    id: "4",
    name: "Alex Rivera",
    avatar: "/avatars/alex.jpg",
    submitted: "Feb 17, 2026",
    status: "Not Selected",
    coverLetterPreview:
      "I'm a versatile vocalist with experience in R&B, Soul, Pop...",
    coverLetterFull:
      "I'm a versatile vocalist with experience in R&B, Soul, Pop, and Gospel. Trained classically but specialize in modern commercial styles. Professional home setup with Neumann U87 and Apollo interface.",
    files: [
      { name: "Alex_Rivera_Demo_Reel.wav", type: "wav", size: "14.7 MB" },
    ],
  },
];

// ─── Modal Component ────────────────────────────────────────────────
function SubmissionViewModal({
  isOpen,
  onClose,
  submission,
  onStatusChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  submission: Submission;
  onStatusChange: (id: string, newStatus: SubmissionStatus) => void;
}) {
  const [status, setStatus] = useState<SubmissionStatus>(submission.status);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as SubmissionStatus;
    setStatus(newStatus);
    onStatusChange(submission.id, newStatus);
  };

  const statusStyles = {
    "Under Review": "bg-blue-950 text-blue-400 border-blue-800/50",
    Shortlisted: "bg-amber-950 text-amber-400 border-amber-800/50",
    Selected: "bg-emerald-950 text-emerald-400 border-emerald-800/50",
    "Not Selected": "bg-rose-950 text-rose-400 border-rose-800/50",
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-700 overflow-hidden flex-shrink-0">
              {submission.avatar ? (
                <img
                  src={submission.avatar}
                  alt={submission.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-lg font-bold">
                  {submission.name[0]}
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{submission.name}</h2>
              <p className="text-sm text-zinc-500">Submitted {submission.submitted}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Cover Letter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Cover Letter</h3>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-5 text-zinc-300 whitespace-pre-line leading-relaxed">
              {submission.coverLetterFull || submission.coverLetterPreview}
            </div>
          </div>

          {/* Uploaded Files */}
          {submission.files && submission.files.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Uploaded Files</h3>
              <div className="space-y-3">
                {submission.files.map((file, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 hover:border-zinc-600 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-950/30 rounded flex items-center justify-center text-rose-400">
                        ♪
                      </div>
                      <div>
                        <div className="font-medium">{file.name}</div>
                        {file.size && (
                          <div className="text-xs text-zinc-500">{file.size}</div>
                        )}
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded border border-zinc-700">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Portfolio Links */}
          {submission.portfolioLinks && submission.portfolioLinks.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Portfolio Links</h3>
              <div className="space-y-2">
                {submission.portfolioLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.startsWith("http") ? link : `https://${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 hover:border-zinc-600 group"
                  >
                    <span className="text-blue-400 truncate">{link}</span>
                    <ExternalLink
                      size={18}
                      className="text-zinc-500 group-hover:text-blue-400"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Update Status */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Update Status</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={status}
                onChange={handleChange}
                className={`w-full sm:flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-zinc-500 cursor-pointer ${statusStyles[status]}`}
              >
                <option value="Under Review">Under Review</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Selected">Selected</option>
                <option value="Not Selected">Not Selected</option>
              </select>

              <button
                onClick={onClose}
                className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700 font-medium whitespace-nowrap"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page Component ─────────────────────────────────────────────
export default function BriefDetailPage() {
  const [activeTab, setActiveTab] = useState<Tab>("details");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("All Submissions");

  const handleViewSubmission = (submission: Submission) => {
    setSelectedSubmission(submission);
  };

  const handleCloseModal = () => {
    setSelectedSubmission(null);
  };

  const handleStatusChange = (id: string, newStatus: SubmissionStatus) => {
    // Here you would normally update via API / state management
    console.log(`Submission ${id} status updated to: ${newStatus}`);
    // You can also update local mock data if desired
  };

  const router = useRouter();

  // Filter submissions based on selected filter
  const filteredSubmissions = statusFilter === "All Submissions" 
    ? mockSubmissions 
    : mockSubmissions.filter(sub => sub.status === statusFilter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
        <button
  onClick={() => router.back()}
  className="text-zinc-400 hover:text-white"
>
  <ArrowLeft size={20} />
</button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Looking for R&B Vocalist
              </h1>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <span className="text-zinc-400">Atlantic Records</span>
                <span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full">
                  Major Label
                </span>
                <span className="text-xs bg-rose-600/80 text-white px-2.5 py-1 rounded-full font-medium">
                  Paid
                </span>
                <div className="flex items-center gap-1.5 text-rose-400 text-sm">
                  <Clock size={16} />
                  5 days left
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-zinc-400">
            Submissions: <span className="text-white font-medium">{mockSubmissions.length}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-800 mb-8">
          <button
            onClick={() => setActiveTab("details")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "details"
                ? "border-b-2 border-rose-500 text-rose-400"
                : "text-zinc-400 hover:text-zinc-300"
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab("submissions")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "submissions"
                ? "border-b-2 border-rose-500 text-rose-400"
                : "text-zinc-400 hover:text-zinc-300"
            }`}
          >
            Submissions ({mockSubmissions.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === "details" ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 lg:p-8">
                <h2 className="text-2xl font-semibold mb-5">Overview</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Atlantic Records is seeking an experienced R&B vocalist for an
                  upcoming album project with one of our established artists. This is a
                  professional opportunity with competitive compensation and industry
                  exposure.
                </p>
                <p className="text-zinc-300 leading-relaxed mt-4">
                  We're looking for someone with a soulful voice, professional recording
                  setup, and experience in contemporary R&B. The selected vocalist will
                  work on 3-4 tracks for the album, with potential for future
                  collaborations.
                </p>
              </section>

              <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 lg:p-8">
                <h2 className="text-2xl font-semibold mb-5">Requirements</h2>
                <ul className="space-y-4 text-zinc-300">
                  {[
                    "Professional recording quality (home studio or professional studio access)",
                    "Minimum 3 years of R&B/Soul singing experience",
                    "Available for revisions and potential studio sessions",
                    "Portfolio of previous R&B work required",
                    "Ability to interpret and deliver emotional performances",
                    "Comfortable with NDA and professional contracts",
                  ].map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 lg:p-8">
                <h2 className="text-2xl font-semibold mb-5">Deliverables</h2>
                <ul className="space-y-3 text-zinc-300 list-disc pl-5 marker:text-zinc-500">
                  <li>Lead vocals for 3–4 tracks (stems and comped takes)</li>
                  <li>Backing vocals / harmonies where needed</li>
                  <li>Up to 2 rounds of revisions per track (fast turnaround expected)</li>
                  <li>All vocal files in WAV format (24-bit/48kHz minimum)</li>
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 sticky top-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <DollarSign className="text-rose-500" />
                  Key Details
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Compensation</span>
                    <span className="font-medium">$2,000 – $5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Genre</span>
                    <span>R&B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Deadline</span>
                    <span className="text-rose-400">February 27, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Posted</span>
                    <span>February 17, 2026</span>
                  </div>
                  <div className="flex justify-between border-t border-zinc-800 pt-4">
                    <span className="text-zinc-500">Submissions</span>
                    <span className="font-medium">47 applications</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold">
                      AR
                    </div>
                    <div>
                      <div className="font-medium">Atlantic Records</div>
                      <div className="text-xs text-emerald-400">Verified</div>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 mt-2">
                    Major label with a rich history in R&B, hip-hop, and pop music.
                  </p>
                  <div className="mt-4 text-[13px] text-zinc-500">Previous Briefs</div>
                  <div className="text-lg font-medium">12 Completed</div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Submission Tips</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Upload your best vocal performances</li>
                  <li>• Personalize your cover letter</li>
                  <li>• Ensure audio quality is professional</li>
                  <li>• Submit early – don't wait until the deadline</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          /* SUBMISSIONS TAB */
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold">Submissions ({filteredSubmissions.length})</h2>
              <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5">
                <Filter size={18} className="text-zinc-400" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-zinc-900 text-white border-none focus:outline-none text-sm cursor-pointer [&>option]:bg-zinc-900 [&>option]:text-white"
                >
                  <option value="All Submissions" className="bg-zinc-900 text-white">All Submissions</option>
                  <option value="Under Review" className="bg-zinc-900 text-white">Under Review</option>
                  <option value="Shortlisted" className="bg-zinc-900 text-white">Shortlisted</option>
                  <option value="Selected" className="bg-zinc-900 text-white">Selected</option>
                  <option value="Not Selected" className="bg-zinc-900 text-white">Not Selected</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredSubmissions.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full bg-zinc-800 flex-shrink-0 overflow-hidden">
                        {/* avatar placeholder */}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-semibold truncate">{sub.name}</h3>
                          <span className="text-xs text-zinc-500">{sub.submitted}</span>
                        </div>

                        <p className="text-sm text-zinc-400 mt-1 line-clamp-2">
                          {sub.coverLetterPreview}
                        </p>

                        <div className="flex flex-wrap gap-3 mt-3 text-xs">
                          {sub.audioLink && (
                            <span className="bg-zinc-800 px-2.5 py-1 rounded">
                              Audio Demo
                            </span>
                          )}
                          {sub.portfolioLinks && sub.portfolioLinks.length > 0 && (
                            <span className="bg-zinc-800 px-2.5 py-1 rounded">
                              Portfolio
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          sub.status === "Selected"
                            ? "bg-emerald-950 text-emerald-400 border border-emerald-900/50"
                            : sub.status === "Shortlisted"
                            ? "bg-amber-950 text-amber-400 border border-amber-900/50"
                            : sub.status === "Under Review"
                            ? "bg-blue-950 text-blue-400 border border-blue-900/50"
                            : "bg-rose-950 text-rose-400 border border-rose-900/50"
                        }`}
                      >
                        {sub.status}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewSubmission(sub)}
                          className="text-xs bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded border border-zinc-700"
                        >
                          View Full Submission
                        </button>
                     
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredSubmissions.length === 0 && (
                <div className="text-center py-12 bg-zinc-950 border border-zinc-800 rounded-xl">
                  <p className="text-zinc-400">No submissions found for this filter.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedSubmission && (
        <SubmissionViewModal
          isOpen={!!selectedSubmission}
          onClose={handleCloseModal}
          submission={selectedSubmission}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}